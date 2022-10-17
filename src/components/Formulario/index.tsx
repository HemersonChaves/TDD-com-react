import React from 'react';
import Styles from "./styles.module.css"
const Formulario = () => {
    return (
    <form className={Styles.form}>
        <input className={Styles.input} type='text' placeholder="Insira os nomes dos participantes" />
        <button className={Styles.button} disabled={true}>Adicionar</button>
    </form>
    )
}

export default Formulario