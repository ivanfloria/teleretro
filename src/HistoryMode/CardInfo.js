
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { data } from "../assets/data"

import {Infoholder, Info, Arrow} from "../styledComponents/StyledCardInfo"

const CardInfo = ({id,progress}) => {
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
                <span>{data[id-1].type}</span>
            </Info>
            <Info>
                Acertado:
                <span>{`${progress} / ${data.length}`}</span>
            </Info>
            <Arrow rot={1}><Link to={`/history/${next}`}><img src="/arrow.png" /></Link></Arrow>
        </Infoholder>
    )
}

export default CardInfo