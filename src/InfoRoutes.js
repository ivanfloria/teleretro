
import { Route, Routes, Navigate } from "react-router-dom"
import { useDataContext } from "./Context/DataProvider";

import History from "./HistoryMode/History"
import EnterName from "./Common/Name/EnterName";


const InfoRoutes = () => {
    const {sessionID} = useDataContext()

    const ProtectedRoute = ({ children }) => {
        if (sessionID === 0) {
            return <Navigate to="/" replace />
        }
        return children
    }

    return(
        <Routes>
            <Route path="/" element={<EnterName />} />
            <Route
                path="/history/:id"
                element={
                    <ProtectedRoute>
                        <History />
                    </ProtectedRoute>
                }
            />
            <Route path="*" element={<EnterName />} />
        </Routes>
    )
}

export default InfoRoutes