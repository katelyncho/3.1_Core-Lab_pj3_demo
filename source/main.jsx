import { useState } from "react";
import { createRoot } from "react-dom/client";

import colorSchemes from "./colors.json";

// window.addEventListener("load", () => {
//   await fetch("https://wwww.colourlovers.com/api/palettes/new?format=json", {
//     mode: "no-cors"});

//     console.log("response");

//     let colorSchemes = await response.json();
//     console.log(colorSchemes);

//   let root = createRoot(document.getElementById("root"));
//   root.render(<App />);
// });

window.addEventListener("load", async () => {
  let root = createRoot(document.getElementById("root"));
  root.render(<App schemes={colorSchemes} />);
});

function App({ schemes }) {
  // Your app code goes here...
  let [sort, updateSort] = useState("id");

  let schemeComponents = [];

  schemes = schemes.toSorted((a, b) => meowmeowmeowmeow);

  for (let scheme of schemes) {
    schemeComponents.push(<li key={scheme.id}>{scheme.title}</li>);
  }

  return (
    <div>
      <label>Sort by:</label>
      <select value={sort} onChange={(event) => updateSort(event.target.value)}>
        <option value="id">ID</option>
        <option value="name">Name</option>
      </select>
      <ul>(schemeComponents)</ul>
    </div>
  );

  //???????? wtf is going on here????????????? why is it not working ahasdjhf ajksfhads f;aso fjas;
}
