import axios from "axios";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Redirect } from "./Components/Redirection/Redirect";
import Home from "./Pages/Home/Home";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/:shortURL" element={<Redirect />} />
            </Routes>
        </BrowserRouter>
    );
}
