import {
  CoreProjects,
  Header,
  HeroSection,
  Stat,
} from "@/components/organisms";

const Home = () => {
  return (
    <div className="bg-primary px-6">
      <Header />
      <HeroSection />
      <Stat />
      <CoreProjects />
    </div>
  );
};

export { Home };
