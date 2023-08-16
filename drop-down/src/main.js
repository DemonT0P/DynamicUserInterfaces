import "./style.css";
import dropDownMenu from "../public/dropdown.svg";

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
