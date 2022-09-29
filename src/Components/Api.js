import axios from "axios";
import React, { useState, useEffect } from "react";

const Api = () => {
    const [data, setData] = useState([]);

    const url = 'https://dog.ceo/api/breed/hound/afghan/images/random';
    
    useEffect(() => {
        axios
            .get(url)
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                console.log("Erro ao tentar se comunicar com o servidor", error);
            });
    }, [])

    return(
        <section>
            {data.map((item, index) => (
                <div key={index}>
                    <ul>
                        <h2>{item.message}</h2>
                        <h2>{item.status}</h2>
                    </ul>
                </div>
                ))}
        </section>
    );
}

export default Api;