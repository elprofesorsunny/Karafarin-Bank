const articles = [
  {
    title: 'کسب جایزه دکتر نوربخش برای "ستد"',
    description:
      "در مراسم اختتامیهٔ یازدهمین نمایشگاه بانکداری الکترونیک و نظام‌های پرداخت، بانک ...",
    link: "#",
  },
  {
    title: 'کسب جایزه دکتر نوربخش برای "ستد"',
    description:
      "در مراسم اختتامیهٔ یازدهمین نمایشگاه بانکداری الکترونیک و نظام‌های پرداخت، بانک ...",
    link: "#",
  },
];

const asideElement = document.querySelector("aside");

// Clear existing content (if any)
asideElement.innerHTML = "";

// Generate and inject the articles
articles.forEach((article) => {
  const articleElement = document.createElement("article");
  articleElement.classList.add("p-4");

  const titleLink = document.createElement("a");
  titleLink.href = article.link;
  titleLink.textContent = article.title;
  titleLink.classList.add(
    "text-lg",
    "font-bold",
    "text-[#007773]",
    "hover:underline",
    "flex",
    "pb-4"
  );

  const description = document.createElement("p");
  description.textContent = article.description;
  description.classList.add("text-sm", "text-gray-600");

  const readMoreLink = document.createElement("a");
  readMoreLink.href = article.link;
  readMoreLink.textContent = "ادامه خبر";
  readMoreLink.classList.add("text-xs", "text-blue-500", "hover:underline", "flex", "pt-4");

  articleElement.appendChild(titleLink);
  articleElement.appendChild(description);
  articleElement.appendChild(readMoreLink);

  asideElement.appendChild(articleElement);
});
