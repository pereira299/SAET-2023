import EventList from "../Events/List";
import Label from "../Label";

const Calendar = () => {
  const events = [
    {
      title: "Mini curso A",
      datetime: {
        start: "2023-10-25 08:00:00",
        end: "2023-10-25 10:00:00",
      },
    },
    {
      title: "Mini curso B",
      datetime: {
        start: "2023-10-26 08:00:00",
        end: "2023-10-26 10:00:00",
      },
    },
    {
      title: "Mini curso C",
      datetime: {
        start: "2023-10-25 09:00:00",
        end: "2023-10-25 11:00:00",
      },
    },
    {
      title: "Mini curso D",
      datetime: {
        start: "2023-10-27 08:00:00",
        end: "2023-10-27 10:00:00",
      },
    },
  ];
  return (
    <section className="p-5 flex flex-col items-center">
      <Label text="programação" className="" />
      <EventList events={events} />
    </section>
  );
};

export default Calendar;
