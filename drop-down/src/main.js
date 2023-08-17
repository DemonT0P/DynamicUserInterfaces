import "./style.css";
import "./dropdown";
import { showMenu, dropdown } from "./dropdown";

document.querySelector("#app").innerHTML = dropdown();

showMenu(
  document.querySelector(".dropdown__logo"),
  document.querySelector(".dropdown__menus")
);
