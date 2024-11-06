import React from "react";
import DOMPurify from "dompurify";

interface FeaturedAnnouncementProps {
  show: boolean;
  language: "en" | "tr";
  announcementTR?: string;
  announcementEN?: string;
  link?: string;
}

const FeaturedAnnouncement: React.FC<FeaturedAnnouncementProps> = ({
  show,
  language,
  announcementTR = "",
  announcementEN = "",
  link = "#",
}) => {
  if (!show) return null;

  const announcementContent =
    language === "en" ? announcementEN : announcementTR;

  const fallbackMessage =
    language === "en"
      ? "Announcement not available in English."
      : "Duyuru Türkçe olarak mevcut değil.";

  return (
    <section className="bg-yellow-100 text-yellow-900 py-2">
      <div className="container mx-auto text-center">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold text-sm hover:underline md:text-lg"
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(announcementContent || fallbackMessage),
          }}
        />
      </div>
    </section>
  );
};

export default FeaturedAnnouncement;
