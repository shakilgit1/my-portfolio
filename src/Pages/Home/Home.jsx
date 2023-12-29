import Banner from "../shared/Header/Banner";
import Card from "./Card";
import Skills from "./Skills";
import Counter from "./Counter";

const Home = () => {
  return (
    <div className="">
      <Banner></Banner>
      <Skills></Skills>
      <Counter></Counter>
       <Card></Card>
    </div>
  );
};

export default Home;
