import { bankDetails } from "@/data";
import { Building2 } from "lucide-react";

const BankAccountDetails = () => {
  return (
    <div className="bg-white shadow-lg w-[512px] rounded-xl p-6">
      <div className="flex items-center">
        <Building2 className="w-5 h-5 text-secondary" />
        <p className="pl-2 font-bold text-lg playfair text-gray_400">
          Partner With Us
        </p>
      </div>
      <p className="pt-2 text-gray_500 text-sm font-normal w-[456px]">
        Support our mission by making a direct contribution to Imoru Progressive
        Group.
      </p>

      <div className="mt-8">
        <section className="bg-primary border border-gray_600 rounded-xl">
          {bankDetails?.map(({ accountName, icon: Icon, id, name }) => {
            return (
              <div
                key={id}
                className={`flex items-center px-4 py-3 ${
                  id !== bankDetails.length ? "border-b border-gray_600" : ""
                }`}
              >
                <Icon className="w-5 h-5 text-secondary" />
                <div className="ml-3">
                  <p className="text-gray_700 font-normal playfair text-sm">
                    {name}
                  </p>
                  <p className="text-secondary font-semibold text-base pt-1">
                    {accountName}
                  </p>
                </div>
              </div>
            );
          })}
        </section>
      </div>

      <div className="bg-primary p-4 rounded-xl my-4">
        <p className="text-sm font-normal text-gray_800 w-full leading-5">
          Your contribution helps us develop Imoru land through culture, social
          welfare and education.
        </p>
      </div>

      <p className="text-sm font-normal text-gray_700 w-full">
        For questions about partnerships, contact us at otuatuluse2020@gmail.com
      </p>
    </div>
  );
};

export { BankAccountDetails };
