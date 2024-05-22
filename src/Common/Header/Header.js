
import InstructionsButton from "./InstructionsButton";

import styled from "styled-components";

const Container = styled.header`
    position: relative;
    margin: 0 auto;
    max-width: 1200px;
    width: auto;
    padding: 20px 0;
    display: flex;
    justify-content: space-between;
`
const Logo = styled.img`
    width: 200px;
    height: auto;
`

const Header = () => {
    return(
        <Container>
            <Logo src="logo.png" />
            <InstructionsButton text='Ver instrucciones' />
        </Container>
    )
}

export default Header