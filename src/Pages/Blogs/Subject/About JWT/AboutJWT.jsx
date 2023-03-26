import React from 'react';
import jwt from '../../../../asset/images/blogs/jwt.png';
import jwtWork from '../../../../asset/images/blogs/jwt-work.webp'

const AboutJWT = () => {
    return (
        <div className='text-justify text-lg m-10 p-10' data-theme="cupcake">
            <h1 className='text-4xl font-bold text-center text-teal-600 mb-5'>What is JWT? How it's works?</h1>

            <div className='block w-1/2 mx-auto my-5'>
                <img src={jwt} alt="JsNode" />
            </div>
            <div>
                <h2 className='text-3xl font-bold my-5'>What is JWT (JSON Web Token)?</h2>

                <p className=''>
                    JSON web token (JWT), pronounced "jot", is an open standard that defines a compact and self-contained way for securely transmitting information between parties as a JSON object.
                    It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP). So the integrity and authenticity of the token can be verified by other parties involved. <br />  <br />

                    The purpose of using JWT is not to hide data but to ensure the authenticity of the data. JWT is signed and encoded, not encrypted. JWT is a standard, meaning that all JWTs are tokens, but not all tokens are JWTs. <br /> <br />

                    JWT is a token based stateless authentication mechanism. Since it is a client-side based stateless session, server doesn't have to completely rely on a datastore(database) to save session information.
                </p>
            </div>
            <div>

                <h2 className='text-3xl font-bold mt-8'>Structure of JWT</h2>
                <p>
                    A JSON Web Token consists of 3 parts separated by a period.
                    <span className='text-xl font-bold'>
                        * Header
                        * Payload
                        * Signature
                    </span> <br />
                    Therefore, a JWT typically looks like the following. <br />
                    <span className='text-red-600 font-semibold'>xxxxx.yyyyy.zzzzz</span>
                </p>

                <h3 className='text-xl font-bold mt-5'>Header:</h3>
                <p>
                    The header typically consists of two parts: the type of the token, which is JWT, and the signing algorithm being used, such as HMAC SHA256 or RSA. <br />
                    For example:
                    <div className='bg-gray-200 px-5 py-3'>
                        &#123; <br />
                        &nbsp; "alg": "HS256", <br />
                        &nbsp; "typ": "JWT" <br />
                        &#125;
                    </div>
                    Then, this JSON is Base64Url encoded to form the first part of the JWT.
                </p>

                <h3 className='text-xl font-bold mt-5'>Payload:</h3>
                <p>
                    The second part of the token is the payload, which contains the claims. Claims are statements about an entity (typically, the user) and additional data. There are three types of claims: <i>registered</i>, <i>public</i>, and <i>private</i> claims. <br />

                    For example:
                    <div className='bg-gray-200 px-5 py-3'>
                        &#123; <br />
                        &nbsp; "sub": "1234567890", <br />
                        &nbsp; "name": "John Doe", <br />
                        &nbsp; "admin": true <br />
                        &#125;
                    </div>
                    The payload is then Base64Url encoded to form the second part of the JSON Web Token.
                </p>

                <h3 className='text-xl font-bold mt-5'>Signature:</h3>
                <p>
                    To create the signature part you have to take the encoded header, the encoded payload, a secret, the algorithm specified in the header, and sign that. <br /> <br />

                    For example if you want to use the HMAC SHA256 algorithm, the signature will be created in the following way:
                    <div className='bg-gray-200 px-5 py-3'>
                        HMACSHA256( <br />
                        &nbsp; base64UrlEncode(header) + "." + <br />
                        &nbsp; base64UrlEncode(payload), <br />
                        &nbsp; secret)<br />
                    </div>
                    The signature is used to verify the message wasn't changed along the way, and, in the case of tokens signed with a private key, it can also verify that the sender of the JWT is who it says it is.
                </p>
            </div>

            <div>
                <h2 className='text-3xl font-bold mt-8'>How JWT Works?</h2>
                <p>
                    In authentication, A JSON Web Token will be returned in the authentication process after the user successfully logs in with their credentials. Since tokens are credentials, great care must be taken to prevent security issues. Tokens shouldn't generally be keep longer than required.

                    <p className='text-red-600 my-5'> N.B. You also should not store sensitive session data in browser storage due to lack of security.</p>

                    Basically the identity provider(IdP) generates a JWT certifying user identity and Resource server decodes and verifies the authenticity of the token using secret salt / public key.
                </p>

                <img className='mx-auto my-5' src={jwtWork} alt="jwt" />

                <ol className='my-5'>
                    <li>1- User sign-in using username and password or google/facebook.</li>
                    <li>2- Authentication server verifies the credentials and issues a jwt signed using either a secret salt or a private key.</li>
                    <li>3- User's Client uses the JWT to access protected resources by passing the JWT in HTTP Authorization header.</li>
                    <li>4- Resource server then verifies the authenticity of the token using the secret salt/ public key.</li>
                </ol>
            </div>
        </div>
    );
};

export default AboutJWT;