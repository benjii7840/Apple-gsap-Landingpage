import Navbar from "./Navbar";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <div
        className="relative w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: "url('./assets/home/background-home-desktop.jpg')",
        }}
      >
        <div className="absolute bottom-55 left-20">
          <h1 className="text-4xl mt-10">SO, YOU WANT TO TRAVEL TO</h1>
          <h1 className="text-8xl mt-5">SPACE</h1>
          <p className="text-gray-400 mt-5 w-2/5">
            Let's face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we'll give you a truly out of this
            world experience!
          </p>
        </div>

        <div className="absolute bottom-55 right-20">
          <button className="bg-white text-black rounded-full w-40 h-40 text-2xl hover:scale-110 transition duration-300">
            EXPLORE
          </button>
        </div>
      </div>
    </>
  );
};

export default HomePage;
