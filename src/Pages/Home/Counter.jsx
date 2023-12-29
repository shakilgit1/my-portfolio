import { useEffect, useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import { BsCurrencyDollar } from "react-icons/bs";
import Aos from 'aos';
import 'aos/dist/aos.css';

const Counter = () => {
    const [scroll, setScroll] =  useState(false)

    useEffect(()=>{
        Aos.init({duration:'1000',delay:'500'})
    },[])

    return (
        <div className="w-9/12 mx-auto">
            <div data-aos="fade-up"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1000"
             className="text-center space-y-5 mt-20 my-16">

                <h1 className="text-xl md:text-5xl text-zinc-950 font-semibold"><span className="text-blue-700 font-extrabold">Web Development</span></h1>

            </div>

            <ScrollTrigger onEnter={() => setScroll(true)} onExit={() => setScroll(false)}>
            <div className="grid grid-cols-1 md:grid-cols-3">
                    <div
                    data-aos="fade-up"
                    data-aos-offset="200"
                    data-aos-delay="200"
                    data-aos-duration="1000"
                    className="text-center space-y-2  ">
                        <h3 className="text-indigo-800 text-xl font-extrabold">CYBER ATTACKS HAVE <br /> INCREASED BY</h3>
                        <h1 className="text-6xl text-indigo-900 font-extrabold">
                            {scroll && <CountUp start={0} end={42} duration={2} delay={0}  />}
                            <span className="text-4xl font-extrabold">%</span>
                        </h1>
                        <h4 className="text-md  text-black font-normal py-8">in 2022 with this number expected to <br /> grow year over year 1.</h4>
                    </div>

                    <div 
                    data-aos="fade-up"
                    data-aos-offset="200"
                    data-aos-delay="300"
                    data-aos-duration="1500"
                    className="text-center space-y-2 md:border-r-2 border-blue-400 md:border-l-2  ">
                        <h3 className="text-blue-700 text-xl font-extrabold">IT COST ARE EXPECTED TO <br /> INCREASE BY  </h3>
                        <h1 className="text-6xl text-blue-700 font-extrabold flex items-center justify-center gap-1">
                            <span className="mt-5"><BsCurrencyDollar /></span>
                            {scroll && <CountUp start={0} end={4.7} duration={5} delay={0} />}
                            
                            <span className="text-xs mt-10">Trillion</span>
                        </h1>
                        <h4 className="text-md  text-black font-normal py-8">worldwide in 2024 due to a <br /> combination of cloud vendor price <br /> increase and increased utilization</h4>
                    </div>

                    <div 
                    data-aos="fade-up"
                    data-aos-offset="200"
                    data-aos-delay="400"
                    data-aos-duration="2000"
                    
                    className="text-center space-y-2  ">
                        <h3 className="text-indigo-800 text-xl font-extrabold">TECHNICAL SKILL GAPS ARE <br /> GROWING WITH</h3>
                        <h1 className="text-6xl text-indigo-900 font-extrabold">
                        <span className="text-4xl font-extrabold">%</span>
                            {scroll && <CountUp start={0} end={62} duration={2} delay={0} />}
                            
                        </h1>
                        <h4 className="text-md  text-black font-normal py-8">of organizations admitting they do not <br /> have a reliable source to keep training <br /> up to date</h4>
                    </div>

                    
            </div>
            </ScrollTrigger>
        </div>
    );
};

export default Counter;