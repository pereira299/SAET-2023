"use client";
import Evento from "..";

const DayOne = ({ onSelect }: { onSelect: (id: number) => void }) => {
  return (
    <table className=" h-full ml-5 text-white font-bold border-separate border-spacing-1 -mt-2">
      <thead></thead>
      <thead>
        <tr>
          <th className="row-header freezebar-origin-ltr"></th>
          <th
            id="0C1"
            style={{ width: "80px" }}
            className="column-headers-background"
          ></th>
          <th
            id="0C2"
            style={{ width: "80px" }}
            className="column-headers-background"
          ></th>
          <th
            id="0C3"
            style={{ width: "80px" }}
            className="column-headers-background"
          ></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td></td>
          <td></td>
          <Evento
            id={195203965}
            rowSpan={8}
            color="bg-cyan-700"
            onClick={(id) => onSelect(id)}
          >
            Como identificar componentes SMD
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
        </tr>
        <tr>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <Evento
            id={195203958}
            colSpan={2}
            rowSpan={3}
            color="bg-cyan-700"
            onClick={(id) => onSelect(id)}
          >
            Estratégias de Autorregulação da Aprendizagem
          </Evento>
        </tr>
        <tr></tr>
        <tr></tr>
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
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <Evento
            id={197190873}
            rowSpan={3}
            color="bg-cyan-700"
            onClick={(id) => onSelect(id)}
          >
            Vertys
          </Evento>
          <Evento
            id={197190879}
            rowSpan={8}
            color="bg-cyan-700"
            onClick={(id) => onSelect(id)}
          >
            Boas práticas para montagem em protoboard
          </Evento>
          <Evento
            id={195203977}
            rowSpan={3}
            color="bg-cyan-700"
            onClick={(id) => onSelect(id)}
          >
            Tecnologia no uso de drones na agricultura
          </Evento>
        </tr>
        <tr></tr>
        <tr></tr>
        <tr>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <Evento
            id={195203982}
            rowSpan={3}
            color="bg-cyan-700"
            onClick={(id) => onSelect(id)}
          >
            Introdução a dispositivos lógicos reconfiguraveis
          </Evento>
          <td></td>
        </tr>
        <tr>
          <td></td>
        </tr>
        <tr>
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
          <Evento
            id={195203994}
            colSpan={3}
            color="bg-cyan-700"
            onClick={(id) => onSelect(id)}
          >
            Abertura
          </Evento>
        </tr>
        <tr>
          <Evento
            id={1}
            rowSpan={2}
            color="bg-cyan-700"
            onClick={(id) => onSelect(id)}
          >
            Sem titulo
          </Evento>
          <Evento
            id={195204008}
            rowSpan={5}
            color="bg-cyan-700"
            onClick={(id) => onSelect(id)}
          >
            Autovacuum e Autoanalyze! PostgreSQL, o que é isso?
          </Evento>
          <Evento
            id={196992053}
            rowSpan={5}
            color="bg-cyan-700"
            onClick={(id) => onSelect(id)}
          >
            Introdução a computação cientifica com Google Colab e Numpy
          </Evento>
        </tr>
        <tr></tr>
        <tr>
          <td></td>
        </tr>
        <tr>
          <Evento
            id={195204016}
            rowSpan={3}
            color="bg-cyan-700"
            onClick={(id) => onSelect(id)}
          >
            Ética e Inteligencia Artificial
          </Evento>
        </tr>
        <tr></tr>
        <tr>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>
  );
};

export default DayOne;
