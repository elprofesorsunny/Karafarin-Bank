import React from "react";
import bannersData from "../data/bannersData.json";

// تعریف نوع داده برای هر بنر
interface Banner {
  id: number; // تغییر نوع id به number
  className: string;
  image: string;
}

const PromotionalBanners: React.FC = () => {
  return (
    <div
      id="back-section4"
      className="bg-cover bg-center pb-12"
      style={{ backgroundImage: "url(../assets/imgs/background-bottom.png)" }}
    >
      <div className="section4 max-w-[60vw] mx-auto py-4">
        <div
          id="grid-section4-banners"
          className="grid grid-cols-2 grid-rows-2 gap-8"
        >
          {bannersData.map((banner: Banner) => (
            <div
              key={banner.id}
              className={`${banner.className} bg-[#FCFAF3] shadow-lg rounded-lg h-[20rem] overflow-hidden`}
            >
              <img
                src={banner.image}
                alt={`Banner ${banner.id}`}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PromotionalBanners;
