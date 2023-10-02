import Image from "next/image";
import Label from "../Label";

interface PatrocinioProps {
  id: number;
  name: string;
  img: {
    url: string;
    id: number;
    title: string;
  };
}

const Patrocinio = ({ patrocinios }: { patrocinios: PatrocinioProps[] }) => {
  return (
    <section className="pt-24 flex flex-col items-center">
      <Label text="Patrocinadores" className="" />
      <ul className="flex flex-row w-11/12 justify-between flex-wrap items-center mt-20">
        {patrocinios.map((patrocinio) => (
          <li key={patrocinio.id} className="w-5/12">
            <Image
              src={patrocinio.img.url}
              alt={patrocinio.img.title}
              width={300}
              height={300}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Patrocinio;
