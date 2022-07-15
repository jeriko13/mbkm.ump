import React, {useState, useEffect} from 'react';
import {
    useParams
  } from "react-router-dom";
import Axios from 'axios';
import Nav from '../layouts/Nav.js';
import Footer from '../layouts/Footer.js';
import {API_URL} from '../config/config';

const daftarInformasi = [
    {
      id : 1,
      judul : 'Buku Paduan Merdeka Belajar : Kampus Merdeka',
      desc : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, odit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, consequuntur.  dolor, sit amet consectetur adipisicing elit. Quae, consequuntur.',
      slug : 'buku-paduan-merdeka-belajar-kampus-merdeka',
      tanggal : '11-10-2021'
    },
    {
      id : 2,
      judul : 'Pendaftaran Pertukaran Pelajar telah dibuka',
      desc : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum officia commodi ab impedit, ullam repellendus? , ullam repellendus?',
      slug : 'pendaftaran-pertukaran-pelajar-telah-dibuka',
      tanggal : '09-10-2021'
    },
    {
      id : 3,
      judul : 'Mahasiswa boleh melakukan Praktik kerja',
      desc : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam, earum! Unde vero qui quis repudiandae eaque.  vero qui quis repudiandae eaque.',
      slug : 'mahasiswa-boleh-melakukan-praktik-kerja',
      tanggal : '28-09-2021'
    },
    {
      id : 4,
      judul : 'Persyaratan magang tahun 2021',
      desc : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam, earum! Unde vero qui quis repudiandae eaque.  vero qui quis repudiandae eaque.',
      slug : 'persyaratan-magang-tahun-2021',
      tanggal : '28-09-2021'
    }
  
  ]
export default function Informasi(props) {
  let { id } = useParams();

    const [dataInformasi,setDataInformasi] = useState([]);

    useEffect(() => {
        checkInfo()
      }, []);
    
      const checkInfo = () => {
        console.log(id);
        try {
          Axios.get(`${API_URL}/mbkm_web_api/api/view/cv_informasi/${id}`)
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

    /* let { slug } = useParams();
    const [informasi, setInformasi] = useState({})

    useEffect(() => {
        const filterInfo = daftarInformasi.filter(data => data.slug === slug)[0];
        setInformasi(filterInfo);
    }, [slug]) */

    return (
        <div className="bg-white">
            <Nav current="Beranda"/>

            <section className="mt-64 relative py-10 bg-blueGray-800">
          <div className="container mx-auto px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
              
              <div className="px-6">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-2/12 px-4 lg:order-2 flex justify-center">
                    <div className="relative">
                   
           
            
            
                {/* {<h1 className>{informasi.judul}</h1>}
                <p>{informasi.slug}</p> */}
            </div>
           

            {/* {dataArtikel.gambar} */}
                 
                    </div>
                  </div>
                  
                  <div className="text-center mt-12">
                  <h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                  {dataInformasi.judul}
                  </h3>
                  <br></br>
                </div>
                
                 {/*  {
                    (dataArtikel.gambar) ? (
                      <img
                      alt="..."
                      src={`https://mbkm.ump.ac.id/mbkm_web_api/files/${dataArtikel.gambar.name}`}
                      className="w-full align-middle rounded-t-lg"
                    />
                    ) : <div></div>
                  }
                   */}
                 
                </div>
              
                <div className="mt-10 py-10 border-t border-blueGray-200 text-left">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 px-4">
                   {/*  <p>{dataArtikel.tanggal}</p> */}
                   {dataInformasi.tanggal}
                      <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                    {/*   {dataInformasi.informasi} */}
                   {/*  {dataArtikel.isi} */}
                   {dataInformasi.slug}
                      </p>
                      
                    </div>
                  </div>
                </div>
             
            </div>
            
          </div>
        </section>
           
            <Footer/>
        </div>

    )
}


