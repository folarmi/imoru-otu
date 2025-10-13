import React from "react";

interface ImpactSectionProps {
  title: string;
  subtitle: string;
  className?: string;
}

const HeaderText: React.FC<ImpactSectionProps> = ({
  title = "5+ Years of Measurable Impact",
  subtitle = "Since 2019, we've been transforming lives and preserving culture in Imoru.",
  className = "",
}) => {
  return (
    <section
      className={`flex flex-col items-center justify-center text-center ${className}`}
    >
      <p className="playfair font-bold text-5xl text-secondary">{title}</p>
      <p className="font-normal text-lg text-green_200 pt-4">{subtitle}</p>
    </section>
  );
};

export { HeaderText };
