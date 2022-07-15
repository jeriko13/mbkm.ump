import React, {useState} from 'react';
import { CheckCircleIcon } from '@heroicons/react/outline';
import Axios from 'axios';
import qs from 'qs';
import MD5 from 'crypto-js/md5';

// import AuthContext
import { API_URL } from '../../config/config';

import Nav from '../../layouts/Nav.js';
import Footer from '../../layouts/Footer.js';
//import { useState } from 'react/cjs/react.development';

export default function Daftar() {
    const [tahap, setTahap] = useState(1);
    const [posisi, setPosisi] = useState('');
    const [email, setEmail] = useState('');
    const [nim, setNim] = useState('');
    const [username, setUsername] = useState('');
    const [namamitra, setNamamitra] = useState('');
    const [nip, setNip] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [namaLengkap, setNamaLengkap] = useState('');
    const [tempatLahir, setTempatLahir] = useState('');
    const [tanggalLahir, setTanggalLahir] = useState('');
    const [jenisKelamin, setJenisKelamin] = useState('0');
    const [alamat, setAlamat] = useState('');
    const [perguruanTinggiAsal, setPerguruanTinggiAsal] = useState('');
    const [programStudi, setProgramStudi] = useState('');
    const [nomorIndukMahasiswa, setNomorIndukMahasiswa] = useState('');
    const [nomorIndukKependudukan, setNomorIndukKependudukan] = useState('');

    const konfirmasiPendaftaran1 = () => {
        try {
            Axios.post(`${API_URL}/mbkm_daftar_internal/api/register`, qs.stringify({
                nim: nim
                /* tempat_lahir: tempatLahir,
                tanggal_lahir: tanggalLahir,
                jenis_kelamin: parseInt(jenisKelamin),
                perguruan_tinggi_asal: perguruanTinggiAsal,
                program_studi: programStudi,
                nim: nomorIndukMahasiswa,
                nik: nomorIndukKependudukan,
                email: email,
                alamat: alamat,
                password: MD5(password).toString(),
                posisi: posisi */
                
            }), {
                headers: { 
                    "Content-Type": "application/x-www-form-urlencoded"
                }
            })
            .then(res => {
                console.log(res);
                setTahap(6);
            })
            .catch(function (error) {
                console.log(error);
            })
        } catch (error) {
            console.log(error);
        }
    }



    const konfirmasiPendaftaran2 = () => {
        try {
            Axios.post(`${API_URL}/mbkm_daftar_dosen/api/register`, qs.stringify({
                nip: nip
                
                /* tempat_lahir: tempatLahir,
                tanggal_lahir: tanggalLahir,
                jenis_kelamin: parseInt(jenisKelamin),
                perguruan_tinggi_asal: perguruanTinggiAsal,
                program_studi: programStudi,
                nim: nomorIndukMahasiswa,
                nik: nomorIndukKependudukan,
                email: email,
                alamat: alamat,
                password: MD5(password).toString(),
                posisi: posisi */
                
            }), {
                headers: { 
                    "Content-Type": "application/x-www-form-urlencoded"
                }
            })
            .then(res => {
                console.log(res);
                setTahap(6);
            })
            .catch(function (error) {
                console.log(error);
            })
        } catch (error) {
            console.log(error);
        }
    }


    const konfirmasiPendaftaran3 = () => {
        try {
            Axios.post(`${API_URL}/mbkm/mbkm_daftar_external/api/register`, qs.stringify({
                
                
                /* tempat_lahir: tempatLahir,
                tanggal_lahir: tanggalLahir,
                jenis_kelamin: parseInt(jenisKelamin),
                perguruan_tinggi_asal: perguruanTinggiAsal,
                program_studi: programStudi,
                nim: nomorIndukMahasiswa,
                nik: nomorIndukKependudukan,
                email: email,
                alamat: alamat,
                password: MD5(password).toString(),
                posisi: posisi */
                nama_mhs : namaLengkap,
                nik: nomorIndukKependudukan, 
                nim: email,
                alamat: alamat,
                password: MD5(password).toString()
                
            }), {
                headers: { 
                    "Content-Type": "application/x-www-form-urlencoded"
                }
            })
            .then(res => {
                console.log(res);
                setTahap(6);
            })
            .catch(function (error) {
                console.log(error);
            })
        } catch (error) {
            console.log(error);
        }
    }

    const konfirmasiPendaftaran = () => {
        try {
            Axios.post(`${API_URL}/mbkm_daftar_internal/api/add/m_mahasiswa`, qs.stringify({
                
                /* tempat_lahir: tempatLahir,
                tanggal_lahir: tanggalLahir,
                jenis_kelamin: parseInt(jenisKelamin),
                perguruan_tinggi_asal: perguruanTinggiAsal,
                program_studi: programStudi,
                nim: nomorIndukMahasiswa,*/
                nama_mhs : namaLengkap,
                nik: nomorIndukKependudukan, 
                nim: email,
                alamat: alamat,
                password: MD5(password).toString()
               /*  posisi: posisi */
                
            }), {
                headers: { 
                    "Content-Type": "application/x-www-form-urlencoded"
                }
            })
            .then(res => {
                console.log(res);
                setTahap(6);
            })
            .catch(function (error) {
                console.log(error);
            })
        } catch (error) {
            console.log(error);
        }
    }

    if (tahap === 1) {
        return (
            <div>
                <Nav />
                <div className="bg-blue-400 min-h-screen bg-no-repeat w-full bg-contain bg-right-bottom flex justify-center items-center bg-blend-multiply relative" style={{
                    backgroundImage: `url(${process.env.PUBLIC_URL + '/images/pattern3.png'})`,
                }}>
                    <div className="bg-white w-11/12 sm:w-10/12 md:w-6/12 shadow-lg p-6 rounded my-4 mt-20">
                        <div className="text-xl flex justify-between items-center text-gray-900">
                            <h1 className="font-bold">Daftar</h1>
                            <p className="font-light text-sm">1/3</p>
                        </div>
                        <div className="border-b border-gray-200 w-full mx-auto mt-2 mb-4"></div>
                        <div className="text-sm text-gray-800">
                            <h2 className="text-base font-medium mb-2">Daftar Sebagai</h2>
                            <p className="mb-1">Pilih posisi kamu sekarang</p>
                            <select className="w-full rounded p-2 bg-gray-200" id="posisi" onChange={e => setPosisi(e.target.value)}>
                                {(posisi === '') ?
                                    <option value="" disabled selected>Pilih posisi</option>
                                    :
                                    <option value="" disabled>Pilih posisi</option>
                                }
                                 {(posisi === 'Mahasiswa_internal') ?
                                    <option value="Mahasiswa_internal" selected>Mahasiswa Internal</option>
                                    :
                                    <option value="Mahasiswa_internal">Mahasiswa Internal</option>
                                }

                      
                                {(posisi === 'Mahasiswa_external') ?
                                    <option value="Mahasiswa_external" selected>Mahasiswa External</option>
                                    :
                                    <option value="Mahasiswa_external">Mahasiswa external</option>
                                }
                      
                               
                                {(posisi === 'Pembimbing') ?
                                    <option value="Pembimbing" selected>Pembimbing</option>
                                    :
                                    <option value="Pembimbing">Pembimbing</option>
                                }
                        
                                 
                            </select>
                        </div>
                        
                        <div className="w-full mt-4 flex justify-end">

                            {
                                (posisi !== '') ?
                                
                                    <button className="bg-blue-600 text-white h-8 w-28 text-sm rounded shadow-md" onClick={() => setTahap(2)}>Selanjutnya</button>
                                    :
                                    <button className="bg-gray-600 text-white h-8 w-28 text-sm rounded shadow-md">Selanjutnya</button>
                            }

                        </div>

                        
                    </div>
                </div>
                <Footer />
            </div>
        )
    } else if (tahap === 2 && posisi == 'Mahasiswa_external') {
        
        return (
            
            <div>
                <Nav />
                <div className="bg-blue-400 min-h-screen bg-no-repeat w-full bg-contain bg-right-bottom flex justify-center items-center bg-blend-multiply relative" style={{
                    backgroundImage: `url(${process.env.PUBLIC_URL + '/images/pattern3.png'})`,
                }}>
                    <div className="bg-white w-11/12 sm:w-10/12 md:w-6/12 shadow-lg p-6 rounded my-4 mt-20">
                        <div className="text-xl flex justify-between items-center text-gray-900">
                            <h1 className="font-bold">Daftar</h1>
                            <p className="font-light text-sm">2/4</p>
                        </div>
                        <div className="border-b border-gray-200 w-full mx-auto mt-2 mb-4"></div>
                        <div className="text-sm text-gray-800">
                            <h2 className="font-medium text-base mb-2">Informasi Akun</h2>
                            <div className="mb-2">
                                <p className="mb-1">Email</p>
                                <input type="text" className="text-sm w-full rounded p-2 bg-gray-200 focus:outline-none" placeholder="Email" value={email} onInput={e => setEmail(e.target.value)} />
                            </div>
                            <div className="mb-2">
                                <p className="mb-1">Password</p>
                                <input type="password" className="text-sm w-full rounded p-2 bg-gray-200 focus:outline-none" placeholder="Password" value={password} onInput={e => setPassword(e.target.value)} />
                            </div>
                            <div className="mb-2">
                                <p className="mb-1">Konfirmasi Password</p>
                                <input type="password" className="text-sm w-full rounded p-2 bg-gray-200 focus:outline-none" placeholder="Konfirmasi Password" value={confirmPassword} onInput={e => setConfirmPassword(e.target.value)} />
                            </div>
                        </div>
                       
                        
                        <div className="w-full mt-4 flex justify-between">
                            <button className="bg-blue-600 text-white h-8 w-28 text-sm rounded shadow-md" onClick={() => setTahap(1)}>Sebelumnya</button>
                            
                            {
                                ((email, password, confirmPassword) === '') ?
                                
                                    <button className="bg-gray-600 text-white h-8 w-28 text-sm rounded shadow-md">Selanjutnya</button>
                                    :
                                    <button className="bg-blue-600 text-white h-8 w-28 text-sm rounded shadow-md" onClick={() => setTahap(3)}>Selanjutnya</button>
                            }
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
    else if (tahap === 2 && posisi == 'Mahasiswa_internal') {
        
        return (
            
            <div>
                <Nav />
                <div className="bg-blue-400 min-h-screen bg-no-repeat w-full bg-contain bg-right-bottom flex justify-center items-center bg-blend-multiply relative" style={{
                    backgroundImage: `url(${process.env.PUBLIC_URL + '/images/pattern3.png'})`,
                }}>
                    <div className="bg-white w-11/12 sm:w-10/12 md:w-6/12 shadow-lg p-6 rounded my-4 mt-20">
                        <div className="text-xl flex justify-between items-center text-gray-900">
                            <h1 className="font-bold">Daftar</h1>
                            <p className="font-light text-sm">2/4</p>
                        </div>
                        <div className="border-b border-gray-200 w-full mx-auto mt-2 mb-4"></div>
                        <div className="text-sm text-gray-800">
                            <h2 className="font-medium text-base mb-2">Informasi Akun</h2>
                            <div className="mb-2">
                                <p className="mb-1">Nim</p>
                                <input type="text" className="text-sm w-full rounded p-2 bg-gray-200 focus:outline-none" placeholder="Nim" value={nim} onInput={e => setNim(e.target.value)} />
                            </div>

                        </div>
                       
                        
                        <div className="w-full mt-4 flex justify-between">
                            <button className="bg-blue-600 text-white h-8 w-28 text-sm rounded shadow-md" onClick={() => setTahap(1)}>Sebelumnya</button>
                            
                            {
                                ((nim) === '') ?
                                
                                    <button className="bg-gray-600 text-white h-8 w-28 text-sm rounded shadow-md">Selanjutnya</button>
                                    :
                                    <button className="bg-blue-600 text-white h-8 w-28 text-sm rounded shadow-md" onClick={() => setTahap(3)}>Selanjutnya</button>
                            }
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
    
    else if (tahap === 2 && posisi == 'Pembimbing') {
        
        return (
            
            <div>
                <Nav />
                <div className="bg-blue-400 min-h-screen bg-no-repeat w-full bg-contain bg-right-bottom flex justify-center items-center bg-blend-multiply relative" style={{
                    backgroundImage: `url(${process.env.PUBLIC_URL + '/images/pattern3.png'})`,
                }}>
                    <div className="bg-white w-11/12 sm:w-10/12 md:w-6/12 shadow-lg p-6 rounded my-4 mt-20">
                        <div className="text-xl flex justify-between items-center text-gray-900">
                            <h1 className="font-bold">Daftar</h1>
                            <p className="font-light text-sm">2/4</p>
                        </div>
                        <div className="border-b border-gray-200 w-full mx-auto mt-2 mb-4"></div>
                        <div className="text-sm text-gray-800">
                            <h2 className="font-medium text-base mb-2">Informasi Akun</h2>
                            <div className="mb-2">
                                <p className="mb-1">Nip</p>
                                <input type="text" className="text-sm w-full rounded p-2 bg-gray-200 focus:outline-none" placeholder="Nip" value={nip} onInput={e => setNip(e.target.value)} />
                            </div>
                            
                        </div>
                       
                        
                        <div className="w-full mt-4 flex justify-between">
                            <button className="bg-blue-600 text-white h-8 w-28 text-sm rounded shadow-md" onClick={() => setTahap(1)}>Sebelumnya</button>
                            
                            {
                                ((nip) === '') ?
                                
                                    <button className="bg-gray-600 text-white h-8 w-28 text-sm rounded shadow-md">Selanjutnya</button>
                                    :
                                    <button className="bg-blue-600 text-white h-8 w-28 text-sm rounded shadow-md" onClick={() => setTahap(3)}>Selanjutnya</button>
                            }
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }

    
     else if (tahap === 3 && posisi == 'Mahasiswa_internal') {
        return (
            <div>
                <Nav />
                <div className="bg-blue-400 min-h-screen bg-no-repeat w-full bg-contain bg-right-bottom flex justify-center items-center bg-blend-multiply relative" style={{
                    backgroundImage: `url(${process.env.PUBLIC_URL + '/images/pattern3.png'})`,
                }}>
                    <div className="bg-white w-11/12 sm:w-10/12 md:w-6/12 shadow-lg p-6 rounded my-4 mt-20">
                        <div className="text-xl flex justify-between items-center text-gray-900">
                            <h1 className="font-bold">Daftar</h1>
                            <p className="font-light text-sm">2/3</p>
                        </div>
                        <div className="border-b border-gray-200 w-full mx-auto mt-2 mb-4"></div>
                        <div className="text-sm text-gray-800">
                            <h2 className="font-medium text-base mb-2">Informasi Akun</h2>
                            <div className="mb-2">
                                <p className="mb-1">Nim</p>
                                <input type="text" className="text-sm w-full rounded p-2 bg-gray-200 focus:outline-none" placeholder="Nim" value={nim} onInput={e => setNim(e.target.value)} />
                            </div>
                          
                        </div>
                     
                        <div className="w-full mt-4 flex justify-between">
                            <button className="bg-blue-600 text-white h-8 w-28 text-sm rounded shadow-md" onClick={() => setTahap(1)}>Sebelumnya</button>
                            {
                                ((nim) === '') ?
                                    <button className="bg-gray-600 text-white h-8 w-28 text-sm rounded shadow-md">Daftar</button>
                                    :
                                    <button className="bg-blue-600 text-white h-8 w-28 text-sm rounded shadow-md" onClick={konfirmasiPendaftaran1}>Daftar</button>
                            }
                        </div>

                    </div>
                </div>
                <Footer />
            </div>
        )
    }
    else if (tahap === 3 && posisi == 'Pembimbing') {
        return (
            <div>
                <Nav />
                <div className="bg-blue-400 min-h-screen bg-no-repeat w-full bg-contain bg-right-bottom flex justify-center items-center bg-blend-multiply relative" style={{
                    backgroundImage: `url(${process.env.PUBLIC_URL + '/images/pattern3.png'})`,
                }}>
                    <div className="bg-white w-11/12 sm:w-10/12 md:w-6/12 shadow-lg p-6 rounded my-4 mt-20">
                        <div className="text-xl flex justify-between items-center text-gray-900">
                            <h1 className="font-bold">Daftar</h1>
                            <p className="font-light text-sm">2/3</p>
                        </div>
                        <div className="border-b border-gray-200 w-full mx-auto mt-2 mb-4"></div>
                        <div className="text-sm text-gray-800">
                            <h2 className="font-medium text-base mb-2">Informasi Akun</h2>
                            <div className="mb-2">
                                <p className="mb-1">Nip</p>
                                <input type="text" className="text-sm w-full rounded p-2 bg-gray-200 focus:outline-none" placeholder="Nip" value={nip} onInput={e => setNip(e.target.value)} />
                            </div>
                            
                        </div>
                     
                        <div className="w-full mt-4 flex justify-between">
                            <button className="bg-blue-600 text-white h-8 w-28 text-sm rounded shadow-md" onClick={() => setTahap(1)}>Sebelumnya</button>
                            {
                                ((nip) === '') ?
                                    <button className="bg-gray-600 text-white h-8 w-28 text-sm rounded shadow-md">Daftar</button>
                                    :
                                    <button className="bg-blue-600 text-white h-8 w-28 text-sm rounded shadow-md" onClick={konfirmasiPendaftaran2}>Daftar</button>
                            }
                        </div>

                    </div>
                </div>
                <Footer />
            </div>
        )
    }
    
    else if (tahap === 3 && posisi == 'Mahasiswa_external') {
        return (
            <div>
                <Nav />
                <div className="bg-blue-400 min-h-screen bg-no-repeat w-full bg-contain bg-right-bottom flex justify-center items-center bg-blend-multiply relative" style={{
                    backgroundImage: `url(${process.env.PUBLIC_URL + '/images/pattern3.png'})`,
                }}>
                    <div className="bg-white w-11/12 sm:w-10/12 md:w-6/12 shadow-lg p-6 rounded my-4 mt-20">
                        <div className="text-xl flex justify-between items-center text-gray-900">
                            <h1 className="font-bold">Daftar</h1>
                            <p className="font-light text-sm">3/4</p>
                        </div>
                        <div className="border-b border-gray-200 w-full mx-auto mt-2 mb-4"></div>
                        <div className="text-sm text-gray-800">
                            <h2 className="font-medium text-base mb-2">Data Diri</h2>
                            <div className="mb-2">
                                <p className="mb-1">Nama Lengkap</p>
                                <input type="text" className="text-sm w-full rounded p-2 bg-gray-200 focus:outline-none" placeholder="Nama Lengkap" id="namaLengkap" onInput={e => setNamaLengkap(e.target.value)} value={namaLengkap} />
                            </div>
                            {/* <div className="mb-2">
                                <p className="mb-1">Tempat Lahir</p>
                                <input type="text" className="text-sm w-full rounded p-2 bg-gray-200 focus:outline-none" placeholder="Tempat Lahir" onInput={e => setTempatLahir(e.target.value)} value={tempatLahir} />
                            </div>
                            <div className="mb-2">
                                <p className="mb-1">Tanggal Lahir</p>
                                <input type="date" className="text-sm w-full rounded p-2 bg-gray-200 focus:outline-none" placeholder="Tanggal Lahir" onInput={e => setTanggalLahir(e.target.value)} value={tanggalLahir} />
                            </div>
                            <div className="mb-2">
                                <p className="mb-1">Jenis Kelamin</p>
                                <select className="w-full rounded p-2 bg-gray-200" name="jenis-kelamin" onChange={e => setJenisKelamin(e.target.value)}>
                                    {(jenisKelamin === '0') ?
                                        <option value='0' disabled selected>Pilih jenis kelamin</option>
                                        :
                                        <option value='0' disabled>Pilih jenis kelamin</option>
                                    }
                                    {(jenisKelamin === '1') ?
                                        <option value='1' selected>Laki - laki</option>
                                        :
                                        <option value='1'>Laki - laki</option>
                                    }
                                    {(jenisKelamin === '2') ?
                                        <option value='2' selected>Perempuan</option>
                                        :
                                        <option value='2'>Perempuan</option>
                                    }
                                </select>
                            </div> */}
                            <div className="mb-2">
                                <p className="mb-1">Alamat Lengkap</p>
                                <input type="text" className="text-sm w-full rounded p-2 bg-gray-200 focus:outline-none" placeholder="Alamat Lengkap" onInput={e => setAlamat(e.target.value)} value={alamat} />
                            </div>
                            {/* <div className="mb-2">
                                <p className="mb-1">Perguruan Tinggi Asal</p>
                                <input type="text" className="text-sm w-full rounded p-2 bg-gray-200 focus:outline-none" placeholder="Perguruan Tinggi Asal" onInput={e => setPerguruanTinggiAsal(e.target.value)} value={perguruanTinggiAsal} />
                            </div>
                            <div className="mb-2">
                                <p className="mb-1">Program Studi</p>
                                <input type="text" className="text-sm w-full rounded p-2 bg-gray-200 focus:outline-none" placeholder="Program Studi" onInput={e => setProgramStudi(e.target.value)} value={programStudi} />
                            </div>
                            <div className="mb-2">
                                <p className="mb-1">Nomor Induk Mahasiswa (NIM)</p>
                                <input type="text" className="text-sm w-full rounded p-2 bg-gray-200 focus:outline-none" placeholder="Nomor Induk Mahasiswa (NIM)" onInput={e => setNomorIndukMahasiswa(e.target.value)} value={nomorIndukMahasiswa} />
                            </div> */}
                            <div className="mb-2">
                                <p className="mb-1">Nomor Induk Kependudukan (NIK)</p>
                                <input type="text" className="text-sm w-full rounded p-2 bg-gray-200 focus:outline-none" placeholder="Nomor Induk Kependudukan (NIK)" onInput={e => setNomorIndukKependudukan(e.target.value)} value={nomorIndukKependudukan} />
                            </div>
                        </div>
                        <div className="w-full mt-4 flex justify-between">
                            <button className="bg-blue-600 text-white h-8 w-28 text-sm rounded shadow-md" onClick={() => setTahap(2)}>Sebelumnya</button>
                            {
                                ((namaLengkap,  nomorIndukKependudukan) === '' ) ?
                                    <button className="bg-gray-600 text-white h-8 w-28 text-sm rounded shadow-md">Selanjutnya</button>
                                    :
                                    <button className="bg-blue-600 text-white h-8 w-28 text-sm rounded shadow-md" onClick={() => setTahap(4)}>Selanjutnya</button>
                            }
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    } else if (tahap === 5 && posisi == 'Mahasiswa_internal') {
        return (
            <div>
                <Nav />
                <div className="bg-blue-400 min-h-screen bg-no-repeat w-full bg-contain bg-right-bottom flex justify-center items-center bg-blend-multiply relative" style={{
                    backgroundImage: `url(${process.env.PUBLIC_URL + '/images/pattern3.png'})`,
                }}>
                    <div className="bg-white w-11/12 sm:w-10/12 md:w-6/12 shadow-lg p-6 rounded my-4 mt-20">
                        <div className="text-xl flex justify-between items-center text-gray-900">
                            <h1 className="font-bold">Daftar</h1>
                            <p className="font-light text-sm">3/3</p>
                        </div>
                        <div className="border-b border-gray-200 w-full mx-auto mt-2 mb-4"></div>
                        <div className="text-sm text-gray-800">
                            <h2 className="font-medium text-base mb-2">Konfirmasi Data Mahasiswa</h2>
                            <div className="mb-2">
                                <p className="mb-1">Nim</p>
                                <p className="font-medium">{nim}</p>
                            </div>
                   
                        </div>
                        <div className="w-full mt-4 flex justify-between">
                            <button className="bg-blue-600 text-white h-8 w-28 text-sm rounded shadow-md" onClick={() => setTahap(3)}>Sebelumnya</button>
                            {
                                ((namaLengkap, jenisKelamin, tempatLahir, tanggalLahir, perguruanTinggiAsal, programStudi, nomorIndukMahasiswa, nomorIndukKependudukan) === '') ?
                                    <button className="bg-gray-600 text-white h-8 w-28 text-sm rounded shadow-md">Konfirmasi</button>
                                    :
                                    <button className="bg-blue-600 text-white h-8 w-28 text-sm rounded shadow-md" onClick={konfirmasiPendaftaran}>Konfirmasi</button>
                            }
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    } 

    else if (tahap === 4 && posisi == 'Mahasiswa_external') {
        return (
            <div>
                <Nav />
                <div className="bg-blue-400 min-h-screen bg-no-repeat w-full bg-contain bg-right-bottom flex justify-center items-center bg-blend-multiply relative" style={{
                    backgroundImage: `url(${process.env.PUBLIC_URL + '/images/pattern3.png'})`,
                }}>
                    <div className="bg-white w-11/12 sm:w-10/12 md:w-6/12 shadow-lg p-6 rounded my-4 mt-20">
                        <div className="text-xl flex justify-between items-center text-gray-900">
                            <h1 className="font-bold">Daftar</h1>
                            <p className="font-light text-sm">4/4</p>
                        </div>
                        <div className="border-b border-gray-200 w-full mx-auto mt-2 mb-4"></div>
                        <div className="text-sm text-gray-800">
                            <h2 className="font-medium text-base mb-2">Konfirmasi Data Mahasiswa</h2>
                            <div className="mb-2">
                                <p className="mb-1">Nama Lengkap</p>
                                <p className="font-medium">{namaLengkap}</p>
                            </div>
                            {/* <div className="mb-2">
                                <p className="mb-1">Tempat Lahir</p>
                                <p className="font-medium">{tempatLahir}</p>
                            </div>
                            <div className="mb-2">
                                <p className="mb-1">Tanggal Lahir</p>
                                <p className="font-medium">{tanggalLahir}</p>
                            </div>
                            <div className="mb-2">
                                <p className="mb-1">Jenis Kelamin</p>
                                <p className="font-medium">{(jenisKelamin === 1) ? 'Laki - laki' : 'Perempuan'}</p>
                            </div> */}
                            <div className="mb-2">
                                <p className="mb-1">Alamat Lengkap</p>
                                <p className="font-medium">{alamat}</p>
                            </div>
                            {/* <div className="mb-2">
                                <p className="mb-1">Perguruan Tinggi Asal</p>
                                <p className="font-medium">{perguruanTinggiAsal}</p>
                            </div>
                            <div className="mb-2">
                                <p className="mb-1">Program Studi</p>
                                <p className="font-medium">{programStudi}</p>
                            </div>
                            <div className="mb-2">
                                <p className="mb-1">Nomor Induk Mahasiswa (NIM)</p>
                                <p className="font-medium">{nomorIndukMahasiswa}</p>
                            </div> */}
                            <div className="mb-2">
                                <p className="mb-1">Nomor Induk Kependudukan (NIK)</p>
                                <p className="font-medium">{nomorIndukKependudukan}</p>
                            </div>
                        </div>
                        <div className="w-full mt-4 flex justify-between">
                            <button className="bg-blue-600 text-white h-8 w-28 text-sm rounded shadow-md" onClick={() => setTahap(3)}>Sebelumnya</button>
                            {
                                ((namaLengkap,  nomorIndukKependudukan) === '') ?
                                    <button className="bg-gray-600 text-white h-8 w-28 text-sm rounded shadow-md">Konfirmasi</button>
                                    :
                                    <button className="bg-blue-600 text-white h-8 w-28 text-sm rounded shadow-md" onClick={konfirmasiPendaftaran3}>Konfirmasi</button>
                            }
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
    else if (tahap === 5 && posisi == 'Pembimbing') {
        return (
            <div>
                <Nav />
                <div className="bg-blue-400 min-h-screen bg-no-repeat w-full bg-contain bg-right-bottom flex justify-center items-center bg-blend-multiply relative" style={{
                    backgroundImage: `url(${process.env.PUBLIC_URL + '/images/pattern3.png'})`,
                }}>
                    <div className="bg-white w-11/12 sm:w-10/12 md:w-6/12 shadow-lg p-6 rounded my-4 mt-20">
                        <div className="text-xl flex justify-between items-center text-gray-900">
                            <h1 className="font-bold">Daftar</h1>
                            <p className="font-light text-sm">3/3</p>
                        </div>
                        <div className="border-b border-gray-200 w-full mx-auto mt-2 mb-4"></div>
                        <div className="text-sm text-gray-800">
                            <h2 className="font-medium text-base mb-2">Konfirmasi Data Mahasiswa</h2>
                            <div className="mb-2">
                                <p className="mb-1">Nip</p>
                                <p className="font-medium">{nip}</p>
                            </div>
                            <div className="mb-2">
                                <p className="mb-1">Password</p>
                                <p className="font-medium">{password}</p>
                            </div>
                          
                        </div>
                        <div className="w-full mt-4 flex justify-between">
                            <button className="bg-blue-600 text-white h-8 w-28 text-sm rounded shadow-md" onClick={() => setTahap(3)}>Sebelumnya</button>
                            {
                                ((namaLengkap, jenisKelamin, tempatLahir, tanggalLahir, perguruanTinggiAsal, programStudi, nomorIndukMahasiswa, nomorIndukKependudukan) === '') ?
                                    <button className="bg-gray-600 text-white h-8 w-28 text-sm rounded shadow-md">Konfirmasi</button>
                                    :
                                    <button className="bg-blue-600 text-white h-8 w-28 text-sm rounded shadow-md" onClick={konfirmasiPendaftaran}>Konfirmasi</button>
                            }
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }

    

    else if (tahap === 6 && posisi == 'Mahasiswa_internal') {
        return (
            <div>
                <Nav />
                <div className="bg-blue-400 min-h-screen bg-no-repeat w-full bg-contain bg-right-bottom flex justify-center items-center bg-blend-multiply relative" style={{
                    backgroundImage: `url(${process.env.PUBLIC_URL + '/images/pattern3.png'})`,
                }}>
                    <div className="bg-white w-11/12 sm:w-10/12 md:w-6/12 shadow-lg p-6 rounded my-4 mt-20">
                        <CheckCircleIcon className="block h-20 w-20 text-green-600 mx-auto mb-2" aria-hidden="true" />
                        <p className="font-medium text-center">Berhasil Mendaftar!</p>
                        <p className="font-sm font-normal text-center mb-4">Silahkan login!</p>
                        <a href="https://mbkm.ump.ac.id/mbkm_mahasiswa" className="bg-blue-600 text-base font-medium mx-auto text-center text-white rounded-md block w-16 h-8 leading-8">Login</a>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
    else if (tahap === 6 && posisi == 'Pembimbing') {
        return (
            <div>
                <Nav />
                <div className="bg-blue-400 min-h-screen bg-no-repeat w-full bg-contain bg-right-bottom flex justify-center items-center bg-blend-multiply relative" style={{
                    backgroundImage: `url(${process.env.PUBLIC_URL + '/images/pattern3.png'})`,
                }}>
                    <div className="bg-white w-11/12 sm:w-10/12 md:w-6/12 shadow-lg p-6 rounded my-4 mt-20">
                        <CheckCircleIcon className="block h-20 w-20 text-green-600 mx-auto mb-2" aria-hidden="true" />
                        <p className="font-medium text-center">Berhasil Mendaftar!</p>
                        <p className="font-sm font-normal text-center mb-4">Silahkan login!</p>
                        <a href="https://mbkm.ump.ac.id/mbkm_dosen_pembimbing" className="bg-blue-600 text-base font-medium mx-auto text-center text-white rounded-md block w-16 h-8 leading-8">Login</a>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }

    else if (tahap === 6 && posisi == 'Mahasiswa_external') {
        return (
            <div>
                <Nav />
                <div className="bg-blue-400 min-h-screen bg-no-repeat w-full bg-contain bg-right-bottom flex justify-center items-center bg-blend-multiply relative" style={{
                    backgroundImage: `url(${process.env.PUBLIC_URL + '/images/pattern3.png'})`,
                }}>
                    <div className="bg-white w-11/12 sm:w-10/12 md:w-6/12 shadow-lg p-6 rounded my-4 mt-20">
                        <CheckCircleIcon className="block h-20 w-20 text-green-600 mx-auto mb-2" aria-hidden="true" />
                        <p className="font-medium text-center">Berhasil Mendaftar!</p>
                        <p className="font-sm font-normal text-center mb-4">Silahkan login!</p>
                        <a href="https://mbkm.ump.ac.id/mbkm_mahasiswa" className="bg-blue-600 text-base font-medium mx-auto text-center text-white rounded-md block w-16 h-8 leading-8">Login</a>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
    

}

