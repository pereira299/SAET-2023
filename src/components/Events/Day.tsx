const EventDay = ({ day, events, className }: EventDayProps) => {
  const dayWeek = new Date(events[0].datetime.start).toLocaleDateString(
    "pt-BR",
    {
      weekday: "long",
    }
  );

  const dayGrid: { id: number | null; title: string | null }[][] = Array.from({
    length: 30,
  }).map((_, index) =>
    Array.from({ length: 2 }).map((_, index) => {
      return {
        id: null,
        title: null,
      };
    })
  );
  const sortedEvents = events.sort((a, b) => {
    const dateA = new Date(a.datetime.start);
    const dateB = new Date(b.datetime.start);
    return dateA.getTime() - dateB.getTime();
  });

  const countSpaces = (event: Evento) => {
    let rows = 1,
      cols = 1;
    const hasParallelEvent = sortedEvents.some((e) => {
      const startBetween =
        new Date(e.datetime.start).getTime() >=
          new Date(event.datetime.start).getTime() &&
        new Date(e.datetime.start).getTime() <
          new Date(event.datetime.end).getTime();
      const endBetween =
        new Date(e.datetime.end).getTime() >
          new Date(event.datetime.start).getTime() &&
        new Date(e.datetime.end).getTime() <=
          new Date(event.datetime.end).getTime();
      return startBetween || endBetween;
    });

    if (!hasParallelEvent) cols++;

    // one row for each 30 minutes
    rows = Math.ceil(
      (new Date(event.datetime.end).getTime() -
        new Date(event.datetime.start).getTime()) /
        (1000 * 60 * 30)
    );

    return { rowSpan: rows, colSpan: cols };
  };

  const mappedEvents = sortedEvents.map((event, index) => {
    const { rowSpan, colSpan } = countSpaces(event);
    const dateStart = new Date(event.datetime.start);
    const dateEnd = new Date(event.datetime.end);
    // get hour of event start
    let rowStart = dateStart.getHours() - 8;
    if (rowStart < 0) rowStart = 0;
    if (dateStart.getMinutes() > 0) rowStart++;
    // get hour of event end
    let rowEnd = rowStart + rowSpan;
    // set event in grid
    for (let i = rowStart; i < rowEnd; i++) {
      if (dayGrid[i][0].id === null) {
        dayGrid[i][0] = {
          id: Number(event.id) || index,
          title: event.title,
        };
      } else {
        dayGrid[i][1] = {
          id: Number(event.id) || index,
          title: event.title,
        };
      }
    }
    console.log(dayGrid);
  });

  return (
    <div className={`flex flex-col ${className}`}>
      <p className="text-white font-bold text-center uppercase">
        {day}/09
        <br />
        {dayWeek}
      </p>
      <table className="border-separate border-spacing-2">
        <tbody>
          {dayGrid.map((col, index) => (
            <tr key={index}>
              {col.map((item, i) => (
                <>
                    {item.id !== null && (
                        <td
                            key={i}
                            className="bg-orange-700 text-white font-bold text-center px-3 rounded-lg text-sm"
                            
                        >
                            {item.title}
                        </td>
                    )}
                </>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EventDay;
