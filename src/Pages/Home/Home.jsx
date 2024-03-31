import Banner from "../shared/Header/Banner";
import Card from "./Card";
import Skills from "./Skills";
import Counter from "./Counter";
import Video from "./Video";
import Editing from "./Editing";
import ScrollToTop from "../../hooks/scrollTop";
import Reviews from "./Reviews";

const Home = () => {
  return (
    <div className="">
      <ScrollToTop></ScrollToTop>
      <Banner></Banner>
      <Skills></Skills>
      <Counter></Counter>
      <Card></Card>
      <Video></Video>
      <Editing></Editing>
      <Reviews></Reviews>
    </div>
  );
};

export default Home;
