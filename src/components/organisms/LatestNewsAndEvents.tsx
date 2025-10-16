import { newsAndEvents } from "@/data";
import { HeaderText } from "../atoms/HeaderText";
import { Calendar, MapPin } from "lucide-react";

const LatestNewsAndEvents = () => {
  return (
    <div className="mt-12 sm:mt-14 md:mt-16 bg-white border border-black py-14 sm:py-16 md:py-20 px-6 sm:px-8 md:px-11 rounded-md">
      <HeaderText
        title="Latest News & Events"
        subtitle="Stay updated with our recent activities and upcoming initiatives."
      />

      <div className="flex flex-col lg:flex-row items-stretch justify-center gap-y-6 lg:gap-y-0 lg:gap-x-6 my-16">
        {newsAndEvents?.map(({ date, id, location, summary, tag, title }) => (
          <div
            key={id}
            className="drop-shadow-card p-5 sm:p-6 bg-white border border-gray_200 rounded-lg w-full max-w-xs sm:max-w-sm md:max-w-[380px] lg:max-w-[413px] flex flex-col hover:shadow-lg transition-shadow duration-200"
          >
            <div className="flex items-center text-yellow_100">
              <Calendar className="w-4 h-4 mr-2" />
              <p className="font-semibold text-xs sm:text-sm">{date}</p>
            </div>

            <div className="mt-4 bg-secondary/10 py-1 px-3 rounded-full w-fit">
              <p className="text-secondary font-semibold text-[10px] sm:text-xs uppercase tracking-wide">
                {tag}
              </p>
            </div>

            <p className="playfair font-semibold py-2 text-secondary text-lg sm:text-xl leading-snug">
              {title}
            </p>

            <p className="font-normal text-green_200 text-sm sm:text-base pb-6 flex-1 leading-relaxed">
              {summary}
            </p>

            <div className="flex items-center text-green_200">
              <MapPin className="w-4 h-4 mr-1" />
              <p className="text-xs sm:text-sm font-normal">{location}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export { LatestNewsAndEvents };
