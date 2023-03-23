import { useEffect, useState } from 'react';

const useFetch = (url) => {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(url,{
            headers: {
                authorization: `Bearer ${localStorage.getItem('warehouse-token')}`
            }
        })
            .then(res => res.json())
            .then(data => setData(data))
    }, [url])


    return { data };
};

export default useFetch;