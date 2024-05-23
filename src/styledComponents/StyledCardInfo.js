
import styled from "styled-components"

export const Infoholder = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    margin-bottom: 10px;
`
export const Info = styled.div`
    width: 50%;
    font-size: 1.1rem;
    text-align: center;
    padding: 10px 10px 15px 15px;
    background-color: #fff;
    color: #333;
    &>span{
        font-size: 1.3rem;
        display: block;
        margin-top: 5px;
        font-weight: bold;
        color: #ff0000;
    }
    @media only screen and (max-width: 768px) {
        padding: 5px 10px;
        font-size: 1rem;
            &>span{
            font-size: 1.1rem;
            display: block;
            font-weight: bold;
            color: #ff0000;
        }
    }
`
export const Arrow = styled.div`
    width: 15px;
    height: auto;
    display: flex;
    align-items: center;
    &>*>img{
        width: 100%;
        ${props => props.rot ? 'transform: rotate(180deg)' : ''}
    }
`