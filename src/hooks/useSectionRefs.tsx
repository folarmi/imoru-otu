import { useRef } from "react";

export const useSectionRefs = () => {
  const joinUsRef = useRef<HTMLElement>(null);

  const sectionRefs = {
    joinUs: joinUsRef,
  };

  return { sectionRefs, joinUsRef };
};
