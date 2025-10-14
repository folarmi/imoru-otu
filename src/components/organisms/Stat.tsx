import { statTwo } from "@/data";
import { HeaderText } from "../atoms/HeaderText";
import { StatCard } from "../cards/StatCard";
import scout from "@/assets/images/scout.svg";

const Stat = () => {
  return (
    // <div className="">
    //   <HeaderText
    //     title=" 5+ Years of Measurable Impact"
    //     subtitle="Since 2019, we've been transforming lives and preserving culture in
    //       Imoru."
    //     className="my-16"
    //   />

    //   <section className="flex flex-1 items-center justify-center gap-x-8 mb-[60px]">
    //     {statTwo?.map(({ desc, id, number }) => {
    //       return (
    //         <div
    //           key={id}
    //           className="flex flex-col items-center justify-center bg-orange_300 border border-black rounded-lg text-secondary w-[430px] py-9"
    //         >
    //           <p className="font-bold text-6xl pb-2">{number}</p>
    //           <p className="font-medium text-lg ">{desc}</p>
    //         </div>
    //       );
    //     })}
    //   </section>

    //   <StatCard
    //     year="2019"
    //     title="Foundation"
    //     desc="IPG established with a vision to empower Imoru's youth through education and culture."
    //     imgDesc="IPG at the ribbon cutting ceremony held at Radisson Blue hotel Imoru LGA, Ondo state, on the 14th of September 2019 "
    //     img={scout}
    //   />
    //   <StatCard
    //     year="2020-2022"
    //     title="Growth & Impact"
    //     desc="Expanded scholarship programs and cultural events, supporting 50+ students annually."
    //     imgDesc="IPG at the ribbon cutting ceremony held at Radisson Blue hotel Imoru LGA, Ondo state, on the 14th of September 2019 "
    //     img={scout}
    //   />
    //   <StatCard
    //     year="2023-Present"
    //     title="Sustained Excellence"
    //     desc="Over 100 students supported, community welfare programs established, cultural heritage preserved."
    //     imgDesc="IPG at the ribbon cutting ceremony held at Radisson Blue hotel Imoru LGA, Ondo state, on the 14th of September 2019 "
    //     img={scout}
    //   />
    // </div>

    <div className="">
      <HeaderText
        title=" 5+ Years of Measurable Impact"
        subtitle="Since 2019, we've been transforming lives and preserving culture in
          Imoru."
        className="my-8 sm:my-12 md:my-16"
      />

      <section className="flex flex-col sm:flex-row flex-1 items-center justify-center gap-4 sm:gap-6 md:gap-8 mb-10 sm:mb-12 md:mb-[60px] px-4 sm:px-0">
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

      <StatCard
        year="2019"
        title="Foundation"
        desc="IPG established with a vision to empower Imoru's youth through education and culture."
        imgDesc="IPG at the ribbon cutting ceremony held at Radisson Blue hotel Imoru LGA, Ondo state, on the 14th of September 2019 "
        img={scout}
      />
      <StatCard
        year="2020-2022"
        title="Growth & Impact"
        desc="Expanded scholarship programs and cultural events, supporting 50+ students annually."
        imgDesc="IPG at the ribbon cutting ceremony held at Radisson Blue hotel Imoru LGA, Ondo state, on the 14th of September 2019 "
        img={scout}
      />
      <StatCard
        year="2023-Present"
        title="Sustained Excellence"
        desc="Over 100 students supported, community welfare programs established, cultural heritage preserved."
        imgDesc="IPG at the ribbon cutting ceremony held at Radisson Blue hotel Imoru LGA, Ondo state, on the 14th of September 2019 "
        img={scout}
      />
    </div>
  );
};

export { Stat };
