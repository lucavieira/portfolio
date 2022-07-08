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

export default Menu