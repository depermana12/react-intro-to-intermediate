import { createRoot } from "react-dom/client";

import Pet from "./Pet";

// information flowing from app into pet through "props"
// one way data-flow, pass data from parent to child, but not the other way
// if parent pass data to child, if there is an issue inside a parent(App in this case)
// obviously child(pet in this case) did not cause it

// const App = () => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", {}, "Adopt me"),
//     React.createElement(Pet, {
//       name: "Luna",
//       animal: "Dog",
//       breed: "Havanese",
//     }),
//     React.createElement(Pet, {
//       name: "Kiko",
//       animal: "Rabbit",
//       breed: "Angora",
//     }),
//     React.createElement(Pet, {
//       name: "Sapi",
//       animal: "Cat",
//       breed: "Persian",
//     }),
//   ]);
// };

const App = () => {
  return (
    <>
      <h1>Adopt me</h1>
      <Pet name="Luna" animal="Dog" breed="Havanese" />
      <Pet name="Kiko" animal="Rabbit" breed="Angora" />
      <Pet name="Sapi" animal="Cat" breed="Orange" />
    </>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
