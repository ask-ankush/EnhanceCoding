import { Routes, Route } from 'react-router-dom'
import Home from '../pages/home'
import AnkushVerma from '../pages/team/ankushVerma'


export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ui-dev-ankush" element={<AnkushVerma />} />
        </Routes>
    )
}