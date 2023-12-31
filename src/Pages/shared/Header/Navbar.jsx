import { useEffect, useState } from "react";
import { FaAlignJustify} from "react-icons/fa";
import { GrClose } from "react-icons/gr";
import { Link, NavLink } from "react-router-dom";


const Navbar = () => {
    const [icon, setIcon] = useState(false);
    const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if the user has scrolled down more than 100 pixels
      const isScrolling = window.scrollY > 100;
      setScrolling(isScrolling);
    };

    // Attach the scroll event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); 

    const OpenMenu = () =>{
        setIcon(!icon)
    }


    return (
        <div className={`w-full p-2 ${scrolling ? 'bg-blue-700 text-white' : 'bg-transparent'} transition-all duration-300 ease-in-out`}>
           
           <div className="flex justify-around items-center bg-cyan-100 py-2 bg-transparent">
            <div className="block relative md:hidden">
                <span onClick={OpenMenu} className="text-2xl">
                {icon ? <><GrClose /></> : <><FaAlignJustify /></>}
                </span>
                <div className={`transition-transform duration-700 ${
              icon ? "transform translate-x-0" : "transform -translate-x-96"
            } top-10 left-80`}>
                <div className="list-none font-semibold absolute top-3 bg-base-100 shadow-md text-slate-700 py-4 flex flex-col space-y-2 w-32 px-2">
                <NavLink to="/" className={({ isActive, isPending }) =>
                      isActive? "active text-red-500 border-red-400": isPending? "pending": ""}><li>Home</li>
                </NavLink>
                <NavLink to="/service" className={({ isActive, isPending }) =>
                      isActive? "active text-red-500 border-red-400": isPending? "pending": ""}><li>Service</li>
                </NavLink>
                <NavLink to="/about" className={({ isActive, isPending }) =>
                      isActive? "active text-red-500 border-red-400": isPending? "pending": ""}><li>About Me</li>
                </NavLink>
                <NavLink to="/contact" className={({ isActive, isPending }) =>
                      isActive? "active text-red-500 border-red-400": isPending? "pending": ""}><li>Contact Me</li>
                </NavLink>

                 </div>
                </div>
            </div>
            <div>SHAKIL</div>
            <div className="hidden md:flex justify-center list-none gap-5">
               
                <NavLink to="/" className={({ isActive, isPending }) =>
                      isActive? "active text-red-500 border-red-400 border-b-2": isPending? "pending": ""}><li>Home</li>
                </NavLink>
                <NavLink to="/service" className={({ isActive, isPending }) =>
                      isActive? "active text-red-500 border-red-400 border-b-2": isPending? "pending": ""}><li>Service</li>
                </NavLink>
                <NavLink to="/about" className={({ isActive, isPending }) =>
                      isActive? "active text-red-500 border-red-400 border-b-2": isPending? "pending": ""}><li>About Me</li>
                </NavLink>
                <NavLink to="/contact" className={({ isActive, isPending }) =>
                      isActive? "active text-red-500 border-red-400 border-b-2": isPending? "pending": ""}><li>Contact Me</li>
                </NavLink>
                
            </div>
            <div className="btn btn-sm btn-outline border-b-2 border-0 hover:bg-blue-600 hover:text-white text-black">
            <Link to="/contact"><button>Say Hello</button></Link>
            </div>
           </div>
          
          
        </div>
    );
};

export default Navbar;