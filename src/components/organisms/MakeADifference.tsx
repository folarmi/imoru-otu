import { makeADifference } from "@/data";
import { Check } from "lucide-react";

const MakeADifference = () => {
  return (
    <div className="bg-secondary py-20 px-11 flex flex-col justify-center items-center rounded-md">
      <p className="playfair font-bold text-5xl text-white">
        Ready to Make a Difference?
      </p>
      <p className="font-normal text-lg text-green_200 pt-4 text-white w-[672px] text-center">
        Whether you're an organization ready to scale community impact or an
        individual wanting to give your time, there's a place for you in our
        mission.
      </p>

      <div className="mt-12 flex items-center justify-center gap-x-8">
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
          }) => {
            return (
              <div
                key={id}
                className="flex flex-col  bg-white rounded-md p-8 w-[432px]"
              >
                <section className="flex items-center justify-center w-full">
                  <div
                    className={`flex items-center justify-center rounded-full h-16 w-16`}
                    style={{
                      backgroundColor: iconBgColor,
                    }}
                  >
                    <Icon
                      className="w-8 h-8"
                      style={{
                        color: iconColor,
                      }}
                    />
                  </div>
                </section>
                <p className="pt-6 font-bold playfair text-2xl text-secondary text-center">
                  {name}
                </p>
                <p className="pt-4 font-normal text-center text-base text-green_200">
                  {desc}
                </p>

                <div className="space-y-4 mt-6 mb-8">
                  {features?.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="flex-shrink-0">
                        <Check
                          className="w-5 h-5 text-yellow_100"
                          strokeWidth={3}
                        />
                      </div>
                      <span className="text-green_200 text-base font-normal">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <button
                  className={`w-full rounded-md py-3 uppercase text-sm font-semibold`}
                  style={{
                    background: buttonBgColor,
                    color: buttonTextColor,
                  }}
                >
                  {buttonText}
                </button>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};

export { MakeADifference };
