import uniqid from "uniqid";

const cards = [
  {
    id: uniqid(),
    title: "ToDo List",
    description: "Make a to do list thats super easy to use",
    difficulty: "easy",
    contact: "willstayanonym@gmail.com",
    status: "open",
  },
  {
    id: uniqid(),
    title: "Calendar App",
    description: "Write a new calendar app",
    difficulty: "medium",
    contact: "",
    status: "progress",
  },
  {
    id: uniqid(),
    title: "Paint unicorn",
    description: "Paint me a unicorn",
    difficulty: "hard",
    contact: "sdfsd@gmail.com",
    status: "open",
  },
  {
    id: uniqid(),
    title: "Make this app",
    description: "Finish this app",
    difficulty: "hard",
    contact: "",
    status: "closed",
  },
];

export default cards;
