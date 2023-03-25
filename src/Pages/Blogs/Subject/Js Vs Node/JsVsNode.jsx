import React from 'react';
import JsVsNodeImg from '../../../../asset/images/blogs/javascript-vs-nodejs.webp';

const JsVsNode = () => {
    return (
        <div className='m-10 p-10' data-theme="cupcake">
            <h1 className='text-4xl font-bold text-center text-blue-700 mb-5'>Difference Between Javascript and Node js</h1>

            <div className='block w-1/2 mx-auto my-5'>
                <img src={JsVsNodeImg} alt="JsNode" />
            </div>


            <div className="relative overflow-x-auto">
                <table className="w-full text-justify text-gray-500">
                    <thead className="text-lg text-gray-700 uppercase bg-gray-200">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Javascript
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Node js
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white border-b">
                            <td className="px-6 py-4 font-medium text-gray-900">
                                Javascript is a high-level programming language that used  for writing scripts on the website.
                            </td>
                            <td className="px-6 py-4 font-medium text-gray-900">
                                NodeJS is a Javascript runtime environment. NodeJS is a cross-platform and open source.
                            </td>
                        </tr>
                        <tr className="bg-white border-b">
                            <td className="px-6 py-4 font-medium text-gray-900">
                                JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed.
                            </td>
                            <td className="px-6 py-4 font-medium text-gray-900">
                                Node.js, on the other hand, is an interpreter or execution environment for the JavaScript programming language.
                            </td>
                        </tr>
                        <tr className="bg-white border-b">
                            <td className="px-6 py-4 font-medium text-gray-900">
                                Javascript can only be run in the browsers.
                            </td>
                            <td className="px-6 py-4 font-medium text-gray-900">
                                We can run Javascript outside the browser with the help of NodeJS.
                            </td>
                        </tr>
                        <tr className="bg-white border-b">
                            <td className="px-6 py-4 font-medium text-gray-900">
                                It is basically used on the client-side.
                            </td>
                            <td className="px-6 py-4 font-medium text-gray-900">
                                It is mostly used on the server-side.
                            </td>
                        </tr>
                        <tr className="bg-white border-b">
                            <td className="px-6 py-4 font-medium text-gray-900">
                                It is the upgraded version of ECMA script that uses Chrome’s V8 engine written in C++.
                            </td>
                            <td className="px-6 py-4 font-medium text-gray-900">
                                Nodejs is written in C, C++ and Javascript.
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default JsVsNode;