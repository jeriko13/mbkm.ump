import React, {useState, useEffect, Fragment} from 'react';
import SwiperCore, { Navigation, Pagination, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Axios from 'axios';
import {API_URL} from '../config/config';
import {
    useParams
  } from "react-router-dom";

// swiper bundle styles
import 'swiper/swiper-bundle.min.css'

// swiper core styles
import 'swiper/swiper.min.css'

// modules styles
import 'swiper/components/navigation/navigation.min.css'
import 'swiper/components/pagination/pagination.min.css'

const swipperData = [
    {
        id : 1,
        bg : "https://drive.google.com/uc?export=view&id=1Z0Iz9bhnC3W_xD318DxuRcB12VXcd-2F",
        url : "https://ump.ac.id",
    },
    {
        id : 2,
        bg : "https://drive.google.com/uc?export=view&id=1Z0Iz9bhnC3W_xD318DxuRcB12VXcd-2F",
        url : "https://ump.ac.id",
    },
    {
        id : 3,
        bg : "https://drive.google.com/uc?export=view&id=1Z0Iz9bhnC3W_xD318DxuRcB12VXcd-2F",
        url : "https://ump.ac.id",
    },
]

SwiperCore.use([Autoplay, Navigation, Pagination, A11y]);

export default function Swipper() {

    let { id } = useParams();

    const [dataBackground,setDataBackground] = useState([]);

    useEffect(() => {
        checkBackground()
      }, []);
    
      const checkBackground = () => {
        console.log(id);
        try {
          Axios.get(`${API_URL}/mbkm_web_api/api/list/t_background`)
            .then(res => {
            
              const data = res.data;
              setDataBackground(data.t_background);
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
        <Swiper
            spaceBetween={0}
            slidesPerView={1}
            navigation
            autoplay={{ 
                delay: 3000,
                disableOnInteraction: false
            }}
            pagination={{ clickable: true }}
            loop
            className="mt-24 mb-10"
        >

            {dataBackground.map((background => 
                <SwiperSlide>
                    <a href={background.background_id } >
            <img className="w-full h-auto" src={`${background.ubah_background.url}`} alt="Workflow" />
            
            </a>
                </SwiperSlide>
            ))}

            {/* {swipperData.map((swipper => 
                <SwiperSlide>
                    <a href={swipper.url}>
                        <img className="w-full h-auto" src={swipper.bg} alt="Workflow" />
                    </a>
                </SwiperSlide>
            ))} */}
        </Swiper>
      </>
    )
};

