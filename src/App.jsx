import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import Destination from "./components/Destination";

const App = () => {
  return (
    <>
      <Navbar />

      <div className="flex overflow-x-scroll snap-x snap-mandatory h-screen">
        <section
          id="home"
          className="min-w-full h-screen snap-start bg-cover bg-center"
          style={{
            backgroundImage: "url('./assets/home/background-home-desktop.jpg')",
          }}
        >
          <HomePage />
        </section>

        <section
          id="destination"
          className="min-w-full h-screen snap-start bg-cover bg-center"
          style={{
            backgroundImage:
              "url('./assets/destination/background-destination-desktop.jpg')",
          }}
        >
          <Destination />
        </section>
      </div>
    </>
  );
};

export default App;
