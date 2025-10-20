import CustomButton from "@/components/atoms/CustomButton";
import CustomInput from "@/components/atoms/CustomInput";
import { EventCard } from "@/components/cards/EventCard";
import { Banner } from "@/components/molecules/Banner";
import { Filter } from "@/components/molecules/Filter";
import { sampleEvents, sampleNews } from "@/data";
import { useForm } from "react-hook-form";

const NewsAndEvents = () => {
  const { control } = useForm();
  return (
    //     <div>
    //       <Banner
    //         title="Latest News & Events"
    //         subtitle="Stay connected with Imoru Progressive Group's activities, achievements, and
    // upcoming initiatives"
    //       />
    //       <Filter />

    //       {/* Events */}
    //       <div className="flex flex-col lg:flex-row flex-wrap items-stretch justify-center gap-y-6 lg:gap-y-10 lg:gap-x-6 my-20">
    //         {sampleEvents.map(({ date, id, img, location, summary, title }) => {
    //           return (
    //             <EventCard
    //               key={id}
    //               date={date}
    //               img={img}
    //               location={location}
    //               summary={summary}
    //               title={title}
    //               tag="Upcoming Events"
    //               tagBgColor="#004D45"
    //               tagTextColor="#fff"
    //             />
    //           );
    //         })}
    //       </div>

    //       {/* News */}
    //       <div className="mt-16">
    //         <p className="playfair text-5xl text-secondary font-bold pb-6 flex pl-14">
    //           News
    //         </p>
    //         <div className="flex flex-col lg:flex-row flex-wrap items-stretch justify-center gap-y-6 lg:gap-y-10 lg:gap-x-6 mb-20">
    //           {sampleNews.map(({ date, id, img, summary, title }) => {
    //             return (
    //               <EventCard
    //                 key={id}
    //                 date={date}
    //                 img={img}
    //                 summary={summary}
    //                 title={title}
    //                 tag="Upcoming Events"
    //                 tagBgColor="#C9B483"
    //                 tagTextColor="#004D45"
    //               />
    //             );
    //           })}
    //         </div>
    //       </div>

    //       <div className="mt-4 flex flex-col items-center justify-center">
    //         <p className="playfair text-secondary font-bold text-4xl pb-4">
    //           Stay Updated
    //         </p>
    //         <p className="text-green_200 font-normal text-lg pb-8 text-center max-w-[672px]">
    //           Subscribe to our newsletter to receive updates about upcoming events
    //           and recent achievements
    //         </p>

    //         <div className="flex items-center">
    //           <CustomInput
    //             label=""
    //             name="password"
    //             placeholder="Enter your email address"
    //             control={control}
    //             className="w-[398px]"
    //           />
    //           <CustomButton
    //             className="ml-4 h-[49px] w-[132px]"
    //             variant="secondary"
    //             primaryButtonSize="xs"
    //           >
    //             Subscribe
    //           </CustomButton>
    //         </div>
    //       </div>
    //     </div>

    <div>
      <Banner
        title="Latest News & Events"
        subtitle="Stay connected with Imoru Progressive Group's activities, achievements, and upcoming initiatives"
      />
      <Filter />

      {/* Events */}
      <div className="flex flex-col lg:flex-row flex-wrap items-center lg:items-stretch justify-center gap-y-6 lg:gap-y-10 lg:gap-x-6 my-20">
        {sampleEvents.map(({ date, id, img, location, summary, title }) => (
          <EventCard
            key={id}
            date={date}
            img={img}
            location={location}
            summary={summary}
            title={title}
            tag="Upcoming Events"
            tagBgColor="#004D45"
            tagTextColor="#fff"
          />
        ))}
      </div>

      {/* News */}
      <div className="mt-8 lg:mt-16">
        <p className="playfair text-3xl sm:text-4xl lg:text-5xl text-secondary font-bold pb-6 flex justify-center lg:justify-start lg:pl-14 text-center">
          News
        </p>

        <div className="flex flex-col lg:flex-row flex-wrap items-center lg:items-stretch justify-center gap-y-6 lg:gap-y-10 lg:gap-x-6 mb-20">
          {sampleNews.map(({ date, id, img, summary, title }) => (
            <EventCard
              key={id}
              date={date}
              img={img}
              summary={summary}
              title={title}
              tag="Upcoming Events"
              tagBgColor="#C9B483"
              tagTextColor="#004D45"
            />
          ))}
        </div>
      </div>

      {/* Newsletter */}
      <div className="mt-4 flex flex-col items-center justify-center">
        <p className="playfair text-secondary font-bold text-3xl sm:text-4xl pb-4 text-center">
          Stay Updated
        </p>
        <p className="text-green_200 font-normal text-base sm:text-lg pb-8 text-center max-w-[672px]">
          Subscribe to our newsletter to receive updates about upcoming events
          and recent achievements
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full px-4 sm:px-0">
          <CustomInput
            label=""
            name="password"
            placeholder="Enter your email address"
            control={control}
            className="w-full sm:w-[398px]"
          />
          <CustomButton
            className="h-[49px] w-full sm:w-[132px]"
            variant="secondary"
            primaryButtonSize="xs"
          >
            Subscribe
          </CustomButton>
        </div>
      </div>
    </div>
  );
};

export { NewsAndEvents };
