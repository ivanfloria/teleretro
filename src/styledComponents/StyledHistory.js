
import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    width: calc(100% - 40px);
    max-width: 1200px;
    height: auto;
    padding-top: 50px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const H1 = styled.h1`
    font-size: 2rem;
    color: #fff;
    margin: 0px;
    text-align: center;
`
export const Holder = styled.div`
    width: 100%;
    max-width: 600px;
    height: auto;
    padding: 20px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media only screen and (max-width: 768px) {
        flex-direction: column;
    }
`