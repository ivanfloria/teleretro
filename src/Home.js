
import Header from "./Common/Header/Header";
import InfoRoutes from "./InfoRoutes";

import {Container} from "./styledComponents/StyledHome"

const Home = () => {

    return(
        <Container>
            <Header />
            <InfoRoutes />
        </Container>
    )
}

export default Home;