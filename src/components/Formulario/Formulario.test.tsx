import React from "react";
import { render, screen } from "@testing-library/react";
import Formulario from ".";

// jest
test('quando o input está vazio, novos participantes não podem ser adicionados', () =>{
    render(<Formulario />)

    //encontrar o input no DOM
    const input = screen.getByPlaceholderText ('Insira os nomes dos participantes');
    
    //encontrar o botão no DOM
    const botao = screen.getByRole('button')

    // garantir que o input esteja no documento
    expect(input).toBeInTheDocument();

    // garantir que o botão esteja desabilitado no documento
    expect(botao).toBeDisabled();

})