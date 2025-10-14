type CardProps = {
  img: string;
  title: string;
  desc: string;
};

const ProjectCard = ({ desc, img, title }: CardProps) => {
  return (
    // <div className="flex flex-col rounded-lg border border-black overflow-hidden w-[330px]">
    //   <img src={img} loading="lazy" />
    //   <section className="bg-white py-5 px-[14px]">
    //     <p className="font-medium text-sm">{title}</p>
    //     <p className="text-gray_100 font-normal text-xs pt-3 w-[248px]">
    //       {desc}
    //     </p>
    //   </section>
    // </div>

    <div className="flex flex-col rounded-lg border border-black overflow-hidden w-full max-w-[330px] mx-auto">
      <img src={img} loading="lazy" className="w-full" />
      <section className="bg-white py-4 sm:py-5 px-3 sm:px-[14px]">
        <p className="font-medium text-sm">{title}</p>
        <p className="text-gray_100 font-normal text-xs pt-3 w-full max-w-[248px]">
          {desc}
        </p>
      </section>
    </div>
  );
};

export { ProjectCard };
