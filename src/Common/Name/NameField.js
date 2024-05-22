

import styled from "styled-components";

const Container = styled.div`
    width: 1200px;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const InputContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    box-sizing: border-box;
    -webkit-box-pack: center;
    justify-content: center;
`
const Input = styled.input`
    width: 400px;
    height: auto;
    padding: 1rem 1.5rem;
    box-sizing: border-box;
    border: none;
    outline: none;
    font-size: 1.3rem;
`
const Go = styled.button`
    background-color: rgb(255, 0, 0);
    width: 100px;
    color: rgb(255, 255, 255);
    padding: 1rem 1.5rem;
    border: none;
    cursor: pointer;
    font-size: 1.3rem;
    font-weight: bold;
    margin: 0px;
`
const H1 = styled.h1`
    font-size: 3.5rem;
    color: #fff;
    margin: 0px;
`
const H2 = styled.h2`
    font-size: 1.75rem;
    color: #fff;
    font-weight: 400;
    text-align: center;
    margin: 0.5rem 0px;
`
const H3 = styled.h3`
    font-size: 1.3rem;
    text-align: center;
    color: #fff;
    font-weight: 400;
    margin-top: 0.75rem;
`

const NameField = ({setName,handleClick}) => {
    const handleChange = (e) => {
        setName(e.target.value)
    }
    return(
        <Container>
            <H1>Tus series y dibujos de los '80 y '90</H1>
            <H2><b>Demuestra</b> lo que recuerdas. Da rienda suelta a la <b>nostalgia</b></H2>
            <H3>¿Tienes nombre? Es lo único que necesitas para jugar:</H3>
            <InputContainer>
                <Input type="text" onChange={handleChange} />
                <Go onClick={handleClick}>Go!</Go>
            </InputContainer>
        </Container>
    )
}

export default NameField