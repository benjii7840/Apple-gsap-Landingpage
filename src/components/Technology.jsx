import React from "react";

const Technology = () => {
  return (
    <>
      <div className="relative w-full h-full bg-cover bg-center">
        {/* Title */}
        <div className="flex gap-2 ml-40 mt-20">
          <p className="text-gray-400">03</p>
          <h1 className="text-white">SPACE LAUNCH 001</h1>
        </div>

        {/* Main content */}
        <div className="flex items-center justify-between px-40 mt-20">
          {/* Left side - Buttons and text */}
          <div className="flex gap-12">
            {/* Circular buttons */}
            <div className="flex flex-col gap-6">
              <button className="rounded-full w-16 h-16 border-2 border-white text-white flex items-center justify-center hover:bg-white hover:text-black transition">
                1
              </button>
              <button className="rounded-full w-16 h-16 border-2 border-white text-white flex items-center justify-center hover:bg-white hover:text-black transition">
                2
              </button>
              <button className="rounded-full w-16 h-16 bg-white text-black flex items-center justify-center">
                3
              </button>
            </div>

            {/* Info next to buttons */}
            <div className="flex flex-col gap-8 max-w-md">
              <div>
                <p className="text-gray-400 uppercase text-sm">
                  The terminology...
                </p>
                <h1 className="text-5xl text-white mt-4">LAUNCH VEHICLE</h1>
              </div>
              <p className="text-gray-400">
                A launch vehicle or carrier rocket is a rocket-propelled vehicle
                used to carry a payload from Earth's surface to space, usually
                to Earth orbit or beyond. Our WEB-X carrier rocket is the most
                powerful in operation. Standing 150 metres tall, it's quite an
                awe-inspiring sight on the launch pad!
              </p>
            </div>
          </div>

          {/* Right side - Image - fixed to maintain aspect ratio */}
          <img
            src="./assets/technology/image-launch-vehicle-portrait.jpg"
            className="h-80 w-100 object-contain mt-20"
          />
        </div>
      </div>
    </>
  );
};

export default Technology;
