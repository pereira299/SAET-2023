import Image from "next/image";

interface Image {
  src: string;
  id: number;
  title: string;
  height: number;
  width: number;
}

export default function Gallery({ images }: { images: Image[] }) {

    if(!images || images.length === 0) return (
        <div className="flex flex-col items-center justify-center mt-20">
            <h1 className="text-2xl text-slate-500 text-center">Nenhuma mídia encontrada</h1>
        </div>
    )

  return (
    <ul className="flex flex-row flex-wrap flex-grow items-center gap-2 justify-evenly mt-10">
      {images.map((image) => (
        <li key={image.id} className={`${image.width > image.height ? "w-1/2 lg:1/4" : image.width < image.height ? "w-1/3 lg:1/8" : "w-1/4 lg:1/8"}`}>
          <Image
            src={image.src}
            alt={image.title}
            width={image.width}
            height={image.height}
            
          />
        </li>
      ))}
    </ul>
  );
}
