import { useState } from "react";
import { RegisterFormData } from "../types/auth";
import './index.css';
import { createUser } from "../services/register/register";
function Auth() {
  const initialValue = {
    email: '',
    password: '',
    name: ''
  };

  const [formatdata, setFormatData] = useState<RegisterFormData>(initialValue);
  const [tela, setTela] = useState<"login" | "cadastro">("login");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormatData({ ...formatdata, [name]: value });
  };

  const handleSwitchScreen = () => {
    setTela(tela === "login" ? "cadastro" : "login");
  };

  const handleCreateUSer = () =>{
    const user = createUser(formatdata)
    console.log(user);
  }
  const handleLogin = () =>{
    
  }

  return (
    <div className="flex flex-col items-center  justify-center h-screen bg-gray-900 text-white padding-personalized min-h-screen">
        <div className="w-full max-w-md bg-gray-800 m-4 rounded-lg margin-border">
        <h2 className="text-3xl font-bold text-center custom-mb">
            {tela === "login" ? "Login" : "Cadastro"}
        </h2>
        <div className="flex flex-col space-y-4 ">
          {tela === "cadastro" && (
            <input
              onChange={handleChange}
              value={formatdata.name}
              placeholder="Nome"
              name="name"
              className="personalized rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-800 transition "
            />
          )}
          <input
            onChange={handleChange}
            value={formatdata.email}
            placeholder="Email"
            name="email"
            className="personalized  rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
          />
          <input
            onChange={handleChange}
            value={formatdata.password}
            placeholder="Senha"
            name="password"
            type="password"
            className="personalized rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
          />
          <button className="w-full py-3 bg-purple-950 hover:bg-purple-900 text-white font-bold rounded-lg transition-all duration-300"  onClick={tela ==="login" ? handleLogin : handleCreateUSer}>
            {tela === "login" ? "Entrar" : "Cadastrar"}
          </button>
        </div>
        <div className="mt-6 text-center">
          <span>
            {tela === "login" ? "Não tem uma conta? " : "Já tem uma conta? "}
          </span>
          <button onClick={handleSwitchScreen} className="text-purple-500 font-semibold hover:underline">
            {tela === "login" ? "Cadastre-se" : "Login"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Auth;
