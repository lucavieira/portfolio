import React from "react";
import styled from "styled-components";

const Menu = styled.ul`
    display: flex;
    gap: 55px;

    list-style-type: none;

    a {
        color: #F9F9F9;
        text-decoration: none;
        font-family: 'Inter', sans-serif;
        font-weight: 200;
        transition: all 0.5s;
    }

    a:hover {
        color: #A1A1A1;
    }
`

const Navbar = () => {
    return (
        <Menu>
            <li>
                <a href="#">Sobre mim</a>
            </li>
            <li>
                <a href="#">Projetos</a>
            </li>
            <li>
                <a href="#">Serviços</a>
            </li>
            <li>
                <a href="#">Minhas skills</a>
            </li>
        </Menu>
    );
}

export default Navbar