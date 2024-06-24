import { createRoot } from "react-dom/client";
import SearchParams from "./SearchParams";

const App = () => {
  return (
    <>
      <h1>Adopt me</h1>
      <SearchParams />
    </>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
