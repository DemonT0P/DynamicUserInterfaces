export default function start() {
  let counter = 1;
  let counters = document.querySelectorAll(".carousel__counter");

  let auxClass = "carousel__counter-active";

  function addCounter() {
    if (counter >= counters.length) counter = 1;
    else counter++;
    console.log(counter);
  }

  function subCounter() {
    if (counter <= 1) counter = counters.length;
    else counter--;
    console.log(counter);
  }

  function setCounter(index) {
    counter = index;
  }

  function setCurrentImg() {
    document.querySelector(
      ".carousel__current-img"
    ).src = `./imgs/image${counter}.jpg`;
  }

  function setNextPosition() {
    if (counter >= counters.length) {
      counters[counters.length - 1].classList.toggle(auxClass);
      counters[0].classList.toggle(auxClass);
    } else {
      counters[counter].classList.toggle(auxClass);
      counters[counter - 1].classList.toggle(auxClass);
    }
  }

  function setPreviousPosition() {
    if (counter == 1) {
      counters[counter - 1].classList.toggle(auxClass);
      counters[counters.length - 1].classList.toggle(auxClass);
    } else if (counter >= 1) {
      counters[counter - 1].classList.toggle(auxClass);
      counters[counter - 2].classList.toggle(auxClass);
    }
  }

  function setPosition() {
    counters[counter - 1].classList.toggle(auxClass);
  }

  function resetPositions() {
    document.querySelectorAll(".carousel__counter").forEach((dots, index) => {
      if (dots.classList.contains("carousel__counter-active")) {
        dots.classList.toggle("carousel__counter-active");
      }
    });
  }

  function timer() {
    setNextPosition();
    addCounter();
    setCurrentImg();
  }

  let interval = setInterval(timer, 5000);

  document.querySelector(".carousel__next").addEventListener("click", () => {
    setNextPosition();
    addCounter();
    setCurrentImg();
    clearInterval(interval);
  });

  document
    .querySelector(".carousel__previous")
    .addEventListener("click", () => {
      setPreviousPosition();
      subCounter();
      setCurrentImg();
      clearInterval(interval);
    });

  document.querySelectorAll(".carousel__counter").forEach((dots, index) => {
    dots.addEventListener("click", () => {
      setCounter(index + 1);
      resetPositions();
      setPosition();
      setCurrentImg();
    });
  });
}
