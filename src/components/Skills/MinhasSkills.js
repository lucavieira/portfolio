import React from "react";
import styled from "styled-components";
import Container from "../../assets/styles/Container";
import Skills from "./Skills";

import Html from "../../assets/images/skills/html.png"
import Css from "../../assets/images/skills/css.png"
import Js from "../../assets/images/skills/javascript.png"
import Sass from "../../assets/images/skills/sass.png"
import ReactJs from "../../assets/images/skills/react.png"

const ContainerSkills = styled.div`
    display: flex;
    flex-flow: row wrap;
    gap: 40px;

    margin-bottom: 20px;
`

const MinhasSkills = () => {
    return (
        <Container className="container_center">
            <h2>Minhas Skills</h2>
            <ContainerSkills>
                <Skills imagem={Html}></Skills>
                <Skills imagem={Css}></Skills>
                <Skills imagem={Js}></Skills>
                <Skills imagem={Sass}></Skills>
                <Skills imagem={ReactJs}></Skills>
            </ContainerSkills>
        </Container>
    );
}

export default MinhasSkills