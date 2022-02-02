import React from 'react'

import {Routes, Route} from 'react-router-dom'

import Disafios from './pages/Disafios'
import Fundamentos from './pages/Fundamentos'

export default function MainRoutes() {

    return (
        <Routes>
            <Route path="/" element={<Fundamentos/>}/>
            <Route path="/disafios" element={<Disafios/>}/>
        </Routes>
    )
}

