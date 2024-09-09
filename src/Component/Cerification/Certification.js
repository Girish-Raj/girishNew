import React, { useState } from 'react';
import './Certification.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import { FreeMode, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { data3 } from '../../Data/Data';
import VideoCard from '../VideoCard/VideoCard';

const Certification = () => {
  const [url, setUrl] = useState('');
  const [showVideo, setShowVideo] = useState(false);

  const handleVideo = (item) => {
    setUrl(item);  // Set the URL of the video
    setShowVideo(true);  // Show the video
  };

  return (
    <div className='Certification-container'>
      <div className='Certification-videos'>
        <Swiper
          spaceBetween={30}
          breakpoints={{
            340: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            700: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
          freeMode={true}
          pagination={{
            clickable: true,
            el: '.upcomingEvent-pagination',
          }}
          modules={[FreeMode, Pagination]}
        >
          {data3 && data3.map((ele, index) => (
            <SwiperSlide key={index}>
              <div
                className="Certification-subVideo"
                onClick={() => handleVideo(ele.youtubeLink)}
                style={{ backgroundImage: `url(${ele.url})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
              >
                {/* Add content related to the certification here */}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="upcomingEvent-pagination"></div>

      <VideoCard url={url} showVideo={showVideo} setShowVideo={setShowVideo} />
     

  
    </div>
  );
};

export default Certification;
