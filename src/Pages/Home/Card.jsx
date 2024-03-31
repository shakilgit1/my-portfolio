import "./box.css";
import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.png";
import img4 from "../../assets/img4.png";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Card = () => {
  useEffect(() => {
    Aos.init({ duration: "1000", delay: "500" });
  }, []);

  return (
    <div className="">
      <div className="mb-8 md:relative">
        {/* first div */}
        <div
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          className="md:h-96"
        >
          <div className="pt-8">
            <h1 className="text-xl md:text-5xl text-zinc-950 font-semibold text-center mt-8">
              My{" "}
              <span className="text-blue-700 font-semibold">
                Web Development
              </span>{" "}
              Projects
            </h1>
            <p
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              className="w-8/12 mx-auto text-md text-black text-center mt-4"
            >
              With over one year of hands-on experience, I have successfully
              developed a diverse range of software projects <br /> across
              various categories. Heres a glimpse of my primary technical skills
              and the technologies I wield. <br /> For a more in-depth
              exploration of my journey, feel free to peruse <br /> my online
              resume and project portfolio
            </p>
         
          </div>
        </div>

        {/* second div */}
        <div className="md:bg-black py-10 md:h-60" style={{backgroundImage: 'url(https://i.ibb.co/c2K9nsG/2.png)'}}>
          <div className="md:absolute md:top-60 md:inset-x-0">
            <div className="w-8/12 mx-auto gap-10 grid grid-cols-1 md:grid-cols-3 md:gap-3 lg:gap-10">
              {/* card 1 */}
              <div
              data-aos="flip-left"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"

              className="box bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 h-80 w-64 md:w-64 lg:w-80">
                <div className="z-10">
                  <div className="overflow-hidden">
                    <img
                      className="w-[235px] md:w-[300px]  hover:scale-[1.5] duration-1000"
                      src={img1}
                      alt=""
                    />
                    <Link
                      to="https://pizzan-restaurant.web.app/"
                      target="_blank"
                    >
                      <div className="flex pt-8 justify-center items-center">
                        <button className="btn btn-sm btn-primary">
                          Visit Now
                        </button>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>

              {/* card 2 */}
              <div
              data-aos="flip-right"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"

              className="box bg-gradient-to-t from-indigo-500 via-purple-500 to-pink-500 h-80 w-64 md:w-64 lg:w-80">
                <div className="z-10">
                  <div className="overflow-hidden">
                    <img
                      className="w-[235px] md:w-[300px]  hover:scale-[1.5] duration-1000"
                      src={img2}
                      alt=""
                    />
                    <Link
                      to="https://contest-hub-website.web.app/"
                      target="_blank"
                    >
                      <div className="flex pt-8 justify-center items-center">
                        <button className="btn btn-sm btn-primary">
                          Visit Now
                        </button>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>

              {/* card 3 */}
              <div 
              data-aos="flip-left"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"

              className="box bg-gradient-to-l from-indigo-500 via-purple-500 to-pink-500 h-80 w-64 md:w-64 lg:w-80">
                <div className="z-10">
                  <div className="overflow-hidden">
                    <img
                      className="w-[235px] md:w-[300px]  hover:scale-[1.5] duration-1000"
                      src={img4}
                      alt=""
                    />
                    <Link
                      to="https://social-event-management-beee2.web.app/"
                      target="_blank"
                    >
                      <div className="flex pt-8 justify-center items-center">
                        <button className="btn btn-sm btn-primary">
                          Visit Now
                        </button>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
