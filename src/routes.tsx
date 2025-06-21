import { Routes, Route } from "react-router-dom";
import Lobby from "./pages/lobby";
import Register from "./auth/register";
import Index from "./pages/home";
import Home from "./pages/home/home";


export default function AppRoutes() {
  return (

    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/home" element={<Home />} />
      <Route path="/lobby" element={<Lobby />} />
      <Route path="/register" element={<Register />} />
    </Routes>
   
  );
}
