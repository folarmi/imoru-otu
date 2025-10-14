import {
  CoreProjects,
  Header,
  HeroSection,
  JoinClub,
  LatestNewsAndEvents,
  MakeADifference,
  Stat,
} from "@/components/organisms";

const Home = () => {
  return (
    <div className="bg-primary px-6">
      <Header />
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
