import React from 'react';
import useFetch from '../../../../hooks/useFetch/useFetch';

const Items = () => {
    const {dataList} = useFetch('https://jsonplaceholder.typicode.com/users', 6);
    console.log(dataList);
    
    return (
        <div>
            Items
        </div>
    );
};

export default Items;