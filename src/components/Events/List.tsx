'use client'
import { useState } from "react";
import AllDays from "./Days/all";
import DayOne from "./Days/one";
import DayThree from "./Days/three";
import DayTwo from "./Days/two";
import Details from "./Details";
import DayFour from "./Days/four";

const EventList = ({ events, ...props }: EventListProps) => {
  const [selected, setSelected] = useState(0);
  
  return (
    <div className="h-[75vh] lg:h-[71vh] mt-16 flex flex-row w-full lg:w-11/12 xl:w-[90vw]">
      <div className="lg:flex flex-col justify-between w-fit mt-12 lg:mt-0 h-full lg:h-auto  hidden">
        <div className="text-white text-xl lg:text-md font-bold text-right">8h</div>
        <div className="text-white text-xl lg:text-md font-bold text-right mt-10">14h</div>
        <div className="text-white text-xl lg:text-md font-bold text-right mt-40 lg:mt-32">18h</div>
        <div className="text-white text-xl lg:text-md font-bold text-right">22h</div>
      </div>
      <div className="hidden w-[90vw] h-[76vh] stripes pt-20 invisible-scrollbar lg:pt-0 lg:mt-3 ml-5 lg:hidden flex-row lg:justify-evenly overflow-y-hidden overflow-x-auto x-mandatory items-start">
        <div className="absolute -mt-14 flex flex-row w-[90vw]">
          <div className="w-1/3">
            <p className="text-white font-bold text-center">23/10</p>
            <p className="text-white font-bold text-center">Segunda-feira</p>
          </div>
          <div className="w-1/3"> 
            <p className="text-white font-bold text-center">24/10</p>
            <p className="text-white font-bold text-center">Terça-feira</p>
          </div>
          <div className="w-1/3">
            <p className="text-white font-bold text-center">25/10</p>
            <p className="text-white font-bold text-center">Quarta-feira</p>
          </div>
        </div>
        <AllDays />
      </div>
      <div className=" flex flex-row stripes w-[98vw] h-[80vh] overflow-x-auto overflow-y-hidden invisible-scrollbar snap-mandatory x-mandatory">
        <div className="snap-center mr-10 max-w-[90vh]">
          <p className="text-white font-bold text-xl mb-2 -mt-1 text-center">Segunda-feira (23/10)</p>
          <DayOne onSelect={(id) => setSelected(id)}/>
        </div>
        <div className="snap-center mr-10 h-[80vh] max-w-[90vh]">
          <p className="text-white font-bold text-xl mb-2 -mt-1 text-center">Terça-feira (24/10)</p>
          <DayTwo onSelect={(id) => setSelected(id)}/>
        </div>
        <div className="snap-center mr-10 max-w-[90vh]">
          <p className="text-white font-bold text-xl mb-2 -mt-1 text-center">Quarta-feira (25/10)</p>
          <DayThree onSelect={(id) => setSelected(id)}/>
        </div> 
        <div className="snap-center mr-10 max-w-[90vh] h-[10vw]">
          <p className="text-white font-bold text-xl mb-2 -mt-1 text-center">Quinta-feira (26/10)</p>
          <DayFour onSelect={(id) => setSelected(id)}/>
        </div> 
        <Details id={selected} onClose={() => setSelected(0)}/>
      </div>
    </div>
  );
};

export default EventList;
