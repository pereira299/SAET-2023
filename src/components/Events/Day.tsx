import Evento from ".";

const EventDay = ({ day, events, className, color }: EventDayProps) => {
  const dayWeek = new Date(events[0].datetime.start).toLocaleDateString(
    "pt-BR",
    {
      weekday: "long",
    }
  );

  const dayGrid: DayGridProps[][] = Array.from({
    length: 15,
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

  const countSpaces = (event: EventoProps) => {
    let rows = 1,
      right = false,
      cols = 1;
    const parallelEvent = sortedEvents.filter((e) => {
      if (e.id === event.id) return false;
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

    if (parallelEvent.length === 0) cols++;
    else {
      // check if event start after parallel event
      const startAfter = parallelEvent.filter(
        (e) =>
          new Date(e.datetime.start).getTime() <
          new Date(event.datetime.start).getTime()
      );

      // check if event has add after parallel event
      const hasGreaterId = parallelEvent.filter((e) => e.id < event.id);
      if (startAfter || hasGreaterId) right = true;
    }
    // one row for each 30 minutes
    rows = Math.ceil(
      (new Date(event.datetime.end).getTime() -
        new Date(event.datetime.start).getTime()) /
        (1000 * 60 * 60)
    );

    return { rowSpan: rows, colSpan: cols, right };
  };

  const mappedEvents = sortedEvents.map((event, index) => {
    const { rowSpan, colSpan, right } = countSpaces(event);
    const dateStart = new Date(event.datetime.start);
    const dateEnd = new Date(event.datetime.end);
    // get hour of event start
    let rowStart = dateStart.getHours() - 8;
    if (rowStart < 0) rowStart = 0;
    if (dateStart.getMinutes() > 0) rowStart++;
    // get hour of event end
    let rowEnd = rowStart + rowSpan;
    // set event in grid
    if (dayGrid[rowStart][0].id === null) {
      dayGrid[rowStart][0] = {
        id: Number(event.id) || index,
        title: event.title,
      };
      dayGrid[rowStart][0].rowSpan = rowSpan;
      dayGrid[rowStart][0].colSpan = colSpan;
    } else {
      dayGrid[rowStart][1] = {
        id: Number(event.id) || index,
        title: event.title,
      };
      dayGrid[rowStart][1].rowSpan = rowSpan;
    }
  });

  return (
    <div className={`flex flex-col ${className} snap-center`}>
      <p className="text-white font-bold text-center uppercase">
        {day}/09
        <br />
        {dayWeek}
      </p>
      <table className="border-separate border-spacing-1 h-[74vh] mt-3 lg:mt-2 w-[70vw] lg:w-[25vw] xl:w-[20vw] mx-2 2xs:mx-5 xs:mx-10 sm:mx-16 lg:ml-10 xl:ml-14">
        <thead className="h-0">
          <tr>
            <th className="h-0"></th>
            <th className="h-0"></th>
          </tr>
        </thead>
        <tbody className="">
          {dayGrid.map((col, index) => (
            <tr key={index} className="h-[3.4%]">
              {col.map((item, i, arr) => (
                <>
                  {item.id !== null ? (
                    <Evento key={item.id} {...item} color={color} />
                  ) : i === 1 && arr[0].colSpan === 2 ? (
                    false
                  ) : (
                    <td></td>
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
