const nextEl = document.querySelector(".next");

const prevEl = document.querySelector(".prev");

const imgsEl = document.querySelectorAll("img");

const imageContainerEl = document.querySelector(".image-container");

let currentImg = 1;

let timeout;

nextEl.addEventListener("click", () => {
  currentImg++;
  clearTimeout(timeout);
  updateImg();
});

prevEl.addEventListener("click", () => {
  currentImg--;
  clearTimeout(timeout);
  updateImg();
});

function updateImg() {
  var imgs = imageContainerEl.getElementsByTagName('img');
  len = imgs.length-1;
  if (currentImg > len) {
    currentImg = 1;
    console.log(currentImg)
  } else if (currentImg < 1) {
    currentImg = len;
  }
  imageContainerEl.style.transform = `translateX(-${(currentImg - 1) * 500}px)`;
  timeout = setTimeout(() => {
    console.log(len)
    updateImg();
    currentImg++;
  }, 5000);
}
updateImg()
const containerEl = document.querySelector(".container");

const btnEl = document.querySelector("#a1");

const popupContainerEl = document.querySelector(".popup-container");

const closeIconEl = document.querySelector(".close-icon");

btnEl.addEventListener("click", () => {
  containerEl.classList.add("active");
  popupContainerEl.classList.remove("active");
});

closeIconEl.addEventListener("click", () => {
  containerEl.classList.remove("active");
  popupContainerEl.classList.add("active");
});
