import axios from "axios";
import React, { useEffect, useState } from "react";

export const Redirect = () => {
    const [longURL, setLongURL] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const redirect = async () => {
        try {
            setIsLoading(true);
            const shortURL = window.location.pathname;
            const res = await axios.get(`https://dhruv-url-shortener.up.railway.app/getURL/${shortURL}`);
            setLongURL(res.data.longURL);
        } catch {
            setIsLoading(false);
        }
    };
    useEffect(() => {
        if (longURL) {
            window.location.href = longURL;
        } else {
            redirect();
        }
    }, [longURL]);
    if (isLoading) {
        return <>Loading......</>;
    }
    return <>No URL Matched</>;
};
