import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Typical from "react-typical";

const Banner = () => {
  useEffect(() => {
    Aos.init({ duration: "1000", delay: "500" });
  }, []);

  return (
    <div className="bg-cover" style={{backgroundImage: 'url(https://i.ibb.co/c2K9nsG/2.png)'}}>
      <div className="xl:h-[70vh] flex items-center justify-center bg-black bg-opacity-70">
        <div className="w-10/12 mx-auto hero-content flex-col justify-evenly lg:flex-row-reverse">
          <img
            data-aos="zoom-in"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            src="shakil.png"
            className="w-xs bg-blue-500 md:max-w-sm rounded-full bg-opacity-20"
          />

          <div
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <h1 className="text-5xl font-bold text-blue-500">Hi, I am <span className="text-sky-400">Shakil</span></h1>

            <p className="py-6 font-bold text-2xl text-white">
              I am a{" "}
              <Typical
                className="text-red-500"
                loop={Infinity}
                wrapper="b"
                steps={["Web Developer", 2000, "Video Editor", 1000]}
              />
            </p>

            <a href="Shakil Resume.pdf" download="Shakil Resume">
              <button className="btn btn-primary">Download Resume</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
