import React from "react";
import Navbar from "./Navbar";

const Destination = () => {
  return (
    <>
      <Navbar />

      <div
        className="relative w-full h-full bg-cover bg-center"
        style={{
          backgroundImage:
            "url('./assets/destination/background-destination-desktop.jpg')",
        }}
      >
        {/* Title */}
        <div className="flex gap-2 ml-40 mt-40">
          <p className="text-gray-400">01</p>
          <h1 className="text-white">PICK YOUR DESTINATION</h1>
        </div>

        {/* Main content - Image on left, text on right */}
        <div className="flex items-center justify-between px-40 mt-20">
          {/* Left side - Image */}
          <img
            src="./assets/destination/image-mars.png"
            className="w-86 h-86 ml-5"
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
              <br />

              {/* ❌ ERROR WAS HERE - "est. travel time" was nested INSIDE the first div */}
              {/* ✅ FIX - Both stats are now direct children of the flex container */}

              <div className="flex gap-16">
                {/* Stat 1 */}
                <div>
                  <p className="text-gray-400 uppercase">avg. distance</p>
                  <h2 className="text-2xl text-white">225 MIL. KM</h2>
                </div>

                {/* Stat 2 - was nested inside Stat 1 before! */}
                <div>
                  <p className="text-gray-400 uppercase">est. travel time</p>
                  <h2 className="text-2xl text-white">9 MONTHS</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Destination;
