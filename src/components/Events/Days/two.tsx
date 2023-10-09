"use client";
import Evento from "..";

const DayTwo = ({ onSelect }: { onSelect: (id: number) => void }) => {
  return (
    <table className="h-3/6 text-white font-bold border-separate border-spacing-1 -mt-2">
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
            id={195204095}
            rowSpan={8}
            color="bg-[#CE875A]"
            onClick={(id) => onSelect(id)}
          >
            Introdução ao Linux
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
            id={195204097}
            colSpan={2}
            rowSpan={3}
            color="bg-[#CE875A]"
            onClick={(id) => onSelect(id)}
          >
            Estratégia de Mercado e de desenvolvimento de startups
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
            id={195204100}
            rowSpan={3}
            color="bg-[#CE875A]"
            onClick={(id) => onSelect(id)}
          >
            As diferentes carreiras do mercado de T.I
          </Evento>
          <Evento
            id={195205254}
            rowSpan={8}
            color="bg-[#CE875A]"
            onClick={(id) => onSelect(id)}
          >
            Criação de documentos com LaTeX
          </Evento>
          <Evento
            id={1}
            rowSpan={8}
            color="bg-[#CE875A]"
            onClick={(id) => onSelect(id)}
          >
            Placas de Circuito Impresso: como fazer a sua
          </Evento>
        </tr>
        <tr></tr>
        <tr></tr>
        <tr>
          <td></td>
        </tr>
        <tr>
          <Evento
            id={196992054}
            rowSpan={3}
            color="bg-[#CE875A]"
            onClick={(id) => onSelect(id)}
          >
            Cultura DevOps: Conceitos e Práticas
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
          <Evento
            id={196992057}
            rowSpan={2}
            color="bg-[#CE875A]"
            onClick={(id) => onSelect(id)}
          >
            Mineração de Dados...
          </Evento>
          <Evento
            id={196992062}
            rowSpan={9}
            color="bg-[#CE875A]"
            onClick={(id) => onSelect(id)}
          >
            Automação Residencial: Introdução ao Home Assistant
          </Evento>
          <Evento
            id={196992065}
            rowSpan={9}
            color="bg-[#CE875A]"
            onClick={(id) => onSelect(id)}
          >
            Reconhecimento de Padrões: Fundamentos de Convolutional Neural
            Networks (CNNs)
          </Evento>
        </tr>
        <tr></tr>
        <tr>
          <Evento
            id={196992060}
            rowSpan={3}
            color="bg-[#CE875A]"
            onClick={(id) => onSelect(id)}
          >
            Bolsa de valores pela visão de um programador
          </Evento>
        </tr>
        <tr></tr>
        <tr></tr>
        <tr>
          <td></td>
        </tr>
        <tr>
          <Evento
            id={1}
            rowSpan={3}
            color="bg-[#CE875A]"
            onClick={(id) => onSelect(id)}
          >
            Dia a dia do cientista de dados
          </Evento>
        </tr>
        <tr></tr>
        <tr></tr>
      </tbody>
    </table>
  );
};

export default DayTwo;
