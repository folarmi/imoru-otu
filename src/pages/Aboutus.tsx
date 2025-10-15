import { Banner } from "@/components/molecules/Banner";
import { MissionAndObjectives } from "@/components/molecules/MissionAndObjectives";

const Aboutus = () => {
  return (
    <div>
      <Banner
        title="About Imoru Progressive Group"
        subtitle="A non-profit, non-political organization dedicated to community development,
cultural preservation, and social welfare support since 2019."
      />
      <MissionAndObjectives />
    </div>
  );
};

export { Aboutus };
