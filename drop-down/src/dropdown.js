import dropDownMenu from "../public/dropdown.svg";

export function showMenu(element, menu) {
  element.addEventListener("click", () => {
    menu.classList.toggle("show");
  });
}

export function dropdown() {
  return `
  <div class="dropdown">
    <div class="dropdown__title">Website Title</div>
    <div class="dropdown__menus">
      <ul class="menus__itens">
        <li>Home</li>
        <li>Shop</li>
        <li class="itens__dropdown">
        <span>DropDown Menu</span>
        <ul class="dropdown__itens">
          <li>DropDown Item 1</li>
          <li>DropDown Item 2</li>
          <li>DropDown Item 3</li>
          <li>DropDown Item 4</li>
        </ul>
        </li>
        <li>Contact Us</li>
      </li>
    </div>
    <img class="dropdown__logo" src="${dropDownMenu}">
  </div>
`;
}
