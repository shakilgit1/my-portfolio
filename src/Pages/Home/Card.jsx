import "./box.css";
import img1 from "../../assets/img1.png";
import { Link } from "react-router-dom";

const Card = () => {
  return (
    <div>
      <h1 className="text-6xl mt-8 font-bold text-black text-center">
        My Projects
      </h1>
      <h1 className="text-xl mt-6 font-bold text-black text-center">
        Here are some projects that I created. You can see and visit these
        projects
      </h1>
      <div className="relative  mb-8">
        <div className="h-auto md:h-40"></div>

        <div className="h-auto md:h-80 bg-blue-800">
          <div className="w-8/12 mx-auto gap-10 grid grid-cols-1 md:grid-cols-3 absolute top-16 inset-x-0">
            
            <div className="box bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 h-80 w-80 ">
              <div className="z-10">
               <div className="overflow-hidden">
               <img className="w-[300px]  hover:scale-[1.5] duration-1000" src={img1} alt="" />
                <Link to="https://pizzan-restaurant.web.app/" target="_blank">
                <div className="flex pt-8 justify-center items-center">
                      <button className="btn btn-primary">Visit Now</button>
                    </div>
                </Link>
               </div>
              </div>
            </div>
                {/* card 2 */}
            <div className="box bg-gradient-to-t from-indigo-500 via-purple-500 to-pink-500 h-80 w-80">
              <div className="z-10">
                <div className="hero-card w-[300px] h-[300px] overflow-hidden shadow-xl image-full">
                  <figure>
                    <img
                      src={img1} className="rounded-t-xl hover:scale-[1.5] duration-1000"
                      alt="Shoes"
                    />
                  </figure>
                  <div className="card-body">
                    <div className="flex pt-4 justify-center items-center">
                      <button className="btn btn-primary">Visit Now</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* card 3 */}
            <div className="box bg-gradient-to-l from-indigo-500 via-purple-500 to-pink-500 h-80 w-80"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
