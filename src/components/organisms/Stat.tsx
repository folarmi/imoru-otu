import { statTwo } from "@/data";
import { HeaderText } from "../atoms/HeaderText";
import { StatCard } from "../cards/StatCard";
import foundation from "@/assets/images/foundation.jpeg";
import educationalSupport from "@/assets/images/educationalSupport.jpeg";
import eventTwo from "@/assets/images/welfareInitiatives.jpeg";

const Stat = () => {
  return (
    <div className="">
      <HeaderText
        title=" 5+ Years of Measurable Impact"
        subtitle="Since 2019, we've been transforming lives and preserving culture in
          Imoru."
        className="my-8 sm:my-12 md:my-16"
      />

      <section className="flex flex-col sm:flex-row flex-1 items-center justify-center gap-4 sm:gap-6 md:gap-8 mb-10 sm:mb-12 md:mb-[60px] px-4 sm:px-0 ">
        {statTwo?.map(({ desc, id, number }) => {
          return (
            <div
              key={id}
              className="flex flex-col items-center justify-center bg-orange_300 border border-black rounded-lg text-secondary w-full sm:w-[320px] md:w-[380px] lg:w-[430px] py-6 sm:py-7 md:py-9"
            >
              <p className="font-bold text-4xl sm:text-5xl md:text-6xl pb-2">
                {number}
              </p>
              <p className="font-medium text-base sm:text-lg px-4 text-center">
                {desc}
              </p>
            </div>
          );
        })}
      </section>

      <div className="">
        <StatCard
          year="2019"
          title="Foundation"
          desc="IPG established with a vision to develop Imoru Land through social welfare support."
          imgDesc="IPG at the ribbon cutting ceremony held at Imoru LGA, Ondo state, on the 14th of September 2019 "
          img={foundation}
        />
        <StatCard
          year="2020-2022"
          title="Growth & Impact"
          desc="Students receiving exercise books from IPG as part of our mission to support learning and empower the next generation"
          imgDesc="Imoru LGA"
          img={educationalSupport}
        />
        <StatCard
          year="2023-Present"
          title="Sustained Excellence"
          desc="Families joyfully raising food items received from our welfare program, reflecting hope and shared support."
          imgDesc="Imoru LGA, Ondo state "
          img={eventTwo}
        />
      </div>
    </div>
  );
};

export { Stat };
