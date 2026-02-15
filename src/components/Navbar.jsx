const Navbar = () => {
  return (
    <div className="fixed top-0 w-full z-50">
      <div className="flex justify-between items-center">
        <div className="mt-5">
          <img src="./assets/shared/logo.svg" />
        </div>

        <div className="w-200px h-1 bg-gray-400 mt-5 ml-4" />
        <div className=" bg-gray-500/30 p-4  mt-5">
          <div className="ml-5 mr-5 flex gap-8">
            <p className="hover:underline cursor-pointer" id="Home">
              00 HOME
            </p>
            <p className="hover:underline cursor-pointer">01 DESTINATION</p>
            <p className="hover:underline cursor-pointer">02 CREW</p>
            <p className="hover:underline cursor-pointer">03 TECHNOLOGY</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
