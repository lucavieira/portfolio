import React from "react";
import styled from "styled-components";
import Container from "../assets/styles/Container";

import RostoFeliz from "../assets/images/happy_face.png"
import Phone from "../assets/images/phone.png"
import Instagram from "../assets/images/instagram.png"
import Email from "../assets/images/email.png"

const Resumo = styled.p`
    text-align: center;
    font-weight: 200;
    color: #828282;
`

const Dados = styled.div`
    max-width: 1200px;
    width: 90%;

    display: flex;
    justify-content: space-between;

    margin-top: 50px;
`

const Dado = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
`

const Item = styled.div`
    width: 80px;
    height: 80px;
    border-radius: 50px;
    background-color: #212121;

    display: flex;
    align-items: center;
    justify-content: center;

    img {
        width: 80%;
    }
`

const Titulo = styled.h3`
    font-size: 14px;
    color: #F9F9F9;
    
    font-weight: 700;
`

const Subtitulo = styled.p`
    font-size: 14px;
    font-weight: 200;
    color: #828282;
`

const Links = styled.a`
    color: #828282;
    text-decoration: none;
`

const SobreMim = () => {
    return (
        <Container className="container_center">
            <h2>Sobre Mim</h2>
            <Resumo>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum nihil nostrum ab autem temporibus nobis aspernatur nisi eveniet recusandae, consectetur eius obcaecati labore libero alias itaque sunt maxime ea quos!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum nihil nostrum ab autem temporibus nobis aspernatur nisi eveniet recusandae, consectetur eius obcaecati labore libero alias itaque sunt maxime ea quos!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum nihil nostrum ab autem temporibus nobis aspernatur nisi eveniet recusandae, consectetur eius obcaecati labore libero alias itaque sunt maxime ea quos!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum nihil nostrum ab autem temporibus nobis aspernatur nisi eveniet recusandae, consectetur eius obcaecati labore libero alias itaque sunt maxime ea quos!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum nihil nostrum ab autem temporibus nobis aspernatur nisi eveniet recusandae, consectetur eius obcaecati labore libero alias itaque sunt maxime ea quos!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum nihil nostrum ab autem temporibus nobis aspernatur nisi eveniet recusandae, consectetur eius obcaecati labore libero alias itaque sunt maxime ea quos!
            </Resumo>
            <Dados>
                <Dado>
                    <Item>
                        <img src={RostoFeliz}></img>
                    </Item>
                    <Titulo>Meu nome</Titulo>
                    <Subtitulo>Lucas Vieira</Subtitulo>
                </Dado>
                <Dado>
                    <Item>
                        <img src={Email}></img>
                    </Item>
                    <Titulo>Email</Titulo>
                    <Subtitulo>
                        <Links href="mailto:lukasveras14@gmail.com">lukasveras14@gmail.com</Links>
                    </Subtitulo>
                </Dado>
                <Dado>
                    <Item>
                        <img src={Instagram}></img>
                    </Item>
                    <Titulo>Instagram</Titulo>
                    <Subtitulo>
                        <Links href="https://www.instagram.com/_lucass_vieira_/" target="_blank">@_lucass_vieira_</Links>
                    </Subtitulo>
                </Dado>
                <Dado>
                    <Item>
                        <img src={Phone}></img>
                    </Item>
                    <Titulo>Telefone</Titulo>
                    <Subtitulo>
                        <Links href="tel:85981810053">(85) 98181-0053</Links>
                    </Subtitulo>
                </Dado>
            </Dados>
        </Container>
    );
}

export default SobreMim