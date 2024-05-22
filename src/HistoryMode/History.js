
import { useDataContext } from "../Context/DataProvider";
import { useParams } from "react-router-dom"

import SerialCard from "./SerialCard";

import styled from "styled-components";

const Container = styled.div`
    position: relative;
    width: 1200px;
    height: auto;
    padding-top: 50px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const H1 = styled.h1`
    font-size: 2rem;
    color: #fff;
    margin: 0px;
    text-align: center;
`
const Holder = styled.div`
    width: 100%;
    max-width: 600px;
    height: auto;
    padding: 20px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* @media only screen and (max-width: 768px) {
        flex-direction: column;
    } */
`

const History = () => {
    
    const {name} = useDataContext();
    let {id} = useParams()

    return(
        <Container>
            <H1>Despierta tus recuerdos dormidos, {name}</H1>
            <Holder>
                <SerialCard id={id}/>
            </Holder>
        </Container>
    )
}

export default History