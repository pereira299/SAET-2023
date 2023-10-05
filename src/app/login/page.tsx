'use client'
import api from "@/services/api";
import { TextField, ThemeProvider, createTheme } from "@mui/material";
import { useState } from "react";

const Login = () => {
    const [error, setError] = useState<string>("");
    const [load, setLoad] = useState<boolean>(false);


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoad(true);
        const data = new FormData(e.currentTarget);
        api.post("/api/login", {
            username: data.get("username"),
            password: data.get("password"),
        }).then((res) => {
            localStorage.setItem("token", res.data.token);
            window.location.href = "/admin";
        }).catch((err) => {
            setError(err.response.data.message);
            setLoad(false);
        });
    }

    const darkTheme = createTheme({
        palette: {
          mode: "dark",
        },
      });
    
  return (
    <ThemeProvider theme={darkTheme}>
    <main className="px-5 pt-20">
      <h3 className="text-white font-bold bg-orange-700 p-3 w-fit mx-auto text-6xl lg:text-4xl mb-5">
        Bem vindo!
      </h3>
      <p className="text-white text-center font-bold text-3xl lg:text-xl mt-20">
        Faça seu login para acessar a area administrativa
      </p>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center mt-10"
      >
        <TextField
          label="Usuário"
          variant="outlined"
          className="w-full lg:w-6/12 mb-4"
          name="username"
          required
        />
        <TextField
          label="Senha"
          variant="outlined"
          className="w-full lg:w-6/12"
          name="password"
          required
        />
        {error && (
          <p className="text-red-500 text-3xl lg:text-xl mt-5">{error}</p>
        )}
        <button
          type="submit"
          className="bg-slate-700 text-white text-3xl lg:text-xl py-2 px-5 rounded-lg mt-5"
        >
          Entrar
        </button>
      </form>
    </main>
    </ThemeProvider>
  );
};

export default Login;
