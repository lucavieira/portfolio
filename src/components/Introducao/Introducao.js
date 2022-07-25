import React from "react";
import styled from "styled-components";
import Container from "../../assets/styles/Container";
import Apresentacao from "./Apresentacao";

import avatar from "../../assets/images/avatar/avatar_pc.png"

const Avatar = styled.img`
  width: 300px;
  height: 300px;
`


const Introducao = () => {
    return (
        <Container className="container_espacado">
          <Apresentacao></Apresentacao>
          <Avatar src={avatar}></Avatar>
        </Container>
    );
}

export default Introducao