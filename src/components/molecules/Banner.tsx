type BannerProp = {
  title: string;
  subtitle: string;
  className?: string;
};

const Banner = ({ subtitle, title, className }: BannerProp) => {
  return (
    <div
      className={`mt-5 bg-gradient-primary py-20 flex flex-col items-center justify-center ${className}`}
    >
      <p className="text-primary font-bold playfair text-6xl">{title}</p>
      <p className="text-white/90 text-2xl font-normal text-center max-w-[896px] pt-6">
        {subtitle}
      </p>
    </div>
  );
};

export { Banner };
