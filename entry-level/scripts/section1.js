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

  const titleLink = document.createElement("a");
  titleLink.href = article.link;
  titleLink.textContent = article.title;
//   titleLink.style.fontSize = "larger";

  const description = document.createElement("p");
  description.textContent = article.description;

  const readMoreLink = document.createElement("a");
  readMoreLink.href = article.link;
  readMoreLink.textContent = "ادامه خبر";
//   readMoreLink.style.fontSize = "small";

  articleElement.appendChild(titleLink);
  articleElement.appendChild(description);
  articleElement.appendChild(readMoreLink);

  asideElement.appendChild(articleElement);
});
