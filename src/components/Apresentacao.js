import styled from "styled-components";
import React from "react";

const Titulo = styled.h2`
    font-size: 28px;
    color: white;
`

const Descricao = styled.p`
    font-weight: 200;
    color: #828282;
`

const Botao = styled.button`
    width: 150px;
    height: 38px;

    border: none;
    font-size: 12px;
    font-weight: bold;

    background-color: #00c0df;

    cursor: pointer;
    transition: all 0.5s;


    &:hover {
        background-color: #00c0dfa0;
        color: #fef;
    }
`

const BlocoTexto = styled.div`
    width: 280px;

    display: flex;
    flex-direction: column;
    gap: 15px;
`

const Apresentacao = () => {
    return (
        <BlocoTexto>
            <Titulo>Olá, eu sou o Lucas Vieira</Titulo>
            <Descricao>Desenvolvedor Front-end</Descricao>
            <Botao>Download CV</Botao>
        </BlocoTexto>
    );
}

export default Apresentacao