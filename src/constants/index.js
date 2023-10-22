import arrayImg from "../assets/images/arrays.png";

export const array = {
  definition:
    "An array is a collection of items stored at contiguous memory locations. The idea is to store multiple items of the same type together. This makes it easier to calculate the position of each element by simply adding an offset to a base value, i.e., the memory location of the first element of the array.",
  explanation:
    "For simplicity, we can think of an array as a flight of stairs where on each step is placed a value (let’s say one of your friends). Here, you can identify the location of any of your friends by simply knowing the count of the step they are on. This makes it easier to calculate the position of each element by simply adding an offset to a base value, i.e., the memory location of the first element of the array (generally denoted by the name of the array). The base value is index 0 and the difference between the two indexes is the offset.",
  whenToUse: [
    "Use arrays when you want to access the items sequentially by their index.",
    "If you need to access items by their index quickly, arrays are an efficient choice.",
    "When you have a collection of data with the same data type (e.g., an array of integers or strings), arrays are a suitable choice.",
    "If you know the size of the collection in advance and it won't change, arrays are a good option because they have a fixed size.",
    "Arrays can be used to implement fundamental data structures like stacks and queues.",
    "Arrays are crucial for many sorting and searching algorithms, like binary search and quicksort.",
    "In lower-level programming, like systems programming or hardware interaction, arrays provide efficient memory access.",
  ],
  questions: [
    {
      title: "Missing Number",
      question: "https://leetcode.com/problems/missing-number/description/",
      answer: "https://walkccc.me/LeetCode/problems/0268/?h=missing+number",
    },
    {
      title: "Find Majority Element in an Array",
      question: "https://leetcode.com/problems/majority-element/description/",
      answer: "https://walkccc.me/LeetCode/problems/0169/?h=majority+element",
    },
    {
      title: "Rotate Array",
      question: "https://leetcode.com/problems/rotate-array/description/",
      answer: "https://walkccc.me/LeetCode/problems/0189/?h=rotate+array",
    },
  ],
};
