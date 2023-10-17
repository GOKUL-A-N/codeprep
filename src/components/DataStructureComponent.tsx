import React from "react";

// created component for the datastructures page to display each datastructures component

const DataStructureComponent: React.FC<{ name: String }> = ({ name }) => {
  return (
    <div className="comp-bg flex items-center m-10 rounded cursor-pointer">
      <h1 className="font-bold text-[35px] p-4 text-white bg-transparent">{name}</h1>
    </div>
  );
};

export default DataStructureComponent;
