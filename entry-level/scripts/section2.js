// Data for Carousel
const carouselData = [
  { text: "محاسبه سود سپرده" },
  { text: "استعلام شبا" },
  { text: "های‌بانک" },
  { text: "سامانه یکپارچه اعتبارات" },
  { text: "چندرسانه ای" },
  { text: "پرداخت قبوض" },
  { text: "استعلام ضمانتنامه" },
];

// Reference to Carousel and Arrows
let carousel = document.querySelector(".carousel");
const leftArrow = document.querySelector(".arrow.left");
const rightArrow = document.querySelector(".arrow.right");

// Function to Create a Diamond Element
function createDiamond() {
  const diamond = document.createElement("div");
  diamond.classList.add("diamond");
  return diamond;
}

// Populate Carousel with Items
carouselData.forEach((item) => {
  const carouselItem = document.createElement("article");
  carouselItem.classList.add("carousel-item");

  const diamond = createDiamond();
  const itemText = document.createElement("p");
  itemText.classList.add("carousel-item-text");
  itemText.textContent = item.text;

  carouselItem.appendChild(diamond);
  carouselItem.appendChild(itemText);

  carousel.appendChild(carouselItem);
});

const scrollAmount = 250;

// Handle Arrow Clicks for Scrolling
leftArrow.addEventListener("click", () => {
  carousel.scrollBy({
    left: -scrollAmount, // Adjust scroll distance for each click
    behavior: "smooth",
  });
});

rightArrow.addEventListener("click", () => {
  carousel.scrollBy({
    left: scrollAmount, // Adjust scroll distance for each click
    behavior: "smooth",
  });
});