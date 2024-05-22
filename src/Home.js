
import { Routes, Route } from "react-router-dom"

import Header from "./Common/Header/Header";
import EnterName from "./Common/Name/EnterName";
import History from './HistoryMode/History';

import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #000;
    background-image: url('welcome.jpg');
    background-size: cover;
    position: relative;
    &:before{
        content:'';
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba(0,0,0,0.75);
    }
`

const Home = () => {

    return(
        <Container>
            <Header />
            <Routes>
                <Route path="/" element={ <EnterName /> } />
                <Route path="history" element={ <History /> } />
            </Routes>
        </Container>
    )
}

export default Home;