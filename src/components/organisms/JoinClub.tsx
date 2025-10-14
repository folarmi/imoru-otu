import { joinOurClub, memberShipInfo, yourFund } from "@/data";
import { HeaderText } from "../atoms/HeaderText";
import CustomButton from "../atoms/CustomButton";

const JoinClub = () => {
  return (
    // <div className="mt-12 py-20 px-11 bg-custom-gradient flex items-center justify-between rounded-lg">
    //   <section className="w-1/2 mr-12">
    //     <HeaderText
    //       className="text-left"
    //       title="Join the Socio-Cultural Club"
    //       subtitle="IPG is more than an NGO—it's a community. Our members are the heart of everything we do, contributing time, resources, and passion to uplift Imoru."
    //     />

    //     <div className="mt-6">
    //       {joinOurClub.map(({ desc, icon: Icon, id, name }) => {
    //         return (
    //           <div key={id} className="flex items-center mb-6">
    //             <div className="bg-secondary/10 w-12 h-12 text-secondary mr-4 rounded-full flex items-center justify-center">
    //               <Icon />
    //             </div>
    //             <div className="">
    //               <p className="playfair font-bold text-secondary text-xl">
    //                 {name}
    //               </p>
    //               <p className="text-green_200 text-base">{desc}</p>
    //             </div>
    //           </div>
    //         );
    //       })}
    //     </div>

    //     <CustomButton
    //       variant="secondary"
    //       className="uppercase w-[342px] h-[44px] mt-6"
    //     >
    //       BECOME A MEMBER / VOLUNTEER
    //     </CustomButton>
    //   </section>

    //   <section className="bg-white border-2 border-secondary rounded-lg p-9 w-1/2">
    //     <p className="font-bold text-2xl text-secondary playfair">
    //       Membership Information
    //     </p>

    //     <div className="mt-6">
    //       {memberShipInfo.map(({ desc, id, name }) => {
    //         return (
    //           <div
    //             key={id}
    //             className="flex items-center justify-between py-4 border-b border-gray_200"
    //           >
    //             <p className="text-base text-green_200">{name}</p>
    //             <p className="text-secondary font-bold">{desc}</p>
    //           </div>
    //         );
    //       })}
    //     </div>

    //     <div className="bg-yellow_200 mt-6 rounded-lg py-8 px-6">
    //       <p className="font-bold text-base text-secondary playfair">
    //         What Your Dues Fund:
    //       </p>

    //       {yourFund.map(({ id, name }) => {
    //         return (
    //           <div key={id} className="flex items-center gap-y-2">
    //             <div className="bg-yellow_100 h-1 w-1 rounded-full mr-2"></div>
    //             <p className="text-green_200 text-sm">{name}</p>
    //           </div>
    //         );
    //       })}
    //     </div>
    //   </section>
    // </div>

    <div className="mt-12 py-16 md:py-20 px-6 sm:px-8 md:px-11 bg-custom-gradient flex flex-col lg:flex-row items-center lg:items-start justify-between rounded-lg gap-10 lg:gap-0">
      {/* LEFT SECTION */}
      <section className="w-full lg:w-1/2 lg:mr-12">
        <HeaderText
          className="text-left"
          title="Join the Socio-Cultural Club"
          subtitle="IPG is more than an NGO—it's a community. Our members are the heart of everything we do, contributing time, resources, and passion to uplift Imoru."
        />

        <div className="mt-6">
          {joinOurClub.map(({ desc, icon: Icon, id, name }) => (
            <div key={id} className="flex items-start sm:items-center mb-6">
              <div className="bg-secondary/10 w-10 h-10 sm:w-12 sm:h-12 text-secondary mr-4 rounded-full flex items-center justify-center shrink-0">
                <Icon className="text-lg sm:text-xl" />
              </div>
              <div>
                <p className="playfair font-bold text-secondary text-lg sm:text-xl">
                  {name}
                </p>
                <p className="text-green_200 text-sm sm:text-base">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        <CustomButton
          variant="secondary"
          className="uppercase w-full sm:w-[280px] md:w-[342px] h-[44px] mt-6 text-sm sm:text-base"
        >
          BECOME A MEMBER / VOLUNTEER
        </CustomButton>
      </section>

      {/* RIGHT SECTION */}
      <section className="bg-white border-2 border-secondary rounded-lg p-6 sm:p-8 md:p-9 w-full lg:w-1/2">
        <p className="font-bold text-xl sm:text-2xl text-secondary playfair">
          Membership Information
        </p>

        <div className="mt-6">
          {memberShipInfo.map(({ desc, id, name }) => (
            <div
              key={id}
              className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-3 sm:py-4 border-b border-gray_200"
            >
              <p className="text-sm sm:text-base text-green_200">{name}</p>
              <p className="text-secondary font-bold text-sm sm:text-base">
                {desc}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-yellow_200 mt-6 rounded-lg py-6 sm:py-8 px-5 sm:px-6">
          <p className="font-bold text-base sm:text-lg text-secondary playfair">
            What Your Dues Fund:
          </p>

          <div className="mt-3 space-y-2">
            {yourFund.map(({ id, name }) => (
              <div key={id} className="flex items-start sm:items-center">
                <div className="bg-yellow_100 h-1.5 w-1.5 rounded-full mr-2 mt-1.5 sm:mt-0"></div>
                <p className="text-green_200 text-sm sm:text-base leading-snug">
                  {name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export { JoinClub };
