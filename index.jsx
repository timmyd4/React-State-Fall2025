// //Challenge One
// import {createRoot} from "react-dom/client";
// import Ch1 from "./Challenges/Ch1/Ch1App.jsx";
// const root = createRoot(document.querySelector("#root"));
// root.render(<Ch1/>);

// //Challenge Two
// import {createRoot} from "react-dom/client";
// import Ch2 from "./Challenges/Ch2/Ch2App.jsx";
// const root = createRoot(document.querySelector("#root"));
// root.render(<Ch2/>);

// //Challenge Three
// import ReactDOM from 'react-dom/client';

// function App() {
  
//   function handleClick() {
//     console.log("I was clicked!")
//   }
  
//   function handleMouseOver() {
//     console.log("I was hovered!")
//   }
  
//   return (
//     <main className="container">
//       <img
//         src="https://picsum.photos/640/360"
//         alt="Placeholder image from Picsum"
//         onMouseOver={handleMouseOver}
//       />
//       <button onClick={handleClick}>Click me</button>
//     </main>
//   )
// }

// ReactDOM.createRoot(document.getElementById('root')).render(<App />);

//Challenge Four
import {createRoot} from "react-dom/client";
import Ch4 from "./Challenges/Ch4/Ch4App.jsx";
const root = createRoot(document.querySelector("#root"));
root.render(<Ch4/>);
