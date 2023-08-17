import dropDownMenu from "../public/dropdown.svg";

export function showMenu(element, menu) {
  element.addEventListener("click", () => {
    console.log("Deu bom");
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
        <li>Contact Us</li>
      </li>
    </div>
    <img class="dropdown__logo" src="${dropDownMenu}">
  </div>
`;
}
