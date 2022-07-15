import React, {useState, useEffect, Fragment} from 'react';
import { ChevronDownIcon } from '@heroicons/react/outline';
import {
  useParams
} from "react-router-dom";
import Axios from 'axios';
import Nav from '../layouts/Nav.js';
import Swipper from '../layouts/Swipper.js';
import Footer from '../layouts/Footer.js';
import {API_URL} from '../config/config';

const daftarInformasi = [
  {
    id : 1,
    judul : 'Buku Paduan Merdeka Belajar : Kampus Merdeka',
    slug : 'buku-paduan-merdeka-belajar-kampus-merdeka',
    tanggal : '11-10-2021'
  },
  {
    id : 2,
    judul : 'Pendaftaran Pertukaran Pelajar telah dibuka',
    slug : 'pendaftaran-pertukaran-pelajar-telah-dibuka',
    tanggal : '09-10-2021'
  },
  {
    id : 3,
    judul : 'Mahasiswa boleh melakukan Praktik kerja',
    slug : 'mahasiswa-boleh-melakukan-praktik-kerja',
    tanggal : '28-09-2021'
  },
  {
    id : 4,
    judul : 'Persyaratan magang tahun 2021',
    slug : 'persyaratan-magang-tahun-2021',
    tanggal : '28-09-2021'
  }

]



