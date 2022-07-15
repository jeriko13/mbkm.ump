export default function ContentTentangKami(props) {
    if (props.active === 'sambutan-rektor') {
        return (
            <div className="p-6">
                <h1 className="font-medium text-xl mb-6 text-gray-900">Sambutan Rektor Universitas Muhammadiyah Purwokerto</h1>
                <img className="lg:block w-44 h-auto float-left mb-1 mr-4" src={process.env.PUBLIC_URL + '/images/rektor-ump.png'} alt="Workflow" />
                <p className="text-justify mb-3 text-gray-800">
                    Saat ini kreativitas dan inovasi menjadi kata kunci penting untuk memastikan pembangunan Indonesia yang berkelanjutan. Para mahasiswa yang saat ini belajar di Perguruan Tinggi, harus disiapkan menjadi pembelajar sejati yang terampil, lentur dan ulet (agile learner). Kebijakan Merdeka Belajar – Kampus Merdeka yang diluncurkan oleh Menteri Pendidikan dan Kebudayaan merupakan kerangka untuk menyiapkan mahasiswa menjadi sarjana yang tangguh, relevan dengan kebutuhan zaman, dan siap menjadi pemimpin dengan semangat kebangsaan yang tinggi.
                </p>
                <p className="text-justify mb-3 text-gray-800">
                    Kebijakan Merdeka Belajar – Kampus Merdeka sesuai Peraturan Mendikbud No. 3 Tahun 2020, memberikan hak kepada mahasiswa untuk 3 semester belajar di luar program studinya. Melalui program ini, terbuka kesempatan luas bagi mahasiswa untuk memperkaya dan meningkatkan wawasan serta kompetensinya di dunia nyata sesuai dengan passion dan cita-citanya. Kita meyakini, pembelajaran dapat terjadi di manapun, semesta belajar tak berbatas, tidak hanya di ruang kelas, perpustakaan dan laboratorium, tetapi juga bisa di desa, industri, tempat-tempat kerja, tempat-tempat pengabdian, pusat riset, maupun di masyarakat. Bentuk kegiatan pembelajaran yang dapat diambil oleh mahasiswa berupa: kegiatan magang di Industri, mahasiswa membangun desa, mengajar di sekolah, pertukaran mahasiswa, penelitian di lembaga riset, pengembangan kewirausahaan, proyek mandiri, dan proyek kemanusiaan.
                </p>
                <p className="text-justify mb-3 text-gray-800">
                    Dalam rangka mendukung kebijakan Merdeka Belajar – Kampus Merdeka, Kementerian Pendidikan dan Kebudayaan (Kemdikbud) telah bekerjasama dengan berbagai pemangku kepentingan, sebagai contoh adalah Nota Kesepahaman dengan Kementerian BUMN terkait Program Magang Mahasiswa Bersertifikat (PMMB) yang dapat dilakukan mahasiswa selama 1 hingga 2 semester. Hingga saat ini terdapat 118 BUMN yang tergabung dalam Forum Human Capital Indonesia, belum termasuk perusahaan-perusahaan lainnya yang telah mengadakan kerjasama dengan Kemdikbud serta perusahaan-perusahaan internasional yang ada di negara Jepang, Korea Selatan, Taiwan, dan beberapa negara lainnya.
                </p>
                <p className="text-justify mb-3 text-gray-800">
                    Dalam hal memfasilitasi kemudahan pendaftaran dan pelaporan kegiatan dalam Merdeka Belajar – Kampus Merdeka, Kemdikbud meluncurkan sistem website terintegrasi yang dapat menghubungkan data dari Pangkalan Data Pendidikan Tinggi (PDDikti) dengan pemangku kepentingan yang lain yaitu perguruan tinggi, mahasiswa dan juga mitra (dunia usaha, dunia industri, BUMN, dan lembaga lain). Diharapkan peluncuran sistem Merdeka Belajar – Kampus Merdeka dapat mempercepat dan mempermudah dalam implementasi dan pelaporan kegiatan pembelajaran Merdeka Belajar – Kampus Merdeka.
                </p>
                <p className="text-justify mb-3 text-gray-800">
                    Dr. Jebul Suroso, S.Kp., Ns., M.Kep.
                </p>
            </div>
        )
    } else if (props.active === 'kata-pengantar') {
        return (
            <div className="p-6">
                <h1 className="font-medium text-xl mb-6 text-gray-900">Kata Pengantar</h1>
                <img className="lg:block w-44 h-auto float-left mb-1 mr-4" src={process.env.PUBLIC_URL + '/images/dirjen-dikti.jpg'} alt="Workflow" />
                <p className="text-justify mb-3 text-gray-800">
                    Merdeka Belajar – Kampus Merdeka, merupakan kebijakan Menteri Pendidikan dan Kebudayaan, yang bertujuan mendorong mahasiswa untuk menguasai berbagai keilmuan yang berguna untuk memasuki dunia kerja. Kampus Merdeka memberikan kesempatan bagi mahasiswa untuk memilih mata kuliah yang akan mereka ambil. Kebijakan Merdeka Belajar - Kampus Merdeka ini sesuai dengan Permendikbud Nomor 3 Tahun 2020 tentang Standar Nasional Pendidikan Tinggi, pada Pasal 18 disebutkan bahwa pemenuhan masa dan beban belajar bagi mahasiswa program sarjana atau sarjana terapan dapat dilaksanakan: 1) mengikuti seluruh proses pembelajaran dalam program studi pada perguruan tinggi sesuai masa dan beban belajar; dan 2) mengikuti proses pembelajaran di dalam program studi untuk memenuhi sebagian masa dan beban belajar dan sisanya mengikuti proses pembelajaran di luar program studi.
                </p>
                <p className="text-justify mb-3 text-gray-800">
                    Melalui Merdeka Belajar – Kampus Merdeka, mahasiswa memiliki kesempatan untuk 1 (satu) semester atau setara dengan 20 (dua puluh) sks menempuh pembelajaran di luar program studi pada Perguruan Tinggi yang sama; dan paling lama 2 (dua) semester atau setara dengan 40 (empat puluh) sks menempuh pembelajaran pada program studi yang sama di Perguruan Tinggi yang berbeda, pembelajaran pada program studi yang berbeda di Perguruan Tinggi yang berbeda; dan/atau pembelajaran di luar Perguruan Tinggi.
                </p>
                <p className="text-justify mb-3 text-gray-800">
                    Pembelajaran dalam Kampus Merdeka memberikan tantangan dan kesempatan untuk pengembangan kreativitas, kapasitas, kepribadian, dan kebutuhan mahasiswa, serta mengembangkan kemandirian dalam mencari dan menemukan pengetahuan melalui kenyataan dan dinamika lapangan seperti persyaratan kemampuan, permasalahan riil, interaksi sosial, kolaborasi, manajemen diri, tuntutan kinerja, target dan pencapaiannya. Sistem laman Merdeka Belajar – Kampus Merdeka dikembangkan untuk mempermudah pihak-pihak terkait yang terlibat dalam kegiatan pembelajaran Kampus Merdeka, mulai dari registrasi sampai dengan pelaporan kegiatan dan hasil pembelajaran. Integrasi data perguruan tinggi dan mahasiswa dengan Pangkalan Data Pendidikan Tinggi (PDDIKTI) memastikan bahwa hanya mahasiswa aktif terdaftar di PDDIKTI dan memenuhi persyaratan umum sesuai buku panduan Merdeka Belajar – Kampus Merdeka yang bisa registrasi dan melaporkan kegiatan pembelajaran di sistem ini.
                </p>
                <p className="text-justify mb-3 text-gray-800">
                    Melalui laman ini mahasiswa dapat mendaftar dan mengikuti seleksi magang dan pertukaran mahasiswa secara online. Laman ini juga dilengkapi dengan journal/log book yang akan diisi oleh para siswa magang dengan tiga kategori. Hal ini akan melatih mahasiswa untuk menuliskan apa saja yang mereka dapatkan di industri semudah menulis di sosial media namun tetap berbobot. Isi dari journal/log book ini akan menjadi bagian dari penilaian dan akan terus dipantau untuk menunjukan perkembangan dari siswa magang tersebut. Dengan pengalaman, pengetahuan, dan ketrampilan yang diperoleh selama magang, diharapkan mahasiswa akan lebih siap dan kompeten dalam memasuki dunia kerja nantinya. Selain itu, laman ini nantinya juga memfasilitasi program pertukaran mahasiswa antar perguruan tinggi di Indonesia dan perguruan tinggi di luar negeri, proyek di desa, serta kesempatan-kesempatan belajar di luar kampus lainnya.
                </p>
                <p className="text-justify mb-3 text-gray-800">
                    Prof. Ir. Nizam, M.Sc., DIC, Ph.D
                </p>
            </div>
        )
    } else if (props.active === 'landasan-hukum') {
        return (
            <div className="p-6">
                <h1 className="font-medium text-xl mb-6 text-gray-900">Landasan Hukum</h1>
                <p className="text-justify mb-3 text-gray-800">
                    Merdeka Belajar – Kampus Merdeka, merupakan kebijakan Menteri Pendidikan dan Kebudayaan, yang bertujuan mendorong mahasiswa untuk menguasai berbagai keilmuan yang berguna untuk memasuki dunia kerja. Kampus Merdeka memberikan kesempatan bagi mahasiswa untuk memilih mata kuliah yang akan mereka ambil. Kebijakan Merdeka Belajar - Kampus Merdeka ini sesuai dengan Permendikbud Nomor 3 Tahun 2020 tentang Standar Nasional Pendidikan Tinggi, pada Pasal 18 disebutkan bahwa pemenuhan masa dan beban belajar bagi mahasiswa program sarjana atau sarjana terapan dapat dilaksanakan: 1) mengikuti seluruh proses pembelajaran dalam program studi pada perguruan tinggi sesuai masa dan beban belajar; dan 2) mengikuti proses pembelajaran di dalam program studi untuk memenuhi sebagian masa dan beban belajar dan sisanya mengikuti proses pembelajaran di luar program studi.
                </p>
                <p className="text-justify mb-3 ml-4 text-gray-800">
                    <ol className="list-decimal">
                        <li>Undang-Undang Nomor 20 Tahun 2003, tentang Sistem Pendidikan Nasional.</li>
                        <li>Undang-Undang Nomor 12 Tahun 2012, tentang Pendidikan Tinggi.</li>
                        <li>Undang-Undang Nomor 6 Tahun 2014, tentang Desa.</li>
                        <li>Peraturan Pemerintah Nomor 04 Tahun 2014, tentang Penyelenggaraan Pendidikan Tinggi dan Pengelolaan Perguruan Tinggi.</li>
                        <li>Peraturan Presiden nomor 8 tahun 2012, tentang KKNI.</li>
                        <li>Peraturan Menteri Desa, Pembangunan Daerah Tertinggal, dan Transmigrasi Nomor 11 Tahun 2019, tentang Prioritas Penggunaan Dana Desa Tahun 2020.</li>
                        <li>Peraturan Menteri Desa, Pembangunan Daerah Tertinggal, dan Transmigrasi Nomor 16 Tahun 2019, tentang Musyawarah Desa.</li>
                        <li>Peraturan Menteri Desa, Pembangunan Daerah Tertinggal, dan Transmigrasi Nomor 17 Tahun 2019, tentang Pedoman Umum Pembangunan dan Pemberdayaan Masyarakat Desa</li>
                        <li>Peraturan Menteri Desa, Pembangunan Daerah Tertinggal, dan Transmigrasi Nomor 18 Tahun 2019, tentang Pedoman Umum Pendampingan Masyarakat Desa</li>
                    </ol>
                </p>
            </div>
        )
    } else if (props.active === 'latar-belakang') {
        return (
            <div className="p-6">
                <h1 className="font-medium text-xl mb-6 text-gray-900">Latar Belakang</h1>
                <p className="text-justify mb-3 text-gray-800">Dalam rangka menyiapkan mahasiswa menghadapi perubahan sosial, budaya, dunia kerja dan kemajuan teknologi yang pesat, kompetensi mahasiswa harus disiapkan untuk lebih gayut dengan kebutuhan zaman. Link and match tidak saja dengan dunia industri dan dunia kerja tetapi juga dengan masa depan yang berubah dengan cepat. Perguruan Tinggi dituntut untuk dapat merancang dan melaksanakan proses pembelajaran yang inovatif agar mahasiswa dapat meraih capaian pembelajaran mencakup aspek sikap, pengetahuan, dan keterampilan secara optimal dan selalu relevan.</p>
                <p className="text-justify mb-3 text-gray-800">Kebijakan Merdeka Belajar - Kampus Merdeka diharapkan dapat menjadi jawaban atas tuntutan tersebut. Kampus Merdeka merupakan wujud pembelajaran di perguruan tinggi yang otonom dan fleksibel sehingga tercipta kultur belajar yang inovatif, tidak mengekang, dan sesuai dengan kebutuhan mahasiswa. Program utama yaitu: kemudahan pembukaan program studi baru, perubahan sistem akreditasi perguruan tinggi, kemudahan perguruan tinggi negeri menjadi PTN berbadan hukum, dan hak belajar tiga semester di luar program studi. Mahasiswa diberikan kebebasan mengambil SKS di luar program studi, tiga semester yang di maksud berupa 1 semester kesempatan mengambil mata kuliah di luar program studi dan 2 semester melaksanakan aktivitas pembelajaran di luar perguruan tinggi.</p>
                <p className="text-justify mb-3 text-gray-800">Berbagai bentuk kegiatan belajar di luar perguruan tinggi, di antaranya melakukan magang/ praktik kerja di Industri atau tempat kerja lainnya, melaksanakan proyek pengabdian kepada masyarakat di desa, mengajar di satuan pendidikan, mengikuti pertukaran mahasiswa, melakukan penelitian, melakukan kegiatan kewirausahaan, membuat studi/ proyek independen, dan mengikuti program kemanusisaan. Semua kegiatan tersebut harus dilaksanakan dengan bimbingan dari dosen. Kampus merdeka diharapkan dapat memberikan pengalaman kontekstual lapangan yang akan meningkatkan kompetensi mahasiswa secara utuh, siap kerja, atau menciptakan lapangan kerja baru.</p>
                <p className="text-justify mb-3 text-gray-800">Proses pembelajaran dalam Kampus Merdeka merupakan salah satu perwujudan pembelajaran yang berpusat pada mahasiswa (student centered learning) yang sangat esensial. Pembelajaran dalam Kampus Merdeka memberikan tantangan dan kesempatan untuk pengembangan inovasi, kreativitas, kapasitas, kepribadian, dan kebutuhan mahasiswa, serta mengembangkan kemandirian dalam mencari dan menemukan pengetahuan melalui kenyataan dan dinamika lapangan seperti persyaratan kemampuan, permasalahan riil, interaksi sosial, kolaborasi, manajemen diri, tuntutan kinerja, target dan pencapaiannya. Melalui program merdeka belajar yang dirancang dan diimplementasikan dengan baik, maka hard dan soft skills mahasiswa akan terbentuk dengan kuat.</p>
                <p className="text-justify mb-3 text-gray-800">Program Merdeka Belajar - Kampus Merdeka diharapkan dapat menjawab tantangan Perguruan Tinggi untuk menghasilkan lulusan yang sesuai perkembangan zaman, kemajuan IPTEK, tuntutan dunia usaha dan dunia industri, maupun dinamika masyarakat.</p>
            </div>
        )
    } else if (props.active === 'tujuan') {
        return (
            <div className="p-6">
                <h1 className="font-medium text-xl mb-6 text-gray-900">Tujuan</h1>
                <p className="text-justify mb-3 text-gray-800">
                    Tujuan kebijakan Merdeka Belajar - Kampus Merdeka, program “hak belajar tiga semester di luar program studi” adalah untuk meningkatkan kompetensi lulusan, baik soft skills maupun hard skills, agar lebih siap dan relevan dengan kebutuhan zaman, menyiapkan lulusan sebagai pemimpin masa depan bangsa yang unggul dan berkepribadian. Program-program experiential learning dengan jalur yang fleksibel diharapkan akan dapat memfasilitasi mahasiswa mengembangkan potensinya sesuai dengan passion dan bakatnya.
                </p>
            </div>
        )
    }
};
