import type { RefObject } from "react";

export const scrollToSection = (
  sectionRef: RefObject<HTMLElement | null> | null
) => {
  sectionRef?.current?.scrollIntoView({ behavior: "smooth" });
};
