import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { io } from "socket.io-client";
const APIPORT = process.env.PORT || 4000
const socket = io(`http://localhost:${APIPORT}`); 

interface UserContextType {
  nome: string;
  setNome: (nome: string) => void;
  socket: any;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: ReactNode }) {
  const [nome, setNome] = useState<string>("");

  useEffect(() => {
    console.log(socket);
    
    socket.on("setUser", (username: string) => {
      setNome(username);
    });

    return () => {
      socket.off("setUser");
    };
  }, []);

  return (
    <UserContext.Provider value={{ nome, setNome, socket }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser deve ser usado dentro de um UserProvider");
  }
  return context;
}
