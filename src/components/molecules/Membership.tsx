import { memberBenefits, whoCanBeAMember } from "@/data";
import { HeaderText } from "../atoms/HeaderText";
import { BenefitsCard } from "../cards/BenefitsCard";
import { InfoCard } from "../cards/InfoCard";

const Membership = () => {
  return (
    // <div className="bg-yellow_200 py-20">
    //   <HeaderText
    //     title="Membership"
    //     subtitle="Join our community of change-makers committed to Imoru's development"
    //   />

    //   <div className="flex items-center justify-center mx-20 gap-x-12 mt-12">
    //     <section className="bg-primary border-2 border-secondary rounded-lg p-6 w-full lg:w-1/2 drop-shadow-card h-[397px] flex flex-col">
    //       <p className="font-bold text-xl sm:text-2xl text-secondary playfair pb-4">
    //         Who Can Join?
    //       </p>

    //       <p className="text-green_200 text-sm sm:text-base leading-snug mt-6 max-w-[566px] pb-4">
    //         All Imoru sons and daughters by birth, or residents who have lived
    //         in the community for at least 10 years with unquestionable
    //         character.
    //       </p>

    //       <div className="mt-auto space-y-2 bg-[#C9B4834D] p-6 rounded-lg">
    //         <p className="font-bold sm:text-base text-secondary playfair pb-3">
    //           Membership Requirements:
    //         </p>
    //         {whoCanBeAMember.map(({ id, name }) => (
    //           <div key={id} className="flex items-start sm:items-center">
    //             <p className="text-green_200 text-sm sm:text-base leading-snug">
    //               {name}
    //             </p>
    //           </div>
    //         ))}
    //       </div>
    //     </section>

    //     <section className="bg-primary border-2 border-secondary rounded-lg py-2 px-6 w-full lg:w-1/2 drop-shadow-card h-[397px]">
    //       <p className="font-bold text-xl sm:text-2xl text-secondary playfair pb-4">
    //         Member Benefits
    //       </p>

    //       <p className="text-green_200 text-sm sm:text-base leading-snug mt-6">
    //         Financial members in good standing (60% dues up-to-date) receive:
    //       </p>

    //       <div className="mt-3 space-y-2">
    //         {memberBenefits.map(({ id, name }) => (
    //           <div key={id} className="flex items-start sm:items-center">
    //             <p className="text-green_200 text-sm sm:text-base leading-snug">
    //               {name}
    //             </p>
    //           </div>
    //         ))}
    //       </div>
    //     </section>
    //   </div>
    // </div>

    <div className="bg-yellow_200 py-20">
      <HeaderText
        title="Membership"
        subtitle="Join our community of change-makers committed to Imoru's development"
      />

      <div className="flex flex-col lg:flex-row items-stretch justify-center mx-6 sm:mx-10 lg:mx-20 gap-y-8 lg:gap-x-12 mt-12">
        {/* Who Can Join */}

        <InfoCard
          title="Who Can Join?"
          description="All Imoru sons and daughters by birth, or residents who have lived in the community for at least 10 years with unquestionable character."
          requirementsTitle="Membership Requirements:"
          requirements={whoCanBeAMember}
        />

        {/* Member Benefits */}
        <BenefitsCard
          title="Member Benefits"
          description="Financial members in good standing (60% dues up-to-date) receive:"
          benefits={memberBenefits}
        />
      </div>
    </div>
  );
};

export { Membership };
