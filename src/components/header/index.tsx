import { Flip, ToastContainer } from "react-toastify";
import { useUser } from "../../hooks/UserContext";
import ModalCancelConfirm from "../modals/modalCancel";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const HeaderContainer = () => {
  const { nome, socket, setNome } = useUser(); // Certifique-se que o contexto permite atualizar o nome
  const [showModalCancelConfirm, setShowModalCancelConfirm] = useState(false);
  const navigate = useNavigate();



  const handleLogOut = () => {
    if (socket) {
      socket.emit("logout", nome); // Envia para o back-end que o usuário desconectou
    }
    setNome(""); // Reseta no estado do usuário
    setShowModalCancelConfirm(false);
    navigate("/"); 
  };

  const handleHome = () => {
    navigate("/"); 
  }

  return (
    <>
      <header className="bg-black/70 p-3 absolute top-0 left-0 w-full flex items-center justify-between">
        <h1 className="text-[#ffffff] ml-3 lg:text-2xl" onClick={handleHome}>MessageLive</h1>

        {nome && (
          <button onClick={() => setShowModalCancelConfirm(true)}>
            <img
              src="/exit.png"
              alt="Deslogar"
              width={20}
              height={20}
              className="invert text-white"
              title="Deslogar"
            />
          </button>
        )}

        {nome && (
          <div className="text-lg text-white">
            <span>Olá, <strong>{nome}</strong></span>
          </div>
        )}
      </header>

      {/* Modal de confirmação para logout */}
      {showModalCancelConfirm && (
        <ModalCancelConfirm
          textContent="Deseja sair?"
          onConfirm={handleLogOut}
          setShowModalCancelConfirm={setShowModalCancelConfirm}
        />
      )}

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        closeOnClick={true}
        pauseOnHover={false}
        draggable={true}
        theme="dark"
        transition={Flip}
        style={{ fontSize: "16px" }}
      />
    </>
  );
};

export default HeaderContainer;
