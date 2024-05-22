
import { useEffect, useState } from "react";
import useGetSession from "../../Hooks/useGetSession";
import { useDataContext } from "../../Context/DataProvider";
import { useNavigate } from "react-router-dom";

import NameField from "./NameField";

import styled from "styled-components";

const Container = styled.div`
    position: relative;
    width: 1200px;
    height: auto;
    padding-top: 200px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
`

const EnterName = () => {
    const [name,setName] = useState()
    const {session,createSession} = useGetSession()
    const {dispatch} = useDataContext();
    const navigate = useNavigate();

    const handleClick = () => {
        if(name){
            createSession(name)
            dispatch({
                type: 'ADD_NAME',
                value: name
            })
        }
    }

    useEffect(() => {
        dispatch({
            type: 'ADD_SESSION',
            value: session
        })
        if(session != "" || session != 0){
            navigate('/history/1')
        }
    },[session])

    return(
        <Container>
            <NameField setName={setName} handleClick={handleClick} />
        </Container>
    )
}

export default EnterName