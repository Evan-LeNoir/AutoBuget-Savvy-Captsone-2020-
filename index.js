import { Header, Nav, Main, Footer } from "./components";
import * as state from "./store";
import Navigo from "navigo";
import { capitalize } from "lodash";
import axios from "axios";
import { auth, db } from "./firebase";

const router = new Navigo(window.location.origin);

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

//this can also be initiated as (const render = (st = state.Home) => {})
function render(st = state.Home) {
  // console.log(st);
  document.querySelector("#root").innerHTML = `
    ${Header(st)}
    ${Nav(state.Links)}
    ${Main(st)}
    ${Footer()}`;
  router.updatePageLinks();
}

// router.on({
//   "/": params => render(state[capitalize(params.page)]),
//   "/": () => render(state.Home)
// });
// .resolve();

// function addEventListener() {
//   document.querySelector("#testNav").forEach(navLink => {
//     navLink.addEventListener("click", event => {
//       event.preventDefault();
//       //       //      render(state[event.target.textContent]); This does the same thing as belore but as one line instead of multiple
//       let page = event.target.textContent;
//       let pieceOfState = state[page];
//       render(pieceOfState);
//     });
//   });
// }
