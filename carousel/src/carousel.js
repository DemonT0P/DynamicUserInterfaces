export default function carousel() {
  return `<div class="carousel">
  <div class="carousel__imgs">
    <button class="carousel__next carousel__button">
      <img class="button__img" src="./imgs/icons8-right-50.png" />
    </button>
    <button class="carousel__previous carousel__button">
      <img class="button__img" src="./imgs/icons8-left-50.png" />
    </button>
    <img class="carousel__current-img" src="./imgs/image1.jpg" />
  </div>
  <div class="carousel__counters">
    <div class="carousel__counter carousel__counter-active"></div>
    <div class="carousel__counter"></div>
    <div class="carousel__counter"></div>
    <div class="carousel__counter"></div>
  </div>
</div>`;
}
