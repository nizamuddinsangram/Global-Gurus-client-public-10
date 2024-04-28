import Marquee from "react-fast-marquee";
import img3 from "../assets/rangamati.jpg";
import sajek from "../assets/sajek.jpg";
import image from "../assets/sundarban1.jpg";
const Recommended = () => {
  return (
    <div>
      <div className="text-center mt-10  mb-4 font-black text-cyan-700">
        <p className="text-4xl mb-4">
          {" "}
          Our Recommended <span className="text-lime-600">Place</span>{" "}
        </p>

        <Marquee speed={50} gradient={false}>
          <span className="text-lg text-rose-500">
            Bangladesh is one of the few countries in South Asia, which remains
            to be explored. Bangladesh has a delicate and distinctive attraction
            of its own to offer and it is definitely not a tourist haunt like
            Nepal or India. Bangladesh is like a painter's dream come true with
            a rich tapestry of colors and texture. The traditional emphasis of
            the tourist trade has always been on the material facilities offered
            by a country rather than on its actual charms. This may be a reason
            why Bangladesh has seldom been highlighted in the World's tourist
            maps.
          </span>
        </Marquee>
      </div>
      {/*  */}
      <section className="p-4 lg:p-8 bg-gray-200 ">
        <div className="container mx-auto space-y-12">
          <div className="flex flex-col text-gray-900 overflow-hidden rounded-md shadow-sm lg:flex-row">
            <img src={image} alt="" className="h-80 bg-gray-500 aspect-video" />
            <div className="flex flex-col justify-center flex-1 p-6 bg-sky-200">
              <span className="text-lg uppercase font-bold text-teal-900">
                Join, Sundarban{" "}
              </span>

              <p className="my-6 font-semibold text-teal-800">
                The Sundarbans mangrove forest, one of the largest such forests
                <br />
                in the world (140,000 ha), lies on the delta of the Ganges.
              </p>
              <button
                type="button"
                className="self-start font-bold bg-teal-500 px-2 py-1 rounded-lg text-white"
              >
                Explore Now
              </button>
            </div>
          </div>
          <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
            <img src={sajek} alt="" className="h-80 bg-gray-500 aspect-video" />
            <div className="flex flex-col justify-center flex-1 p-6 bg-sky-200">
              <span className="text-lg uppercase font-bold text-teal-900">
                Join, Sajek Velly
              </span>

              <p className="my-6 font-semibold text-teal-800">
                Sajek Valley is one of the most beautiful places in the country,
                whether it is the queen
                <br /> of the mountains or the paradise of clouds.
              </p>
              <button
                type="button"
                className="self-start font-bold bg-teal-500 px-2 py-1 rounded-lg text-white"
              >
                Explore Now
              </button>
            </div>
          </div>
          <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
            <img src={img3} alt="" className="h-80 bg-gray-500 aspect-video" />
            <div className="flex flex-col justify-center flex-1 p-6 bg-sky-200">
              <span className="text-lg uppercase font-bold text-teal-800">
                Join, Rangamati
              </span>

              <p className="my-6 font-semibold text-teal-800">
                On my last vacation, I went to Rangamati. As it is a fresh city
                and city of lakes, also one can
                <br /> get fresh fish of different variation here
              </p>
              <button
                type="button"
                className="self-start font-bold bg-teal-500 px-2 py-1 rounded-lg text-white"
              >
                Explore Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Recommended;
