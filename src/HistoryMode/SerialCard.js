
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import CardInfo from "./CardInfo";
import Modal from "../Common/Modal";

import { data } from "../assets/data";
import ReactAudioPlayer from "react-audio-player";

import styled from "styled-components"

const Card = styled.div`
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
const Audioplayer = styled.div`
    margin: 10px 0;
    &>.react-audio-player {
        width: 100%;
    }
`
const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    @media only screen and (max-width: 768px) {
        flex-direction: column;
    }
`
const Input = styled.input`
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
const Button = styled.button`
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

const SerialCard = ({id}) => {
    const navigate = useNavigate()
    const item = data[id-1]
    const [name,setName] = useState('')
    const [won,setWon] = useState(null)

    const [progress,setProgress] = useState(1)
    
    const [modalText,setModalText] = useState('')
    const [modalState,setModalState] = useState(null)
    const [modalImg,setModalImg] = useState(null)

    // const InitialProgress = window.localStorage.getItem(`progress`)
    // const [progress,setProgress] = useLocalStorage('progress',InitialProgress)
    const FixText = (value) => {
        const tempText = value.toLowerCase().normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .replace('el ','')
            .replace('la ','')
            .replace('los ','')
            .replace('las ','')
            return tempText
    }

    // let status
    // status = window.localStorage.getItem(`${item.nombre}_ok`)
    // useEffect(() => {
    //     if(status === 'OK'){
    //         setWon(true)
    //     }else{
    //         setWon(false)
    //     }
    // },[id])
    useEffect(() => {
        {progress === null ? setProgress(0) : setProgress(progress)}
    },[])

    const handleChange = (e) => setName(e.target.value)
    const handleSubmit = (e) => {
        e.preventDefault()
        if(FixText(name) === FixText(item.nombre)){
            // window.localStorage.setItem(`${item.nombre}_ok`, 'OK')
            setWon(true)
            setName('')
            // setProgress(progress+1)
            setModalText(`¡Has acertado! Era ${item.nombre}`)
            setModalImg(item.imagen)
            setModalState(true)
        }else{
            // window.localStorage.setItem(`${item.nombre}_ok`, 'KO')
            setModalImg(null)
            setModalState(true)
            setModalText('Va a ser que no, pero... buen intento')
            // dispatch(showModal(true))
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
            <img src='../data/KO.jpg' />
            <Audioplayer>
                <ReactAudioPlayer
                    src={`../data/${item.cancion}`}
                    controls
                    />
            </Audioplayer>
            <Form onSubmit={handleSubmit}>
                <Input
                    value={name}
                    placeholder={!won ? "Nombre de la serie" : item.nombre}
                    disabled={!won ? false : true}
                    onChange={handleChange}
                />
                <Button type="submit" disabled={!won ? false : true}>Enviar</Button>
            </Form>
        </Card>
    )
}

export default SerialCard