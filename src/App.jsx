import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Login from "./components/login/Login";
import Cadastro from "./components/cadastro/Cadastro";
import Recovery from "./components/recovery/Recovery";
import AdminController from "./components/admin/AdminController";
import Home from "./components/home/Home";
import { CrudUser } from "./components/crud-user/user";
import { ProtectedRoute } from "./routing/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProtectedRoute children={<Home />} />} />
        <Route path="/home" element={<ProtectedRoute children={<Home />} />} />
        <Route path="/admin" element={<ProtectedRoute redirectPath="/" children={<AdminController />} adminOnly />} />
        <Route path="/crudUser" element={<ProtectedRoute redirectPath="/" children={<CrudUser />} adminOnly />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/recovery" element={<Recovery />} />
        <Route path="/*" element={<Navigate to="/home" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
