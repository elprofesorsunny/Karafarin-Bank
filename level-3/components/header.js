const topHeaderLinks = [
  { text: "بانکداری شخصی", href: "#" },
  { text: "بانکداری تجاری", href: "#" },
  { text: "بانکداری شرکتی", href: "#" },
  { text: "بانکداری سرمایه‌گذاری", href: "#" },
  { text: "درباره ما", href: "#" },
];

const languageLinks = [
  { text: "EN", href: "#" },
  { text: "FA", href: "#" },
];

const bottomHeaderLinks = [
  { text: "بانکداری الکترونیکی", href: "#" },
  { text: "خدمات بانکی", href: "#" },
  { text: "خدمات بین‌الملل", href: "#" },
];

const bottomHeaderQuickAccess = {
  link: { text: "دسترسی سریع", href: "#" },
  button: { text: "های بانک" },
};

// Render Top Header Links
const topHeaderSection = document.querySelector(
  ".top-header section:first-of-type"
);
topHeaderLinks.forEach((link) => {
  const anchor = document.createElement("a");
  anchor.href = link.href;
  anchor.textContent = link.text;
  anchor.classList.add("hover:underline", "transition-colors", "duration-300");
  topHeaderSection.appendChild(anchor);
});

// Render Language Links
const languageSection = document.querySelector(
  ".top-header section:nth-of-type(2)"
);
languageLinks.forEach((link, index) => {
  const anchor = document.createElement("a");
  anchor.href = link.href;
  anchor.textContent = link.text;
  anchor.classList.add("hover:underline", "transition-colors", "duration-300");
  languageSection.appendChild(anchor);

  // Add a separator (|) except for the last link
  if (index < languageLinks.length - 1) {
    languageSection.appendChild(document.createTextNode(" | "));
  }
});

// Render Bottom Header Links
const bottomHeaderSectionLinks = document.querySelector(
  ".bottom-header section:nth-of-type(2)"
);
bottomHeaderLinks.forEach((link) => {
  const anchor = document.createElement("a");
  anchor.href = link.href;
  anchor.textContent = link.text;
  anchor.classList.add("hover:underline", "transition-colors", "duration-300");
  bottomHeaderSectionLinks.appendChild(anchor);
});

// Render Quick Access Section
const quickAccessSection = document.querySelector(
  ".bottom-header section:last-of-type div"
);
const quickAccessLink = document.createElement("a");
quickAccessLink.href = bottomHeaderQuickAccess.link.href;
quickAccessLink.textContent = bottomHeaderQuickAccess.link.text;
quickAccessLink.classList.add(
  "hover:underline",
  "transition-colors",
  "duration-300"
);

const quickAccessButton = document.createElement("button");
quickAccessButton.textContent = bottomHeaderQuickAccess.button.text;
quickAccessButton.classList.add(
  "bg-[#007773]",
  "text-white",
  "px-4",
  "py-2",
  "rounded-lg",
  "hover:bg-[#0ed068]",
  "transition-colors",
  "duration-300"
);

quickAccessSection.appendChild(quickAccessLink);
quickAccessSection.appendChild(quickAccessButton);
