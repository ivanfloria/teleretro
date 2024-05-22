
import styled from "styled-components";

const Button = styled.button`
    background-color: red;
    color: #fff;
    border: none;
    padding: 10px 20px;
    font-size: 1rem;
    cursor: pointer;
    transition: all ease-in-out 0.2s;
    &:hover{
        background-color: #fff;
        color: red;
    }
`

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