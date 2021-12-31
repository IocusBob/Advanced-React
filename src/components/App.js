import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CommentBox from 'components/CommentBox'
import CommentList from 'components/CommentList'

const App = () => {
    return (
        <div>
            <Routes>
                <Route exact path="/post" element={<CommentBox />} />
            <   Route exact path="/" element={<CommentList />} />
            </Routes>
        </div>
    )
}

export default App
