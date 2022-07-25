import React from "react";
import styled from "styled-components";

const Box = styled.div`
    width: 300px;
    height: 190px;
    background-color: #212121;
    border: 1px solid #333333;

    padding: 20px;
`

const Tela = styled.div`
    max-width: 300px;
    width: 100%;
    height: 130px;

    background-color: #171717;
    border: 1px solid #333333;
`

const TituloProjeto = styled.h3`
    font-size: 16px;
    color: #FFFFFF;
    font-weight: 400;

    margin-top: 20px;
`

const Tecnologias = styled.p`
    font-size: 14px;
    color: #828282;
    font-weight: 200;
    margin-top: 5px;
`

const Projeto = () => {
    return (
        <Box>
            <Tela></Tela>
            <TituloProjeto>Titulo</TituloProjeto>
            <Tecnologias>Tecnologias: HTML, CSS, JS</Tecnologias>
        </Box>
    );
}

export default Projeto