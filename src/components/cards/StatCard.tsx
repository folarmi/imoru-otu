type StatCardProp = {
  year: string;
  title: string;
  desc: string;
  img: string;
  imgDesc: string;
};

const StatCard = ({ desc, img, imgDesc, title, year }: StatCardProp) => {
  return (
    <div className="group flex items-start justify-between bg-white p-6 rounded-lg mb-4 border border-black transition-all duration-300">
      <img
        src={img}
        className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 max-h-0 group-hover:max-h-96"
      />

      <section className="flex flex-col text-right flex-1 self-stretch">
        <div className="flex-1">
          <p className="text-yellow_100 font-bold text-xl">{year}</p>
          <p className="text-secondary font-bold text-[32px] playfair">
            {title}
          </p>
          <p className="text-green_200 font-normal text-xl">{desc}</p>
        </div>
        <p className="text-green_200 font-normal text-xl italic">{imgDesc}</p>
      </section>
    </div>
  );
};

export { StatCard };
