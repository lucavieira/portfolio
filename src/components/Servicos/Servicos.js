import React from "react";
import styled from "styled-components";
import Container from "../../assets/styles/Container";
import Servico from "./Servico";

import Code from "../../assets/images/servicos_icons/code.png"
import Smartphone from "../../assets/images/servicos_icons/smartphone.png"

const ContainerServicos = styled.div`
    display: flex;
    flex-flow: row wrap;
    gap: 20px;
`

const Servicos = () => {
    return (
        <Container className="container_center">
            <h2>Serviços</h2>
            <ContainerServicos>
                <Servico titulo="Criação de Sites" imagem={Code}></Servico>
                <Servico titulo="Sites Responsivos" imagem={Smartphone}></Servico>
            </ContainerServicos>
        </Container>
    );
}

export default Servicos