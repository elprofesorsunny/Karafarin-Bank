// Data for Banners
const bannersData = [
  { id: 1, className: "section4-banner1" },
  { id: 2, className: "section4-banner2" },
  { id: 3, className: "section4-banner3" },
  { id: 4, className: "section4-banner4" },
];

// Select container for banners
const backSection4 = document.getElementById("back-section4");
const section4 = document.getElementById("section4");
const gridSection4Banners = document.getElementById("grid-section4-banners");

// add style to container
backSection4.style.backgroundImage =
  "url(../assets/imgs/background-bottom.png)";
backSection4.style.backgroundSize = "cover";
backSection4.style.backgroundPosition = "center";
backSection4.style.paddingBottom = "3rem";

// cofig style for section4
section4.style.maxWidth = "60vw";
section4.style.margin = "auto";
section4.style.padding = "1rem 0";

// config style grid for banners
gridSection4Banners.style.display = "grid";
gridSection4Banners.style.gridTemplateColumns = "repeat(2, 1fr)";
gridSection4Banners.style.gridTemplateRows = "repeat(2, 1fr)";
gridSection4Banners.style.gap = "2rem";


bannersData.forEach((banner) => {
  const bannerDiv = document.createElement("div");

  bannerDiv.classList.add(
    banner.className,
    "bg-[#FCFAF3]",
    "shadow-lg",
    "rounded-lg",
    "h-[20rem]"
  );

  gridSection4Banners.appendChild(bannerDiv);
});
