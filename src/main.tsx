import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import Roadmap from "./components/Roadmap.tsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Arrays from "./Pages/Arrays.tsx";
import String from "./Pages/String.tsx";
import Graph from "./Pages/Graph.tsx";
import Heep from "./Pages/Heep.tsx";
import LinkedList from "./Pages/LinkedList.tsx";
import Queue from "./Pages/Queue.tsx";
import Stack from "./Pages/Stack.tsx";
import Trees from "./Pages/Trees.tsx";
import NoPage from "./components/NoPage.tsx";
import DataStructure from "./Pages/DataStructure.tsx";
import Algorithm from "./Pages/Algorithm.tsx";
import Blogs from "./Pages/Blogs.tsx";
import SortingAlgorithm from "./Pages/SortingAlgorithm.tsx";
import GreedyTechnique from "./Pages/GreedyTechnique.tsx";
import SearchingAlgorithm from "./Pages/SearchingAlgorithm.tsx";
import BackTracking from "./Pages/BackTracking.tsx";
import DivideAndConquer from "./Pages/DivideAndConquer.tsx";
import DynamicProgramming from "./Pages/DynamicProgramming.tsx";
import CreateBlog from "./Pages/CreateBlog.tsx";
import Recursion from "./Pages/Recursion.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/roadmap" element={<Roadmap />} />
        <Route path="/datastructure" element={<DataStructure />} />
        <Route path="/algorithms" element={<Algorithm />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/arrays" element={<Arrays />} />
        <Route path="/string" element={<String />} />
        <Route path="/graph" element={<Graph />} />
        <Route path="/sorting" element={<SortingAlgorithm />} />
        <Route path="/heep" element={<Heep />} />
        <Route path="/linkedlist" element={<LinkedList />} />
        <Route path="/queue" element={<Queue />} />
        <Route path="/stack" element={<Stack />} />
        <Route path="/recursion" element={<Recursion />} />
        <Route path="/trees" element={<Trees />} />
        <Route path="/greedy" element={<GreedyTechnique />} />
        <Route path="/searching" element={<SearchingAlgorithm />} />
        <Route path="/backtracking" element={<BackTracking />} />
        <Route path="/divideandconquer" element={<DivideAndConquer />} />
        <Route path="/dynamicprogramming" element={<DynamicProgramming />} />
        <Route path="/createblog" element={<CreateBlog />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
