import React, {useState, useEffect, useRef, Fragment} from 'react';
import Axios from 'axios';
import { Dialog, Transition } from '@headlessui/react'
import { EyeIcon} from '@heroicons/react/solid';
import qs from 'qs'

import Nav from '../layouts/Nav.js';
import Footer from '../layouts/Footer.js';
import { API_URL } from '../config/config';

export default function DaftarPelamar() {
    const [daftarKegiatan, setDaftarKegiatan] = useState(null);
    const [open, setOpen] = useState(false)
    const [arrData, setArrData] = useState(0)
    const cancelButtonRef = useRef(null)
    const [nilaiSeleksi, setNilaiSeleksi] = useState(0)
    const [nilaiSatu, setNilaiSatu] = useState(0)
    const [nilaiDua, setNilaiDua] = useState(0)
    const [keterangan, setKeterangan] = useState(0)
    
    useEffect(() => {
        getKegiatan()
    }, [])

    const getKegiatan = () => {
        let nikLokal = localStorage.getItem('nik');
        Axios.get(`${API_URL}/mbkm-api-new/api/list/v_kegiatan?cmd=search&t=v_kegiatan&z_nik_pa=LIKE&x_nik_pa=${nikLokal}`).then(res => {
            setDaftarKegiatan(res.data.v_kegiatan);
        }).catch(e => e);
    }

    const handleSimpan = () => {
        console.log(keterangan);
        if (daftarKegiatan[arrData].status_id === 1) {
            if (keterangan === 1) {
                daftarKegiatan[arrData].status_id +=2;
            } else {
                daftarKegiatan[arrData].status_id +=1;
            }
        }
        Axios.post(`${API_URL}/mbkm-api-new/api/edit/t_kegiatan/${daftarKegiatan[arrData].kegiatan_id}`, qs.stringify({
            nilai_seleksi : nilaiSeleksi,
            nilai1 : nilaiSatu,
            nilai2 : nilaiDua,
            status_id : daftarKegiatan[arrData].status_id,
        }), {
            headers: { 
                "Content-Type": "application/x-www-form-urlencoded"
            }
        }).then(res => {
            let nikLokal = localStorage.getItem('nik');
            Axios.get(`${API_URL}/mbkm-api-new/api/list/v_kegiatan?cmd=search&t=v_kegiatan&z_nik_pa=LIKE&x_nik_pa=${nikLokal}`).then(res => {
                setDaftarKegiatan(res.data.v_kegiatan);
                setOpen(false);
            }).catch(e => e);
        }).catch(e => {
            console.log(e);
        });
    }

    if (daftarKegiatan != null) {
        return (
            <>
            <div className="bg-white">
                <Nav/>
                <div className="my-20 sm:px-8">
                    <div className="w-full mb-10 overflow-x-auto">
                        <h1 className="text-center mb-2 font-medium text-2xl text-ump-1">Peserta Kegiatan</h1>
                        <div className="border-b-2 border-ump-1 w-20 mx-auto mb-4"></div>
                        <table className="w-full">
                            <tr className="text-gray-800 bg-blue-200 w-full h-10 items-center justify-center font-medium text-sm">
                                <th className="p-2 border border-white">No</th>
                                <th className="p-2 border border-white">Nama</th>
                                <th className="p-2 border border-white">Kegiatan</th>
                                <th className="p-2 border border-white">Lokasi</th>
                                <th className="p-2 border border-white">Entri Data</th>
                                <th className="p-2 border border-white">Status</th>
                                <th className="p-2 border border-white">Detail</th>
                            </tr>
                            {
                                daftarKegiatan.map(((kegiatan, key) => 
                                    <tr className="text-gray-800 bg-blue-50 w-full h-10 font-normal sm:text-sm text-xs">
                                        <td className="p-2 border border-white">{key+1}</td>
                                        <td className="p-2 border border-white">{kegiatan.nama_lengkap}</td>
                                        <td className="p-2 border border-white">{kegiatan.nama_kegiatan}</td>
                                        <td className="p-2 border border-white">{kegiatan.lokasi}</td>
                                        <td className="p-2 border border-white">
                                            <button className="bg-blue-500 h-6 w-20 rounded text-white" onClick={() => {setOpen(true); setArrData(key); setNilaiSeleksi(kegiatan.nilai_seleksi); setNilaiSatu(kegiatan.nilai1); setNilaiDua(kegiatan.nilai2)}}>Entri Data</button>
                                        </td>
                                        <td className="p-2 border border-white">
                                            {kegiatan.status}
                                        </td>
                                        <td className="p-2 border border-white">
                                            <button onClick={() => {setOpen(true); setArrData(key)}}>
                                                <EyeIcon className="block h-4 w-4 mr-2 text-blue-600" aria-hidden="true" />
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </table>
                    </div>
                </div>
                <Footer/>
            </div>
            <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" initialFocus={cancelButtonRef} onClose={setOpen}>
              <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>
      
                {/* This element is to trick the browser into centering the modal contents. */}
                <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
                  &#8203;
                </span>
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                  enterTo="opacity-100 translate-y-0 sm:scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                  leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                >
                    <div className="w-11/12 md:w-6/12 p-6 my-4 mt-20 inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                        <div className="text-xl flex items-center text-gray-900">
                            {
                                (daftarKegiatan[arrData].status_id === 1) ? (
                                    <h1 className="font-bold">Proses Seleksi</h1>
                                ) : (
                                    <h1 className="font-bold">Penilaian</h1>
                                )
                            }
                        </div>
                        <div className="border-b border-gray-200 w-full mx-auto mt-2 mb-4"></div>
                        <div className="text-sm text-gray-800">
                            {
                                (daftarKegiatan[arrData].status_id === 1) ? (
                                    <>
                                    <div className="mb-2">
                                        <p className="mb-1">Nilai Seleksi</p>
                                        <input type="number" className="text-sm w-full rounded p-2 bg-gray-200 focus:outline-none" placeholder="Nilai Seleksi" value={nilaiSeleksi} onInput={e => setNilaiSeleksi(e.target.value)} />
                                    </div>
                                    <div className="mb-2 w-full">
                                        <p className="mb-1">Keterangan</p>
                                        <div className="flex items-center">
                                            <input type="radio" className="mr-2 text-sm  p-2 bg-gray-200 focus:outline-none" name="keterangan" value="1" onChange={e => setKeterangan(parseInt(e.target.value))} /> 
                                            <p className="">Diterima</p>
                                        </div>
                                        <div className="flex items-center">
                                            <input type="radio" className="mr-2 text-sm  p-2 bg-gray-200 focus:outline-none" name="keterangan" value="0" onChange={e => setKeterangan(parseInt(e.target.value))} /> 
                                            <p className="">Ditolak</p>
                                        </div>
                                    </div>
                                    </>
                                ) : (
                                    <>
                                    <div className="mb-2">
                                        <p className="mb-1">Nilai1</p>
                                        <input type="number" className="text-sm w-full rounded p-2 bg-gray-200 focus:outline-none" placeholder="Nilai1" value={nilaiSatu} onInput={e => setNilaiSatu(e.target.value)} />
                                    </div>
                                    <div className="mb-2">
                                        <p className="mb-1">Nilai2</p>
                                        <input type="number" className="text-sm w-full rounded p-2 bg-gray-200 focus:outline-none" placeholder="Nilai2" value={nilaiDua} onInput={e => setNilaiDua(e.target.value)} />
                                    </div>
                                    </>
                                )
                            }
                        </div>
                        <div className="w-full mt-4 flex justify-between">
                            <button className="bg-blue-600 text-white h-8 w-28 text-sm rounded shadow-md" onClick={() => handleSimpan()}>Simpan</button>
                        </div>
                    </div>
                </Transition.Child>
              </div>
            </Dialog>
          </Transition.Root>
          </>
        )
    } else {
        return <div/>
    }
}
