import { makeADifference } from "@/data";
import { Check } from "lucide-react";

const MakeADifference = () => {
  return (
    // <div className="bg-secondary py-20 px-11 flex flex-col justify-center items-center rounded-md">
    //   <p className="playfair font-bold text-5xl text-white">
    //     Ready to Make a Difference?
    //   </p>
    //   <p className="font-normal text-lg text-green_200 pt-4 text-white w-[672px] text-center">
    //     Whether you're an organization ready to scale community impact or an
    //     individual wanting to give your time, there's a place for you in our
    //     mission.
    //   </p>

    //   <div className="mt-12 flex items-center justify-center gap-x-8">
    //     {makeADifference.map(
    //       ({
    //         buttonBgColor,
    //         buttonText,
    //         buttonTextColor,
    //         desc,
    //         features,
    //         icon: Icon,
    //         iconBgColor,
    //         iconColor,
    //         id,
    //         name,
    //       }) => {
    //         return (
    //           <div
    //             key={id}
    //             className="flex flex-col  bg-white rounded-md p-8 w-[432px]"
    //           >
    //             <section className="flex items-center justify-center w-full">
    //               <div
    //                 className={`flex items-center justify-center rounded-full h-16 w-16`}
    //                 style={{
    //                   backgroundColor: iconBgColor,
    //                 }}
    //               >
    //                 <Icon
    //                   className="w-8 h-8"
    //                   style={{
    //                     color: iconColor,
    //                   }}
    //                 />
    //               </div>
    //             </section>
    //             <p className="pt-6 font-bold playfair text-2xl text-secondary text-center">
    //               {name}
    //             </p>
    //             <p className="pt-4 font-normal text-center text-base text-green_200">
    //               {desc}
    //             </p>

    //             <div className="space-y-4 mt-6 mb-8">
    //               {features?.map((feature, index) => (
    //                 <div key={index} className="flex items-center gap-3">
    //                   <div className="flex-shrink-0">
    //                     <Check
    //                       className="w-5 h-5 text-yellow_100"
    //                       strokeWidth={3}
    //                     />
    //                   </div>
    //                   <span className="text-green_200 text-base font-normal">
    //                     {feature}
    //                   </span>
    //                 </div>
    //               ))}
    //             </div>

    //             <button
    //               className={`w-full rounded-md py-3 uppercase text-sm font-semibold`}
    //               style={{
    //                 background: buttonBgColor,
    //                 color: buttonTextColor,
    //               }}
    //             >
    //               {buttonText}
    //             </button>
    //           </div>
    //         );
    //       }
    //     )}
    //   </div>
    // </div>

    <div className="bg-secondary py-16 md:py-20 px-6 sm:px-8 md:px-11 flex flex-col justify-center items-center rounded-md">
      {/* HEADER */}
      <p className="playfair font-bold text-3xl sm:text-4xl md:text-5xl text-white text-center leading-tight">
        Ready to Make a Difference?
      </p>

      <p className="font-normal text-sm sm:text-base md:text-lg text-green_200 pt-4 text-white text-center max-w-xl sm:max-w-2xl md:w-[672px]">
        Whether you're an organization ready to scale community impact or an
        individual wanting to give your time, there's a place for you in our
        mission.
      </p>

      {/* CARD SECTION */}
      <div className="mt-10 md:mt-12 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 w-full justify-items-center">
        {makeADifference.map(
          ({
            buttonBgColor,
            buttonText,
            buttonTextColor,
            desc,
            features,
            icon: Icon,
            iconBgColor,
            iconColor,
            id,
            name,
          }) => (
            <div
              key={id}
              className="flex flex-col bg-white rounded-md p-6 sm:p-7 md:p-8 w-full max-w-sm sm:max-w-[360px] md:max-w-[432px] shadow-sm"
            >
              {/* ICON */}
              <section className="flex items-center justify-center w-full">
                <div
                  className="flex items-center justify-center rounded-full h-14 w-14 sm:h-16 sm:w-16"
                  style={{
                    backgroundColor: iconBgColor,
                  }}
                >
                  <Icon
                    className="w-6 h-6 sm:w-8 sm:h-8"
                    style={{
                      color: iconColor,
                    }}
                  />
                </div>
              </section>

              {/* TITLE */}
              <p className="pt-5 sm:pt-6 font-bold playfair text-xl sm:text-2xl text-secondary text-center">
                {name}
              </p>

              {/* DESCRIPTION */}
              <p className="pt-3 sm:pt-4 font-normal text-center text-sm sm:text-base text-green_200 leading-relaxed">
                {desc}
              </p>

              {/* FEATURES */}
              <div className="space-y-3 sm:space-y-4 mt-5 sm:mt-6 mb-6 sm:mb-8">
                {features?.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start sm:items-center gap-3"
                  >
                    <div className="flex-shrink-0">
                      <Check
                        className="w-4 h-4 sm:w-5 sm:h-5 text-yellow_100"
                        strokeWidth={3}
                      />
                    </div>
                    <span className="text-green_200 text-sm sm:text-base font-normal">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* BUTTON */}
              <button
                className="w-full rounded-md py-3 uppercase text-xs sm:text-sm font-semibold transition-transform duration-200 hover:scale-[1.02]"
                style={{
                  background: buttonBgColor,
                  color: buttonTextColor,
                }}
              >
                {buttonText}
              </button>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export { MakeADifference };
