import { useState } from "react";
import { RegisterFormData } from "../types/auth";
import './index.css';
import { authUser, createUser } from "../services/register/register";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useUser } from "../hooks/UserContext";
function Auth() {
  const initialValue = {
    email: '',
    password: '',
    name: ''
  };

  const [formatdata, setFormatData] = useState<RegisterFormData>(initialValue);
  const [tela, setTela] = useState<"login" | "cadastro">("login");
  const { socket } = useUser();
  const navigate = useNavigate();

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
  };

  const handleLogin = async() =>{
    const user = await authUser(formatdata)
    if(!user.success){
      toast.error(user.message)
      return
    }
    localStorage.setItem('token', user.token);
    const userName = user.userName
    socket.emit("join", userName)

    navigate('/lobby')
    toast.success(`Bem vindo de volta, ${userName} !`)
  };

  return (
    <div className="flex flex-col items-center  justify-center h-screen bg-gray-900 text-white padding-personalized min-h-screen">
        <div className="w-full max-w-md bg-gray-800 m-4 rounded-lg margin-border relative">
        <h2 className="text-3xl font-bold text-center custom-mb">
            {tela === "login" ? "LOGIN" : "Cadastro"}
        </h2>
        <button
          onClick={() => navigate("/home")} 
          className="absolute right-4 btn-x hover:text-gray-400 transition-all duration-300 text-2xl"
        >
          &times;
        </button>
        <div className="flex flex-col ">
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
          <button className="w-full text-black font-bold rounded-lg transition-all duration-300 button-login"  onClick={tela ==="login" ? handleLogin : handleCreateUSer}>
            {tela === "login" ? "Entrar" : "Cadastrar"}
          </button>
        </div>
        <div className="mt-6 text-center">
          <span className="text-size text-gray-300">
            {tela === "login" ? "Não tem uma conta? " : "Já tem uma conta? "}
          </span>
          <button onClick={handleSwitchScreen} className="text-purple-500 font-semibold hover:underline text-gray-100 mt-4 text-size">
            {tela === "login" ? "Cadastre-se" : "Login"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Auth;
