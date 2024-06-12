import Challange1 from "../assets/Challange1.png";
import Challange2 from "../assets/Challange2.png";
import Challange3 from "../assets/Challange3.png";
import Challange4 from "../assets/Challange4.png";

const Snippents = [
  {
    id: 1,
    name: "Dynamic Card Component.",
    heading: "Dynamic Card Component",
    description:
      "We have a Badge component with variables for name, handle and img that are unassigned. Your job is to assign those variables in the JSX so that the component renders correctly.",
    problem: [
      "Give the image a proper alt tag using the author's name",
      "Make sure the badge displays the profile image correctly",
      "Display the author's name in the badge's heading",
      "Display the author's handle below the heading",
    ],
    learningHeading: "Dynamic Card Component",
    note: [
      "The structure of dynamic components should always be predictable.",
      "Manage all the values at the top level.",
      "Learned how to use dynamic values in react.",
    ],
    image: Challange1,
  },
  {
    id: 2,
    name: "Dynamic Date",
    heading: "Dynamic Date",
    description: "Using JavaScript, replace the static date with today's date",
    problem: ["Use the getTodaysDate function to render today's date"],
    learningHeading: "Dynamic Date",
    note: [
      "Learned to get date using javascript",
      "Learned to use functions in tags.",
    ],
    image: Challange2,
  },
  {
    id: 3,
    name: "Ternary Rendering",
    heading: "Ternary Rendering",
    description:
      "Using an if statement, update the code to conditionally render the correct component based on the value of isLactoseTolerant.",
    problem: [
      "If the user is lactose intolerant, render the LactoseIntolerant component",
      "If the user is lactose tolerant, render the LactoseTolerant component",
    ],
    learningHeading: "Ternary Rendering",
    note: [
      "Conditionally render views.",
      "If value of isLactoseTolerant is true or false the view changes ",
    ],
    image: Challange3,
  },
  {
    id: 4,
    name: "Rendering Lists",
    heading: "Rendering Lists",
    description:
      "Given an array of friends, update our ul to include a li for every friend. The list item should display all the friend's names.",
    problem: [
      "Render an unordered list with all of the friends",
      "Each list item should display the correct name",
      "Each list item should be given a unique key",
    ],
    learningHeading: "Rendering Lists",
    note: [
      "Learned using map in react to render lists or Ui's.",
      "Dynamically render views.",
    ],
    image: Challange4,
  },
  {
    id: 5,
    name: "String Props",
    heading: "String Props",
    description:
      "Currently, our Badge component is displaying hardcoded values. Instead of rendering the static values, we want to pass them in as props. In this challenge, your goal is to apply the props being passed to the Badge component (name, handle, and img) so that it renders correctly.",
    problem: [
      "Give the image a proper alt tag using the author's name",
      "Make sure the badge displays the profile image correctly",
      "Display the author's name in the badge's heading",
      "Display the author's handle below the heading",
    ],
    learningHeading: "String Props",
    note: [
      "Learned passing down props to a Component.",
      "Destructuring props and using it in component.",
      "Creating reusable Component.",
    ],
    image: Challange1,
  },
];

export default Snippents;
