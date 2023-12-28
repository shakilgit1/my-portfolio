import { useState } from 'react';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

const Counter = () => {
    const [scroll, setScroll] = useState(false);
    const showScroll = () => {
        setScroll(!scroll)
    }
    
  return (
    <div>
        <h2 className="text-center text-6xl font-bold mt-8">My Contributions</h2>
       <div>
       <ScrollTrigger onEnter={showScroll} onExit={() => showScroll}>
        <div className='text-center mt-8 font-extrabold text-6xl'>
        {scroll &&   <CountUp
        start={0}
        end={200}
        duration={2}
        separator=" "
        decimals={0}
        decimal=","        
        onEnd={() => console.log("Ended! 👏")}
        onStart={() => console.log("Started! 💨")}
      >
        
      </CountUp>}
       +
        </div>
        </ScrollTrigger>
       </div>
      
    </div>
  );
};

export default Counter;
