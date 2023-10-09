"use client";
import Label from "@/components/Label";
import api from "@/services/api";
import InputMask  from "react-input-mask";
import IBGE, { Estado, Municipio } from "@/services/ibge";
import { isCPF } from "validation-br"
import {
  Chip,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import { ReactNode, useEffect, useMemo, useState } from "react";
import { Loader } from "lucide-react";


const Subscribe = () => {
  const [estados, setEstados] = useState<Estado[]>([]);
  const [cities, setCities] = useState<Municipio[]>([]);
  const [events, setEvents] = useState<EventoProps[]>([]);
  const [load, setLoad] = useState<boolean>(false);
  const [selectedEvents, setSelectedEvents] = useState<string[]>([]);

  const getEstados = async () => {
    const res = await IBGE.getStates();
    setEstados(res);
  };

  const getCities = async (uf: string) => {
    if (!uf) {
      setCities([]);
      return;
    }
    const res = await IBGE.getCities(uf);
    setCities(res);
  };
  const getEvents = async () => {
    const res = await api.get("/api/eventos/curso");
    setEvents(
      res.data.filter(
        (elem: EventoProps) => !["1", "3"].includes(elem.category || "")
      )
    );
  };

  const toggleEventSelection = (id: string) => {
    if (selectedEvents.includes(id)) {
      setSelectedEvents(selectedEvents.filter((elem) => elem !== id));
    } else {
      setSelectedEvents([...selectedEvents, id]);
    }
  };

  const total = useMemo(() => {
    if(selectedEvents.length <= 3) return 40;

    const count = selectedEvents.length -3;
    return 40 + (count * 5);
  }, [selectedEvents])
  useEffect(() => {
    getEstados();
  }, []);

  useEffect(() => {
    getEvents();
  }, []);

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  const save = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    data.append("courses", selectedEvents.join(","));
    const cpf = data.get("cpf")?.toString().replace(/\D/g, "");
    const fone = data.get("fone")?.toString().replace(/\D/g, "");
    if(cpf?.length !== 11) return alert("CPF inválido");
    if(!isCPF(cpf)) return alert("CPF inválido");
    if(fone?.length !== 11) return alert("Telefone inválido");
    setLoad(true);
    //form data to json
    const json: {[key:string]: any} = {};
    data.forEach((value, key) => {
      json[key] = value;
    });
    api.post("/api/ingresso", data)
    .then(() => {
        window.location.href = "/inscricao/sucesso";
        setLoad(false);
    })
    .catch((err) => {
        console.log(err);
        alert("Erro ao fazer inscrição. Tentar novamente");
        setLoad(false);
    })
  };
  return (
    <ThemeProvider theme={darkTheme}>
      <main className="flex flex-col items-center mt-20">
        <Label text="Inscrição SAET 2023" />
        <form
          onSubmit={save}
          className="mt-20 w-10/12 flex flex-row  gap-y-5 justify-between flex-wrap"
        >
          <TextField
            label="Nome"
            className="w-full"
            variant="outlined"
            name="nome"
            required
          />
          <TextField
            label="Email"
            variant="outlined"
            type="email"
            className="w-full lg:w-4/12"
            name="email"
            required
          />
          <TextField
            label="R.A."
            variant="outlined"
            className="w-full lg:w-3/12"
            name="ra"
          />
          <InputMask
            mask="(99) 9 9999-9999"
            maskChar={null}
            className="w-full lg:w-4/12"
            
          >
            {() => <TextField
              label="Telefone"
              variant="outlined"
              className="w-full lg:w-4/12"
              name="fone"
              required
            />}
          </InputMask>
          <InputMask
            mask="999.999.999-99"
            maskChar={null}
            className="w-full lg:w-3/12"
            
          >
            {() => <TextField
              label="CPF"
              variant="outlined"
              className="w-full lg:w-3/12"
              name="cpf"
              required
            />}
          </InputMask>
          <FormControl variant="outlined" className="w-full lg:w-3/12">
            <InputLabel id="select-estado">Estado</InputLabel>
            <Select
              label="Estado"
              variant="outlined"
              defaultValue="Selecione..."
              name="estado"
              required
              onChange={(e) => getCities(e.target.value as string)}
            >
              <MenuItem value="Selecione..." disabled>
                Selecione...
              </MenuItem>
              {estados.map((elem) => (
                <MenuItem key={elem.sigla} value={elem.sigla}>
                  {elem.nome}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl variant="outlined" className="w-full lg:w-5/12">
            <InputLabel id="select-cidade">Cidade</InputLabel>
            <Select
              label="Cidade"
              variant="outlined"
              defaultValue="Selecione..."
              name="cidade"
              required
            >
              <MenuItem value="Selecione..." disabled>
                Selecione...
              </MenuItem>
              {cities.map((elem) => (
                <MenuItem key={elem.id} value={elem.nome}>
                  {elem.nome}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            label="Logradouro"
            variant="outlined"
            className="w-full lg:w-8/12"
            name="logradouro"
            required
          />
          <TextField
            label="Número"
            type="number"
            variant="outlined"
            className="w-full lg:w-3/12"
            name="numero"
          />
          <span className="w-full">
            <p className="text-white w-full font-bold">
              Selecione os cursos que deseja fazer
            </p>
            <p className="text-white w-full text-sm">
              *3 cursos inclusos no ingresso, acima disso será cobrado um valor adicional
            </p>
          </span>
          {events.map((elem: EventoProps) => (
            <Chip
              label={elem.title}
              key={elem.id}
              variant={
                selectedEvents.includes(elem.id.toString())
                  ? "filled"
                  : "outlined"
              }
              className={`${
                selectedEvents.includes(elem.id.toString())
                  ? "bg-orange-700 hover:bg-orange-600"
                  : "border border-orange-700 text-orange-700"
              }`}
              onClick={() => toggleEventSelection(elem.id.toString())}
            />
          ))}

          <p className="w-full text-white text-3xl">Total: {Intl.NumberFormat("pt-BR", {style:"currency", currency:"BRL"}).format(total)}</p>
          <button
            type="submit"
            disabled={load}
            className="bg-slate-800 flex flex-row justify-center disabled:opacity-75 hover:bg-slate-800 text-white w-full text-center py-5 font-bold px-4 rounded"
          >
            {load ? <>
                <Loader size={24} className="text-white animate-spin"/>
                <p className="w-fit">Enviando inscrição...</p>
            </> : "Inscrever"}
          </button>
        </form>
      </main>
    </ThemeProvider>
  );
};

export default Subscribe;
