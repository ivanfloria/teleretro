
import { Route, Routes } from "react-router-dom"

import History from "./HistoryMode/History"
import EnterName from "./Common/Name/EnterName";


const InfoRoutes = () => {
    return(
        <Routes>
            <Route path="/" element={<EnterName />} />
            <Route path="/history/:id" element={<History />} />
            <Route path="*" element={<EnterName />} />
        </Routes>
    )
}

export default InfoRoutes