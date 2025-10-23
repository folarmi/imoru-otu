import React from "react";

interface Benefit {
  id: number | string;
  name: string;
}

interface BenefitsCardProps {
  title: string;
  description: string;
  benefits: Benefit[];
  buttonText?: string;
  className?: string;
  buttonOnClick?: () => void;
  buttonClassName?: string;
}

const BenefitsCard: React.FC<BenefitsCardProps> = ({
  title,
  description,
  benefits,
  buttonText,
  className,
  buttonOnClick,
  buttonClassName = "bg-white text-secondary hover:bg-opacity-90 transition-colors",
}) => {
  return (
    // w-full lg:w-1/2
    <section
      className={`flex flex-col bg-primary border-2 border-secondary rounded-lg py-4 px-6 drop-shadow-card h-auto ${className}`}
    >
      <p className="font-bold text-lg sm:text-xl md:text-2xl text-secondary playfair pb-6">
        {title}
      </p>

      <p className="text-green_200 text-sm sm:text-base leading-snug">
        {description}
      </p>

      <div className="mt-3 space-y-2">
        {benefits.map(({ id, name }) => (
          <div key={id} className="flex items-start sm:items-center">
            <p className="text-green_200 text-sm sm:text-base leading-snug">
              {name}
            </p>
          </div>
        ))}
      </div>

      {buttonText && (
        <div className="my-4">
          <button
            onClick={buttonOnClick}
            className={`px-6 py-2 rounded-md text-sm font-medium w-full border border-gray_300 ${buttonClassName}`}
          >
            {buttonText}
          </button>
        </div>
      )}
    </section>
  );
};

export { BenefitsCard };
