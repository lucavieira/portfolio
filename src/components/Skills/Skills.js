import React from "react";
import styled from "styled-components";

const Skill = styled.div`
    width: 100px;
    height: 100px;

    background-color: #212121;
    border: 1ps solid #333333;

    display: flex;
    justify-content: center;
    align-items: center;
`

const Imagem = styled.img`
    width: 80px;
`

const Skills = ({imagem}) => {
    return (
        <Skill>
            <Imagem src={imagem}></Imagem>
        </Skill>
    );
}

export default Skills