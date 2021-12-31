import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Root from 'Root';
import App from "components/App";

ReactDOM.render(
    <Root>
        <BrowserRouter>
            <Routes>
                <Route exact path="*" element={<App />} />
            </Routes>
        </BrowserRouter>
    </Root>,
    document.querySelector('#root')
)