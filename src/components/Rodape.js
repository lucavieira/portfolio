import React from "react";
import styled from "styled-components";

const ContainerRodape = styled.div`
    height: 40px;
    background-color: #212121;

    display: flex;
    justify-content: center;
    align-items: center;

    margin-top: 100px;
`

const Texto = styled.p`
    font-size: 14px;
    color: #F9F9F9;
    letter-spacing: 2px;
`

const Link = styled.a`
    color: #00c0df;
    text-decoration: none;
`

const Rodape = () => {
    return (
        <ContainerRodape>
            <Texto>
                Desenvolvido por <Link href="https://www.linkedin.com/in/lucas-vieira-dev/">Lucas Vieira</Link>
            </Texto>
        </ContainerRodape>
    );
}

export default Rodape