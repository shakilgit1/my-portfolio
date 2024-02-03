import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import ScrollToTop from "../../hooks/scrollTop";

const About = () => {

  useEffect(() => {
    Aos.init({ duration: "1000", delay: "500" });
  }, []);

    return (
        <div className="">
          <ScrollToTop></ScrollToTop>
          {/* <h2 className="text-6xl text-center font-bold my-8">About Me</h2> */}
          <div className="flex flex-col gap-8 mt-8">
          <div className="w-7/12 mx-auto flex justify-center">
          <img 
            data-aos="zoom-in"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"

            src="shakil.png"
            className="w-xs md:max-w-sm bg-black rounded-full bg-opacity-20"
          />
          </div>
          <div
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          
           className="w-7/12 mx-auto text-center">
            <h1 className="text-5xl font-bold">Hi, I am Shakil</h1>
            <p className="py-6 text-xl">
             I am a <span className="text-blue-800">Web Developer</span> and <span className="text-red-500">Video Editor</span>
            </p>
            <a href="Shakil Resume.pdf" download="Shakil Resume"><button className="btn btn-primary">Download Resume</button></a>
            <p 
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"

            className="my-6 text-black">
              I am a Student of BBA (Management) at National University of Bangladesh.
              I love to build and develop website. <br /> And I am also a Video Editor. I Specially make and edit Short ads videos. 
              <br /> Feel free to contact me about your projects.
            </p>
          </div>
        </div>
        </div>
    );
};

export default About;