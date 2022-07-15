import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom'

import Nav from '../layouts/Nav.js';
import Footer from '../layouts/Footer.js';

const daftarInformasi = [
    {
      kegiatan_id : 1,
      judul : 'Pertukaran Pelajar',
      slug : 'pertukaran-pelajar',
      deskripsi: 'Pertukaran pelajar adalah program yang memungkinkan siswa sekolah atau mahasiswa untuk merasakan pengalaman belajar di sekolah atau universitas lain. Program ini biasanya diadakan sebagai bentuk kerja sama dengan pihak sekolah atau lembaga pendidikan lain di luar negeri, meskipun ada juga yang di dalam negeri.',
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
      deskripsi: 'Asistensi mengajar di satuan pendidikan adalah bentuk kegiatan pembelajaran yang dilakukan mahasiswa secara kolaboratif di bawah bimbingan guru dan dosen pembimbing di satuan pendidikan formal. Aktivitas mengajar di satuan pendidikan ini dilaksanakan selama 1-2 semester (setara 20-40 SKS).',
      status : 'Dibuka'
    },
    {
      kegiatan_id : 4,
      judul : 'Penelitian/Riset',
      slug: 'penelitian-riset',
      deskripsi: 'Penelitian atau riset merupakan bentuk kegiatan pembelajaran untuk membangun cara berpikir kritis mahasiswa yang memiliki passion menjadi peneliti untuk lebih mendalami, memahami, dan melakukan metode riset secara lebih baik yang sangat dibutuhkan untuk berbagai rumpun keilmuan pada jenjang pendidikan tinggi. Pelaksanaan bentuk kegiatan pembelajaran penelitian dapat dilaksanakan selama 1-2 semester dan memperoleh pengakuan yang setara dengan 20 sks pada setiap semesternya.',
      status : 'Dibuka'
    },
    {
      kegiatan_id : 5,
      judul : 'Kegiatan Wirausaha',
      slug: 'kegiatan-wirausaha',
      deskripsi: 'Wirausaha merupakan kegiatan mahasiswa yang memberikan kesempatan menciptakan aktivitas usaha melalui analisis kebutuhan dan peluang pasar. Bentuk pembelajaran wirausaha berupa praktik langsung berwirausaha yang dilakukan secara terencana dan terprogram. Kegiatan wirausaha dapat berwujud produk atau layanan jasa.',
      status : 'Dibuka'
    },
    {
      kegiatan_id : 6,
      judul : 'Praktik Kerja',
      slug: 'praktik-kerja',
      deskripsi: 'Praktik Kerja adalah bentuk kegiatan pembelajaran yang memberikan wawasan dan pengalaman praktis kepada mahasiswa mengenai kegiatan riil di dunia industri, dunia usaha, dan dunia kerja (IDUKA) (bukan di satuan pendidikan) yang dilaksanakan selama 1-2 semester (setara 20-40 sks).',
      status : 'Dibuka'
    },
    {
      kegiatan_id : 7,
      judul : 'Studi/Proyek Independen',
      slug: 'studi-independen',
      deskripsi: 'Studi/Proyek Independen merupakan bentuk pembelajaran yang mengakomodasi kegiatan mahasiswa yang memiliki passion untuk mewujudkan karya besar yang dilombakan di tingkat nasional dan internasional atau karya dari ide  yang  inovatif.  Studi/proyek independen menjadi pelengkap dari kurikulum yang  sudah diambil  oleh mahasiswa. Pihak universitas atau fakultas menjadikan studi independen untuk  melangkapi topik yang tidak termasuk dalam jadwal perkuliahan, tetapi masih tersedia dalam silabus program studi atau fakultas. Kegiatan proyek independent dapat dilakukan dalam bentuk kerja kelompok lintas disiplin keilmuan. Ekuivalensi kegiatan studi independen ke dalam mata kuliah dihitung  berdasarkan  kontribusi  dan peran  mahasiswa  yang  dibuktikan  dalam  aktivitas  di bawah koordinasi dosen pembimbing.',
      status : 'Dibuka'
    },
    {
      kegiatan_id : 8,
      judul : 'Membangun Desa/KKNT',
      slug: 'membangun-desa-kknt',
      deskripsi: 'Membangun Desa/Kuliah Kerja Nyata Tematik (KKNT) merupakan suatu bentuk pendidikan dengan cara memberikan pengalaman belajar kepada mahasiswa untuk hidup di tengah masyarakat di luar kampus dan secara langsung bersama-sama masyarakat mengidentifikasi potensi serta menangani masalah sehingga diharapkan mampu mengembangkan potensi desa/daerah dan meramu solusi untuk masalah yang ada di desa. Kegiatan Membangun Desa/KKNT diharapkan dapat mengasah soft skill kemitraan, kerja sama tim lintas disiplin/keilmuan (lintas kompetensi), dan leadership mahasiswa dalam mengelola program pembangunan di wilayah pedesaan. Sejauh ini, perguruan tinggi sudah menjalankan program Membangun Desa/KKNT, hanya saja Satuan Kredit Semester (SKS) belum diakui sesuai dengan program kampus merdeka yang pengakuan kreditnya setara enam bulan atau 20 SKS berdasarkan beberapa model pelaksanaan. Setelah pelaksanaan Membangun Desa/KKNT, mahasiswa dapat menuliskan hal-hal yang dilakukan beserta hasilnya.',
      status : 'Dibuka'
    }
  
  ]

export default function Program() {
    let { slug } = useParams();
    const [dataProgram, setDataProgram] = useState(null);
    useEffect(() => {
        const getDetailProgram = () => {
            const filterProgram = daftarInformasi.filter(res => res.slug === slug)[0];
            setDataProgram(filterProgram);
        }
        getDetailProgram();
      })
    return (
        <div className="bg-white">
            <Nav current="Program"/>
            <div className="my-20">
                <div className="w-full mx-auto mb-10">
                    <h1 className="text-center font-medium text-2xl text-ump-1">{(dataProgram != null) ? dataProgram.judul : ''}</h1>
                    <div className="flex justify-evenly my-4 py-2 items-stretch flex-wrap w-11/12 sm:w-10/12 md:w-6/12 mx-auto">
                        <p className="text-center">{(dataProgram != null) ? dataProgram.deskripsi : ''}</p>
                    </div>
                    {/* <a href={(dataProgram != null) ? '/program/'+dataProgram.slug+'/daftar' : '/'} className="bg-blue-600 text-base font-medium mx-auto text-center text-white rounded-md block w-16 h-8 leading-8">Daftar</a> */}
                </div>
            </div>
            <Footer/>
        </div>
    )
}


