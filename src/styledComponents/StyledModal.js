
import styled from "styled-components"

export const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    background-color: rgba(0,0,0,0.8);
    z-index: 9;
`
export const ModalCont = styled.div`
    width: calc(100% - 20px);
    max-width: 300px;
    height: auto;
    background-color: #fff;
    border: solid 5px;
    border-color: ${props => (props.state === false ? `rgba(241, 29, 29, 1)` : `rgba(81, 209, 98, 1)`)};
    padding: 0 20px;
    box-sizing: border-box;
    text-align: center;
    &>div{
        margin: 20px 0;
        &>button{
            border: none;
            background-color: ${props => (props.state === false ? `rgba(241, 29, 29, 1)` : `rgba(81, 209, 98, 1)`)};
            color: #fff;
            border-radius: 5px;
            padding: 10px 15px;
            cursor: pointer;
        }
    }
`
export const ModalImg = styled.img`
    width: 100%;
    height: auto;
`