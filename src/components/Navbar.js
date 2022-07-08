import React from "react";
import Menu from "../assets/styles/Menu";

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