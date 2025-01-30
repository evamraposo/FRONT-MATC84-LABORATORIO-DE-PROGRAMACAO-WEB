import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import Alert from "../src/components/login/Alert"
import { AlertProvider } from "../src/contexts/alertContext";
import { AlertTypeProvider } from "../src/contexts/alertTypeContext";
import { AlertColorProvider } from "../src/contexts/alertColorContext";
import Cadastro from "../src/components/cadastro/Cadastro"
import {FormCadastroProvider} from "../src/contexts/formCadastroContext"
import FormCadastro from "../src/components/cadastro/FormCadastro"
import { BrowserRouter } from "react-router-dom";

describe("Componente Cadastro", () => {

  test("campo nome esta presente no formulario de cadastro", () => {
    render(
      <FormCadastroProvider>
        <FormCadastro />
      </FormCadastroProvider>
    );

  const input = screen.getByPlaceholderText(/nome completo/i);
  expect(input).toBeInTheDocument();

  });

  test("verifica se existe um botao para voltar a tela de login", () => {

    render(
      <BrowserRouter>
      <AlertColorProvider>
      <AlertTypeProvider>
        <AlertProvider>
        <Alert />
        <Cadastro />
      </AlertProvider>
      </AlertTypeProvider>
      </AlertColorProvider>
      </BrowserRouter>
    );

    const input = screen.getByText(/voltar/i);
    //const input = screen.getByText(/criar conta/i);
    expect(input).toBeInTheDocument();


  });

});



