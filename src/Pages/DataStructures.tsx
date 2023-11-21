import datastructures from "../assets/images/datastructures.png";

const DataStructures: React.FC = () => {
  return (
    <div className="overflow-x-hidden max-w-[90%] xl:max-w-[80%] mx-auto mb-24">
      <h1 className="heading1 text-center mt-10">Data Structures</h1>
      <h3 className="heading2 mt-4 mb-2 sm:mt-6 sm:mb-3">What is Data Structures</h3>
      <p className="paragraph sm:mb-10 sm:leading-10">
        A data structure is a storage that is used to store and organize data. It is a way of
        arranging data on a computer so that it can be accessed and updated efficiently.
      </p>
      <div className="flex justify-center items-center">
        <img className="hidden sm:block" src={datastructures} alt="datastructures" />
      </div>
      <p className="paragraph sm:mt-10 sm:leading-10">
        A data structure is not only used for organizing the data. It is also used for
        processing, retrieving, and storing data. There are different basic and advanced types
        of data structures that are used in almost every program or software system that has
        been developed. So we must have good knowledge about data structures.{" "}
      </p>
    </div>
  );
};

export default DataStructures;
