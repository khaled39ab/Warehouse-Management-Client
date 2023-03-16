import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UpdateItem = () => {
    const item = useLoaderData();

    console.log(item);
    return (
        <div>
            update item
        </div>
    );
};

export default UpdateItem;