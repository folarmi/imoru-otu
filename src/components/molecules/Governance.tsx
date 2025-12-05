import {
  boardOfTrustees,
  executiveLeadership,
  governance,
  specialCommittee,
} from "@/data";
import { HeaderText } from "../atoms/HeaderText";
import { useState } from "react";
import { ExecutiveCard } from "../organisms/ExecutiveCard";

const Governance = () => {
  const [activeTab, setActiveTab] = useState("Board of Trustees");

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
              className="flex flex-col justify-center items-center drop-shadow-card p-6 md:p-8 w-full max-w-[362px] mx-auto border border-secondary rounded-md gap-y-4 md:gap-y-6 hover:shadow-lg transition-shadow duration-300 cursor-pointer"
              onClick={() => setActiveTab(name)}
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

      <div className="mt-16">
        {activeTab === "Board of Trustees" && (
          <>
            <HeaderText title="Board of Trustees" />
            <div className="mt-8 w-full sm:w-[80%] lg:w-[64%] mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
              {boardOfTrustees?.map(({ id, name, execName, img, bio }) => {
                return (
                  <ExecutiveCard
                    id={id}
                    img={img}
                    execName={execName}
                    name={name}
                    bio={bio}
                  />
                );
              })}
            </div>
          </>
        )}

        {activeTab === "Executive Committee" && (
          <>
            <HeaderText title="Executive Leadership" />
            <div className="mt-8 w-full sm:w-[80%] lg:w-[64%] mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
              {executiveLeadership?.map(({ id, name, execName, img, bio }) => {
                return (
                  <ExecutiveCard
                    id={id}
                    img={img}
                    execName={execName}
                    name={name}
                    bio={bio}
                  />
                );
              })}
            </div>
          </>
        )}

        {activeTab === "Special Committees" && (
          <>
            <HeaderText title="Special Committees" />
            <div className="mt-8 w-full sm:w-[80%] lg:w-[64%] mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
              {specialCommittee?.map(({ id, name, execName, img, bio }) => {
                return (
                  <ExecutiveCard
                    id={id}
                    img={img}
                    execName={execName}
                    name={name}
                    bio={bio}
                  />
                );
              })}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export { Governance };
