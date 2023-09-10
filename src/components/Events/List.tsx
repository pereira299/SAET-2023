import EventDay from "./Day";

const EventList = ({ events, ...props }: EventListProps) => {
  const eventsByDay = events.reduce((acc, event) => {
    const date = new Date(event.datetime.start);
    const day = date.getDate();
    if (acc[day]) {
      acc[day].push(event);
    } else {
      acc[day] = [event];
    }
    return acc;
  }, {} as Record<number, EventoProps[]>);

  const dayColors = ["bg-cyan-700", "bg-[#CE875A]", "bg-orange-700"];
  return (
    <div className="h-[71vh] mt-20 flex flex-row w-full lg:w-11/12 xl:w-10/12">
      <div className="flex flex-col justify-between w-fit">
        {Array.from({ length: 8 }).map((_, index) => (
          <div key={index} className="text-white font-bold text-right">
            {index + 8 + index}h
          </div>
        ))}
      </div>
      <div className="w-[80vw]  stripes pt-20 invisible-scrollbar -mt-20 lg:pt-0 lg:mt-3 ml-5 flex flex-row lg:justify-evenly overflow-y-hidden overflow-x-auto x-mandatory items-start">
        {Object.entries(eventsByDay).map(([day, eventos], i) => (
          <EventDay
            key={day}
            day={Number(day)}
            events={eventos}
            color={dayColors[i]}
            className="-mt-16 w-full lg:w-4/12"
          />
        ))}
      </div>
    </div>
  );
};

export default EventList;
