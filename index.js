import { Header, Nav, Main, Footer } from "./components";
import * as state from "./store";
import { Navigo } from "navigo";
import axios from "axios";
import { auth, db } from "./firebase";

const router = new Navigo(window.location.origin);

const render = (st = state.Home) => {
  //this can also be initiated as (const render = (st = state.Home) => {})
  document.querySelector("#root").innerHTML = `
    ${Header(st)}
    ${Nav(state.Links)}
    ${Main(st)}
    ${Footer()}`;
  router.updatePageLinks();
  addEventListener();
};
render();

// router.on({
//   "/": params => render(state[capitalize(params.page)]),
//   "/": () => render(state.Home)
// });
// .resolve();

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

function addEventListener() {
  document.querySelector("#testNav").forEach(navLink => {
    navLink.addEventListener("click", event => {
      event.preventDefault();
      //       //      render(state[event.target.textContent]); This does the same thing as belore but as one line instead of multiple
      let page = event.target.textContent;
      let pieceOfState = state[page];
      render(pieceOfState);
    });
  });
}
