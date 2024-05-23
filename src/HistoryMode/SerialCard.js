
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDataContext } from "../Context/DataProvider";
import useLocalStorage from "../Hooks/useLocalStorage";

import CardInfo from "./CardInfo";
import Modal from "../Common/Modal";

import { data } from "../assets/data";
import ReactAudioPlayer from "react-audio-player";

import {Card, Audioplayer, Form, Input, Button} from "../styledComponents/StyledSerialCard"

const SerialCard = ({id}) => {
    const navigate = useNavigate()
    const item = data[id-1]
    const [name,setName] = useState('')
    const [won,setWon] = useState(null)
    const {userName, sessionID} = useDataContext();
    
    const [modalText,setModalText] = useState('')
    const [modalState,setModalState] = useState(null)
    const [modalImg,setModalImg] = useState(null)

    const InitialProgress = window.localStorage.getItem(`${sessionID}_progress`)
    const [progress,setProgress] = useLocalStorage(`${sessionID}_progress`,InitialProgress)

    const FixText = (value) => {
        const tempText = value.toLowerCase().normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .replace('el ','')
            .replace('la ','')
            .replace('los ','')
            .replace('las ','')
            return tempText
    }

    let status = window.localStorage.getItem(`${sessionID}_${item.name}_ok`)

    useEffect(() => {
        if(status === 'OK'){
            setWon(true)
        }else{
            setWon(false)
        }
    },[id])

    useEffect(() => {
        {progress === null ? setProgress(0) : setProgress(progress)}
    },[])

    const handleChange = (e) => setName(e.target.value)
    const handleSubmit = (e) => {
        e.preventDefault()
        if(FixText(name) === FixText(item.name)){
            window.localStorage.setItem(`${sessionID}_${item.name}_ok`, 'OK')
            setWon(true)
            setName('')
            setProgress(progress+1)
            setModalText(`¡Has acertado! Era ${item.name}`)
            setModalImg(item.image)
            setModalState(true)
        }else{
            window.localStorage.setItem(`${sessionID}_${item.name}_ok`, 'KO')
            setModalImg(null)
            setModalState(true)
            setModalText('Va a ser que no, pero... buen intento')
        }
    }

    const nextSong = () => {
        setWon(false)
        navigate(`/history/${parseInt(id)+1}`)
    }

    return(
        <Card>
            {modalState ? <Modal text={modalText} img={modalImg} setModalState={setModalState} won={won} nextSong={nextSong} /> : null}
            <CardInfo
                id={id}
                progress={progress}
            />
            <img src={`../data/${!won ? 'KO.jpg' : item.image}`} />
            <Audioplayer>
                <ReactAudioPlayer
                    src={`../data/${item.song}`}
                    controls
                    />
            </Audioplayer>
            <Form onSubmit={handleSubmit}>
                <Input
                    value={name}
                    placeholder={!won ? "Nombre de la serie" : item.name}
                    disabled={!won ? false : true}
                    onChange={handleChange}
                />
                <Button type="submit" disabled={!won ? false : true}>Enviar</Button>
            </Form>
        </Card>
    )
}

export default SerialCard