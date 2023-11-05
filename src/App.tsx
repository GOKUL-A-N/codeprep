import React from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import DataStructures from "./components/DataStructures";
import Featured from "./components/Featured";
import Footer from "./components/Footer";
import Algorithms from "./components/Algorithms";

const App: React.FC = () => {
  return (
    <div className="overflow-x-hidden max-w-[90%] mx-auto mb-24">
      <Navbar />
      <Home />
      <Featured />
      <DataStructures />
      <Algorithms />
      <Footer />
    </div>
  );
};

export default App;
