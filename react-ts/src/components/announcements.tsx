import React, { useEffect, useState } from "react";
import announcementsData from "../data/announcementsData.json";

interface Announcement {
  title: string;
  description: string;
  link: string;
}

const Announcements: React.FC = () => {
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);

  useEffect(() => {
    setAnnouncements(announcementsData as Announcement[]);
  }, []);

  return (
    <main className="w-[60vw] mx-auto py-4">
      <div className="grid grid-cols-4 gap-4 section1">
        <aside className="flex flex-col bg-[#fcfaf3] shadow-md rounded-lg p-4 justify-center">
          {announcements.map((announcement, index) => (
            <article key={index} className="p-4">
              <a
                href={announcement.link}
                className="text-lg font-bold text-[#007773] hover:underline flex pb-4"
              >
                {announcement.title}
              </a>
              <p className="text-sm text-gray-600">
                {announcement.description}
              </p>
              <a
                href={announcement.link}
                className="text-xs text-[#007773] hover:underline flex pt-4"
              >
                ادامه خبر
              </a>
            </article>
          ))}
        </aside>
        <section className="col-span-3 h-[24vw] bg-gray-200 rounded-lg overflow-hidden shadow-md mr-2">
          <img
            src="https://placehold.co/750x405"
            alt="slider-1"
            className="h-full w-full object-fill"
          />
        </section>
      </div>
    </main>
  );
};

export default Announcements;
