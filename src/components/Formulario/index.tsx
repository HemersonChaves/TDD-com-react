import React, { useRef, useState } from 'react';
import { useAdicionarParticipante } from '../../state/hooks/useAdicionarParticipante';
import Styles from "./styles.module.css"
const Formulario = () => {
    const [nome, setNome] = useState("");

    const inputRef = useRef<HTMLInputElement>(null);

    const adicionarNaLista = useAdicionarParticipante();

    const adicionarParticipante = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault();
        //cancela qualquer evento disparado
        adicionarNaLista(nome)
        setNome("")
        inputRef.current?.focus()

    }
    return (
        <form
            onSubmit={adicionarParticipante}
            className={Styles.form}>
            <input
                ref={inputRef}
                value={nome}
                onChange={evento => setNome(evento.target.value)}
                className={Styles.input}
                type='text'
                placeholder="Insira os nomes dos participantes" />
            <button className={Styles.button} disabled={!nome}>Adicionar</button>
        </form>
    )
}

export default Formulario