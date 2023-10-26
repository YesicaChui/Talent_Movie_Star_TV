import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import './Reels.css'
import { obtenerVideosPelicula } from "../../services/servicesProvider";
const images = [
  {
    label: 'Image 1',
    imgPath: 'https://lh5.googleusercontent.com/xo6zDzj4Mq8JTuh31DRdzWPkmeekU1ykdvy7gmdGNkBnVzHoULgCA_MpL1ybOV2GKEkbvmswUl0iQW0lvnNQe3gqOFi_-bbt3MBzOAla29FvVN753jPZS87Bn7HyXoQ-dwA-ioYg',
    alt: 'image1'
  },
  {
    label: 'Image 2',
    imgPath: 'https://cdn.thomasnet.com/insights-images/eaf2ea91-c0ca-488d-ab63-af480b6f78cb/750px.png',
    alt: 'image2'
  },
  {
    label: 'Image 3',
    imgPath: 'https://moneyinc.com/wp-content/uploads/2018/11/Willow-750x500.jpg',
    alt: 'image3'
  },
  {
    label: 'Image 4',
    imgPath: 'https://japan.stripes.com/sites/default/files/styles/community_site_carousel_750x500/public/article-images/main_13.jpg?itok=_GELFbpY',
    alt: 'image4'
  }
];

const datos = ['melon', 'pera', 'platano', 'naranja', 'mandarina', 'piña']

export const Reels = () => {
  const [videoData, setVideoData] = useState(null)

  useEffect(() => {
    obtenerVideosPelicula(315162)
      .then((respuesta) => {
        console.log(respuesta)
        setVideoData(respuesta.results)
      })
  }, []);

  return (
    <>
      {!videoData ? '' : <Swiper
        loop={true}
        direction="vertical" // Habilitar el desplazamiento vertical
        slidesPerView={1}
        spaceBetween={30}
        navigation // Mostrar navegación
        pagination={{ clickable: true }} // Habilitar paginación clickeable
      >
        {videoData.map((elemento, index) => (
          <SwiperSlide key={index}>
            <div className='boxVideo'>
              <iframe 
              className="miVideoReel" 
              src={`https://www.youtube.com/embed/${elemento.key}?si=MjRBwnTjJ4joUAjp`} 
              title="YouTube video player" 
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>

          </SwiperSlide>
        ))}
      </Swiper>}

    </>

  );
};