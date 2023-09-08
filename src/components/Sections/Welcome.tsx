import Image from "next/image";
import Button from "@/components/Buttons";

const Welcome = () => {
  return (
    <section id="welcome">
      <Image
        src={"/images/logo.svg"}
        alt="Logo SAET"
        width={927}
        height={561}
        className="mx-auto"
      />
      <div className="flex flex-row justify-between px-10">
        <div className="flex-col -mt-20 w-3/12">
          <Image src={"/images/arrow.svg"} alt="Seta" width={120} height={40} />
          <h4 className="uppercase text-cyan-600 font-bold text-5xl ml-1">
            De <b className="text-orange-700">25</b> a{" "}
            <b className="text-orange-700">27</b>
            <br /> de Out
          </h4>
        </div>
            <Button className="bg-orange-700 uppercase font-bold p-3 text-white text-xl mt-5 w-2/12">
                saiba mais
            </Button>
        <div className="w-3/12"></div>
      </div>
    </section>
  );
};

export default Welcome;
