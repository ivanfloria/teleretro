
import styled from "styled-components"

export const Card = styled.div`
    width: 100%;
    max-width: 600px;
    background-color: #fff;
    padding: 20px;
    box-sizing: border-box;
    text-align: center;
    &>img{
        width: 100%;
    }
`
export const Audioplayer = styled.div`
    margin: 10px 0;
    &>.react-audio-player {
        width: 100%;
    }
`
export const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    @media only screen and (max-width: 768px) {
        flex-direction: column;
    }
`
export const Input = styled.input`
    width: 100%;
    padding: 0.5rem 1rem;
    box-sizing: border-box;
    text-align: center;
    font-size: 1.2rem;
    color: #666;
    outline-style: none;
    border: solid 1px #666;
    @media only screen and (max-width: 768px) {
        font-size: 1rem;
    }
`
export const Button = styled.button`
    background-color: #ff0000;
    color: #fff;
    padding: 1rem 1.5rem;
    border: none;
    cursor: pointer;
    font-size: 1.3rem;
    font-weight: bold;
    margin: 0;
    @media only screen and (max-width: 768px) {
        font-size: 1rem;
        padding: 0.5rem 1rem;
        margin-top: 10px;
    }
`