import React from "react";
import styled from "styled-components";

const Box = styled.div`
    width: 220px;
    height: 120px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    background-color: #212121;

    border: 1px solid #333333;
    border-bottom: 5px solid #00c0df;
    border-radius: 2px;

    padding: 20px;

    margin-bottom: 20px;
`

const TituloServico = styled.h3`
    font-size: 20px;
    color: #828282;
`

const Image = styled.img`
    width: 50px;
`

const Servico = ({titulo, imagem}) => {
    return (
        <Box>
            <Image src={imagem}></Image>
            <TituloServico>{titulo}</TituloServico>
        </Box>
    );
}

export default Servico