export default function Beranda() {
  
  let { id } = useParams();

    const [dataArtikel,setDataArtikel] = useState([]);

    useEffect(() => {
        checkArtikel()
      }, []);
    
      const checkArtikel = () => {
        console.log(id);
        try {
          Axios.get(`${API_URL}/mbkm_web_api/api/list/cv_artikel`)
            .then(res => {
            
              const data = res.data;
              setDataArtikel(data.cv_artikel);
              console.log(data);
            })
            .catch(function (error) {
              // handle error
              console.log(error);
            })
        } catch (error) {
          console.log(error);
        }
      }


     

    const [dataInformasi,setDataInformasi] = useState([]);

    useEffect(() => {
        checkInfo()
      }, []);
    
      const checkInfo = () => {
        console.log(id);
        try {
          Axios.get(`${API_URL}/mbkm_web_api/api/list/cv_informasi`)
            .then(res => {
            
              const data = res.data;
              setDataInformasi(data.cv_informasi);
              console.log(data);
            })
            .catch(function (error) {
              // handle error
              console.log(error);
            })
        } catch (error) {
          console.log(error);
        }
      }

      const [dataTanya,setDataTanya] = useState([]);

      useEffect(() => {
          checkTanya()
        }, []);
      
        const checkTanya = () => {
          console.log(id);
          try {
            Axios.get(`${API_URL}/mbkm_web_api/api/list/cv_tanya`)
              .then(res => {
              
                const data = res.data;
                setDataTanya(data.cv_tanya);
                console.log(data);
              })
              .catch(function (error) {
                // handle error
                console.log(error);
              })
          } catch (error) {
            console.log(error);
          }
        }
return (
  <>
  <div className="bg-white">
    <Nav current="Beranda"/>
    <Swipper/>
    <div className="w-full mx-auto mb-10">
        <h1 className="text-center font-medium text-2xl text-ump-1">Informasi Terkini</h1>
        <div className="flex justify-evenly mt-4 py-2 items-stretch flex-wrap">
        {
          dataInformasi.map((informasi => 
            <a href={'/informasi/'+ informasi.informasi_id } className="bg-blue-50 w-11/12 md:w-5/12 lg:w-1/5 rounded-md p-4 shadow-lg relative pb-11 mb-4">
              <h1 className="text-center font-medium text-base">{informasi.judul}</h1>
              <div className="absolute bottom-3 right-0 left-0">
                <span className="bg-blue-0 text-gray-600 block w-20 h-6 leading-6 mx-auto text-sm rounded-sm text-center border-t border-b">{informasi.tanggal}</span>
              </div>
            </a>
          ))
        }
        </div>
        <div className="text-center">
          <a href className="text-center mb-6 font-medium text-md bg-blue-600 text-white block w-40 h-10 leading-10 mx-auto rounded-md">Informasi Lainnya</a>
        </div>
    </div>

    <div className="mb-10">
      <div className="bg-blue-200 py-6 bg-contain bg-no-repeat bg-right-top bg-blend-soft-light bg-fixed" style={{
              backgroundImage: `url(${process.env.PUBLIC_URL + '/images/pattern.png'})`,
            }}>
        <h1 className="text-center mb-2 font-medium text-2xl text-ump-1">Sekilas tentang MBKM</h1>
        <div className="border-b-2 border-ump-1 w-52 mx-auto mb-4"></div>
        <div className="flex flex-col lg:flex-row w-full sm:w-11/12 md:w-10/12 lg:w-9/12 justify-center items-center mx-auto">
          <div className="flex-1 p-4">
            <img className="h-auto w-full rounded-md" src={process.env.PUBLIC_URL + '/images/sosialisasi.jpg'} alt="Workflow" />
          </div>
          <div className="flex-1 p-4">
            <h1 className="mb-2 font-medium text-lg text-ump-1">Apa itu <span className="font-semibold">Merdeka Belajar?</span></h1>
            <p className="text-gray-900 text-base text-justify">
              <span className="font-medium">Merdeka belajar</span> adalah memberi kebebasan dan otonomi kepada  lembaga pendiikan, dan merdeka  dari birokratisasi, dosen dibebaskan dari birokrasi yang berbelit serta mahasiswa diberikan  kebebasan  untuk memilih  bidang yang mereka sukai. 
            </p>
            <h1 className="mb-2 font-medium text-lg text-ump-1 mt-4">Apa itu <span className="font-semibold">Kampus Merdeka?</span></h1>
            <p className="text-gray-900 text-base text-justify">
              <span className="font-medium">Kampus Merdeka</span> merupakan bagian dari kebijakan Merdeka Belajar oleh Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi Republik Indonesia yang memberikan kesempaatan bagi mahasiswa/i untuk mengasah kemampuan sesuai bakat dan minat dengan terjun langsung ke dunia kerja sebagai persiapan karier masa depan. 
            </p>
            <h1 className="mb-2 font-medium text-lg text-ump-1 mt-4">Program MB-KM <span className="font-semibold"></span></h1>
            <p className="text-gray-900 text-base text-justify">
              <span className="font-medium">Merdeka Belajar-Kampus Merdeka (MBKM)</span> merupakan kebijakan Menteri Pendidikan dan Kebudayaan yang bertujuan mendorong mahasiswa untuk menguasai berbagai keilmuan yang berguna untuk memasuki dunia kerja. Kampus Merdeka memberikan kesempatan bagi mahasiswa untuk memilih mata kuliah yang akan mereka ambil. Kebijakan MBKM ini sesuai dengan Permendikbud Nomor 3 Tahun 2020 tentang Standar Nasional Pendidikan Tinggi.
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* berita terbaru */}
    <div className="w-full mx-auto mb-10">
      <h1 className="text-center font-medium text-2xl text-ump-1">Berita Terbaru</h1>
      <div className="flex justify-evenly mt-4 py-2 items-stretch flex-wrap">
      {
        dataArtikel.map((artikel => 
          
          <div className="bg-blue-50 w-11/12 md:w-5/12 lg:w-1/5 rounded-md shadow-lg relative overflow-hidden mb-4">
            <a href={'/Artikel/'+ artikel.artikel_id } className="bg-blue-50 w-11/12 md:w-5/12 lg:w-1/5 rounded-md p-4 shadow-lg relative pb-11 mb-4">
            <img className="w-full h-auto" src={`${artikel.gambar.url}`} alt="Workflow" />
            <div className="p-4 ">
              <h1 className="font-medium text-base text-gray-900">{artikel.judul}</h1>
              <span className="bg-blue-0 text-gray-600 text-sm">{artikel.tanggal}</span>
              <h1 className="font-normal text-base to-gray-800 text-justify">{artikel.isi.slice(0,50)}...</h1>
            </div>
            </a>
          </div>
         
        ))
      }
      </div>
  
     
    </div>

    {/* pertanyaan umum */}
    <div className="w-full px-1 mx-auto mb-10 bg-blue-100 py-6">
      <h1 className="text-center font-medium text-2xl text-ump-1">Pertanyaan Umum</h1>
      {/* <div className="w-full sm:w-11/12 md:w-10/12 my-4 justify-center items-center mx-auto">
      {
        dataTanya.map((tanya => 
        <details className="text-base rounded-md bg-white p-4 text-gray-900 shadow-md mb-1">
          <summary className="font-medium list-none flex justify-between">
        
          
           <h1>{tanya.pertanyaan}</h1> 
        
           
            <ChevronDownIcon className="block h-6 w-6" aria-hidden="true" />
          </summary>
          <div className="text-sm mt-2 text-gray-800">
          <p>{tanya.isi}</p> 
          </div>
        </details>
 
 ))
} */}

        <details className="text-base rounded-md bg-white p-4 text-gray-900 shadow-md mb-1">
          <summary className="font-medium list-none flex justify-between">
            <h1>Program seperti apakah MBKM itu ?</h1>
            <ChevronDownIcon className="block h-6 w-6" aria-hidden="true" />
          </summary>
          <div className="text-sm mt-2 text-gray-800">
            <p>Program Merdeka Belajar – Kampus Merdeka adalah program yang dicanangkan oleh Menteri Pendidikan dan Kebudayaan yang bertujuan mendorong mahasiswa untu menguasai berbagai keilmuan untuk bekal memasuki dunia kerja.</p>
          </div>
        </details>
    
        <details className="text-base rounded-md bg-white p-4 text-gray-900 shadow-md mb-1">
          <summary className="font-medium list-none flex justify-between">
            <h1>Apa Latar Belakang MBKM ?</h1>
            <ChevronDownIcon className="block h-6 w-6" aria-hidden="true" />
          </summary>
          <div className="text-sm mt-2 text-gray-800">
            <p>Kampus Merdeka yang dikeluarkan Direktorat Jenderal Pendidikan Tinggi Kementerian Pendidikan dan Kebudayaan 2020 ini, kebijakan Merdeka Belajar – Kampus Merdeka dilatar belakangi untuk menyiapkan mahasiswa menghadapi perubahan sosial, budaya, dunia kerja dan kemajuan teknologi yang pesat, kompetensi mahasiswa harus disiapkan untuk lebih siap dengan kebutuhan zaman.</p>
          </div>
        </details>
        <details className="text-base rounded-md bg-white p-4 text-gray-900 shadow-md mb-1">
          <summary className="font-medium list-none flex justify-between">
            <h1>Tujuan MBKM ?</h1>
            <ChevronDownIcon className="block h-6 w-6" aria-hidden="true" />
          </summary>
          <div className="text-sm mt-2 text-gray-800">
            <p>Menumbuhkan rasa cinta mahasiswa terhadap keberagaman budaya tanah air</p>
            <p>Menunjang penguatan kompetensi yang bisa menjadi bekal berharga bagi karier mahasiswa di masa mendatang;</p>
            <p>Mempersiapkan para mahasiswa untuk menjadi calon pemimpin bangsa dimasa depan dan juga mengabdi terhadap bangsa dan negara.</p>
          </div>
        </details>
      {/* </div> */}
      {/* <div className="text-center">
        <a href className="text-center mb-3 font-medium text-md bg-blue-600 text-white block w-40 h-10 leading-10 mx-auto rounded-md">Pertanyaan Lainnya</a>
      </div> */}
    </div>

    <Footer/>
  </div>
  </>

)
}