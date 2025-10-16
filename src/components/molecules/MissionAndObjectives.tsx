import { missionAndVision, Objectives } from "@/data";
import { HeaderText } from "../atoms/HeaderText";

const MissionAndObjectives = () => {
  return (
    <div>
      <section className="my-20 flex items-stretch justify-center gap-x-12">
        {missionAndVision.map(({ desc, icon: Icon, id, name }) => {
          return (
            <div
              className="max-w-[552px] drop-shadow-card rounded-xl p-6 flex flex-col gap-y-6 border border-secondary/20"
              key={id}
            >
              <Icon className="w-12 h-12 text-secondary" />
              <p className="text-secondary font-semibold text-3xl playfair">
                {name}
              </p>
              <p className="text-green_200 text-lg">{desc}</p>
            </div>
          );
        })}
      </section>

      <section className="bg-yellow_200 py-20">
        <HeaderText
          title="Our Objectives"
          subtitle="Core goals that guide our work and define our impact"
        />

        <div className="mt-16 space-y-4 w-3/4 mx-auto">
          {Array.from(
            { length: Math.ceil(Objectives.length / 3) },
            (_, rowIndex) => (
              <div
                key={rowIndex}
                className={`grid grid-cols-3 gap-4 ${
                  rowIndex === Math.ceil(Objectives.length / 3) - 1 &&
                  Objectives.length % 3 !== 0
                    ? "justify-items-end"
                    : ""
                }`}
              >
                {Objectives.slice(rowIndex * 3, rowIndex * 3 + 3).map(
                  ({ id, name }) => {
                    return (
                      <div
                        key={id}
                        className="grid grid-cols-[auto_1fr] gap-4 items-start bg-white p-6 rounded-lg w-full border border-gray-200"
                      >
                        <div className="w-9 h-9 flex items-center justify-center rounded-full bg-secondary/10 flex-shrink-0">
                          <p className="font-secondary font-bold text-base text-secondary">
                            {id}
                          </p>
                        </div>
                        <p className="text-secondary text-base leading-relaxed">
                          {name}
                        </p>
                      </div>
                    );
                  }
                )}
              </div>
            )
          )}
        </div>
      </section>
    </div>
  );
};

export { MissionAndObjectives };
