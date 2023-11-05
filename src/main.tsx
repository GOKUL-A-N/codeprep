import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import Roadmap from "./components/Roadmap.tsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Arrays from "./Pages/Arrays.tsx";
import String from "./Pages/String.tsx";
import Graph from "./Pages/Graph.tsx";
import Hashing from "./Pages/Hashing.tsx";
import Heep from "./Pages/Heep.tsx";
import LinkedList from "./Pages/LinkedList.tsx";
import Matrix from "./Pages/Matrix.tsx";
import Queue from "./Pages/Queue.tsx";
import Stack from "./Pages/Stack.tsx";
import Trees from "./Pages/Trees.tsx";
import BitManipulation from "./Pages/BitManipulation.tsx";
import Math from "./Pages/Math.tsx";
import NoPage from "./components/NoPage.tsx";
import DataStructure from "./Pages/DataStructure.tsx";
import Algorithm from "./Pages/Algorithm.tsx";
import TimeComplexity from "./Pages/TimeComplexity.tsx";
import SpaceComplexity from "./Pages/SpaceComplexity.tsx";
import Blogs from "./Pages/Blogs.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/roadmap" element={<Roadmap />} />
        <Route path="/datastructure" element={<DataStructure />} />
        <Route path="/algorithms" element={<Algorithm />} />
        <Route path="/timecomplexity" element={<TimeComplexity />} />
        <Route path="/spacecomplexity" element={<SpaceComplexity />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/arrays" element={<Arrays />} />
        <Route path="/string" element={<String />} />
        <Route path="/graph" element={<Graph />} />
        <Route path="/hashing" element={<Hashing />} />
        <Route path="/heap" element={<Heep />} />
        <Route path="/linkedlist" element={<LinkedList />} />
        <Route path="/matrix" element={<Matrix />} />
        <Route path="/queue" element={<Queue />} />
        <Route path="/stack" element={<Stack />} />
        <Route path="/trees" element={<Trees />} />
        <Route path="/bitmanipulation" element={<BitManipulation />} />
        <Route path="/math" element={<Math />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
