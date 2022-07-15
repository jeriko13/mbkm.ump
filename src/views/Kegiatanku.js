import React, {useState, useEffect, useRef, Fragment} from 'react';
import Axios from 'axios';
import { Dialog, Transition } from '@headlessui/react'
import { EyeIcon, PencilIcon, TrashIcon} from '@heroicons/react/solid';
import qs from 'qs';

import Nav from '../layouts/Nav.js';
import Footer from '../layouts/Footer.js';
import { API_URL } from '../config/config';


export default function Kegiatanku() {
    const cancelButtonRef = useRef(null)
    const [open, setOpen] = useState(false)
    const [daftarKegiatan, setDaftarKegiatan] = useState(null);
    const [kegiatanId, setKegiatanId] = useState(0);
    const [arrData, setArrData] = useState(0);
    const [tanggal, setTanggal] = useState('')
    const [logbook, setLogbook] = useState([])
    const [uraian, setUraian] = useState('')
    
    useEffect(() => {
        const getKegiatan = () => {
            let curr = new Date();
            curr.setDate(curr.getDate());
            let date = curr.toISOString().substr(0,10);
            setTanggal(date);
            let userIdLokal = localStorage.getItem('userId');
            Axios.get(`${API_URL}/mbkm-api-new/api/list/v_kegiatan?cmd=search&t=v_kegiatan&z_user_id=LIKE&x_user_id=${userIdLokal}`).then(res => {
                setDaftarKegiatan(res.data.v_kegiatan);
            }).catch(e => e);
        }
        getKegiatan()
    }, [])

    const handleEntryData = id => {
        setKegiatanId(id)
        Axios.get(`${API_URL}/mbkm-api-new/api/list/t_kegiatan_logbook?cmd=search&t=t_kegiatan_logbook&z_kegiatan_id=%3D&x_kegiatan_id=${id}`).then(res => {
            setLogbook(res.data.t_kegiatan_logbook);
            setOpen(true);
        }).catch(e => e);
    }

    const handleSimpan = () => {
        console.log(kegiatanId);
        console.log(tanggal);
        console.log(uraian);
        Axios.post(`${API_URL}/mbkm-api-new/api/add/t_kegiatan_logbook`, qs.stringify({
            kegiatan_id : kegiatanId,
            tanggal : tanggal,
            uraian : uraian,
        }), {
            headers: { 
                "Content-Type": "application/x-www-form-urlencoded"
            }
        }).then(res => {
            console.log(res);
            Axios.get(`${API_URL}/mbkm-api-new/api/list/t_kegiatan_logbook?cmd=search&t=t_kegiatan_logbook&z_kegiatan_id=%3D&x_kegiatan_id=${kegiatanId}`).then(res => {
                setLogbook(res.data.t_kegiatan_logbook);
            }).catch(e => e);
        }).catch(e => {
            console.log(e);
        });
    }

    const handleBtnLaporan = () => {
        Axios.post(`${API_URL}/mbkm-api-new/api/edit/t_kegiatan/${daftarKegiatan[arrData].kegiatan_id}`, qs.stringify({
            status_id : daftarKegiatan[arrData].status_id+1,
        }), {
            headers: { 
                "Content-Type": "application/x-www-form-urlencoded"
            }
        }).then(res => {
            let userIdLokal = localStorage.getItem('userId');
            Axios.get(`${API_URL}/mbkm-api-new/api/list/v_kegiatan?cmd=search&t=v_kegiatan&z_user_id=LIKE&x_user_id=${userIdLokal}`).then(res => {
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
                    <div className="w-full mb-10">
                        <h1 className="text-center mb-2 font-medium text-2xl text-ump-1">Kegiatanku</h1>
                        <div className="border-b-2 border-ump-1 w-20 mx-auto mb-4"></div>
                        <table className="w-full">
                            <tr className="text-gray-800 bg-blue-200 w-full h-10 items-center justify-center font-medium text-sm">
                                <th className="p-2 border border-white">No</th>
                                <th className="p-2 border border-white">Kegiatan</th>
                                <th className="p-2 border border-white">Lokasi</th>
                                <th className="p-2 border border-white">Alamat</th>
                                <th className="p-2 border border-white">Pembimbing Akademik</th>
                                <th className="p-2 border border-white">Entri Data</th>
                                <th className="p-2 border border-white">Status</th>
                                <th className="p-2 border border-white">Detail</th>
                            </tr>
                            {
                                daftarKegiatan.map(((kegiatan, key) => 
                                    <tr className="text-gray-800 bg-blue-50 w-full h-10 font-normal sm:text-sm text-xs">
                                        <td className="p-2 border border-white">{key+1}</td>
                                        <td className="p-2 border border-white">{kegiatan.nama_kegiatan}</td>
                                        <td className="p-2 border border-white">{kegiatan.lokasi}</td>
                                        <td className="p-2 border border-white">{kegiatan.alamat}</td>
                                        <td className="p-2 border border-white">{kegiatan.nama_pa}</td>
                                        <td className="p-2 border border-white">
                                            <button className="bg-blue-500 h-6 w-20 rounded text-white" onClick={() => handleEntryData(kegiatan.kegiatan_id)}>Entri Data</button>
                                        </td>
                                        <td className="p-2 border border-white">
                                            {kegiatan.status}
                                        </td>
                                        <td className="p-2 border border-white">
                                            <button onClick={() => {setArrData(key); setOpen(true)}}>
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
            <Dialog as="div" className="fixed inset-0 overflow-y-auto" initialFocus={cancelButtonRef} onClose={setOpen}>
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
                    <div className="z-10 w-11/12 md:w-6/12 p-6 my-4 mt-36 sm:mt-20 inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                        <div className="text-xl flex items-center text-gray-900">
                            <h1 className="font-bold">Pengisian Logbook</h1>
                        </div>
                        <div className="border-b border-gray-200 w-full mx-auto mt-2 mb-4"></div>
                        <div className="text-sm text-gray-800">
                            <div className="mb-2">
                                <p className="mb-1">Tanggal</p>
                                <input type="date" className="text-sm w-full rounded p-2 bg-gray-200 focus:outline-none" placeholder="Nilai Seleksi" value={tanggal} onChange={e => setTanggal(e.target.value)} readOnly/>
                            </div>
                            <div className="mb-2">
                                <p className="mb-1">Uraian</p>
                                <textarea name="" id="" cols="30" rows="4" placeholder="Uraian..." onInput={e => setUraian(e.target.value)}  className="text-sm w-full rounded p-2 bg-gray-200 focus:outline-none">{uraian}</textarea>
                            </div>
                        </div>
                        <div className="w-full mt-4 flex justify-between">
                            <button className="bg-blue-600 text-white h-8 w-28 text-sm rounded shadow-md" onClick={() => handleSimpan()}>Simpan</button>
                        </div>
                        <div className="w-full mt-4 flex justify-between">
                        <table className="w-full">
                            <tr className="text-gray-800 bg-blue-200 w-full h-10 items-center justify-center font-medium text-sm">
                                <th>Aksi</th>
                                <th>Tanggal</th>
                                <th>Uraian</th>
                            </tr>
                            {
                                logbook.map(((l, key) => 
                                <tr className="text-gray-800 bg-blue-50 w-full h-10 font-normal sm:text-sm text-xs">
                                    <td className="flex">
                                        <PencilIcon className="block h-4 w-4 mr-2 text-blue-600" aria-hidden="true" />
                                        <TrashIcon className="block h-4 w-4 mr-2 text-blue-600" aria-hidden="true" />
                                    </td>
                                    <td>{l.tanggal}</td>
                                    <td>{l.uraian}</td>
                                </tr>
                                ))
                            }
                        </table>
                        </div>
                        <div className="border-b border-gray-200 w-full mx-auto mt-2 mb-4"></div>
                        <div className="w-full mt-4">
                            <p className="mb-2 text-sm">Jika kegiatan telah selesai maka klik tombol dibawah </p>
                            <button className="bg-green-600 text-white h-8 w-36 text-sm rounded shadow-md" onClick={() => handleBtnLaporan()}>Tahap Laporan</button>
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
