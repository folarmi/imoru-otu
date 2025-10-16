import { executiveLeadership, governance } from "@/data";
import { HeaderText } from "../atoms/HeaderText";

const Governance = () => {
  return (
    <div className="my-20">
      <HeaderText
        title="Governance Structure"
        subtitle="Transparent leadership committed to accountability and impact"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-12 md:mt-16 w-full lg:w-3/4 mx-auto px-4 lg:px-0">
        {governance.map(({ desc, icon: Icon, id, name }) => {
          return (
            <div
              key={id}
              className="flex flex-col justify-center items-center drop-shadow-card p-6 md:p-8 w-full max-w-[362px]  mx-auto border border-secondary rounded-md gap-y-4 md:gap-y-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center justify-center">
                <Icon
                  className="w-12 h-12 md:w-16 md:h-16 text-secondary"
                  strokeWidth={1.5}
                />
              </div>
              <p className="whitespace-nowrap text-secondary font-semibold text-2xl playfair text-center">
                {name}
              </p>
              <p className="text-green_200 text-base text-center leading-relaxed">
                {desc}
              </p>
            </div>
          );
        })}
      </div>

      <div className="mt-16">
        <HeaderText title="Executive Leadership" />

        <div className="mt-8 w-[64%] mx-auto grid grid-cols-2 gap-4">
          {executiveLeadership.map(({ id, name, type }) => {
            return (
              <div key={id} className="rounded-md border border-secondary p-6">
                <p className="text-secondary playfair font-semibold text-xl pb-2">
                  {name}
                </p>
                <p className="text-sm text-green_200 ">{type}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export { Governance };
