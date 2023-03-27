import axios from "axios";
import React, { useState } from "react";
import "./Home.css";

export default function Home() {
    const [longURL, setLongURL] = useState("");
    const [shortURL, setShortURL] = useState("");

    const getShortURL = async (event: { preventDefault: () => void }) => {
        event.preventDefault();
        try {
            const res = await axios.post("https://url-shortener-production-065f.up.railway.app:5000/api/shorten", {
                longURL,
            });
            setShortURL(res.data.shortURL);
        } catch (error) {
            setShortURL('');
            alert("Invalid URL");
            console.log(error);
        }
    };

    return (
        <>
            <h1>URL Shortener</h1>
            <form>
                <input
                    type="text"
                    placeholder="Enter URL"
                    required
                    onChange={(event) => {
                        setLongURL(event.target.value);
                    }}
                    style={{
                        width: "200px",
                        marginRight: "5px",
                    }}
                ></input>
                <button type="submit" onClick={getShortURL}>
                    Shorten URL
                </button>
            </form>
            {shortURL && (
                <div className="shortUrlContainer">
                    Short URL :{" "}
                    <a
                        href={`/${shortURL}`}
                        target="_blank"
                    >
                        {shortURL}
                    </a>
                </div>
            )}
        </>
    );
}
