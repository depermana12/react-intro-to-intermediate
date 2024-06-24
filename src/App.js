// information flowing from app into pet through "props"
const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h2", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.breed),
  ]);
};

// one way data-flow, pass data from parent to child, but not the other way
// if parent pass data to child, if there is an issue inside a parent(App in this case)
// obviously child(pet in this case) did not cause it

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt me"),
    React.createElement(Pet, {
      name: "Luna",
      animal: "Dog",
      breed: "Havanese",
    }),
    React.createElement(Pet, {
      name: "Kiko",
      animal: "Rabbit",
      breed: "Angora",
    }),
    React.createElement(Pet, {
      name: "Sapi",
      animal: "Cat",
      breed: "Persian",
    }),
  ]);
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
