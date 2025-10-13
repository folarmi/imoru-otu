import { threePillars } from "@/data";
import { HeaderText } from "../atoms/HeaderText";
import { ProjectCard } from "../cards/ProjectCard";
import projectOne from "@/assets/images/projectOne.svg";
import { Check } from "lucide-react";
import CustomButton from "../atoms/CustomButton";

const CoreProjects = () => {
  return (
    <div className="mt-24">
      <HeaderText
        title="Core Projects"
        subtitle="Since 2019, we've been transforming lives and preserving culture in Imoru."
      />

      <section className="mt-16 flex items-center justify-between">
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

      <div className="mt-16 bg-white border border-black py-20 px-11">
        <HeaderText
          title="Our Three Pillars of Impact"
          subtitle="A comprehensive approach to community development that addresses
education, welfare, and culture."
        />

        <div className="my-16 flex items-center justify-between">
          {threePillars.map(
            ({ benefits, desc, icon: Icon, id, image, title }) => {
              return (
                <div key={id} className="max-w-[409px]">
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray_200">
                    {/* Image Section */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={image}
                        alt="Cultural celebration"
                        className="w-full h-full object-cover"
                      />
                      {/* Dark Overlay */}
                      <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                      {/* Icon Overlay */}
                      <div className="absolute bottom-6 left-6 w-12 h-12 bg-secondary/90 rounded-full flex items-center justify-center shadow-lg z-10 text-white">
                        <Icon />
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-8">
                      <h2 className="text-2xl text-secondary playfair pb-2 font-semibold">
                        {title}
                      </h2>

                      <p className="text-green_200 text-base leading-6 pb-6">
                        {desc}
                      </p>

                      {/* Features List */}
                      <div className="space-y-4">
                        {benefits?.map((feature, index) => (
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
            className="uppercase w-[342px] h-[44px]"
          >
            Learn About Our Programs
          </CustomButton>
          <p className="text-sm text-green_200 pt-3 font-normal">
            Partnership opportunities available for each program area
          </p>
        </div>
      </div>
    </div>
  );
};

export { CoreProjects };
