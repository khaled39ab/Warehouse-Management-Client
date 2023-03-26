import React from 'react';
import { Link } from 'react-router-dom';
import JsVsNode from '../../asset/images/blogs/javascript-vs-nodejs.webp';
import SqlVsNoSql from '../../asset/images/blogs/sql-vs-nosql.webp';
import aboutJwt from '../../asset/images/blogs/jwt.png';

const Blogs = () => {
    return (
        <div className=' m-10 p-10' data-theme="cupcake">
            <h1 className='text-4xl font-bold mb-5 text-center'>Personal Blogs</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2' >

                {/* Difference between JS and Node js */}
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={JsVsNode} alt="JsNode" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Difference Between Javascript and Node js</h2>
                        <p className='text-justify'><span className='text-red-600'>Interesting matter is: </span> Javascript can only be run in the browsers. But we can run Javascript outside the browser with the help of NodeJS. How?</p>
                        <div className="card-actions justify-end">
                            <Link to={'/js-vs-node'}>
                                <button className="btn btn-link">Read More...</button>
                            </Link>
                        </div>
                    </div>
                </div>


                {/* Difference between Sql and No Sql */}
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={SqlVsNoSql} alt="Sql NoSql" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Difference Between Sql and No Sql</h2>
                        <p className='text-justify'><span className='text-red-600'>Database: </span>SQL and NoSQL differ in whether they are relational (SQL) or non-relational (NoSQL). One of them is Vertically Scalable. And one of them is Horizontally scalable.</p>
                        <div className="card-actions justify-end">
                            <Link to={'/sql-vs-nosql'}>
                                <button className="btn btn-link">Read More...</button>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* about jwt */}
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={aboutJwt} alt="jwt" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">What is JWT. How it works?</h2>
                        <p className='text-justify'><span className='text-red-600'>JWT: </span> or JSON Web Token. <br />
                            JSON Web Token (JWT) is an open standard for securely transmitting information between parties as JSON object. It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP).
                        </p>
                        <div className="card-actions justify-end">
                            <Link to={'/about-jwt'}>
                                <button className="btn btn-link">Read More...</button>
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Blogs;