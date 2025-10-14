import { newsAndEvents } from "@/data";
import { HeaderText } from "../atoms/HeaderText";
import { Calendar, MapPin } from "lucide-react";

const LatestNewsAndEvents = () => {
  return (
    <div className="mt-16 bg-white border border-black py-20 px-11 rounded-md">
      <HeaderText
        title="Latest News & Events"
        subtitle="Stay updated with our recent activities and upcoming initiatives."
      />

      {/* <div className="flex items-center justify-center gap-x-6 mt-16">
        {newsAndEvents?.map(({ date, id, location, summary, tag, title }) => {
          return (
            <div
              key={id}
              className="drop-shadow-card p-6 bg-white border border-gray_200 rounded-lg w-[413px]"
            >
              <div className="flex items-center text-yellow_100">
                <Calendar className="w-4 h-4 mr-2" />
                <p className="font-semibold text-sm">{date}</p>
              </div>

              <div className="mt-4 bg-secondary/10 py-1 px-3 rounded-full">
                <p className="text-secondary font-semibold text-xs">{tag}</p>
              </div>

              <p className="playfair font-semibold py-2 text-secondary text-xl">
                {title}
              </p>
              <p className="font-normal text-green_200 text-base pb-6">
                {summary}
              </p>

              <div className="flex items-center text-green_200">
                <MapPin />
                <p className="text-sm font-normal">{location}</p>
              </div>
            </div>
          );
        })}
      </div> */}

      <div className="flex items-stretch justify-center gap-x-6 mt-16">
        {newsAndEvents?.map(({ date, id, location, summary, tag, title }) => {
          return (
            <div
              key={id}
              className="drop-shadow-card p-6 bg-white border border-gray_200 rounded-lg w-[413px] flex flex-col"
            >
              <div className="flex items-center text-yellow_100">
                <Calendar className="w-4 h-4 mr-2" />
                <p className="font-semibold text-sm">{date}</p>
              </div>

              <div className="mt-4 bg-secondary/10 py-1 px-3 rounded-full w-fit">
                <p className="text-secondary font-semibold text-xs">{tag}</p>
              </div>

              <p className="playfair font-semibold py-2 text-secondary text-xl">
                {title}
              </p>
              <p className="font-normal text-green_200 text-base pb-6 flex-1">
                {summary}
              </p>

              <div className="flex items-center text-green_200">
                <MapPin />
                <p className="text-sm font-normal">{location}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export { LatestNewsAndEvents };
