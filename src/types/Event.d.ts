interface EventoProps {
  id: number;
  title: string;
  datetime: {
    start: string;
    end: string;
  }
}

interface EventListProps {
  events: EventoProps[];
}

interface EventDayProps {
    day: number
    events: EventoProps[]
    className?: string
    color?: string
}


interface DayGridProps {
    id: number | null,
    title: string | null,
    rowSpan?: number,
    colSpan?: number
    color?: string
}