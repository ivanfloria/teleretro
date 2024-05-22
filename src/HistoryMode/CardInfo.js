
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { data } from "../assets/data"

import styled from "styled-components"

const Infoholder = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    margin-bottom: 10px;
`
const Info = styled.div`
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
const Arrow = styled.div`
    width: 15px;
    height: auto;
    display: flex;
    align-items: center;
    &>*>img{
        width: 100%;
        ${props => props.rot ? 'transform: rotate(180deg)' : ''}
    }
`

const CardInfo = ({id}) => {
    const [next,setNext] = useState();
    const [prev,setPrev] = useState();

    useEffect(() => {
        {parseInt(id) === data.length ? setNext(1) : setNext(parseInt(id)+1)}
        {parseInt(id) === 1 ? setPrev(data.length) : setPrev(parseInt(id)-1)}
    },[id])

    return(
        <Infoholder>
            <Arrow><Link to={`/history/${prev}`}><img src="/arrow.png" /></Link></Arrow>
            <Info>
                Núm:
                <span>{id}</span>
            </Info>
            <Info>
                Tipo:
                <span>{data[id-1].tipo}</span>
            </Info>
            <Info>
                Acertado:
                {/* <span>{`${progress} / ${data.length}`}</span> */}
                <span>{`1 / ${data.length}`}</span>
            </Info>
            <Arrow rot={1}><Link to={`/history/${next}`}><img src="/arrow.png" /></Link></Arrow>
        </Infoholder>
    )
}

export default CardInfo