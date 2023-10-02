const Evento = (props: DayGridProps) => {
  return (
    <td
      rowSpan={props.rowSpan}
      colSpan={props.colSpan}
      className={`${
        props.color ?? "bg-orange-700"
      } p-2 cursor-pointer hover:brightness-75 text-sm lg:text-[0.6rem] transition-all text-center text-white font-bold rounded-lg`}
      onClick={() => props.onClick?.(props.id || 0)}
    >
      {props.children}
    </td>
  );
};

export default Evento;
