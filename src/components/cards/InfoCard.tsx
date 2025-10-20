interface Requirement {
  id: number | string;
  name: string;
}

interface InfoCardProps {
  title: string;
  description: string;
  requirementsTitle: string;
  requirements: Requirement[];
  buttonText?: string;
  className?: string;
  buttonOnClick?: () => void;
  buttonClassName?: string;
}

const InfoCard: React.FC<InfoCardProps> = ({
  title,
  description,
  requirementsTitle,
  requirements,
  buttonText,
  className,
  buttonOnClick,
  buttonClassName = "bg-white text-secondary hover:bg-opacity-90 transition-colors",
}) => {
  return (
    <section
      className={`bg-primary border-2 border-secondary rounded-lg p-6 w-full lg:w-1/2 drop-shadow-card h-auto  flex flex-col ${className}`}
    >
      <p className="font-bold text-lg sm:text-xl md:text-2xl text-secondary playfair">
        {title}
      </p>

      <p className="text-green_200 text-sm sm:text-base leading-snug mt-6 max-w-[566px] pb-4">
        {description}
      </p>

      <div className="mt-auto space-y-2 bg-[#C9B4834D] p-6 rounded-lg">
        <p className="font-bold text-base text-secondary playfair pb-3">
          {requirementsTitle}
        </p>
        {requirements.map(({ id, name }) => (
          <div key={id} className="flex items-start sm:items-center">
            <p className="text-green_200 text-sm sm:text-base leading-snug">
              {name}
            </p>
          </div>
        ))}
      </div>
      {buttonText && (
        <div className="mt-4 pt-2">
          <button
            onClick={buttonOnClick}
            className={`px-6 py-2 b rounded-md text-sm font-medium w-full border border-gray_300 ${buttonClassName}`}
          >
            {buttonText}
          </button>
        </div>
      )}
    </section>
  );
};

export { InfoCard };
