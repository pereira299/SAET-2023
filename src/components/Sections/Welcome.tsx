import Image from "next/image";
import Button from "@/components/Buttons";

const Welcome = () => {
  return (
    <section id="welcome" className="flex flex-col justify-evenly gap-16">
      <Image
        src={"/images/logo2.svg"}
        alt="Logo SAET"
        width={300}
        height={140}
        className="mx-auto w-11/12 sm:w-10/12 md:w-8/12 lg:w-8/12 xl:w-7/12"
      />
      <div className="flex flex-col lg:flex-row items-center justify-between px-5 sm:px-10 gap-5 w-full">
        <div className="flex-col -mt-20 w-full sm:w-8/12 md:w-6/12 lg:w-3/12">
          <Image src={"/images/arrow.svg"} alt="Seta" width={120} height={40} />
          <h4 className="uppercase text-cyan-600 font-bold text-5xl ml-1">
            De <b className="text-orange-700">25</b> a{" "}
            <b className="text-orange-700">27</b>
            <br /> de Out
          </h4>
        </div>
        <a href="#calendar" className="bg-orange-700 text-center uppercase font-bold p-3 text-white text-xl mt-5 w-11/12 sm:w-8/12 md:w-6/12 lg:w-2/12">
          saiba mais
        </a>
        <div className="w-3/12"></div>
      </div>
    </section>
  );
};

export default Welcome;
