let counter = 1;
let counters = document.querySelectorAll(".carousel__counter");

let auxClass = "carousel__counter-active";
document.querySelector("body").addEventListener("click", () => {
  if (
    counter == 0 &&
    counters[counters.length - 1].classList.contains(auxClass)
  ) {
    counters[counter].classList.toggle(auxClass);
    counters[counters.length - 1].classList.toggle(auxClass);
  } else if (
    counter == 0 &&
    !counters[counters.length - 1].classList.contains(auxClass)
  ) {
    counters[counter].classList.toggle(auxClass);
  } else {
    counters[counter].classList.toggle(auxClass);
    counters[counter - 1].classList.toggle(auxClass);
  }

  setCurrentImg(counter);

  if (counter >= counters.length - 1) counter = 0;
  else counter++;
});

function setCurrentImg(index) {
  document.querySelector(".carousel__current-img").src = `./imgs/image${
    index + 1
  }.jpg`;
}
