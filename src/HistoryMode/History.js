
import { useDataContext } from "../Context/DataProvider";
import { useParams } from "react-router-dom"

import SerialCard from "./SerialCard";

import styled from "styled-components";

const Container = styled.div`
    position: relative;
    width: 1200px;
    height: auto;
    padding-top: 200px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
`
const H1 = styled.h1`
    font-size: 2rem;
    color: #fff;
    margin: 0px;
`
const Holder = styled.div`
    max-width: 600px;
    height: auto;
    padding: 20px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* @media only screen and (max-width: 768px) {
        flex-direction: column;
    } */
`

const History = () => {
    
    const {name} = useDataContext();

    let id = 1;

    return(
        <Container>
            <H1>Despierta tus recuerdos dormidos, {name}</H1>
            <Holder>
                <SerialCard
                    id={id}
                    mode={"historia"}
                />
            </Holder>

        </Container>
    )
}

export default History