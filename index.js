import { Header, Nav, Main, Footer } from "./components";
import * as state from "./store";
import { Navigo } from "navigo";
import { capitalize } from "lodash";
import axios from "axios";
import { auth, db } from "./firebase";
console.log("Requesting Data from API");
const router = new Navigo(window.location.origin);

const render = st => {
  //this can also be initiated as (const render = (st = state.Home) => {})
  document.querySelector("#root").innerHTML = `
    ${Header(st)}
    ${Nav(state.Links)}
    ${Main(st)}
    ${Footer(state.Footer)}`;
  router.updatePageLinks();
  addNavToggle();
  addEventListener();
};
render();

router
  .on({
    "/": () => render(),
    ":page": params => {
      const enteredRoute = params.page;
      const formattedRoute = capitalize(enteredRoute);
      const pieceOfState = state[formattedRoute];
      render(pieceOfState);
    }
  })
  .resolve();

function addNavToggle() {
  // add menu toggle to bars icon in nav bar
  document.querySelector(".fa-bars").addEventListener("click", () => {
    document.querySelector("nav > ul").classList.toggle("hidden--mobile");
  });
}

function addEventListener() {
  document.querySelectorAll("nav a").forEach(navLink => {
    navLink.addEventListener("click", event => {
      event.preventDefault();
      //       //      render(state[event.target.textContent]); This does the same thing as belore but as one line instead of multiple
      let page = event.target.textContent;
      let pieceOfState = state[page];
      render(pieceOfState);
    });
  });
}
