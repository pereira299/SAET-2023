import api from "@/services/api";
import EventList from "../Events/List";
import Label from "../Label";

interface EventoDato {
  category: number;
  datetime: {
    start: string;
    end: string;
  };
  title: string;
  id: string;
}

const Calendar = async () => {
  const res = await api.get("/api/eventos");
  const events1 = res.data
  return (
    <section id="calendar" className="p-2 lg:p-5 flex flex-col items-center">
      <Label text="programação" className="" />
      <EventList events={events1} />
    </section>
  );
};


export default Calendar;
