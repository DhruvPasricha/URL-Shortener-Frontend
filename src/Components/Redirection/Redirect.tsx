import axios from "axios";
import React, { useEffect, useState } from "react";
import { redirect } from "react-router-dom";

export const Redirect = () => {
    const [longURL, setLongURL] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const getOriginalURL = async () => {
        try {
            setIsLoading(true);
            const shortURL = window.location.pathname;
            const res = await axios.get(
                `https://dhruv-url-shortener.up.railway.app/getURL${shortURL}`
            );
            setLongURL(res.data.longURL);
        } catch {
            setIsLoading(false);
        }
    };
    useEffect(() => {
        if (longURL) {
            window.location.href = longURL;
        } else {
            getOriginalURL();
        }
    }, [longURL]);
    if (longURL) {
        redirect(longURL);
    }
    if (isLoading) {
        return <>Loading......</>;
    }
    return <>No URL Matched</>;
};
