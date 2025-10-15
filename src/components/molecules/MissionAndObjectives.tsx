import { missionAndVision } from "@/data";

const MissionAndObjectives = () => {
  return (
    <div>
      <section className="my-20">
        {missionAndVision.map(({ desc, icon: Icon, id, name }) => {
          return (
            <div className="" key={id}>
              <Icon />
              <p>{name}</p>
              <p>{desc}</p>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export { MissionAndObjectives };
