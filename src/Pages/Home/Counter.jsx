import { useEffect, useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import Aos from "aos";
import "aos/dist/aos.css";

const Counter = () => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    Aos.init({ duration: "1000", delay: "500" });
  }, []);

  return (
    <div className="w-9/12 mx-auto">
      <div
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        className="text-center space-y-5 mt-20 my-16"
      >
        <h1 className="text-xl md:text-5xl text-zinc-950 font-semibold">
          <span className="text-blue-700 font-extrabold">Web Development</span>
        </h1>
      </div>

      <ScrollTrigger
        onEnter={() => setScroll(true)}
        onExit={() => setScroll(false)}
      >
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="200"
            data-aos-duration="1000"
            className="text-center space-y-2  "
          >
            <h3 className="text-indigo-800 text-xl font-extrabold">
              Successfully <br /> Created Projects
            </h3>
            <h1 className="text-6xl text-indigo-900 font-extrabold">
              {scroll && <CountUp start={0} end={42} duration={2} delay={0} />}
              <span className="text-4xl font-extrabold">+</span>
            </h1>
            <h4 className="text-md  text-black font-normal py-8">
              from 2023 with React Node.js <br />
              and MongoDB.
            </h4>
          </div>

          <div
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="300"
            data-aos-duration="1500"
            className="text-center space-y-2 md:border-r-2 border-blue-400 md:border-l-2  "
          >
            <h3 className="text-blue-700 text-xl font-extrabold">
              Expertise in React <br /> Node.js MongoDB Javascript
            </h3>
            <h1 className="text-6xl text-blue-700 font-extrabold flex items-center justify-center gap-1">
              <span className="mt-5">
                
              </span>
              {scroll && <CountUp start={0} end={60} duration={5} delay={0} />}

              <span className="text-2xl mt-10">%</span>
            </h1>
            <h4 className="text-md  text-black font-normal py-8">
              from 2023 with React Node.js <br />
              and MongoDB.
            </h4>
          </div>

          <div
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="400"
            data-aos-duration="2000"
            className="text-center space-y-2  "
          >
            <h3 className="text-indigo-800 text-xl font-extrabold">
              Experience <br />
              in this sector
            </h3>
            <h1 className="text-6xl text-indigo-900 font-extrabold">
              {scroll && <CountUp start={0} end={2} duration={2} delay={0} />}
              <span className="text-4xl font-extrabold">+ years</span>
            </h1>
            <h4 className="text-md  text-black font-normal py-8">
              from 2023 with React Node.js <br />
              and MongoDB.
            </h4>
          </div>
        </div>
      </ScrollTrigger>
    </div>
  );
};

export default Counter;
