
import {Container, ModalCont, ModalImg} from "../styledComponents/StyledModal"

const Modal = ({text,img,setModalState,won,nextSong}) => {
    return(
        <Container>
            <ModalCont state={won}>
                <div>{text}</div>
                {img ? <div><ModalImg src={`../data/${img}`} /></div> : null}
                <div><button onClick={() => {
                    if(won === true){
                        nextSong()
                    }
                    setModalState(false)    
                }}
                >Ok!</button></div>
            </ModalCont>
        </Container>
    )
}

export default Modal