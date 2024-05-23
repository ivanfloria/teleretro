import styled from "styled-components";

export const Container = styled.div`
    width: calc(100% - 20px);
    max-width: 1200px;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const InputContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    box-sizing: border-box;
    -webkit-box-pack: center;
    justify-content: center;
`
export const Input = styled.input`
    width: 100%;
    max-width: 400px;
    height: auto;
    padding: 1rem 1.5rem;
    box-sizing: border-box;
    border: none;
    outline: none;
    font-size: 1.3rem;
`
export const Go = styled.button`
    background-color: rgb(255, 0, 0);
    width: 100px;
    color: rgb(255, 255, 255);
    padding: 1rem 1.5rem;
    border: none;
    cursor: pointer;
    font-size: 1.3rem;
    font-weight: bold;
    margin: 0px;
`
export const H1 = styled.h1`
    font-size: 3.5rem;
    color: #fff;
    margin: 0px;
    @media only screen and (max-width: 768px) {
        font-size: 2.5rem;
        text-align: center;
    }
`
export const H2 = styled.h2`
    font-size: 1.75rem;
    color: #fff;
    font-weight: 400;
    text-align: center;
    margin: 0.5rem 0px;
    @media only screen and (max-width: 768px) {
        font-size: 1.50rem;
        text-align: center;
    }
`
export const H3 = styled.h3`
    font-size: 1.3rem;
    text-align: center;
    color: #fff;
    font-weight: 400;
    margin-top: 0.75rem;
`