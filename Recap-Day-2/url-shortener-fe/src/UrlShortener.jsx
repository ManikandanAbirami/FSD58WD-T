import React, { useState } from 'react'
import axios from 'axios';

function UrlShortener() {
    const [originalUrl, setOriginalUrl] = useState('');
    const [shortUrl, setShortUrl] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await axios.post("http://localhost:3001/api/url/shorten", { originalUrl });
        setShortUrl(`http://localhost:3001/api/url/${res.data.shortUrl}`);
    }
    return (
        <div>
            <h1>UrlShortener</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Enter URL'
                    value={originalUrl}
                    onChange={(e) => setOriginalUrl(e.target.value)} />
                <button type='submit'>Shorten</button>
            </form>
            {shortUrl && (
                <div>
                    <p>Short URL: <a href={shortUrl}>{shortUrl}</a></p>
                </div>
            )}
        </div>
    )
}

export default UrlShortener