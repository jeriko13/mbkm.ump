import React from 'react';

import Nav from '../layouts/Nav.js';
import Footer from '../layouts/Footer.js';


const daftarProgram = [
  {
    id : 1,
    judul : 'Pertukaran Pelajar',
    slug : 'pertukaran-pelajar',
    status : 'Ditutup'
  },
  {
    id : 2,
    judul : 'Magang',
    slug: 'magang',
    status : 'Dibuka'
  },
  {
    id : 3,
    judul : 'Asistensi Mengajar di Satuan Pendidikan',
    slug: 'asistensi-mengajar',
    status : 'Ditutup'
  },
  {
    id : 4,
    judul : 'Penelitian/Riset',
    slug: 'penelitian-riset',
    status : 'Ditutup'
  },
  {
    id : 5,
    judul : 'Kegiatan Wirausaha',
    slug: 'kegiatan-wirausaha',
    status : 'Ditutup'
  },
  {
    id : 6,
    judul : 'Praktik Kerja',
    slug: 'praktik-kerja',
    status : 'Ditutup'
  },
  {
    id : 7,
    judul : 'Studi/Proyek Independen',
    slug: 'studi-independen',
    status : 'Ditutup'
  },
  {
    id : 8,
    judul : 'Membangun Desa/KKNT',
    slug: 'membangun-desa-kknt',
    status : 'Ditutup'
  }

]

export default function Programs() {
return (
  <div className="bg-white">
    <Nav current="Program"/>
    <div className="my-20">
        <div className="w-full mx-auto mb-10">
            <h1 className="text-center mb-2 font-medium text-2xl text-ump-1">Daftar Program MBKM</h1>
            <div className="border-b-2 border-ump-1 w-52 mx-auto mb-4"></div>
            <div className="flex justify-evenly mt-4 py-2 items-stretch flex-wrap">
            {
            daftarProgram.map(((program, key) => 
                <a key={key} href={'/program/'+ program.slug } className="bg-blue-50 w-11/12 md:w-5/12 lg:w-1/5 rounded-md p-4 mx-1 shadow-lg relative pb-11 mb-4">
                    <h1 className="text-center font-medium text-base">{program.judul}</h1>
                    <div className="absolute bottom-3 right-0 left-0">
                        <span className="bg-blue-0 text-gray-600 block h-6 leading-6 mx-auto text-sm rounded-sm text-center">Pendaftaran {program.status}</span>
                    </div>
                </a>
            ))
            }
            </div>
        </div>
    </div>
    <Footer/>
  </div>

)
}


