import { useState } from 'react';
import './index.css';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../hooks/UserContext';
import { Typewriter } from 'react-simple-typewriter';

function Index() {
  const [tela, setTela] = useState<"inicio" | "askName">("inicio");
  const { nome } = useUser();
  const navigate = useNavigate();
 

    return (
      <>
        <div className="flex flex-col items-center justify-center bg-gray-900 text-white text-center transition-all duration-500 overflow-y-auto h-screen px-4">
         
          {tela === "inicio" &&  nome === "" && (
             <div className="opacity-100 transition-opacity duration-500">
              
              <h1 className="font-bold text-4xl mb-4">
                <Typewriter
                words={['Olá, seja bem-vindo!', 'Conecte-se e converse com novas pessoas!']}
                loop={true}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={2000}
              /> 
              </h1>
              <p className="mt-4 px-4 text-lg text-gray-300">
                Converse com pessoas de todo o mundo e faça novas conexões a um clique de distância!
              </p>

              <div className="flex flex-col items-center">
                <button 
                className="btnfos-1 mt-16  font-bold  transition-all duration-300"
                onClick={() => navigate('/home')}
                >
                  Aperte aqui para começar
                  <svg>
                    <rect x="0" y="0" fill="none" width="100%" height="100%" />
                  </svg>
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

export default Index;