import "./style.css";
import { setupCounter } from "./counter";

const appElement = document.querySelector<HTMLDivElement>("#app");

if (!appElement) {
  throw new Error("Could not find app container");
}

appElement.innerHTML = `
  <main class="container">
    <h1>hooksweb</h1>
    <p>TypeScript + Vite + GitHub Pages scaffold is ready.</p>
    <button id="counter" type="button"></button>
  </main>
`;

const counterButton = document.querySelector<HTMLButtonElement>("#counter");

if (!counterButton) {
  throw new Error("Could not find counter button");
}

setupCounter(counterButton);

