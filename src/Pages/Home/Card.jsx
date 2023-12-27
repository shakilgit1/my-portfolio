import "./box.css";
import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.png";
import img4 from "../../assets/img4.png";
import { Link } from "react-router-dom";

const Card = () => {
  return (
    <div className="">

      <div className="mb-8 md:relative">
        {/* first div */}
        <div className="md:h-96">
          <div className="pt-8">
            <h1 className="text-6xl mt-8 font-bold text-black text-center">
              My Projects
            </h1>
            <h1 className="text-xl mt-6 font-bold text-black text-center">
              Here are some projects that I created. You can see and visit these
              projects
            </h1>
          </div>
        </div>

        {/* second div */}
        <div className="md:bg-purple-400 py-10 md:h-60">

          <div className="md:absolute md:top-60 md:inset-x-0">
          <div className=" w-8/12 mx-auto gap-10 grid grid-cols-1 md:grid-cols-3">
            {/* card 1 */}
            <div className="box bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 h-80 w-80 ">
              <div className="z-10">
                <div className="overflow-hidden">
                  <img
                    className="w-[300px]  hover:scale-[1.5] duration-1000"
                    src={img1}
                    alt=""
                  />
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
                <div className="overflow-hidden">
                  <img
                    className="w-[300px]  hover:scale-[1.5] duration-1000"
                    src={img2}
                    alt=""
                  />
                  <Link to="https://contest-hub-website.web.app/" target="_blank">
                    <div className="flex pt-8 justify-center items-center">
                      <button className="btn btn-primary">Visit Now</button>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            {/* card 3 */}
            <div className="box bg-gradient-to-l from-indigo-500 via-purple-500 to-pink-500 h-80 w-80">
              <div className="z-10">
                <div className="overflow-hidden">
                  <img
                    className="w-[300px]  hover:scale-[1.5] duration-1000"
                    src={img4}
                    alt=""
                  />
                  <Link to="https://social-event-management-beee2.web.app/" target="_blank">
                    <div className="flex pt-8 justify-center items-center">
                      <button className="btn btn-primary">Visit Now</button>
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
