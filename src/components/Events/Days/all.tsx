'use client'
import { useState } from "react";
import Evento from "..";
import Details from "../Details";

const AllDays = () => {
  const [selected, setSelected] = useState<number>(0);
  return (
    <>
      <table className="w-[87vw] h-[75vh] text-white font-bold border-separate border-spacing-1 -mt-2">
        <thead>
          <tr>
            <th
              style={{ width: "100px" }}
              className="column-headers-background"
            ></th>
            <th
              style={{ width: "100px" }}
              className="column-headers-background"
            ></th>
            <th
              style={{ width: "100px" }}
              className="column-headers-background"
            ></th>
            <th
              style={{ width: "100px" }}
              className="column-headers-background"
            ></th>
            <th
              style={{ width: "100px" }}
              className="column-headers-background"
            ></th>
            <th
              style={{ width: "100px" }}
              className="column-headers-background"
            ></th>
            <th
              style={{ width: "100px" }}
              className="column-headers-background"
            ></th>
            <th
              style={{ width: "100px" }}
              className="column-headers-background"
            ></th>
            <th
              style={{ width: "100px" }}
              className="column-headers-background"
            ></th>
            <th
              style={{ width: "100px" }}
              className="column-headers-background"
            ></th>
            <th
              style={{ width: "100px" }}
              className="column-headers-background"
            ></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td></td>
            <Evento
              onClick={(id) => setSelected(id)}
              id={195203965}
              rowSpan={8}
              color="bg-cyan-700"
            >
              Como identificar componentes SMD
            </Evento>
            <td></td>
            <td></td>
            <td></td>
            <Evento
              onClick={(id) => setSelected(id)}
              id={195204095}
              rowSpan={8}
              color="bg-[#CE875A]"
            >
              Introdução ao Linux
            </Evento>
            <td></td>
            <Evento onClick={(id) => setSelected(id)} id={1} rowSpan={3}>
              Sem titulo
            </Evento>
            <td></td>
            <Evento
              onClick={(id) => setSelected(id)}
              id={196993187}
              rowSpan={8}
            >
              Introdução a microcontroladores: uma visão prática
            </Evento>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <Evento
              onClick={(id) => setSelected(id)}
              id={195203958}
              colSpan={2}
              rowSpan={3}
              color="bg-cyan-700"
            >
              Estratégias de Autorregulação da Aprendizagem
            </Evento>
            <td></td>
            <Evento
              onClick={(id) => setSelected(id)}
              id={195204097}
              colSpan={2}
              rowSpan={3}
              color="bg-[#CE875A]"
            >
              Estratégia de Mercado e de desenvolvimento de startups
            </Evento>
            <td></td>
            <Evento
              onClick={(id) => setSelected(id)}
              id={196993201}
              colSpan={2}
              rowSpan={3}
            >
              PLANETA EM JOGO: a indústria dos jogos digitais por um viés
              ecocrítico
            </Evento>
          </tr>
          <tr>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <Evento
              onClick={(id) => setSelected(id)}
              id={197190873}
              rowSpan={3}
              color="bg-cyan-700"
            >
              Vertys
            </Evento>
            <Evento
              onClick={(id) => setSelected(id)}
              id={197190879}
              rowSpan={8}
              color="bg-cyan-700"
            >
              Boas práticas para montagem em protoboard
            </Evento>
            <Evento
              onClick={(id) => setSelected(id)}
              id={195203977}
              rowSpan={3}
              color="bg-cyan-700"
            >
              Tecnologia no uso de drones na agricultura
            </Evento>
            <td></td>
            <Evento
              onClick={(id) => setSelected(id)}
              id={195204100}
              rowSpan={3}
              color="bg-[#CE875A]"
            >
              As diferentes carreiras do mercado de T.I
            </Evento>
            <Evento
              onClick={(id) => setSelected(id)}
              id={195205254}
              rowSpan={8}
              color="bg-[#CE875A]"
            >
              Criação de documentos com LaTeX
            </Evento>
            <Evento
              onClick={(id) => setSelected(id)}
              id={1}
              rowSpan={8}
              color="bg-[#CE875A]"
            >
              Sem Titulo
            </Evento>
            <td></td>
            <Evento onClick={(id) => setSelected(id)} id={1} rowSpan={3}>
              Sem titulo
            </Evento>
            <Evento
              onClick={(id) => setSelected(id)}
              id={196993206}
              rowSpan={8}
            >
              Interfaces responsivas: Do desktop ao smartphone
            </Evento>
            <Evento onClick={(id) => setSelected(id)} id={1} rowSpan={8}>
              Sem titulo
            </Evento>
          </tr>
          <tr>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <Evento
              onClick={(id) => setSelected(id)}
              id={195203982}
              rowSpan={3}
              color="bg-cyan-700"
            >
              Introdução a dispositivos lógicos reconfiguraveis
            </Evento>
            <td></td>
            <td></td>
            <Evento
              onClick={(id) => setSelected(id)}
              id={196992054}
              rowSpan={3}
              color="bg-[#CE875A]"
            >
              Cultura DevOps: Conceitos e Práticas
            </Evento>
            <td></td>
            <Evento
              onClick={(id) => setSelected(id)}
              id={196993205}
              rowSpan={3}
            >
              A Engenharia Transformando Campo...
            </Evento>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <Evento
              onClick={(id) => setSelected(id)}
              id={196992057}
              rowSpan={2}
              color="bg-[#CE875A]"
            >
              Mineração de Dados...
            </Evento>
            <Evento
              onClick={(id) => setSelected(id)}
              id={196992062}
              rowSpan={9}
              color="bg-[#CE875A]"
            >
              Automação Residencial: Introdução ao Home Assistant
            </Evento>
            <Evento
              onClick={(id) => setSelected(id)}
              id={196992065}
              rowSpan={9}
              color="bg-[#CE875A]"
            >
              Reconhecimento de Padrões: Fundamentos de Convolutional Neural
              Networks (CNNs)
            </Evento>
            <td></td>
            <Evento
              onClick={(id) => setSelected(id)}
              id={196993215}
              rowSpan={3}
            >
              Como a Inteligência Artificial está presente...
            </Evento>
            <Evento
              onClick={(id) => setSelected(id)}
              id={196993224}
              rowSpan={9}
            >
              Unity: uma visão geral.
            </Evento>
            <Evento
              onClick={(id) => setSelected(id)}
              id={197190922}
              rowSpan={3}
            >
              SprinT: A incubadora da UTFPR
            </Evento>
          </tr>
          <tr>
            <Evento
              onClick={(id) => setSelected(id)}
              id={195203994}
              colSpan={3}
              color="bg-cyan-700"
            >
              Abertura
            </Evento>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <Evento
              onClick={(id) => setSelected(id)}
              id={1}
              rowSpan={2}
              color="bg-cyan-700"
            >
              Sem titulo
            </Evento>
            <Evento
              onClick={(id) => setSelected(id)}
              id={195204008}
              rowSpan={5}
              color="bg-cyan-700"
            >
              Autovacuum e Autoanalyze! PostgreSQL, o que é isso?
            </Evento>
            <Evento
              onClick={(id) => setSelected(id)}
              id={196992053}
              rowSpan={5}
              color="bg-cyan-700"
            >
              Introdução a computação cientifica com Google Colab e Numpy
            </Evento>
            <td></td>
            <Evento
              onClick={(id) => setSelected(id)}
              id={196992060}
              rowSpan={3}
              color="bg-[#CE875A]"
            >
              Bolsa de valores pela visão de um programador
            </Evento>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <Evento
              onClick={(id) => setSelected(id)}
              id={196993226}
              rowSpan={2}
            >
              Monitoramento ambiental...
            </Evento>
            <td></td>
          </tr>
          <tr>
            <Evento
              onClick={(id) => setSelected(id)}
              id={195204016}
              rowSpan={3}
              color="bg-cyan-700"
            >
              Ética e Inteligencia Artificial
            </Evento>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <Evento
              onClick={(id) => setSelected(id)}
              id={1}
              rowSpan={3}
              color="bg-[#CE875A]"
            >
              Sem titulo
            </Evento>
            <td></td>
            <Evento onClick={(id) => setSelected(id)} id={1} rowSpan={3}>
              sem titulo
            </Evento>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
      <Details id={selected} onClose={() => setSelected(0)}/>
    </>
  );
};

export default AllDays;
