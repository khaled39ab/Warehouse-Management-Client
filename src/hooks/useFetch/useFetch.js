import { useEffect, useState } from 'react';

const useFetch = (url, limit) => {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setData(data))
    }, [url])

    const dataList = data.slice(0,limit)

    return { dataList };
};

export default useFetch;