import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

import { Login, Question, Score, Error } from './pages'

const App = () => {
    return (
        <Router>
            <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/question" element={<Question />} />
            <Route path="/Score" element={<Score />} />
            <Route path="/*" element={<Error />} />
            </Routes>
        </Router>
    )
}

export default App