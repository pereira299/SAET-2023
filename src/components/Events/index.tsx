const Evento = (props: DayGridProps) => {
  return (
    <th rowSpan={props.rowSpan} colSpan={props.colSpan}>
      <div className={`${props.color ?? 'bg-orange-700'} cursor-pointer hover:brightness-75 transition-all text-white w-full h-full font-bold text-left rounded-lg text-sm flex flex-col justify-center items-center`}>
        {props.title}
      </div>
    </th>
  );
};

export default Evento;
