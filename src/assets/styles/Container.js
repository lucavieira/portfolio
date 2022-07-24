import styled from "styled-components";

const Container = styled.div`
    max-width: 1000px;
    width: 90%;
    display: flex;

    &.container_center {
        flex-direction: column;
        align-items: center;
    }

    &.container_espacado {
        justify-content: space-between;
    }

    h2 {
        color: #F9F9F9;
    }
`

export default Container