import React from 'react'

export default function Footer() {
    return (
    <div className="w-full mx-auto bg-white shadow-md-top py-6 flex flex-col justify-center items-center pb-0">
        <div className="w-11/12 sm:w-10/12 mx-auto flex justify-around flex-wrap flex-col sm:flex-row">
            <div className="flex-6 flex md:items-center items-start flex-col md:flex-row w-full md:w-auto mb-4">
                <img className="block h-28 w-auto md:mx-auto md:mr-2" src={process.env.PUBLIC_URL + '/images/logo-ump.png'} alt="Workflow" />
                <div className="text-base md:mt-4">
                    <h1 className="font-medium text-xl text-ump-1 mb-2">Universitas Muhammadiyah Purwokerto</h1>
                    <p className="mb-1">Jl. KH. Ahmad Dahlan, PO BOX 202 Purwokerto 53182</p>
                    <p>Kembaran Banyumas</p>
                    <p className="mb-1">Telp : (0281) 636751, 630463, 634424</p>
                    <p>Fax : (0281) 637239</p>
                </div>
            </div>
           {/*  <div className="flex-3 mb-4">
                <h1 className="font-medium mb-2">Menu</h1>
                <div className="flex flex-col space-y-1">
                    <a href="i">Beranda</a>
                    <a href="i">Informasi</a>
                    <a href="i">Berita</a>
                    <a href="i">Tentang Kami</a>
                </div>
            </div> */}
         {/*    <div className="flex-3 mb-4">
                <h1 className="font-medium mb-2">Media Sosial</h1>
                <a href="i" className="flex items-center mb-1">
                    <img className="w-5 h-auto mr-1" src={process.env.PUBLIC_URL + '/images/icons/facebook.png'} alt="Workflow" />
                    Facebook
                </a>
                <a href="i" className="flex items-center mb-1">
                    <img className="w-5 h-auto mr-1" src={process.env.PUBLIC_URL + '/images/icons/instagram.png'} alt="Workflow" />
                    Instagram
                </a>
                <a href="i" className="flex items-center mb-1">
                    <img className="w-5 h-auto mr-1" src={process.env.PUBLIC_URL + '/images/icons/twitter.png'} alt="Workflow" />
                    Twitter
                </a>
                <a href="i" className="flex items-center mb-1">
                    <img className="w-5 h-auto mr-1" src={process.env.PUBLIC_URL + '/images/icons/youtube.png'} alt="Workflow" />
                    Youtube
                </a>
            </div> */}
        </div>
        <div className="w-full h-10 leading-10 bg-ump-1 text-white text-sm text-center">
            © 2021 Universitas Muhammadiyah Purwokerto.
        </div>
    </div>
    );
};
