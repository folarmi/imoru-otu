import { executiveLeadership, governance } from "@/data";
import { HeaderText } from "../atoms/HeaderText";

const Governance = () => {
  return (
    <div className="my-20">
      <HeaderText
        title="Governance Structure"
        subtitle="Transparent leadership committed to accountability and impact"
      />

      {/* Governance Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-12 md:mt-16 w-full lg:w-3/4 mx-auto">
        {governance.map(({ desc, icon: Icon, id, name }) => {
          return (
            <div
              key={id}
              className="flex flex-col justify-center items-center drop-shadow-card p-6 md:p-8 w-full max-w-[362px] mx-auto border border-secondary rounded-md gap-y-4 md:gap-y-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center justify-center">
                <Icon
                  className="w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 text-secondary"
                  strokeWidth={1.5}
                />
              </div>
              <p className="text-secondary font-semibold text-xl md:text-2xl playfair text-center whitespace-normal">
                {name}
              </p>
              <p className="text-green_200 text-sm md:text-base text-center leading-relaxed">
                {desc}
              </p>
            </div>
          );
        })}
      </div>

      {/* Executive Leadership */}
      <div className="mt-16">
        <HeaderText title="Executive Leadership" />

        {/* <div className="mt-8 w-full sm:w-[80%] lg:w-[64%] mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
          {executiveLeadership?.map(({ id, name, execName, img, bio }) => {
            return (
              <div key={id} className="p-6 text-center md:text-left">
                <div className="w-full max-w-[384px] h-[296px] rounded-t-2xl overflow-hidden mx-auto md:mx-0 mb-4">
                  <img
                    src={img}
                    alt={name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-gray_900 font-medium text-lg md:text-xl pb-2">
                  {execName}
                </p>
                <p className="playfair text-lg text-green_300 pb-3">{name}</p>
                <p className="text-sm text-green_200 leading-relaxed text-justify">
                  {bio}
                </p>
              </div>
            );
          })}
        </div> */}

        <div className="mt-8 w-full sm:w-[80%] lg:w-[64%] mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
          {executiveLeadership?.map(({ id, name, execName, img, bio }) => {
            return (
              <div key={id} className="text-center md:text-left">
                <div className="w-full h-[296px] rounded-t-2xl overflow-hidden mb-4">
                  <img
                    src={img}
                    alt={name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-gray_900 font-medium text-lg md:text-xl pb-1">
                  {execName}
                </p>
                <p className="playfair text-lg text-green_300 pb-2">{name}</p>
                <p className="text-sm text-green_200 leading-relaxed text-justify">
                  {bio}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export { Governance };
