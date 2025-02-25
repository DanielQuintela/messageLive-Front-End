import { useState } from 'react';
import './index.css';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../hooks/UserContext';
import { toast } from 'react-toastify';

function Home() {
  const [tela, setTela] = useState<"inicio" | "askName">("askName");
  const [inputNome, setInputNome] = useState("");
  const { nome, socket } = useUser();
  const navigate = useNavigate();
 
  const handleToLobby = () =>{

    if (inputNome) {
      socket.emit("join", inputNome)
      sessionStorage.setItem('notify', '0')
      navigate(`/lobby`);
    } else {
      toast.error("Por favor, digite seu nome para poder entrar!"); // Evita que entre sem nome
    }
   
  }
    return (
      <>
        
        <div className="flex flex-col items-center justify-center bg-gray-900 text-white text-center transition-all duration-500 overflow-y-auto h-screen px-4">
      
          { tela === "askName" && (
            <div className="opacity-100 transition-opacity duration-500 flex flex-col items-center relative">

            {/* Abaixo a responsividade em top e right para telas menores e md:top e md:rigth para telas maiores */}

              <h1 className="font-bold text-3xl mb-4">Qual é o seu nome?</h1>
                <input
                  type="text"
                  className="mt-4 p-3 text-black rounded-lg w-64 h-11 focus:outline-none focus:ring-2 focus:ring-purple-500 hover:ring-4 hover:ring-purple-400 transition-all duration-300"
                  placeholder="Digite seu nome aqui"
                  value={inputNome}
                  onChange={(e) => setInputNome(e.target.value)}
                  required
              />
              <div className='space-x-5'> 
                <button
                  className="mt-7 px-4 py-3 h-12 bg-purple-700 hover:bg-purple-800 text-white font-bold rounded-lg transition-all duration-300 text-xl shadow-md hover:shadow-lg"
                  onClick={handleToLobby}
                >
                  Entrar no lobby
                </button>
                <button
                  className="mt-7 px-4 py-3 h-12 button-login hover:bg-green-700 text-black font-bold rounded-lg transition-all duration-300 text-xl shadow-md hover:shadow-lg"
                  onClick={() => navigate(`/register`)}
                >
                  Login
                </button>
              </div>
            </div>
          )}

          {nome !== "" && tela === "inicio" && (
            <div className="mt-8 p-4 bg-yellow-100 rounded-lg shadow-md max-w-md mx-auto">
              <h1 className="text-lg font-semibold text-gray-800">
                Olá, <span className="font-bold">{nome}</span>! Você já está logado.
              </h1>
              <p className="text-sm text-gray-600 mt-2">
                Se deseja alterar seu nome, por favor, faça logout e entre novamente.
              </p>
            </div>
          )}


        </div>
      </>
    );
}

export default Home;