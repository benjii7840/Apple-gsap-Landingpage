import React from "react";

const Crew = () => {
  return (
    <div className="relative w-full h-full">
      {" "}
      <div className="absolute bottom-40 left-20">
        <div className="flex gap-2">
          <p className="text-gray-400">02</p>
          <h1 className="text-white">MEET YOUR CREW</h1>
        </div>
        <br></br>
        <br></br>
        <h1 className="text-4xl text-gray-500 mt-10">FLIGHT ENGINEER</h1>
        <h1 className="text-5xl text-white mt-5">ANOUNSHEH ANSARI</h1>
        <p className="text-gray-400 mt-5 w-2/5">
          ANOUNSHEH ANSARI is an American engineer, former Marine Corps pilot
          and former NASA astronaut.
        </p>
      </div>
      <img
        src="./assets/crew/image-anousheh-ansari.png"
        className="absolute bottom-0 right-20 w-96 h-96"
      />
    </div>
  );
};

export default Crew;
