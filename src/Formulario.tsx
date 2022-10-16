import React from 'react';
import './reset.module.css';
import './style.module.css';

const Formulario = () => {
    return (
    <form>
        <input type='text' placeholder="Insira os nomes dos participantes" />
        <button disabled={true}>Adicionar</button>
    </form>
    )
}

export default Formulario