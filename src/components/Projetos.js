import React from "react";
import styled from "styled-components";
import Container from "../assets/styles/Container";
import Projeto from "./Projeto";

const ContainerProjetos = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    gap: 20px;
`

const Projetos = () => {
    return (
        <Container className="container_center">
            <h2>Projetos</h2>
            <ContainerProjetos>
                <Projeto></Projeto>
                <Projeto></Projeto>
                <Projeto></Projeto>
                <Projeto></Projeto>
                <Projeto></Projeto>
                <Projeto></Projeto>
            </ContainerProjetos>
        </Container>
    );
}

export default Projetos