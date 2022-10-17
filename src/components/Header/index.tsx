// src/componentes/Cabecalho/index.tsx
import React from 'react';
import style from './styles.module.css';

const Header = () => {
    return (
        <header className={style.cabecalho}>
            <div className={style.imagem_logo} role="img" aria-label='Logo do Sorteador'></div>
            <img className={style.participante} src="/imagens/participante.png" alt="Participante com um presente na mão" />
        </header>
    )
}

export default Header