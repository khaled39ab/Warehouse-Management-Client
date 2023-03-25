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
                <table className="w-full text-gray-500 text-justify">
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
                    <tbody>
                        <tr className="bg-white border-b">
                            <td className="px-6 py-4 font-medium text-gray-900">
                                SQL, which stands for “Structured Query Language,” is the programming language that’s been widely used in managing data in relational database management systems (RDBMS) since the 1970s.
                            </td>
                            <td className="px-6 py-4 font-medium text-gray-900">
                                NoSQL is a non-relational database, meaning it allows different structures than a SQL database (not rows and columns) and more flexibility to use a format that best fits the data. The term “NoSQL” was not coined until the early 2000s.
                            </td>
                        </tr>
                        <tr className="bg-white border-b">
                            <td className="px-6 py-4 font-medium text-gray-900">
                                SQL databases are primarily called RDBMS or Relational Databases.
                            </td>
                            <td className="px-6 py-4 font-medium text-gray-900">
                                NoSQL databases are primarily called as Non-relational or distributed database.
                            </td>
                        </tr>
                        <tr className="bg-white border-b">
                            <td className="px-6 py-4 font-medium text-gray-900">
                                SQL databases are table based databases.
                            </td>
                            <td className="px-6 py-4 font-medium text-gray-900">
                                NoSQL databases can be document based, key-value pairs, graph databases
                            </td>
                        </tr>
                        <tr className="bg-white border-b">
                            <td className="px-6 py-4 font-medium text-gray-900">
                                These databases have fixed or static or predefined schema.
                            </td>
                            <td className="px-6 py-4 font-medium text-gray-900">
                                They have dynamic schema.
                            </td>
                        </tr>
                        <tr className="bg-white border-b">
                            <td className="px-6 py-4 font-medium text-gray-900">
                                These databases are not suited for hierarchical data storage.
                            </td>
                            <td className="px-6 py-4 font-medium text-gray-900">
                                These databases are best suited for hierarchical data storage.
                            </td>
                        </tr>
                        <tr className="bg-white border-b">
                            <td className="px-6 py-4 font-medium text-gray-900">
                                These databases are best suited for complex queries.
                            </td>
                            <td className="px-6 py-4 font-medium text-gray-900">
                                These databases are not so good for complex queries.
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default SqlNoSql;