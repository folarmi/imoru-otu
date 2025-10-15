import {
  CoreProjects,
  HeroSection,
  JoinClub,
  LatestNewsAndEvents,
  MakeADifference,
  Stat,
} from "@/components/organisms";

const Home = () => {
  return (
    <div className="">
      <HeroSection />
      <Stat />
      <CoreProjects />
      <JoinClub />
      <MakeADifference />
      <LatestNewsAndEvents />
    </div>
  );
};

export { Home };
