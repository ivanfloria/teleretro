
import {Container, InputContainer, Input, Go, H1, H2, H3} from "../../styledComponents/StyledNameField"

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