import Challange1 from "../assets/Challange1.png";
import Challange2 from "../assets/Challange2.png";

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
      "The Structure of dynamic Components Should always be predictable.",
      "Manage all the values at the top level.",
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
    note: ["Learned how to use function in tags."],
    image: Challange2,
  },
];

export default Snippents;
