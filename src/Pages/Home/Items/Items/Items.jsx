import React from 'react';
import useFetch from '../../../../hooks/useFetch/useFetch';

const Items = () => {
    const {data} = useFetch('https://jsonplaceholder.typicode.com/users');
    console.log(data);

    
    return (
        <div>
            Items
        </div>
    );
};

export default Items;