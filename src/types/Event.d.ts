interface Evento {
  id?: string;
  title: string;
  datetime: {
    start: string;
    end: string;
  }
}

interface EventListProps {
  events: Evento[];
}

interface EventDayProps {
    day: number
    events: Evento[]
    className?: string
}
