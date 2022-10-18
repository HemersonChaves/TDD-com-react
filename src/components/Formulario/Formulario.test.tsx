import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Formulario from ".";
import { RecoilRoot } from "recoil";

// jest
test('quando o input está vazio, novos participantes não podem ser adicionados', () => {
    render(<Formulario />)

    //encontrar o input no DOM
    const input = screen.getByPlaceholderText('Insira os nomes dos participantes');

    //encontrar o botão no DOM
    const botao = screen.getByRole('button')

    // garantir que o input esteja no documento
    expect(input).toBeInTheDocument();

    // garantir que o botão esteja desabilitado no documento
    expect(botao).toBeDisabled();

})

test("adicionar um participante caso exista um nome preenchido", () => {
    render(
        <RecoilRoot>
            <Formulario />
        </RecoilRoot>
    )

    //encontrar o input no DOM
    const input = screen.getByPlaceholderText('Insira os nomes dos participantes');

    //encontrar o botão no DOM
    const botao = screen.getByRole('button');

    //inserir um valor no input
    fireEvent.change(
        input,
        {
            target: {
                value: "Ana Catarina"
            }
        })

    //clicar no botão de submiter
    fireEvent.click(botao);

    //garantir que o input esteja com o foco ativo
    expect(input).toHaveFocus();
    
    // garantir que o input não tenha valor
    expect(input).toHaveValue("")
})