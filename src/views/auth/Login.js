import React, {useState, useContext} from 'react';
import { LockClosedIcon, UserIcon, EyeIcon, EyeOffIcon } from '@heroicons/react/solid';

// import AuthContext
import {AuthContext} from '../../context/AuthContext';
import Nav from '../../layouts/Nav.js';
import Footer from '../../layouts/Footer.js';

export default function Beranda() {
    const { signIn } = useContext(AuthContext);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [ eyeOn, setEyeOn ] = useState(false);

    return (
    <div>
        <Nav/>
        <div className="bg-blue-400 min-h-screen bg-no-repeat w-full bg-contain bg-right-bottom flex justify-center items-center bg-blend-multiply relative" style={{
            backgroundImage: `url(${process.env.PUBLIC_URL + '/images/pattern3.png'})`,
        }}>
            <div className="bg-white w-11/12 sm:w-10/12 md:w-6/12 shadow-lg p-6 rounded my-4 mt-20">
                <img className="lg:block w-14 h-auto mx-auto mb-2" src={process.env.PUBLIC_URL + '/images/logo-ump.png'} alt="Workflow" />
                <h1 className="text-center text-lg font-medium mb-1 text-ump-1">Login MBKM</h1>
                <div className="border-b-2 border-ump-1 w-14 mx-auto mb-4"></div>
                <div className="flex border-b border-gray-500 py-1 mb-4 items-center">
                    <UserIcon className="block h-6 w-6 mr-2 text-gray-600" aria-hidden="true" />
                    <input type="text" className="flex-1 focus:outline-none text-sm" placeholder="Email" value={username} onInput={e => setUsername(e.target.value)} />
                </div>
                <div className="flex border-b border-gray-500 py-1 mb-6 items-center">
                    <LockClosedIcon className="block h-6 w-6 mr-2 text-gray-600" aria-hidden="true" />
                    <input type={(eyeOn) ? "text" : "password"} placeholder="Password" className="flex-1 focus:outline-none text-sm" value={password} onInput={e => setPassword(e.target.value)} />
                    <button onClick={() => setEyeOn(!eyeOn)}>
                        {
                            (eyeOn) ? (
                                <EyeIcon className="block h-4 w-4 mr-2 text-blue-600" aria-hidden="true" />
                            ) : (
                                <EyeOffIcon className="block h-4 w-4 mr-2 text-gray-600" aria-hidden="true" />
                            )
                        }
                    </button>
                </div>
                <button className="bg-blue-600 text-base font-medium mx-auto text-center text-white rounded-md block w-5/12 h-8" onClick={() => signIn({ username, password })}>Login</button>
                <div className="border-b border-gray-300 w-full mx-auto my-4"></div>
                <p className="text-sm text-gray-700 text-center">Belum Punya Akun? <a href="/daftar" className="text-blue-700 font-medium">Daftar</a></p>
            </div>
            
        </div>
        <Footer/>
    </div>
    )
}


