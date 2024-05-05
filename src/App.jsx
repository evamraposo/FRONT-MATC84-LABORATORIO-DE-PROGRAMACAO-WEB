import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Login from "./components/login/Login";
import Cadastro from "./components/cadastro/Cadastro";
import Recovery from "./components/recovery/Recovery";
import { CrudUser } from "./components/crud-user/user";

function App() {
    return (
        <BrowserRouter>
            <Routes>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/recovery" element={<Recovery />} />
            <Route path="/crudUser" element={<CrudUser />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
