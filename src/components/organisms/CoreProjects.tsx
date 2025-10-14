import { threePillars } from "@/data";
import { HeaderText } from "../atoms/HeaderText";
import { ProjectCard } from "../cards/ProjectCard";
import projectOne from "@/assets/images/projectOne.svg";
import { Check } from "lucide-react";
import CustomButton from "../atoms/CustomButton";

const CoreProjects = () => {
  return (
    //     <div className="mt-24">
    //       <HeaderText
    //         title="Core Projects"
    //         subtitle="Since 2019, we've been transforming lives and preserving culture in Imoru."
    //       />

    //       <section className="mt-16 flex items-center justify-between">
    //         <ProjectCard
    //           img={projectOne}
    //           title="Educational Support"
    //           desc="Scholarships, tutoring, and mentorship programs for underserved students."
    //         />
    //         <ProjectCard
    //           img={projectOne}
    //           title="Community Empowerment"
    //           desc="Scholarships, tutoring, and mentorship programs for underserved students."
    //         />
    //         <ProjectCard
    //           img={projectOne}
    //           title="Cultural preservation"
    //           desc="Scholarships, tutoring, and mentorship programs for underserved students."
    //         />
    //         <ProjectCard
    //           img={projectOne}
    //           title="Welfare Initiatives"
    //           desc="Scholarships, tutoring, and mentorship programs for underserved students."
    //         />
    //       </section>

    //       <div className="mt-16 bg-white border border-black py-20 px-11">
    //         <HeaderText
    //           title="Our Three Pillars of Impact"
    //           subtitle="A comprehensive approach to community development that addresses
    // education, welfare, and culture."
    //         />

    //         <div className="my-16 flex items-center justify-between">
    //           {threePillars.map(
    //             ({ benefits, desc, icon: Icon, id, image, title }) => {
    //               return (
    //                 <div key={id} className="max-w-[409px]">
    //                   <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray_200">
    //                     {/* Image Section */}
    //                     <div className="relative h-48 overflow-hidden">
    //                       <img
    //                         src={image}
    //                         alt="Cultural celebration"
    //                         className="w-full h-full object-cover"
    //                       />
    //                       {/* Dark Overlay */}
    //                       <div className="absolute inset-0 bg-black bg-opacity-20"></div>
    //                       {/* Icon Overlay */}
    //                       <div className="absolute bottom-6 left-6 w-12 h-12 bg-secondary/90 rounded-full flex items-center justify-center shadow-lg z-10 text-white">
    //                         <Icon />
    //                       </div>
    //                     </div>

    //                     {/* Content Section */}
    //                     <div className="p-8">
    //                       <h2 className="text-2xl text-secondary playfair pb-2 font-semibold">
    //                         {title}
    //                       </h2>

    //                       <p className="text-green_200 text-base leading-6 pb-6">
    //                         {desc}
    //                       </p>

    //                       {/* Features List */}
    //                       <div className="space-y-4">
    //                         {benefits?.map((feature, index) => (
    //                           <div key={index} className="flex items-center gap-3">
    //                             <div className="flex-shrink-0">
    //                               <Check
    //                                 className="w-5 h-5 text-yellow_100"
    //                                 strokeWidth={3}
    //                               />
    //                             </div>
    //                             <span className="text-green_200 text-base font-normal">
    //                               {feature}
    //                             </span>
    //                           </div>
    //                         ))}
    //                       </div>
    //                     </div>
    //                   </div>
    //                 </div>
    //               );
    //             }
    //           )}
    //         </div>

    //         <div className="flex flex-col justify-center items-center">
    //           <CustomButton
    //             variant="secondary"
    //             className="uppercase w-[342px] h-[44px]"
    //           >
    //             Learn About Our Programs
    //           </CustomButton>
    //           <p className="text-sm text-green_200 pt-3 font-normal">
    //             Partnership opportunities available for each program area
    //           </p>
    //         </div>
    //       </div>
    //     </div>

    <div className="mt-12 sm:mt-16 md:mt-24 px-4 sm:px-0">
      <HeaderText
        title="Core Projects"
        subtitle="Since 2019, we've been transforming lives and preserving culture in Imoru."
      />

      <section className="mt-8 sm:mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
        <ProjectCard
          img={projectOne}
          title="Educational Support"
          desc="Scholarships, tutoring, and mentorship programs for underserved students."
        />
        <ProjectCard
          img={projectOne}
          title="Community Empowerment"
          desc="Scholarships, tutoring, and mentorship programs for underserved students."
        />
        <ProjectCard
          img={projectOne}
          title="Cultural preservation"
          desc="Scholarships, tutoring, and mentorship programs for underserved students."
        />
        <ProjectCard
          img={projectOne}
          title="Welfare Initiatives"
          desc="Scholarships, tutoring, and mentorship programs for underserved students."
        />
      </section>

      <div className="mt-8 sm:mt-12 md:mt-16 bg-white border border-black py-10 sm:py-14 md:py-20 px-4 sm:px-6 md:px-11">
        <HeaderText
          title="Our Three Pillars of Impact"
          subtitle="A comprehensive approach to community development that addresses
education, welfare, and culture."
        />

        <div className="my-8 sm:my-12 md:my-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {threePillars.map(
            ({ benefits, desc, icon: Icon, id, image, title }) => {
              return (
                <div key={id} className="max-w-full lg:max-w-[409px] mx-auto">
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray_200">
                    {/* Image Section */}
                    <div className="relative h-40 sm:h-48 overflow-hidden">
                      <img
                        src={image}
                        alt="Cultural celebration"
                        className="w-full h-full object-cover"
                      />
                      {/* Dark Overlay */}
                      <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                      {/* Icon Overlay */}
                      <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 w-10 h-10 sm:w-12 sm:h-12 bg-secondary/90 rounded-full flex items-center justify-center shadow-lg z-10 text-white">
                        <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-5 sm:p-6 md:p-8">
                      <h2 className="text-xl sm:text-2xl text-secondary playfair pb-2 font-semibold">
                        {title}
                      </h2>

                      <p className="text-green_200 text-sm sm:text-base leading-6 pb-4 sm:pb-6">
                        {desc}
                      </p>

                      {/* Features List */}
                      <div className="space-y-3 sm:space-y-4">
                        {benefits?.map((feature, index) => (
                          <div
                            key={index}
                            className="flex items-center gap-2 sm:gap-3"
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
                    </div>
                  </div>
                </div>
              );
            }
          )}
        </div>

        <div className="flex flex-col justify-center items-center">
          <CustomButton
            variant="secondary"
            className="uppercase w-full sm:w-[342px] h-[44px]"
          >
            Learn About Our Programs
          </CustomButton>
          <p className="text-xs sm:text-sm text-green_200 pt-3 font-normal text-center px-4">
            Partnership opportunities available for each program area
          </p>
        </div>
      </div>
    </div>
  );
};

export { CoreProjects };
