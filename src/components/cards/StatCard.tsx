type StatCardProp = {
  year: string;
  title: string;
  desc: string;
  img: string;
  imgDesc: string;
};

const StatCard = ({ desc, img, imgDesc, title, year }: StatCardProp) => {
  return (
    // <div className="group flex flex-col md:flex-row items-start justify-between bg-white p-4 sm:p-6 rounded-lg mb-4 border border-black transition-all duration-300">
    //   <img
    //     src={img}
    //     loading="lazy"
    //     className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 max-h-0 group-hover:max-h-48 sm:group-hover:max-h-64 md:group-hover:max-h-96 w-full md:w-auto object-cover"
    //   />

    //   <section className="flex flex-col text-left md:text-right flex-1 self-stretch mt-0 md:mt-0">
    //     <div className="flex-1">
    //       <p className="text-yellow_100 font-bold text-lg sm:text-xl">{year}</p>
    //       <p className="text-secondary font-bold text-[24px] sm:text-[28px] md:text-[32px] playfair">
    //         {title}
    //       </p>
    //       <p className="text-green_200 font-normal text-base sm:text-lg md:text-xl">
    //         {desc}
    //       </p>
    //     </div>
    //     <p className="text-green_200 font-normal text-sm sm:text-base md:text-xl italic mt-4 md:mt-0">
    //       {imgDesc}
    //     </p>
    //   </section>
    // </div>

    // Second
    // <div className="group flex flex-col md:flex-row items-start gap-4 sm:gap-6 bg-white p-4 sm:p-6 rounded-lg mb-4 border border-black hover:shadow-lg transition-all duration-300">
    //   {/* Image Section */}
    //   <div className="w-full md:w-1/3 lg:w-2/5 overflow-hidden rounded-lg flex-shrink-0">
    //     <img
    //       src={img}
    //       alt={title}
    //       loading="lazy"
    //       className="w-full h-48 sm:h-56 md:h-64 object-contain opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100 transition-all duration-500"
    //     />
    //   </div>

    //   {/* Content Section */}
    //   <section className="flex flex-col text-left md:text-right flex-1">
    //     <div className="flex-1">
    //       <p className="text-yellow_100 font-bold text-lg sm:text-xl mb-1">
    //         {year}
    //       </p>
    //       <p className="text-secondary font-bold text-2xl sm:text-3xl md:text-4xl playfair mb-2">
    //         {title}
    //       </p>
    //       <p className="text-green_200 font-normal text-base sm:text-lg leading-relaxed">
    //         {desc}
    //       </p>
    //     </div>
    //     <p className="text-green_200 font-normal text-sm sm:text-base italic mt-4 opacity-70">
    //       {imgDesc}
    //     </p>
    //   </section>
    // </div>

    <div className="group flex flex-col md:flex-row items-start gap-4 sm:gap-6 bg-white p-4 sm:p-6 rounded-lg mb-4 border border-black hover:shadow-lg transition-all duration-300">
      {/* Image Section */}
      <div className="w-full md:w-1/2 lg:w-1/2 overflow-hidden rounded-lg flex-shrink-0">
        <img
          src={img}
          alt={title}
          loading="lazy"
          className="w-full h-64 sm:h-72 md:h-80 lg:h-96 object-contain opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100 transition-all duration-500"
        />
      </div>

      {/* Content Section */}
      <section className="flex flex-col text-left md:text-right flex-1">
        <div className="flex-1">
          <p className="text-yellow_100 font-bold text-lg sm:text-xl mb-1">
            {year}
          </p>
          <p className="text-secondary font-bold text-2xl sm:text-3xl md:text-4xl playfair mb-2">
            {title}
          </p>
          <p className="text-green_200 font-normal text-base sm:text-lg leading-relaxed">
            {desc}
          </p>
        </div>
        <p className="text-green_200 font-normal text-sm sm:text-base italic mt-4 opacity-70">
          {imgDesc}
        </p>
      </section>
    </div>
  );
};

export { StatCard };
