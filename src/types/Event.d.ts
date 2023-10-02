interface EventoProps {
  id: number;
  title: string;
  datetime: {
    start: string;
    end: string;
  }
  description?: string;
  local?: string;
  category?: string;
  ministrante?: {
    id: number;
    name: string;
    photo: {
      url: string;
      id: string;
      alt: string;
    }
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
    children: React.ReactNode
    rowSpan?: number,
    colSpan?: number
    color?: string
    onClick?: (id: number) => void
}