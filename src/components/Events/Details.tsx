"use client";
import api from "@/services/api";
import { useEffect, useState } from "react";
import { Loader2, X } from "lucide-react";
import Image from "next/image";

interface EventoDetailsProps {
  id?: number;
  onClose: () => void;
}

const Details = ({ id, onClose }: EventoDetailsProps) => {
  const [evento, setEvento] = useState<EventoProps | null>(null);

  const getEvento = async () => {
    if (!id || id <= 1) {
      setEvento(null);
      return;
    }
    const response = await api.get(`api/eventos/${id}`);
    const data = await response.data;
    setEvento(data);
  };

  useEffect(() => {
    getEvento();
  }, [id]);

  const categories = [
    "Palestra",
    "Minicurso",
    "Minicurso (Professores)",
    "Mesa Redonda",
    "RPG",
    "Hackathon",
    "Outros",
  ];

  if (!id) return null;

  if (!evento) {
    return (
      <dialog
        open={!!evento}
        className="fixed w-screen h-screen flex m-0 items-center justify-center bg-slate-950/80 top-0 backdrop-blur-lg  left-0 right-0 z-[500000]"
      >
        <div className="w-11/12 lg:w-10/12 h-5/6 bg-slate-900 rounded-2xl flex flex-col lg:flex-row-reverse justify-between lg:justify-evenly py-5 px-3 lg:px-10">
          <X
            size={40}
            className="ml-auto text-white cursor-pointer "
            onClick={() => onClose()}
          />
          <Loader2 className="text-white m-auto animate-spin" size={100} />
        </div>
      </dialog>
    );
  }

  const date = new Date(evento.datetime.start);
  const end = new Date(evento.datetime.end);
  return (
    <dialog
      open={!!evento}
      className="fixed w-screen h-screen flex m-0 items-center justify-center bg-slate-950/80 top-0 backdrop-blur-lg  left-0 right-0 z-[500000]"
    >
      <div className="w-11/12 lg:w-10/12 h-[95%] lg:h-5/6 bg-slate-900 rounded-2xl flex flex-col lg:flex-row justify-between lg:justify-evenly py-5 px-3 lg:px-10">
        <div className="w-full lg:w-7/12 flex flex-col gap-y-2">
          <div className="flex flex-row">
            <div className="border-4 px-3 w-fit border-orange-700 bg-orange-300 rounded-full">
              <p className="text-orange-600 font-semibold text-lg">
                {categories[(Number(evento.category) || 7) - 1]}
              </p>
            </div>
            <X
              size={40}
              className="ml-auto text-white cursor-pointer lg:hidden"
              onClick={() => onClose()}
            />
          </div>
          <h3 className="text-4xl lg:text-5xl text-white font-bold">
            {evento.title}
          </h3>
          <p className="text-white text-xl lg:text-3xl">por {evento.ministrante?.name || "Desconhecido"}</p>
          <p className="text-white mt-5">{evento.description}</p>
          <p className="text-white text-xl mt-auto">
            <b>Data: </b>
            {Intl.DateTimeFormat("pt-BR", {
              day: "2-digit",
              month: "short",
            }).format(date)}
          </p>
          <p className="text-white text-xl">
            <b>Horário: </b>
            {Intl.DateTimeFormat("pt-BR", {
              hour: "2-digit",
              minute: "2-digit",
            }).format(date)}{" "}
            -{" "}
            {Intl.DateTimeFormat("pt-BR", {
              hour: "2-digit",
              minute: "2-digit",
            }).format(end)}
          </p>
          <p className="text-white text-xl mb-20">
            <b>Local: </b>
            {evento.local || "Não informado"}
          </p>
        </div>
        <div className="w-full lg:w-5/12 flex flex-col">
          <X
            size={40}
            className="ml-auto text-white cursor-pointer hidden lg:flex"
            onClick={() => onClose()}
          />
          <div className="absolute w-[80vw] lg:w-[40vw] right-[5vw] lg:right-[8.5vw] bottom-[2%] lg:bottom-[8%]">
            <div className="pt-[22vw] lg:pt-[10vw] pl-[22vw] lg:pl-[10vw] lg:pb-[1vw] lg:pr-[1vw] bg-shape-circle w-full">
              {evento.ministrante ? (
                <Image
                  src={evento.ministrante?.photo?.url || "/images/avatar.png"}
                  alt={""}
                  className="rounded-full shadow-2xl w-9/12 lg:w-10/12"
                  width={300}
                  height={300}
                />
              ) : (
                <div className="w-10/12"></div>
              )}
            </div>
          </div>
        </div>
      </div>
    </dialog>
  );
};

export default Details;
