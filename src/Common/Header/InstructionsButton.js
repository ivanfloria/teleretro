
import {Button} from "../../styledComponents/StyledInstructionsButton"

const InstructionsButton = ({text}) => {

    const HandleClick = () => {
        console.log('Click!');
    }

    return(
        <Button onClick={HandleClick}>
            {text}
        </Button>
    )
}

export default InstructionsButton