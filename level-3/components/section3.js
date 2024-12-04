// Data for News Items
const newsData = [
  {
    image: "https://via.placeholder.com/300",
    title: "پرداخت ۹ هزار میلیارد ریال تسهیلات تکلیفی در بانک کارآفرین",
    description:
      "بانک کارآفرین در راستای عمل به تعهدات خود به بانک مرکزی در پرداخت تسهیلات تکلیفی...",
    date: "۱۴۰۲/۰۶/۱۱",
    time: "۱۱:۴۸",
    link: "#",
  },
  {
    image: "https://via.placeholder.com/300",
    title: "درخشش بانک کارآفرین در جشنواره ملی انتشار روابط عمومی",
    description:
      "بانک کارآفرین براساس ارزیابی‌های هیات داوران در نوزدهمین جشنواره ملی روابط عمومی...",
    date: "۱۴۰۲/۰۶/۱۲",
    time: "۱۵:۴۴",
    link: "#",
  },
  {
    image: "https://via.placeholder.com/300",
    title: "بانک کارآفرین، ضامن صکوک مرابحه شرکت پیام گسترش ایران",
    description: "بانک کارآفرین ضامن صکوک مرابحه شرکت پیام گسترش ایران شد. همچنین در ادامه ...",
    date: "۱۴۰۲/۰۶/۱۳",
    time: "۱۳:۴۴",
    link: "#",
  },
];

// Data for Sidebar
const sidebarData = [
  { text: "اخبار بانک کارآفرین", icon: "📄", link: "#" },
  { text: "شعب بانک کارآفرین", icon: "📍", link: "#" },
  { text: "نرخ روزانه ارز", icon: "💱", link: "#" },
  { text: "گزارش‌ها و پژوهش‌ها", icon: "📊", link: "#" },
  { text: "بورس و سهام", icon: "📈", link: "#" },
];

// Populate News Section
const newsContainer = document.getElementById("news-container");

newsData.forEach((item) => {
  const newsItem = document.createElement("div");
  newsItem.classList.add(
    "news-item",
    "bg-white",
    "p-4",
    "flex",
    "flex-col",
    "gap-4"
  );

  const newsImage = document.createElement("img");
  newsImage.src = item.image;
  newsImage.alt = item.title;
  newsImage.classList.add("rounded-lg");

  const newsTitle = document.createElement("h3");
  newsTitle.textContent = item.title;
  newsTitle.classList.add("text-base", "font-bold", "text-[#007773]");

  const newsDescription = document.createElement("p");
  newsDescription.textContent = item.description;
  newsDescription.classList.add("text-sm", "text-gray-600");

  const newsMeta = document.createElement("div");
  newsMeta.classList.add("text-xs", "text-gray-400", "flex", "justify-between");
  newsMeta.innerHTML = `<span>${item.date}</span><span>${item.time}</span>`;

  const newsLink = document.createElement("a");
  newsLink.href = item.link;
  newsLink.textContent = "اخبار بیشتر";
  newsLink.classList.add("text-[#007773]", "text-sm", "hover:underline");

  newsItem.appendChild(newsImage);
  newsItem.appendChild(newsTitle);
  newsItem.appendChild(newsDescription);
  newsItem.appendChild(newsMeta);
  newsItem.appendChild(newsLink);

  newsContainer.appendChild(newsItem);
});

// Populate Sidebar
const sidebar = document.getElementById("sidebar");

sidebarData.forEach((item) => {
  // ایجاد یک div برای هر آیتم
  const sidebarItemContainer = document.createElement("div");
  sidebarItemContainer.classList.add(
    "sidebar-item-container",
    "mb-2"  // اضافه کردن فاصله بین هر آیتم (اختیاری)
  );

  // ایجاد لینک <a>
  const sidebarItem = document.createElement("a");
  sidebarItem.href = item.link;
  sidebarItem.classList.add(
    "sidebar-item",
    "flex",
    "items-center",
    "gap-4",
    "p-2",
    "bg-[#FCFAF3]",
    "rounded-lg",
    "shadow-lg",
    "transition-all",
    "hover:bg-[#c1c7ad]"
  );

  const sidebarIcon = document.createElement("span");
  sidebarIcon.textContent = item.icon;
  sidebarIcon.classList.add("text-xl", "text-gray-600");

  const sidebarText = document.createElement("span");
  sidebarText.textContent = item.text;
  sidebarText.classList.add("text-sm", "text-gray-800");

  sidebarItem.appendChild(sidebarIcon);
  sidebarItem.appendChild(sidebarText);

  // افزودن لینک به div
  sidebarItemContainer.appendChild(sidebarItem);

  // افزودن div به container اصلی
  sidebar.appendChild(sidebarItemContainer);
});
