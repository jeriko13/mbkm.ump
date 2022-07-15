import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom'
import Axios from 'axios'
import qs from 'qs'

import Nav from '../layouts/Nav.js';
import Footer from '../layouts/Footer.js';

import { API_URL } from '../config/config';

const daftarInformasi = [
    {
      kegiatan_id : 1,
      judul : 'Pertukaran Pelajar',
      slug : 'pertukaran-pelajar',
      deskripsi: 'deskripsi',
      status : 'Dibuka'
    },
    {
      kegiatan_id : 2,
      judul : 'Magang',
      slug: 'magang',
      deskripsi: `Magang kerja adalah proses untuk menerapkan keilmuan atau kompetensi yang didapat selama menjalani masa pendidikan, di dunia kerja secara langsung. Pemagang jadi bisa memahami sistem kerja yang profesional di industri sebenarnya. 
      Pengertian magang menurut Undang-Undang menyebutkan bahwa: magang merupakan bagian dari salah satu pelatihan kerja yang terselenggara di sebuah perusahaan.
      Tujuan magang yang utama adalah mempersiapkan para pelajar/mahasiswa untuk masuk dunia kerja dan bisa memberi keterampilan yang dibutuhkan industri. `,
      status : 'Dibuka'
    },
    {
      kegiatan_id : 3,
      judul : 'Asistensi Mengajar di Satuan Pendidikan',
      slug: 'asistensi-mengajar',
      deskripsi: 'deskripsi',
      status : 'Dibuka'
    },
    {
      kegiatan_id : 4,
      judul : 'Penelitian/Riset',
      slug: 'penelitian-riset',
      deskripsi: 'deskripsi',
      status : 'Dibuka'
    },
    {
      kegiatan_id : 5,
      judul : 'Kegiatan Wirausaha',
      slug: 'kegiatan-wirausaha',
      deskripsi: 'deskripsi',
      status : 'Dibuka'
    },
    {
      kegiatan_id : 6,
      judul : 'Praktik Kerja',
      slug: 'praktik-kerja',
      deskripsi: 'deskripsi',
      status : 'Dibuka'
    },
    {
      kegiatan_id : 7,
      judul : 'Studi/Proyek Independen',
      slug: 'studi-independen',
      deskripsi: 'deskripsi',
      status : 'Dibuka'
    },
    {
      kegiatan_id : 8,
      judul : 'Membangun Desa/KKNT',
      slug: 'membangun-desa-kknt',
      deskripsi: 'deskripsi',
      status : 'Dibuka'
    }
  
]

export default function DaftarProgram() {
    let { slug } = useParams();
    let userIdLokal = localStorage.getItem('userId');
    const [lokasi, setLokasi] = useState(null);
    const [alamat, setAlamat] = useState(null);
    const [motivasi, setMotivasi] = useState(null);
    const [namaDosenPa, setNamaDosenPa] = useState(null);
    const [nikDosenPa, setNikDosenPa] = useState(null);
    const [dataProgram, setDataProgram] = useState(null);

    useEffect(() => {
        const getDetailProgram = () => {
            const filterProgram = daftarInformasi.filter(res => res.slug === slug)[0];
            setDataProgram(filterProgram);
        }
        getDetailProgram();
    })

    const handleDaftarProgram = () => {
        console.log('ok');
        Axios.post(`${API_URL}/mbkm-api-new/api/add/t_kegiatan`, qs.stringify({
            user_id: userIdLokal,
            jenis_kegiatan_id: dataProgram.kegiatan_id,
            nama_kegiatan: dataProgram.judul,
            lokasi,
            alamat,
            motivasi,
            nama_pa: namaDosenPa,
            nik_pa: nikDosenPa,
          }), {
            headers: { 
              "Content-Type": "application/x-www-form-urlencoded"
            }
        })
        .then(res => {
            window.location.replace("/mahasiswa/kegiatanku");
        })
        .catch(function (error) {
            console.log(error);
        })
    }

    return (
        <div>
            <Nav current="Program"/>
            <div className="bg-blue-400 min-h-screen bg-no-repeat w-full bg-contain bg-right-bottom flex justify-center items-center bg-blend-multiply relative" style={{
                backgroundImage: `url(${process.env.PUBLIC_URL + '/images/pattern3.png'})`,
            }}>
                <div className="bg-white w-11/12 sm:w-10/12 md:w-6/12 shadow-lg p-6 rounded my-4 mt-20">
                    <div className="text-xl flex items-center text-gray-900">
                        <h1 className="font-bold">Daftar {(dataProgram != null) ? dataProgram.judul : ''}</h1>
                    </div>
                    <div className="border-b border-gray-200 w-full mx-auto mt-2 mb-4"></div>
                    <div className="text-sm text-gray-800">
                        <div className="mb-2">
                            <p className="mb-1">Lokasi</p>
                            <input type="text" className="text-sm w-full rounded p-2 bg-gray-200 focus:outline-none" placeholder="Lokasi" onInput={e => setLokasi(e.target.value)} value={lokasi} />
                        </div>
                        <div className="mb-2">
                            <p className="mb-1">Alamat</p>
                            <input type="text" className="text-sm w-full rounded p-2 bg-gray-200 focus:outline-none" placeholder="Alamat" onInput={e => setAlamat(e.target.value)} value={alamat} />
                        </div>
                        <div className="mb-2">
                            <p className="mb-1">Nama Dosen Pembimbing Akademik</p>
                            <input type="text" className="text-sm w-full rounded p-2 bg-gray-200 focus:outline-none" placeholder="Nama Dosen Pembimbing Akademik" onInput={e => setNamaDosenPa(e.target.value)} value={namaDosenPa} />
                        </div>
                        <div className="mb-2">
                            <p className="mb-1">NIK Dosen Pembimbing Akademik</p>
                            <input type="text" className="text-sm w-full rounded p-2 bg-gray-200 focus:outline-none" placeholder="NIK Dosen Pembimbing Akademik" onInput={e => setNikDosenPa(e.target.value)} value={nikDosenPa} />
                        </div>
                        <div className="mb-2">
                            <p className="mb-1">Motivasi Mengikuti Kegiatan</p>
                            <textarea name="" id="" cols="30" rows="7" placeholder="Motivasi Mengikuti Kegiatan" onInput={e => setMotivasi(e.target.value)} className="text-sm w-full rounded p-2 bg-gray-200 focus:outline-none">{motivasi}</textarea>
                        </div>
                    </div>
                    <div className="w-full mt-6 flex">
                        <button className="bg-blue-600 text-white h-8 w-20 text-sm rounded shadow-md text-center mx-auto" onClick={handleDaftarProgram}>Daftar</button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
