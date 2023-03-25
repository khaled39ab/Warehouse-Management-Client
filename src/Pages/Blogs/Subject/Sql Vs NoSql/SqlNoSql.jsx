import React from 'react';
import SqlVsNoSql from '../../../../asset/images/blogs/sql-vs-nosql.webp';

const SqlNoSql = () => {
    return (
        <div className='m-10 p-10' data-theme="cupcake">
            <h1 className='text-4xl font-bold text-center text-teal-600 mb-5'>Difference Between Sql and No Sql</h1>

            <div className='block w-1/2 mx-auto my-5'>
                <img src={SqlVsNoSql} alt="JsNode" />
            </div>


            <div className="relative overflow-x-auto">
                <table className="w-full  text-left text-gray-500">
                    <thead className="text-lg text-gray-700 uppercase bg-gray-200">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Sql
                            </th>
                            <th scope="col" className="px-6 py-3">
                                No Sql
                            </th>
                        </tr>
                    </thead>
                    
                </table>
            </div>

        </div>
    );
};

export default SqlNoSql;