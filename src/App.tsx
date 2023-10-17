import React from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import DataStructures from "./components/DataStructures";

const App: React.FC = () => {
  return (
    <div className="overflow-x-hidden max-w-[107rem] mx-auto mb-24">
      <Navbar />
      <Home />
      <DataStructures />
    </div>
  );
};

export default App;
