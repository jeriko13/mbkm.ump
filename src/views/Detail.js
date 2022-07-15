import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import {useParams} from 'react-router-dom'

import Nav from '../layouts/Nav.js';
import Footer from '../layouts/Footer.js';
import { API_URL } from '../config/config';


export default function Detail() {
    let { iduser, idkegiatan } = useParams();
    const [detailKegiatan, setDetailKegiatan] = useState(null);
    const [detailUser, setDetailUser] = useState(null);
    const [detailLogbook, setDetailLogbook] = useState(null);
    
    useEffect(() => {

        const getDataDetail = () => {
            Axios.get(`${API_URL}/mbkm-api-new/api/list/v_kegiatan?cmd=search&t=v_kegiatan&z_user_id=LIKE&x_user_id=${iduser}`).then(res => {
                setDetailKegiatan(res.data.v_kegiatan[0]);
                console.log(res.data.v_kegiatan);
            }).catch(e => e);
            Axios.get(`${API_URL}/mbkm-api-new/api/list/t_kegiatan_logbook?cmd=search&t=t_kegiatan_logbook&z_kegiatan_id=%3D&x_kegiatan_id=${idkegiatan}`).then(res => {
                console.log(res.data.t_kegiatan_logbook);
                setDetailLogbook(res.data.t_kegiatan_logbook);
            }).catch(e => e);
            Axios.get(`${API_URL}/mbkm-api-new/api/list/m_user?cmd=search&t=v_kegiatan&z_user_id=LIKE&x_user_id=${iduser}`).then(res => {
                console.log(res.data.m_user);
                setDetailUser(res.data.m_user[0]);
            }).catch(e => e);
        }
        getDataDetail()
    }, [iduser, idkegiatan])

    if (detailKegiatan != null && detailUser != null && detailLogbook != null) {
        return (
            <div className="bg-gray-100">
                <Nav/>
                    <div className="w-full mb-4 mt-16">
                        <div className="bg-red-700 overflow-y-hidden h-80">
                            <img className="h-auto w-full -mt-36" src={process.env.PUBLIC_URL + '/images/gedungump.jpeg'} alt="Workflow" />
                        </div>
                        <div className="bg-white w-full sm:px-8">
                            <img className="h-28 w-28 rounded-full"
                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt="" />
                            <div className="text-xl items-center text-gray-900">
                                <h1 className="font-bold">Data Mahasiswa</h1>
                            </div>
                            <div className="border-b border-gray-200 w-full mx-auto mt-2 mb-4"></div>
                            <div className="text-sm text-gray-800">
                                <div className="mb-3">
                                    <p className="mb-1">Nama Lengkap</p>
                                    <p className="font-medium">{detailUser.nama_lengkap}</p>
                                </div>
                                <div className="mb-3">
                                    <p className="mb-1">Tempat Lahir</p>
                                    <p className="font-medium">{detailUser.tempat_lahir}</p>
                                </div>
                                <div className="mb-3">
                                    <p className="mb-1">Tanggal Lahir</p>
                                    <p className="font-medium">{detailUser.tanggal_lahir}</p>
                                </div>
                                <div className="mb-3">
                                    <p className="mb-1">Jenis Kelamin</p>
                                    <p className="font-medium">{(detailUser.jenis_kelamin === 1) ? 'Laki - laki' : 'Perempuan'}</p>
                                </div>
                                <div className="mb-3">
                                    <p className="mb-1">Alamat Lengkap</p>
                                    <p className="font-medium">{detailUser.alamat}</p>
                                </div>
                                <div className="mb-3">
                                    <p className="mb-1">Perguruan Tinggi Asal</p>
                                    <p className="font-medium">{detailUser.perguruan_tinggi_asal}</p>
                                </div>
                                <div className="mb-3">
                                    <p className="mb-1">Program Studi</p>
                                    <p className="font-medium">{detailUser.program_studi}</p>
                                </div>
                                <div className="mb-3">
                                    <p className="mb-1">Nomor Induk Mahasiswa (NIM)</p>
                                    <p className="font-medium">{detailUser.nim}</p>
                                </div>
                                <div className="mb-3">
                                    <p className="mb-1">Nomor Induk Kependudukan (NIK)</p>
                                    <p className="font-medium">{detailUser.nik}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full mb-4 bg-white sm:px-8">
                        <div className="text-xl items-center text-gray-900">
                            <h1 className="font-bold">Detail Kegiatan</h1>
                        </div>
                        <div className="border-b border-gray-200 w-full mx-auto mt-2 mb-4"></div>
                        <div className="text-sm text-gray-800">
                            <div className="mb-3">
                                <p className="mb-1">Nama Kegiatan</p>
                                <p className="font-medium">{detailKegiatan.nama_kegiatan}</p>
                            </div>
                            <div className="mb-3">
                                <p className="mb-1">Lokasi</p>
                                <p className="font-medium">{detailKegiatan.lokasi}</p>
                            </div>
                            <div className="mb-3">
                                <p className="mb-1">Alamat</p>
                                <p className="font-medium">{detailKegiatan.alamat}</p>
                            </div>
                            <div className="mb-3">
                                <p className="mb-1">Nilai Seleksi</p>
                                <p className="font-medium">{detailKegiatan.nilai_seleksi}</p>
                            </div>
                            <div className="mb-3">
                                <p className="mb-1">Nilai 1</p>
                                <p className="font-medium">{detailKegiatan.nilai1}</p>
                            </div>
                            <div className="mb-3">
                                <p className="mb-1">Nilai 2</p>
                                <p className="font-medium">{detailKegiatan.nilai2}</p>
                            </div>
                            <div className="mb-3">
                                <p className="mb-1">Motivasi Mengikuti Kegiatan</p>
                                <p className="font-medium">{detailKegiatan.nilai2}</p>
                            </div>
                            <div className="mb-3">
                                <p className="mb-1">Status Kegiatan</p>
                                <p className="font-medium">{detailKegiatan.status}</p>
                            </div>
                        </div>
                    </div>
                <Footer/>
            </div>
        )
    } else {
        return <div/>
    }
}
