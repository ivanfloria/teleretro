
// import InstructionsButton from "./InstructionsButton";

import { Container, Logo } from "../../styledComponents/StyledHeader"

const Header = () => {
    return(
        <Container>
            <Logo src="/logo.png" />
            {/* <InstructionsButton text='Ver instrucciones' /> */}
        </Container>
    )
}

export default Header