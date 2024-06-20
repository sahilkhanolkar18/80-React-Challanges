import Challange1 from "../assets/Challange1.png";
import Challange2 from "../assets/Challange2.png";
import Challange3 from "../assets/Challange3.png";
import Challange4 from "../assets/Challange4.png";
import Challange7 from "../assets/Challange7.png";
import Challange8 from "../assets/Challange8.png";
import Challange9 from "../assets/Challange9.png";
import Challange11 from "../assets/Challange11.png";
import Challange13 from "../assets/Challange13.png";
import Challange14 from "../assets/Challange14.png";
import Challange15 from "../assets/Challange15.png";
import Challange16 from "../assets/Challange16.png";

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
  {
    id: 6,
    name: "Object props",
    heading: "Object props",
    description:
      "Although this challenge looks similar to the previous one, there are some subtle differences. As before, apply the new props to the Badge component so that it renders properly.",
    problem: [
      "Give the image a proper alt tag using the author's name",
      "Make sure the badge displays the profile image correctly",
      "Display the author's name in the badge's heading",
      "Display the author's handle below the heading",
      "Apply the correct styles to the outer div",
    ],
    learningHeading: "Object props",
    note: [
      "Learned passing down props as objects to a Component.",
      "Destructuring props and using it in component.",
      "Creating reusable Component.",
    ],
    image: Challange1,
  },
  {
    id: 7,
    name: "Function Props",
    heading: "Function Props",
    description:
      "Often times, we want to split our UI into smaller, more focused components to make our code easier to read and test. In this challenge, take the props being passed to the Badge component and use them in order to render the proper UI.",
    problem: [
      "Give the image a proper alt tag using the author's name",
      "Make sure the badge displays the profile image correctly",
      "Display the author's name in the badge's heading",
      "Display the author's handle below the heading",
      "Pass the click handler to the button so that it opens an alert when clicked",
    ],
    learningHeading: "Function Props",
    note: [
      "learned to divide components into smaller reusable components which can come handy.",
      "Creating more focused components making code more readable",
    ],
    image: Challange7,
  },
  {
    id: 8,
    name: "Children Props",
    heading: "Children Props",
    description:
      "Finish the Badge component so that it utilizes all the props passed to it.",
    problem: [
      "Give the image a proper alt tag using the author's name",
      "Make sure the badge displays the profile image correctly",
      "Display the author's name in the badge's heading",
      "Display the author's handle below the heading",
      "Display the bio text under the headings",
      "Pass the click handler to the button so that it opens an alert when clicked",
    ],
    learningHeading: "Children Props",
    note: [
      "Learned passing down Children as props.",
      "The children prop is a special prop in React that allows you to pass components or elements as children to a component.",
      "It's particularly useful for creating wrapper components like layout components or higher-order components (HOCs)",
    ],
    image: Challange8,
  },
  {
    id: 9,
    name: "Character Limit",
    heading: "Character Limit",
    description:
      "Whenever we're dealing with events in React, we can extract the logic for those events into their own event handlers.The goal with this challenge is to make it so when the user types more than 10 characters into the input field, they'll get an alert that says 'Character limit exceeded'.",
    problem: [
      "Don't show an alert if the input is under the character limit.",
      "Show an alert if the input exceeds the character limit.",
    ],
    learningHeading: "Character Limit",
    note: ["Learned Event Handling in React.", "Set an alert for char limit."],
    image: Challange9,
  },
  {
    id: 10,
    name: "Character Limit - Props",
    heading: "Character Limit - Props",
    description:
      "You'll notice that this challenge looks similar to the last one. However, instead of hard coding the character limit as we did before, we now want to make our component a little more flexible and pass it in via a prop. Fix up the code so it works as before, but with the new characterLimit prop.",
    problem: [
      "Don't show an alert if the input length is within character limit",
      "Show an alert if the input length exceeds the character limit",
    ],
    learningHeading: "Character Limit - Props",
    note: [
      "Made the Component more flexible and reusable.",
      "Divide into components and handled Dynamic char limit",
    ],
    image: Challange9,
  },
  {
    id: 11,
    name: "Light Switch",
    heading: "Light Switch",
    description:
      "In order to persist a value across renders and update the UI when that value changes, we need to use React's useState hook. In this challenge, you'll need to create a button that toggles the mode state between light and dark.",
    problem: [
      "The app renders without crashing",
      "mode defaults to dark",
      "mode toggles between dark and light when the button is clicked",
    ],
    learningHeading: "Light Switch",
    note: [
      "Learned to use useState hook",
      "Learned Dynamic Styling components.",
      "If predefined all the styles in dark and light mode we can easily toggle with One Click",
    ],
    image: Challange11,
  },
  {
    id: 12,
    name: "Light Switch - Concise",
    heading: "Light Switch - Concise",
    description:
      "You may have noticed that in our last 'Light Switch' example, we had some wasted keystrokes. Specifically, depending on how you set it up, you may have written two methods (handleDarkMode and handleLightMode) for updating our mode state like in our current starting code. Also, we rendered two buttons, one for each event handler.In this challenge, consolidate our logic into a single event handler and a single button element.",
    problem: [
      "The app renders without crashing",
      "mode defaults to dark",
      "mode toggles between dark and light when the button is clicked",
    ],
    learningHeading: "Light Switch - Concise",
    note: ["Optimized dark and light mode code."],
    image: Challange11,
  },
  {
    id: 13,
    name: "Counter",
    heading: "Counter",
    description:
      "This challenge is pretty straight forward. Increment or decrement count whenever the user clicks on the corresponding button.",
    problem: [
      "Render the initial state correctly",
      "Increment count when the user clicks the '+' button",
      "Decrement count when the user clicks the '-' button",
      "Render the correct count after multiple button clicks",
    ],
    learningHeading: "Counter",
    note: ["Created a counter", "Dynamic Rendering", "Event Handling"],
    image: Challange13,
  },
  {
    id: 14,
    name: "Smart Character Limit",
    heading: "Smart Character Limit",
    description:
      "Now that you know how to add preserve state in React, let's revisit our Character Limit challenge from earlier in the course and make it a little more sophisticated.The goal of this app is to get some input from the user, but only 'submit' that input if its length is less than or equal to characterLimit (20 characters, by default). Unlike our other 'Character Limit' challenges, this one shows the user how many characters they have left before they hit the limit.",
    problem: [
      "LimitedTextInput renders an input and submit button",
      "Update the remaining characters count when the user types",
      "Add an error class to the 'Characters remaining:' span element when the user exceeds the character limit and a no-error when they haven't",
      "alert 'The input exceeds the character limit. Please shorten your text.' when the user submits a form with too many characters",
      "alert 'Thanks for your submission' when the user submits a form with an acceptable number of characters",
      "Reset the input back to an empty string when the form is successfully submitted",
    ],
    learningHeading: "Smart Character Limit",
    note: [
      "Calculated and Displayed Characters remaining Dynamically.",
      "Handled Validation on submit",
      "Reset the string after successful submission.",
    ],
    image: Challange14,
  },
  {
    id: 15,
    name: "Password Toggle",
    heading: "Password Toggle",
    description:
      "In this challenge, you're going to implement the logic for an input field that accepts a password. However, instead of a boring input field, this one is like... slightly less boring.What makes it less boring is it gives the user the option to toggle the visibility of the password by giving them a button with some cute emojis, 🙊 or 🙈 depending on if the password is visible.All the JSX is in place, all you need to do is properly handle the different states of the component and update handleChange and handleToggleVisibility so that the component behaves as expected.",
    problem: [
      "Update the password length count when the input changes",
      "Update the text style based on the password length threshold",
      "Allow users to toggle the password visibility",
      "Show an alert with a success message when the password length is equal to or above the threshold on form submission",
      "Show an alert with an error message when the password length is below the threshold on form submission",
    ],
    learningHeading: "Password Toggle",
    note: [
      "Learned to dynamically toggle visibility.",
      "Handled dynamic length count.",
      "Handled submit validation.",
      "Toggled Icons",
    ],
    image: Challange15,
  },
  {
    id: 16,
    name: "Multistep Form",
    heading: "Multistep Form",
    description:
      "In this challenge you're given a multistep form for getting data from the user. With the JSX already in place, update the component's state and functions in order to allow the user to progress through the form, updating the state as necessary.",
    problem: [
      "Allow the user to transition to the next step",
      "Allow the user to return to the previous step",
      "Update the formData as the user progresses through the form",
      "When finished, submit the form and reset the component's state",
    ],
    learningHeading: "Multistep Form",
    note: [
      "Efficiently handled multiple form Inputs.",
      "Managed and rendered expected multiform view.",
      "Wrote Reusable and Modular Code.",
    ],
    image: Challange16,
  },
  // {
  //   id: 17,
  //   name: "(pending)Form Builder",
  //   heading: "(pending)Form Builders",
  //   description:
  //     "In this challenge we're going to get meta and build a form builder. It looks complex, but with the JSX already in place, your primary job is to manage the formFields array. The user will need to be able to add items to it, update items in it, and remove items from it.All of the functions with their parameters are in place, you'll just need to examine the JSX and update each accordingly.",
  //   problem: [
  //     "Allow users to add a form field",
  //     "Allow users to delete form fields",
  //     "Allow users to update form field values",
  //     "Allow users to submit the dynamic form with the new values",
  //   ],
  //   learningHeading: "(pending)Form Builder",
  //   note: [
  //     "Learned passing down props as objects to a Component.",
  //     "Destructuring props and using it in component.",
  //     "Creating reusable Component.",
  //   ],
  //   image: Challange1,
  // },
  // {
  //   id: 18,
  //   name: "(pending)Search Filter",
  //   heading: "(pending)Search Filter",
  //   description:
  //     "In this challenge, you're given an app that uses useEffect as a way to react to changes in the search term. That's not ideal – useEffect should be used for synchronizing, not for reacting to changes in a value. Refactor the app to get rid of useEffect but keep the same functionality.",
  //   problem: [
  //     "Render the list of items",
  //     "Filter the list of items based on search term",
  //     "Don't use useEffect",
  //   ],
  //   learningHeading: "(pending)Search Filter",
  //   note: [
  //     "Learned passing down props as objects to a Component.",
  //     "Destructuring props and using it in component.",
  //     "Creating reusable Component.",
  //   ],
  //   image: Challange1,
  // },
  // {
  //   id: 19,
  //   name: "(pending)Clock",
  //   heading: "(pending)Clock",
  //   description:
  //     "In this challenge, you'll be synchronizing the current time with your component's state by updating the UI every second with the new time. To do that, you'll need the right combination of useEffect, component state, and the browser's setInterval method.",
  //   problem: ["Update the time every second", "Clear the timer when unmounted"],
  //   learningHeading: "(pending)Clock",
  //   note: [
  //     "Learned passing down props as objects to a Component.",
  //     "Destructuring props and using it in component.",
  //     "Creating reusable Component.",
  //   ],
  //   image: Challange1,
  // },
  // {
  //   id: 20,
  //   name: "(pending)Country Info",
  //   heading: "(pending)Country Info",
  //   description:
  //     "In this challenge, you'll be synchronizing the result of fetching country data from an external API with your component's state.",
  //   problem: [
  //     "Display a loading state when fetching data",
  //     "Fetch new data based on the user's input",
  //     "Render an error message if fetch fails",
  //   ],
  //   learningHeading: "(pending)Country Info",
  //   note: [
  //     "Learned passing down props as objects to a Component.",
  //     "Destructuring props and using it in component.",
  //     "Creating reusable Component.",
  //   ],
  //   image: Challange1,
  // },
  // {
  //   id: 21,
  //   name: "(pending)Hacker News",
  //   heading: "(pending)Hacker News",
  //   description:
  //     "In this challenge, we'll be fetching data from the Hacker News API. However, unlike the other effects challenges, the state and event handlers for this one don't need updating. Instead, given the fetchData function, you'll need to synchronize your component with the Hacker News API and then update the JSX appropriately.This one is tricky so take your time and think it through. Anywhere in the JSX you see null or TODO you'll need to update it.",
  //   problem: [
  //     "Fetch data based on the search query",
  //     "Display the loading state while fetching",
  //     "Fetch new results when the tag filter changes",
  //     "Allow the user to navigate to the next and previous pages",
  //     "Disable the Next and Previous buttons based on the number of pages",
  //     "Display the results in a numbered list, with each page showing the correct position of each post",
  //   ],
  //   learningHeading: "(pending)Hacker News",
  //   note: [
  //     "Learned passing down props as objects to a Component.",
  //     "Destructuring props and using it in component.",
  //     "Creating reusable Component.",
  //   ],
  //   image: Challange1,
  // },
  // {
  //   id: 22,
  //   name: "(pending)Autofocus",
  //   heading: "(pending)Autofocus",
  //   description:
  //     "In this challenge you're given a ref and a simple input element. Your job is to autofocus the input when the component first renders.",
  //   problem: ["Autofocus the input when the component renders"],
  //   learningHeading: "(pending)Autofocus",
  //   note: [
  //     "Learned passing down props as objects to a Component.",
  //     "Destructuring props and using it in component.",
  //     "Creating reusable Component.",
  //   ],
  //   image: Challange1,
  // },
  // {
  //   id: 23,
  //   name: "(pending)Video Player",
  //   heading: "(pending)Video Player",
  //   description:
  //     "In this challenge, you'll give the user the ability to play and pause the video. To do so, you'll need to invoke the play or pause methods on the video element itself. You'll also want to update the UI to reflect the current state of the video.",
  //   problem: [
  //     "Toggle the play state when the button is clicked",
  //     "Play and pause the video when the button is clicked",
  //   ],
  //   learningHeading: "(pending)Video Player",
  //   note: [
  //     "Learned passing down props as objects to a Component.",
  //     "Destructuring props and using it in component.",
  //     "Creating reusable Component.",
  //   ],
  //   image: Challange1,
  // },
  // {
  //   id: 24,
  //   name: "(pending)Field Notes",
  //   heading: "(pending)Field Notes",
  //   description:
  //     "In this challenge you're tasked with completing an app that collects new notes from the user and displays them in a list. Whenever a new note is added, you'll need to scroll it into view.",
  //   problem: [
  //     "Add a new note when the user submits the form",
  //     "Scroll the new note into view",
  //     "Clear the input field when the user submits a valid note",
  //     "Prevent empty notes from being added",
  //   ],
  //   learningHeading: "(pending)Field Notes",
  //   note: [
  //     "Learned passing down props as objects to a Component.",
  //     "Destructuring props and using it in component.",
  //     "Creating reusable Component.",
  //   ],
  //   image: Challange1,
  // },
  // {
  //   id: 25,
  //   name: "(pending)Click Outside",
  //   heading: "(pending)Click Outside",
  //   description:
  //     "In this challenge you'll be adding a modal experience to the app. The user needs to be able to open the modal and then close it either by clicking the close icon in the modal itself, or by clicking anywhere outside of the modal.You'll need both component state and a reference to the modal to make it work properly. You'll also want to reference the pointerdown event if you're not familiar with it.",
  //   problem: [
  //     "Don't render the modal by default",
  //     "Clicking the 'Open Modal' button should open the modal",
  //     "Don't close the modal when the dialog is clicked",
  //     "Close modal by clicking close icon",
  //     "Close the modal when the user clicks outside of the modal",
  //   ],
  //   learningHeading: "(pending)Click Outside",
  //   note: [
  //     "Learned passing down props as objects to a Component.",
  //     "Destructuring props and using it in component.",
  //     "Creating reusable Component.",
  //   ],
  //   image: Challange1,
  // },
  // {
  //   id: 26,
  //   name: "(pending)Expanding Textarea",
  //   heading: "(pending)Expanding Textarea",
  //   description:
  //     "In this challenge you'll need to add functionality to the app so that the user can type into the textarea and it will expand to fit the content as they type.",
  //   problem: [
  //     "Update the value for the textarea when typing",
  //     "Set the textarea's height based on its scroll height",
  //   ],
  //   learningHeading: "(pending)Function Props",
  //   note: [
  //     "Learned passing down props as objects to a Component.",
  //     "Destructuring props and using it in component.",
  //     "Creating reusable Component.",
  //   ],
  //   image: Challange1,
  // },
  // {
  //   id: 27,
  //   name: "(pending)Follow the Leader",
  //   heading: "(pending)Follow the Leader",
  //   description:
  //     "The concept is simple, animate the center of the box to the coordinates that the user clicks.To do this, you'll need to update the position array to include the new x and y positions of where the box should transform to.",
  //   problem: ["Animate the box to the coordinates that the user clicks"],
  //   learningHeading: "(pending)Follow the Leader",
  //   note: [
  //     "Learned passing down props as objects to a Component.",
  //     "Destructuring props and using it in component.",
  //     "Creating reusable Component.",
  //   ],
  //   image: Challange1,
  // },
  // {
  //   id: 28,
  //   name: "(pending)Auth",
  //   heading: "(pending)Auth",
  //   description:
  //     "In this challenge our goal is to make the user's authentication state (as well as a way to update that state) available to anywhere in our component tree that needs it.You're given an authContext with the expected shape of the user's auth state - isAuthenticated: boolean, login: function, logout: function.Your challenge is to finish the AuthProvider component - making isAuthenticated, login, and logout available anywhere in the component tree - and then to use those values in any component that needs them.",
  //   problem: [
  //     "Render a login form when the user is not authenticated",
  //     "Display the Dashboard component after the user logs in",
  //     "Display the login screen if the user logs out",
  //   ],
  //   learningHeading: "(pending)Auth",
  //   note: [
  //     "Learned passing down props as objects to a Component.",
  //     "Destructuring props and using it in component.",
  //     "Creating reusable Component.",
  //   ],
  //   image: Challange1,
  // },
  // {
  //   id: 29,
  //   name: "(pending)Translations",
  //   heading: "(pending)Translations",
  //   description:
  //     "In this challenge your goal is to make translation state (as well as a way to update that state) available anywhere in the component tree.You're given a languageContext with the expected shape of the translation data - language: string, changeLanguage: function, and translation: function.Your challenge is to finish the LanguageProvider component - making language, changeLanguage, and translation available anywhere in the component tree - and then to use those values in any component that needs them.",
  //   problem: [
  //     "Update the language based on the user's selection",
  //     "Apply the correct translation when the language is changed",
  //   ],
  //   learningHeading: "(pending)Translations",
  //   note: [
  //     "Learned passing down props as objects to a Component.",
  //     "Destructuring props and using it in component.",
  //     "Creating reusable Component.",
  //   ],
  //   image: Challange1,
  // },
  // {
  //   id: 30,
  //   name: "(pending)Tabs",
  //   heading: "(pending)Tabs",
  //   description:
  //     "Given the completed JSX, finish the app so that the correct tab content is shown when a tab is clicked.This challenge is deliberately vague. You'll need to carefully examine the final app as well as each component and what props it receives to figure out how to complete the challenge.Once finished, you should have a working tabs implementation that is hyper flexible and not coupled at all to the current layout of the app.",
  //   problem: ["Show the correct tab content when a tab is clicked"],
  //   learningHeading: "(pending)Tabs",
  //   note: [
  //     "Learned passing down props as objects to a Component.",
  //     "Destructuring props and using it in component.",
  //     "Creating reusable Component.",
  //   ],
  //   image: Challange1,
  // },
  // {
  //   id: 31,
  //   name: "(pending)News Feed",
  //   heading: "(pending)News Feed",
  //   description:
  //     "In this challenge you're given a news feed with different videos. To improve the UX of your feed, the challenge is to make sure only one video can play at a time.Specifically you'll probably want to tackle the following steps.Finish the NewsFeed component by rendering a VideoItem component for every video in the videos array.Finish the VideoPlaybackProvider component so that playingVideoId and setPlayingVideoId are available throughout the component tree.Finish VideoItem so that the user can play and pause a video, but that when they do, any other video that is currently playing is paused.In my opinion this is the hardest challenge we've had throughout the course so far, so keep that in mind as you wrestle with imposter syndrome and self-doubt 🫶.",
  //   problem: ["Allow only one video to play at a time"],
  //   learningHeading: "(pending)News Feed",
  //   note: [
  //     "Learned passing down props as objects to a Component.",
  //     "Destructuring props and using it in component.",
  //     "Creating reusable Component.",
  //   ],
  //   image: Challange1,
  // },
  // {
  //   id: 32,
  //   name: "(pending)Function Props",
  //   heading: "(pending)Function Props",
  //   description:
  //     "Although this challenge looks similar to the previous one, there are some subtle differences. As before, apply the new props to the Badge component so that it renders properly.",
  //   problem: [
  //     "Give the image a proper alt tag using the author's name",
  //     "Make sure the badge displays the profile image correctly",
  //     "Display the author's name in the badge's heading",
  //     "Display the author's handle below the heading",
  //     "Apply the correct styles to the outer div",
  //   ],
  //   learningHeading: "(pending)Function Props",
  //   note: [
  //     "Learned passing down props as objects to a Component.",
  //     "Destructuring props and using it in component.",
  //     "Creating reusable Component.",
  //   ],
  //   image: Challange1,
  // },
  // {
  //   id: 33,
  //   name: "(pending)Multistep Form with useReducer",
  //   heading: "(pending)Multistep Form with useReducer",
  //   description:
  //     "Given the solution code to the previous 'Multistep Form' challenge you encountered earlier in the course, your job is to refactor the app to use useReducer to manage state instead of useState.",
  //   problem: [
  //     "Enable a user to transition to the next step",
  //     "Enable a user to return to the previous Step",
  //     "Keep track of the step and form state correctly",
  //     "Reset the form when the user submits it",
  //     "Use the useReducer hook to manage the component's state",
  //   ],
  //   learningHeading: "(pending)Multistep Form with useReducer",
  //   note: [
  //     "Learned passing down props as objects to a Component.",
  //     "Destructuring props and using it in component.",
  //     "Creating reusable Component.",
  //   ],
  //   image: Challange1,
  // },
  // {
  //   id: 34,
  //   name: "(pending)Task Manager",
  //   heading: "(pending)Task Manager",
  //   description:
  //     "Given the completed TaskManager component, your challenge is to finish implementing the reducer function so that the user can add, update, and delete tasks.",
  //   problem: [
  //     "The user should be able to add a new task",
  //     "The user should be able to update the status of a task",
  //     "The user should be able to delete a task",
  //   ],
  //   learningHeading: "(pending)Task Manager",
  //   note: [
  //     "Learned passing down props as objects to a Component.",
  //     "Destructuring props and using it in component.",
  //     "Creating reusable Component.",
  //   ],
  //   image: Challange1,
  // },
  // {
  //   id: 35,
  //   name: "(pending)Add To Cart",
  //   heading: "(pending)Add To Cart",
  //   description:
  //     "Given the final ShoppingCart component (including all the JSX and event handlers), your job is to finish implementing both the reducer function as well as the calculateTotal function.calculateTotal takes in the cart and should return a single numeric value representing the total cost of all the items in the cart.For the reducer, look at the component to figure out which action types are being dispatched as well as the shape of the action objects.",
  //   problem: [
  //     "Render the appropriate UI if there are no items in the cart",
  //     "Give the user the ability to add items to the shopping cart",
  //     "Give the user the ability to remove items from the shopping cart",
  //     "Appropriately update the quantity of items in the shopping cart",
  //     "Appropriately calculate the total cost of all items in the shopping cart",
  //   ],
  //   learningHeading: "(pending)Add To Cart",
  //   note: [
  //     "Learned passing down props as objects to a Component.",
  //     "Destructuring props and using it in component.",
  //     "Creating reusable Component.",
  //   ],
  //   image: Challange1,
  // },
  // {
  //   id: 36,
  //   name: "(pending)Undo Redo",
  //   heading: "(pending)Undo Redo",
  //   description:
  //     "The goal of this challenge is, using useReducer, add increment, decrement, undo, and redo functionality to your application. Unlike the other challenges, you'll need to wire up useReducer, the event handlers, and the reducer function yourself - you won't need to touch the JSX though.",
  //   problem: [
  //     "Clicking increment should increment the counter",
  //     "Clicking decrement should decrement the counter",
  //     "Clicking undo and redo should undo or redo the previous action",
  //   ],
  //   learningHeading: "(pending)Undo Redo",
  //   note: [
  //     "Learned passing down props as objects to a Component.",
  //     "Destructuring props and using it in component.",
  //     "Creating reusable Component.",
  //   ],
  //   image: Challange1,
  // },
  // {
  //   id: 37,
  //   name: "(pending)Localized Primes",
  //   heading: "(pending)Localized Primes",
  //   description:
  //     "Complete the app so that the user can change their locale as well as iterate through every prime number. Take special care to only re-calculate the prime number when the user clicks NEXT PRIME.",
  //   problem: [
  //     "Increment the prime number count when the button is clicked",
  //     "Change the language when the select option is changed",
  //     "Memoize nthprime so that it's only re-calculated when count changes",
  //   ],
  //   learningHeading: "(pending)Localized Primes",
  //   note: [
  //     "Learned passing down props as objects to a Component.",
  //     "Destructuring props and using it in component.",
  //     "Creating reusable Component.",
  //   ],
  //   image: Challange1,
  // },
  // {
  //   id: 38,
  //   name: "(pending)Data Table",
  //   heading: "(pending)Data Table",
  //   description:
  //     "Given an application that already has the completed JSX and event handlers for deciding how you should filter and sort the data (searchTerm, sortColumn, and sortOrder), your job is to fetch the data (using the fetchData function), and then, in the most performant way possible, using searchTerm, sortColumn, and sortOrder, update the filteredData and sortedData variables.filteredData should be a memoized array of data that has been filtered based on the searchTerm.sortedData should be a memoized array of filteredData that has been sorted based on the sortColumn and sortOrder.",
  //   problem: [
  //     "The user can search Pokémon",
  //     "The user can sort Pokémon",
  //     "The Pokémon data is correctly memoized",
  //   ],
  //   learningHeading: "(pending)Data Table",
  //   note: [
  //     "Learned passing down props as objects to a Component.",
  //     "Destructuring props and using it in component.",
  //     "Creating reusable Component.",
  //   ],
  //   image: Challange1,
  // },
  // {
  //   id: 39,
  //   name: "(pending)Optimizing Renders",
  //   heading: "(pending)Optimizing Renders",
  //   description:
  //     "In this challenge you're given two components, ParentComponent and ChildComponent. The goal is to make it so whenever the button in ChildComponent is clicked, you increment count in the ParentComponent. The caveat is that ChildComponent should only ever render once, when the app first loads.",
  //   problem: [
  //     "Increment count when the button is clicked",
  //     "ChildComponent should only render once, when the app first loads",
  //   ],
  //   learningHeading: "(pending)Optimizing Renders",
  //   note: [
  //     "Learned passing down props as objects to a Component.",
  //     "Destructuring props and using it in component.",
  //     "Creating reusable Component.",
  //   ],
  //   image: Challange1,
  // },
  // {
  //   id: 40,
  //   name: "(pending)React Ruler",
  //   heading: "(pending)React Ruler",
  //   description:
  //     "Using the ResizeObserver API, synchronize the width of the ruler (the article element) with your component's width state.",
  //   problem: [
  //     "Update the width state when the ruler is resized",
  //     "Clean up the ResizeObserver when the component is removed from the DOM",
  //   ],
  //   learningHeading: "(pending)Function Props",
  //   note: [
  //     "Learned passing down props as objects to a Component.",
  //     "Destructuring props and using it in component.",
  //     "Creating reusable Component.",
  //   ],
  //   image: Challange1,
  // },
];

export default Snippents;
