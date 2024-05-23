
import { useParams } from "react-router-dom"

import SerialCard from "./SerialCard";

import {Container, H1, Holder} from "../styledComponents/StyledHistory"

const History = () => {
    let {id} = useParams()
    
    return(
        <Container>
            <H1>Despierta tus recuerdos dormidos</H1>
            <Holder>
                <SerialCard id={id}/>
            </Holder>
        </Container>
    )
}

export default History