
const Banner = () => {
  return (
    <div className="bg-purple-400">
      <div className="w-8/12 mx-auto">
        <div className="hero-content flex-col justify-around lg:flex-row-reverse">
          <img
            src="shakil.png"
            className="w-xs md:max-w-sm bg-black rounded-full bg-opacity-20"
          />
          <div>
            <h1 className="text-5xl font-bold">Hi, I am Shakil</h1>
            <p className="py-6 text-lg">
             I am a <span className="text-blue-800">Web Developer</span> and <span className="text-red-500">Video Editor</span>
            </p>
            <a href="Shakil Resume.pdf" download="Shakil Resume"><button className="btn btn-primary">Download Resume</button></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
