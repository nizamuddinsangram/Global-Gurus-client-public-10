import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import img5 from "../../assets/banner/bangladesh2.jpg";
import img1 from "../../assets/banner/bangladesh3.jpg";
import img2 from "../../assets/banner/bangladesh4.jpg";
import img3 from "../../assets/banner/bangladesh5.jpg";
import img4 from "../../assets/banner/bangladesh6.jpg";
import "./slider.css";

const AllTouristSlider = () => {
  return (
    <div className="mt-10">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={img1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img5} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default AllTouristSlider;
