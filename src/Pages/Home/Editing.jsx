import { SiAdobepremierepro } from "react-icons/si";
import { SiAdobeaftereffects } from "react-icons/si";
import { IoFilmOutline } from "react-icons/io5";


import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Editing = () => {
  useEffect(() => {
    Aos.init({ duration: "1000", delay: "500" });
  }, []);

  return (
    <div className="mb-20">
      <div
        className="text-center space-y-5"
        data-aos="zoom-in"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
      >
        <h1 className="w-8/12 mx-auto text-3xl md:text-5xl font-extrabold text-indigo-950 mt-14">
          <span className="">My</span>
          <span className="text-red-500"> Video Editing </span>
          <span className="">Softwares</span>
        </h1>

      
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-10 w-7/12 mx-auto mt-20">
        <div
          className="bg-blue-500 p-2 shadow-xl"
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1500"
          data-aos-easing="ease-in-out"
        >
          <div className="border-l-4 border-red-500 space-y-3">
            <div className="ml-5 space-y-3">
              <span className="text-4xl text-indigo-950 ">
              <SiAdobepremierepro />
              </span>
              <h4 className="text-indigo-950 font-extrabold text-xl">Adobe Premiere Pro</h4>
            </div>
          </div>
          <div className="space-y-3 mt-5 ml-5">
            <h2 className="text-md font-semibold text-black">
              With over 2 years of<br /> experience
              in video editing <br /> I am using Adobe Premiere Pro
              To make cool, attractive and amazing Cinematic Video.
              <br /> with beautiful effect, transition and motion graphics
            </h2>        
          </div>
        </div>

        <div
          className="bg-blue-500 p-2 shadow-xl"
          data-aos="fade-down"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1500"
          data-aos-easing="ease-in-out"
        >
          <div className="border-l-4 border-red-500 space-y-3">
            <div className="ml-5 space-y-3">
              <span className="text-4xl text-indigo-950 ">
              <SiAdobeaftereffects />
              </span>
              <h4 className="text-indigo-950 font-extrabold text-xl">
                Adobe After Effect
              </h4>
            </div>
          </div>
          <div className="space-y-3 mt-5 ml-5">
          <h2 className="text-md font-semibold text-black">
              With over 2 years of<br /> experience
              in video editing <br /> I am using Adobe Premiere Pro
              To make cool, attractive and amazing Cinematic Video.
              <br /> with beautiful effect, transition and motion graphics
            </h2>
          </div>
        </div>

        <div
          className="bg-blue-500 p-2 shadow-xl"
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1500"
          data-aos-easing="ease-in-out"
        >
          <div className="border-l-4 border-red-500 space-y-3 ">
            <div className="ml-5 space-y-3">
              <span className="text-4xl text-indigo-950">
              <IoFilmOutline />
              </span>
              <h4 className="text-indigo-950 font-extrabold text-xl">
                Filmora
              </h4>
            </div>
          </div>
          <div className="space-y-3 mt-5 ml-5">
          <h2 className="text-md font-semibold text-black">
              With over 2 years of<br /> experience
              in video editing <br /> I am using Filmora software <br />
              To make cool, attractive and amazing Cinematic Video.
              <br /> with beautiful effect, transition and motion graphics
            </h2>
          </div>
        </div>

       
      </div>
    </div>
  );
};

export default Editing;
