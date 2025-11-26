/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  CoreProjects,
  HeroSection,
  JoinClub,
  LatestNewsAndEvents,
  MakeADifference,
  Stat,
} from "@/components/organisms";
import { useOutletContext } from "react-router-dom";

const Home = () => {
  const { joinUsRef } = useOutletContext<{
    joinUsRef: React.RefObject<HTMLElement>;
    sectionRefs: any;
  }>();

  return (
    <div className="">
      <HeroSection />
      <Stat />
      <CoreProjects />
      <section ref={joinUsRef}>
        <JoinClub />
      </section>
      <MakeADifference />
      <LatestNewsAndEvents />
    </div>
  );
};

export { Home };
