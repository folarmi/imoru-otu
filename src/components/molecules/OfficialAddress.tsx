import { BookOpen } from "lucide-react";

const OfficialAddress = () => {
  return (
    <div className="bg-secondary pt-20 pb-10 flex flex-col items-center justify-center">
      <p className="font-bold playfair text-white text-4xl pb-8">
        Official Address
      </p>

      <div className="border border-gray_200 drop-shadow-card flex flex-col items-center justify-center rounded-lg text-white w-[53%] pt-8">
        <BookOpen className="text-white w-10 h-9" />
        <p className="pt-6 pb-2 font-semibold text-xl">
          IMORU OTU ATULUSE SOCIO-CULTURAL CLUB
        </p>
        <p className="text-white/80 font-semibold text-lg">
          (Also Known As Imoru Progressive Group - IPG)
        </p>
        <p className="text-white/80 font-normal text-base  text-center pt-4">
          No. 1, Palace Road, Imoru
        </p>
        <p className="text-white/80 font-normal text-base text-center pb-4">
          Ose Local Government, Ondo State, Nigeria
        </p>
        <p className="text-white/80 font-normal text-base text-center pb-6">
          Tel: 08034203441
        </p>
      </div>
    </div>
  );
};

export { OfficialAddress };
