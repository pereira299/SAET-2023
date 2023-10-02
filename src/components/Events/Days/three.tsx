"use client";
import Evento from "..";

const DayThree = ({ onSelect }: { onSelect: (id: number) => void }) => {
  return (
    <table className=" h-[96%] text-white font-bold border-separate border-spacing-1 -mt-2">
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
          <Evento onClick={(id) => onSelect(id)} id={1} rowSpan={3}>
            Sem titulo
          </Evento>
          <td></td>
          <Evento onClick={(id) => onSelect(id)} id={196993187} rowSpan={8}>
            Introdução a microcontroladores: uma visão prática
          </Evento>
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
        </tr>
        <tr>
          <Evento
            onClick={(id) => onSelect(id)}
            id={196993201}
            colSpan={2}
            rowSpan={3}
          >
            PLANETA EM JOGO: a indústria dos jogos digitais por um viés
            ecocrítico
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
          <Evento onClick={(id) => onSelect(id)} id={1} rowSpan={3}>
            Sem titulo
          </Evento>
          <Evento onClick={(id) => onSelect(id)} id={196993206} rowSpan={8}>
            Interfaces responsivas: Do celular ao desktop
          </Evento>
          <Evento onClick={(id) => onSelect(id)} id={1} rowSpan={8}>
            Sem titulo
          </Evento>
        </tr>
        <tr></tr>
        <tr></tr>
        <tr>
          <td></td>
        </tr>
        <tr>
          <Evento onClick={(id) => onSelect(id)} id={196993205} rowSpan={3}>
            A Engenharia Transformando Campo...
          </Evento>
        </tr>
        <tr></tr>
        <tr></tr>
        <tr>
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
          <Evento onClick={(id) => onSelect(id)} id={196993215} rowSpan={3}>
            Como a Inteligência Artificial está presente...
          </Evento>
          <Evento onClick={(id) => onSelect(id)} id={196993224} rowSpan={9}>
            Unity: uma visão geral.
          </Evento>
          <Evento onClick={(id) => onSelect(id)} id={197190922} rowSpan={3}>
            SprinT: A incubadora da UTFPR
          </Evento>
        </tr>
        <tr></tr>
        <tr></tr>
        <tr>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <Evento onClick={(id) => onSelect(id)} id={196993226} rowSpan={2}>
            Monitoramento ambiental...
          </Evento>
          <td></td>
        </tr>
        <tr>
          <td></td>
        </tr>
        <tr>
          <Evento onClick={(id) => onSelect(id)} id={1} rowSpan={3}>
            sem titulo
          </Evento>
          <td></td>
        </tr>
        <tr>
          <td></td>
        </tr>
        <tr>
          <td></td>
        </tr>
      </tbody>
    </table>
  );
};

export default DayThree;
