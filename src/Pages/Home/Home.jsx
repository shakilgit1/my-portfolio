import Banner from "../shared/Header/Banner";
import Card from "./Card";
import Skills from "./Skills";
import Counter from "./Counter";
import Video from "./Video";
import Editing from "./Editing";

const Home = () => {
  return (
    <div className="">
      <Banner></Banner>
      <Skills></Skills>
      <Counter></Counter>
      <Card></Card>
      <Video></Video>
      <Editing></Editing>
    </div>
  );
};

export default Home;
