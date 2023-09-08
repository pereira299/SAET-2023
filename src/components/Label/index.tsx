interface LabelProps {
  text: string;
  className?: string;
}

const Label = (props: LabelProps) => {
  return (
    <div className="flex flex-col">
      <div
        className={`parallelogram bg-orange-700 px-3 py-2 ${props.className} w-fit uppercase text-2xl text-orange-700`}
      >
        {props.text}
      </div>
      <p className=" text-white font-bold transform-none skew-x-6 mt-2 uppercase text-2xl ml-2 z-10 absolute">
        {props.text}
      </p>
    </div>
  );
};

export default Label;
