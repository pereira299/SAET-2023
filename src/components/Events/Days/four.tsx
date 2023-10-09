import Evento from "..";

const DayFour = ({ onSelect }: { onSelect: (id: number) => void }) => {
  return (
    <table className=" w-[25vw] ml-5 text-white font-bold border-separate border-spacing-1 -mt-2">
      <thead></thead>
      <tbody>
        <tr style={{ height: "10px" }}>
          <Evento id={1} color="bg-cyan-700" rowSpan={9}>
            Warmap Hackathon
          </Evento>
          <Evento id={1} color="bg-cyan-700" rowSpan={9}>
            RPG: one shot!
          </Evento>
          <td></td>
        </tr>
        <tr style={{ height: "10px" }}>
          <td></td>
        </tr>
        <tr style={{ height: "10px" }}>
          <td></td>
        </tr>
        <tr style={{ height: "10px" }}>
          <Evento id={1} color="bg-cyan-700" rowSpan={6}>
            Visita técnica Copel
          </Evento>
        </tr>
        <tr style={{ height: "10px" }}></tr>
        <tr style={{ height: "10px" }}></tr>
        <tr style={{ height: "10px" }}></tr>
        <tr style={{ height: "10px" }}></tr>
        <tr style={{ height: "10px" }}></tr>
        <tr style={{ height: "10px" }}>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr style={{ height: "10px" }}>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr style={{ height: "10px" }}>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr style={{ height: "10px" }}>
          <Evento id={1} color="bg-cyan-700" rowSpan={9}>
            Hackathon
          </Evento>
          <Evento id={1} color="bg-cyan-700" rowSpan={9}>
            RPG: one shot!
          </Evento>
          <Evento id={1} color="bg-cyan-700" rowSpan={5}>
            Visita técnica Copel
          </Evento>
        </tr>
        <tr style={{ height: "10px" }}></tr>
        <tr style={{ height: "10px" }}></tr>
        <tr style={{ height: "10px" }}></tr>
        <tr style={{ height: "10px" }}></tr>
        <tr style={{ height: "10px" }}>
          <Evento id={1} color="bg-cyan-700" rowSpan={4}>
            Cultivando Dados e Colhendo Soluções...
          </Evento>
        </tr>
        <tr style={{ height: "10px" }}></tr>
        <tr style={{ height: "10px" }}></tr>
        <tr style={{ height: "10px" }}></tr>
        <tr style={{ height: "10px" }}>
          <Evento id={1} color="bg-cyan-700" colSpan={3} rowSpan={3}>
            Discoteca
          </Evento>
        </tr>
        <tr style={{ height: "10px" }}></tr>
        <tr style={{ height: "10px" }}></tr>
        <tr style={{ height: "10px" }}>
          <Evento id={1} color="bg-cyan-700" colSpan={3} rowSpan={3}>
            Lei Geral de Proteção de Dados: Conceitos e Casos.
          </Evento>
        </tr>
        <tr style={{ height: "10px" }}></tr>
        <tr style={{ height: "10px" }}></tr>
        <tr style={{ height: "10px" }}>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr style={{ height: "10px" }}>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr style={{ height: "10px" }}>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr style={{ height: "10px" }}>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>
  );
};

export default DayFour;
