import { Calendar, MapPin, ArrowRight } from "lucide-react";

interface EventCardProps {
  date: string;
  img: string;
  location?: string;
  summary: string;
  title: string;
  tag?: string;
  tagBgColor?: string;
  tagTextColor?: string;
}

const EventCard = ({
  date,
  img,
  location,
  summary,
  title,
  tag = "Upcoming Event",
  tagBgColor = "bg-secondary",
  tagTextColor = "text-white",
}: EventCardProps) => {
  return (
    <div className="drop-shadow-card border border-secondary rounded-lg overflow-hidden flex flex-col max-w-xs sm:max-w-sm md:max-w-[380px] lg:max-w-[405px] cursor-pointer">
      <div className="w-full">
        <img src={img} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="p-5 sm:p-6 bg-white w-full flex flex-col flex-1 hover:shadow-lg transition-shadow duration-200">
        <div className="flex items-center">
          <Calendar className="w-4 h-4 mr-2" />
          <p className="font-semibold text-xs sm:text-sm">{date}</p>
        </div>

        <div
          className={`mt-4 py-1 px-3 rounded-full w-fit`}
          style={{
            backgroundColor: tagBgColor,
          }}
        >
          <p
            style={{
              color: tagTextColor,
            }}
            className={` font-semibold text-[10px] sm:text-xs tracking-wide`}
          >
            {tag}
          </p>
        </div>

        <p className="playfair font-semibold py-2 text-secondary text-lg sm:text-xl leading-snug">
          {title}
        </p>

        <p className="font-normal text-green_200 text-sm sm:text-base pb-6 flex-1 leading-relaxed">
          {summary}
        </p>

        {location && (
          <div className="flex items-center text-green_200">
            <MapPin className="w-4 h-4 mr-1" />
            <p className="text-xs sm:text-sm font-normal">{location}</p>
          </div>
        )}

        <div className="flex items-center my-6">
          <p className="text-sm font-medium text-secondary">Read More</p>
          <ArrowRight className="w-4 h-4 ml-3" />
        </div>
      </div>
    </div>
  );
};

export { EventCard };
