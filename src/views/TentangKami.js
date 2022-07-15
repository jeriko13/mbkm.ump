import React from 'react';
import { useParams } from "react-router-dom";

import Nav from '../layouts/Nav.js';
import Footer from '../layouts/Footer.js';

import ContentTentangKami from './content/ContentTentangKami';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function TentangKami() {
    let { content } = useParams();
    if (content === undefined) content = 'sambutan-rektor';
    
    const menu = [
        { name: 'Sambutan Rektor', current: (content === 'sambutan-rektor'), url: '/tentang-kami/sambutan-rektor' },
        { name: 'Kata Pengantar', current: (content === 'kata-pengantar'), url: '/tentang-kami/kata-pengantar' },
        { name: 'Landasan Hukum', current: (content === 'landasan-hukum'), url: '/tentang-kami/landasan-hukum' },
        { name: 'Latar Belakang', current: (content === 'latar-belakang'), url: '/tentang-kami/latar-belakang' },
        { name: 'Tujuan', current: (content === 'tujuan'), url: '/tentang-kami/tujuan' },
      ]

    return (
        <div className="bg-white">
            <Nav current="Tentang Kami"/>
            <div className="my-20">
                <div>
                    <h1 className="text-center mb-2 font-medium text-2xl text-ump-1">TENTANG KAMI</h1>
                    <div className="border-b-2 border-ump-1 w-28 mx-auto mb-4"></div>
                </div>
                <div className="flex w-full px-1 mx-auto mb-10 py-6 sm:w-11/12 md:w-10/12 my-4 justify-center items-start">
                    <div className="w-72 flex flex-col flex-shrink-0 mr-4">
                        {menu.map((item) => (
                            <a href={item.url} className={classNames( item.current ? 'text-white bg-blue-500'
                            : 'bg-white text-blue-500' , "border-blue-500 border mb-1 rounded-md h-9 leading-9 text-center")} >{item.name}</a>
                        ))}
                    </div>
                    <div className="flex-1 bg-white shadow-lg border border-blue-500 mb-1 rounded-md">
                        <ContentTentangKami active={content}/>
                    </div>
                </div>
            </div>

            <Footer/>
        </div>

    )
}


