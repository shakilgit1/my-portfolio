import { FaCss3, FaHtml5, FaJs, FaNodeJs, FaReact } from "react-icons/fa6";
import { SiMongodb } from "react-icons/si";

import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Skills = () => {
  useEffect(() => {
    Aos.init({ duration: "1000", delay: "500" });
  }, []);

  return (
    <div className="mb-20">
      <div
        className="text-center space-y-5"
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
      >
        <h1 className="text-3xl md:text-5xl font-extrabold text-indigo-950 mt-8">
          <span className="">Language</span>
          <span className="text-blue-700"> Tools and Technology</span> <br />
          <span className="">That I know and use</span>
        </h1>

        {/* <p data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
         className="text-md font-semibold text-black">
          With over one year of hands-on experience, I have successfully
          developed a diverse range of software projects <br /> across various
          categories. Heres a glimpse of my primary technical skills and the
          technologies I wield. <br /> For a more in-depth exploration of my journey,
          feel free to peruse <br /> my online resume and project portfolio
        </p> */}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-10 w-7/12 mx-auto mt-20">
        <div
          data-aos="flip-left"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1500"
          data-aos-easing="ease-in-out"
        >
          <div className="border-l-4 border-blue-500 space-y-3 ">
            <div className="ml-5 space-y-3">
              <span className="text-4xl text-indigo-950 ">
                <FaReact></FaReact>
              </span>
              <h4 className="text-indigo-950 font-extrabold text-xl">React</h4>
            </div>
          </div>
          <div className="space-y-3 mt-5 ml-5">
            <h2 className="text-md font-semibold text-black">
              Leveraging React power, I excel <br /> in building dynamic and
              intuitive user interfaces. My expertise extends to state
              management, component architecture, and optimizing performance for
              cutting-edge web applications <br /> for User Interfaces
            </h2>
           
          </div>
        </div>

        <div
          data-aos="fade-down"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1500"
          data-aos-easing="ease-in-out"
        >
          <div className="border-l-4 border-blue-500 space-y-3">
            <div className="ml-5 space-y-3">
              <span className="text-4xl text-indigo-950 ">
                <FaNodeJs></FaNodeJs>
              </span>
              <h4 className="text-indigo-950 font-extrabold text-xl">
                Node.js
              </h4>
            </div>
          </div>
          <div className="space-y-3 mt-5 ml-5">
            <h2 className="text-md font-semibold text-black">
              Harnessing the power of Node.js, I excel in server-side
              development, building scalable and efficient applications.My
              expertise in Node.js ensures robust and responsive back-end
              solutions
            </h2>
          
          </div>
        </div>

        <div
          data-aos="flip-up"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1500"
          data-aos-easing="ease-in-out"
        >
          <div className="border-l-4 border-blue-500 space-y-3 ">
            <div className="ml-5 space-y-3">
              <span className="text-4xl text-indigo-950">
                <SiMongodb />
              </span>
              <h4 className="text-indigo-950 font-extrabold text-xl">
                MongoDB
              </h4>
            </div>
          </div>
          <div className="space-y-3 mt-5 ml-5">
            <h2 className="text-md font-semibold text-black">
              In the realm of MongoDB, I specialize in crafting efficient and
              scalable database solutions. My expertise extends to data
              modeling, querying, and ensuring optimal performance, providing a
              solid foundation for data-driven applications.
            </h2>
           
          </div>
        </div>

        <div
          data-aos="fade-down"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1500"
          data-aos-easing="ease-in-out"
        >
          <div className="border-l-4 border-blue-500 space-y-3 ">
            <div className="ml-5 space-y-3">
              <span className="text-4xl text-indigo-950 ">
                <FaJs></FaJs>
              </span>
              <h4 className="text-indigo-950 font-extrabold text-xl">
                Vanilla JavaScript
              </h4>
            </div>
          </div>
          <div className="space-y-3 mt-5 ml-5">
            <h2 className="text-md font-semibold text-black">
              Mastering Vanilla JavaScript for seamless client-side
              interactions, I specialize in crafting efficient and scalable web
              applications, ensuring clean and optimized code for robust user
              experiences.
            </h2>
            
          </div>
        </div>
        <div
          data-aos="flip-up"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1500"
          data-aos-easing="ease-in-out"
        >
          <div className="border-l-4 border-blue-500 space-y-3 ">
            <div className="ml-5 space-y-3">
              <span className="text-4xl text-indigo-950 ">
                <FaHtml5></FaHtml5>
              </span>
              <h4 className="text-indigo-950 font-extrabold text-xl">Html 5</h4>
            </div>
          </div>
          <div className="space-y-3 mt-5 ml-5">
            <h2 className="text-md font-semibold text-black">
              Mastery of HTML5 features and elements. Accessibility practices
              for creating inclusive web content. Understanding of SEO-friendly
              markup.
            </h2>
         
          </div>
        </div>

        <div
          className=""
          data-aos="zoom-in-up"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1500"
          data-aos-easing="ease-in-out"
        >
          <div className="border-l-4 border-blue-500 space-y-3 ">
            <div className="ml-5 space-y-3">
              <span className="text-4xl text-indigo-950 ">
                <FaCss3></FaCss3>
              </span>
              <h4 className="text-indigo-950 font-extrabold text-xl">Css 3</h4>
            </div>
          </div>
          <div className="space-y-3 mt-5 ml-5">
            <h2 className="text-md font-semibold text-black">
              Proficiency in CSS3 features such as Flexbox and Grid for advanced
              layout. Responsive design techniques using media queries. CSS
              preprocessors like Sass for efficient and maintainable styles
            </h2>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
