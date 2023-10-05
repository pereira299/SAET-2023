'use client'
import api from "@/services/api";
import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";

interface InscricaoProps {
    id: string;
    cursos: {
        id: string;
        title: string;
    }[]
    client: {
        name: string;
        email: string;
        ra: string;
        cpf: string;
        endereco: string;
    }
    price: number;
    pago: boolean;
}

const Admin =  () => {
    const [inscricoes, setInscricoes] = useState<InscricaoProps[]>([]);    
    const [load, setLoad] = useState<boolean>(false);
    const getInscricoes = async () => {
        setLoad(true);
        const res = await api.get("/api/ingresso", {
            headers: {
                token: `${localStorage.getItem("token")}`,
            },
        })
        .then((res) => {
            setLoad(false);
            return res.data;
        })
        .catch((err) => {
            setLoad(false);
            if (err.response.status === 401) {
                window.location.href = "/login";
            }
        });
        return res;
    }

    useEffect(() => {
        getInscricoes().then((res) => {
            setInscricoes(res);
        });
    }, []);
  return (
    <main className="px-5 pt-20">
      <h3 className="text-white font-bold bg-orange-700 p-3 w-fit mx-auto text-6xl lg:text-4xl mb-5">
        Área administrativa
      </h3>

        <p className="text-white text-right my-5">{inscricoes?.length || 0} inscrições encontradas</p>
      { !load ? <table className="text-white w-full border-separate border-spacing-y-2 border-spacing-x-0">
        <thead>
          <tr>
            <th>Nome Completo</th>
            <th className="text-left">E-mail</th>
            <th className="text-left">RA</th>
            <th className="text-left">CPF</th>
            <th>Minicurso</th>
            <th className="text-left">Preço</th>
            <th className="text-left">Pago</th>
          </tr>
        </thead>
        <tbody>
            {inscricoes.map((inscricao) => (
                <tr key={inscricao.id} className="bg-slate-700">
                    <td className="rounded-l-xl pl-4">{inscricao.client.name}</td>
                    <td>{inscricao.client.email}</td>
                    <td>{inscricao.client.ra}</td>
                    <td>{inscricao.client.cpf}</td>
                    <td className="w-1/4"><ul>{inscricao.cursos.map(curso => (
                        <li key={curso.id} className="mb-2">{curso.title}</li>
                    ))}</ul></td>
                    <td>{Intl.NumberFormat("pt-BR", {style:'currency', currency:'BRL'}).format(inscricao.price)}</td>
                    <td className="rounded-r-xl">{inscricao.pago ? "Sim" : "Não"}</td>
                </tr>
            ))}
        </tbody>
      </table>
      : <p className="text-white text-center gap-x-5 flex flex-row justify-center items-center font-bold text-3xl lg:text-xl mt-20">
        <Loader2 className="animate-spin" size={40} />
        Carregando...</p>}
    </main>
  );
};

export default Admin;
