import "./style.css";
import "./dropdown";
import dropDownMenu from "../public/dropdown.svg";
import { showMenu } from "./dropdown";

document.querySelector("#app").innerHTML = `
  <div class="dropdown">
    <div class="dropdown__title">Website Title</div>
    <div class="dropdown__menus">
      <ul class="menus__itens">
        <li>Home</li>
        <li>Shop</li>
        <li>Contact Us</li>
      </li>
    </div>
    <img class="dropdown__logo" src="${dropDownMenu}">
  </div>
`;

showMenu(document.querySelector(".dropdown__logo"));
