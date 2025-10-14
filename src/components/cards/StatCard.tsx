type StatCardProp = {
  year: string;
  title: string;
  desc: string;
  img: string;
  imgDesc: string;
};

const StatCard = ({ desc, img, imgDesc, title, year }: StatCardProp) => {
  return (
    <div className="group flex flex-col md:flex-row items-start justify-between bg-white p-4 sm:p-6 rounded-lg mb-4 border border-black transition-all duration-300">
      <img
        src={img}
        loading="lazy"
        className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 max-h-0 group-hover:max-h-48 sm:group-hover:max-h-64 md:group-hover:max-h-96 w-full md:w-auto object-cover"
      />

      <section className="flex flex-col text-left md:text-right flex-1 self-stretch mt-0 md:mt-0">
        <div className="flex-1">
          <p className="text-yellow_100 font-bold text-lg sm:text-xl">{year}</p>
          <p className="text-secondary font-bold text-[24px] sm:text-[28px] md:text-[32px] playfair">
            {title}
          </p>
          <p className="text-green_200 font-normal text-base sm:text-lg md:text-xl">
            {desc}
          </p>
        </div>
        <p className="text-green_200 font-normal text-sm sm:text-base md:text-xl italic mt-4 md:mt-0">
          {imgDesc}
        </p>
      </section>
    </div>
  );
};

export { StatCard };
