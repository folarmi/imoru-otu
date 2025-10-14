import { newsAndEvents } from "@/data";
import { HeaderText } from "../atoms/HeaderText";
import { Calendar, MapPin } from "lucide-react";

const LatestNewsAndEvents = () => {
  return (
    // <div className="mt-16 bg-white border border-black py-20 px-11 rounded-md">
    //   <HeaderText
    //     title="Latest News & Events"
    //     subtitle="Stay updated with our recent activities and upcoming initiatives."
    //   />

    //   <div className="flex items-stretch justify-center gap-x-6 my-16">
    //     {newsAndEvents?.map(({ date, id, location, summary, tag, title }) => {
    //       return (
    //         <div
    //           key={id}
    //           className="drop-shadow-card p-6 bg-white border border-gray_200 rounded-lg w-[413px] flex flex-col"
    //         >
    //           <div className="flex items-center text-yellow_100">
    //             <Calendar className="w-4 h-4 mr-2" />
    //             <p className="font-semibold text-sm">{date}</p>
    //           </div>

    //           <div className="mt-4 bg-secondary/10 py-1 px-3 rounded-full w-fit">
    //             <p className="text-secondary font-semibold text-xs">{tag}</p>
    //           </div>

    //           <p className="playfair font-semibold py-2 text-secondary text-xl">
    //             {title}
    //           </p>
    //           <p className="font-normal text-green_200 text-base pb-6 flex-1">
    //             {summary}
    //           </p>

    //           <div className="flex items-center text-green_200">
    //             <MapPin />
    //             <p className="text-sm font-normal">{location}</p>
    //           </div>
    //         </div>
    //       );
    //     })}
    //   </div>
    // </div>

    <div className="mt-12 sm:mt-14 md:mt-16 bg-white border border-black py-14 sm:py-16 md:py-20 px-6 sm:px-8 md:px-11 rounded-md">
      {/* HEADER */}
      <HeaderText
        title="Latest News & Events"
        subtitle="Stay updated with our recent activities and upcoming initiatives."
      />

      {/* CARD GRID */}
      <div className="my-10 sm:my-12 md:my-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 place-items-center">
        {newsAndEvents?.map(({ date, id, location, summary, tag, title }) => (
          <div
            key={id}
            className="drop-shadow-card p-5 sm:p-6 bg-white border border-gray_200 rounded-lg w-full max-w-xs sm:max-w-sm md:max-w-[380px] lg:max-w-[413px] flex flex-col hover:shadow-lg transition-shadow duration-200"
          >
            {/* DATE */}
            <div className="flex items-center text-yellow_100">
              <Calendar className="w-4 h-4 mr-2" />
              <p className="font-semibold text-xs sm:text-sm">{date}</p>
            </div>

            {/* TAG */}
            <div className="mt-4 bg-secondary/10 py-1 px-3 rounded-full w-fit">
              <p className="text-secondary font-semibold text-[10px] sm:text-xs uppercase tracking-wide">
                {tag}
              </p>
            </div>

            {/* TITLE */}
            <p className="playfair font-semibold py-2 text-secondary text-lg sm:text-xl leading-snug">
              {title}
            </p>

            {/* SUMMARY */}
            <p className="font-normal text-green_200 text-sm sm:text-base pb-6 flex-1 leading-relaxed">
              {summary}
            </p>

            {/* LOCATION */}
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
