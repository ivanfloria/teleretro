
import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #000;
    background-image: url('../welcome.jpg');
    background-size: cover;
    position: relative;
    &:before{
        content:'';
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba(0,0,0,0.75);
    }
`
