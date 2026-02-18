import React from "react";

const Destination = () => {
  return (
    <>
      <div className="relative w-full h-full bg-cover bg-center">
        {/* Title */}
        <div className="flex gap-2 ml-40 mt-20">
          <p className="text-gray-400">01</p>
          <h1 className="text-white">PICK YOUR DESTINATION</h1>
        </div>

        {/* Main content - Image on left, text on right */}
        <div className="flex items-center justify-between px-40 mt-20">
          {/* Left side - Image */}
          <img
            src="./assets/destination/image-mars.png"
            className="w-86 h-86"
          />

          {/* Right side - Navigation and text */}
          <div className="flex flex-col gap-8 max-w-md ml-40">
            {/* Planet navigation */}
            <div className="flex gap-8 text-white">
              <p className="hover:underline cursor-pointer">MOON</p>
              <p className="hover:underline cursor-pointer">MARS</p>
              <p className="hover:underline cursor-pointer">EUROPA</p>
              <p className="hover:underline cursor-pointer">TITAN</p>
            </div>

            {/* Planet info */}
            <div>
              <h1 className="text-6xl text-white">MARS</h1>
              <p className="text-gray-400 mt-5">
                Don't forget to pack your hiking boots. You'll need them to
                tackle Olympus Mons, the tallest planetary mountain in our solar
                system. It's two and a half times the size of Everest!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Destination;
