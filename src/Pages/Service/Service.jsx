import Counter from "../Home/Counter";
import Editing from "../Home/Editing";
import Skills from "../Home/Skills";
import Video from "../Home/Video";

const Service = () => {
    return (
        <div>
          <h2 className="text-6xl text-center font-bold mt-8">My Services</h2>
          <Counter></Counter>
          <Skills></Skills>
          <Video></Video>
          <Editing></Editing>
        </div>
    );
};

export default Service;