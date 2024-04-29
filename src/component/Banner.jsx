import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img4 from "../assets/InImg3.jpg";
import img2 from "../assets/ThImg2.jpg";
import img3 from "../assets/img5.jpg";
import img1 from "../assets/img6.jpg";
const Banner = () => {
  return (
    <>
      {/* <Carousel className="h-[85vh] w-full ">
        <div className="h-[80vh] ">
          <img className="" src={img1} />
        </div>
        <div className="h-[80vh]">
          <img className="" src={img2} />
        </div>
        <div className="h-[80vh]">
          <img className="" src={img3} />
        </div>
        <div className="h-[80vh]">
          <img className="" src={img4} />
        </div>
      </Carousel> */}
      <Carousel className="h-[45vh] lg:h-[85vh] w-full mb-20">
        <div className="h-[40vh] lg:h-[80vh] relative">
          <img
            className="h-full w-full object-cover"
            src={img1}
            alt="Image 1"
          />
        </div>
        <div className="h-[40vh] lg:h-[80vh] relative">
          <img
            className="h-full w-full object-cover"
            src={img2}
            alt="Image 2"
          />
        </div>
        <div className="h-[40vh] lg:h-[80vh] relative">
          <img
            className="h-full w-full object-cover"
            src={img3}
            alt="Image 3"
          />
        </div>
        <div className="h-[40vh] lg:h-[80vh]] relative">
          <img
            className="h-full w-full object-cover"
            src={img4}
            alt="Image 4"
          />
        </div>
      </Carousel>
    </>
  );
};

export default Banner;
