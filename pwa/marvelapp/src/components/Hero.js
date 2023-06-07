import React, { useState, useEffect } from 'react';
import md5 from 'blueimp-md5';

const Hero = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    let ts = Date.now();
    let publickey = "491f7e7c7a5185714c7561dec8fadca4";
    let privatekey = "23648d5fe61d61416fdc57b9a1903d3507b28a7f";
    let hash = md5(ts + privatekey + publickey);

    useEffect(() => {
        if (!navigator.onLine) {
            if (localStorage.getItem("name") === null) {
                setName("Loading...")
            } else {
                setName(localStorage.getItem("name"));
                setDescription(localStorage.getItem("description"));
            }
        } else {
            const URL = `https://gateway.marvel.com:443/v1/public/characters?apikey=${publickey}&hash=${hash}&ts=${ts}&limit=5`;
            fetch(URL).then(res => res.json()).then(res => {
                const item = res.data.results[1];
                setName(item.name);
                localStorage.setItem("name", item.name);
                setDescription(item.description);
                localStorage.setItem("description", item.description);
            })
        }
    }, [hash, publickey, ts]);

    return (
        <div>
            <h1>A random hero</h1>
            <p>{name}</p>
            <p>{description}</p>
        </div>
    );
};

export default Hero;
