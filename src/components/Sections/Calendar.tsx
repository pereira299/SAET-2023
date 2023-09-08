import EventList from "../Events/List";
import Label from "../Label";

const Calendar = () => {
  const events = [
    {
      id: 1,
      title: "Mini curso A",
      datetime: {
        start: "2023-10-25 08:00:00",
        end: "2023-10-25 12:00:00",
      },
    },
    {
      id: 2,
      title: "Mini curso B",
      datetime: {
        start: "2023-10-25 08:00:00",
        end: "2023-10-25 10:00:00",
      },
    },
    {
      id: 3,
      title: "Mini curso C",
      datetime: {
        start: "2023-10-25 11:00:00",
        end: "2023-10-25 12:00:00",
      },
    },
    {
      id: 4,
      title: "Mini curso D",
      datetime: {
        start: "2023-10-25 13:00:00",
        end: "2023-10-25 15:00:00",
      },
    },
    {
      id: 5,
      title: "Mini curso E",
      datetime: {
        start: "2023-10-25 16:00:00",
        end: "2023-10-25 17:00:00",
      },
    },
    {
      id: 6,
      title: "Mini curso F",
      datetime: {
        start: "2023-10-25 13:00:00",
        end: "2023-10-25 17:00:00",
      },
    },
    {
      id: 7,
      title: "Palestra A",
      datetime: {
        start: "2023-10-25 18:00:00",
        end: "2023-10-25 22:00:00",
      },
    },
    {
      id: 8,
      title: "Mini curso G",
      datetime: {
        start: "2023-10-26 08:00:00",
        end: "2023-10-26 12:00:00",
      },
    },
    {
      id: 9,
      title: "Mini curso H",
      datetime: {
        start: "2023-10-26 08:00:00",
        end: "2023-10-26 10:00:00",
      },
    },
    {
      id: 10,
      title: "Mini curso I",
      datetime: {
        start: "2023-10-26 11:00:00",
        end: "2023-10-26 12:00:00",
      },
    },
    {
      id: 11,
      title: "Mini curso J",
      datetime: {
        start: "2023-10-26 13:00:00",
        end: "2023-10-26 15:00:00",
      },
    },
    {
      id: 12,
      title: "Mini curso K",
      datetime: {
        start: "2023-10-26 16:00:00",
        end: "2023-10-26 17:00:00",
      },
    },
    {
      id: 13,
      title: "Mini curso L",
      datetime: {
        start: "2023-10-26 13:00:00",
        end: "2023-10-26 17:00:00",
      },
    },
    {
      id: 14,
      title: "Palestra B",
      datetime: {
        start: "2023-10-26 18:00:00",
        end: "2023-10-26 22:00:00",
      },
    },
    {
      id: 15,
      title: "Mini curso A",
      datetime: {
        start: "2023-10-27 08:00:00",
        end: "2023-10-27 12:00:00",
      },
    },
    {
      id: 16,
      title: "Mini curso B",
      datetime: {
        start: "2023-10-27 08:00:00",
        end: "2023-10-27 10:00:00",
      },
    },
    {
      id: 17,
      title: "Mini curso C",
      datetime: {
        start: "2023-10-27 11:00:00",
        end: "2023-10-27 12:00:00",
      },
    },
    {
      id: 18,
      title: "Mini curso D",
      datetime: {
        start: "2023-10-27 13:00:00",
        end: "2023-10-27 15:00:00",
      },
    },
    {
      id: 19,
      title: "Mini curso E",
      datetime: {
        start: "2023-10-27 16:00:00",
        end: "2023-10-27 17:00:00",
      },
    },
    {
      id: 20,
      title: "Mini curso F",
      datetime: {
        start: "2023-10-27 13:00:00",
        end: "2023-10-27 17:00:00",
      },
    },
    {
      id: 21,
      title: "Palestra C",
      datetime: {
        start: "2023-10-27 18:00:00",
        end: "2023-10-27 22:00:00",
      },
    },
  ];

  return (
    <section id="calendar" className="p-5 flex flex-col items-center">
      <Label text="programação" className="" />
      <EventList events={events} />
    </section>
  );
};

export default Calendar;
