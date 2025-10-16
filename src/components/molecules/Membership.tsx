import { memberBenefits } from "@/data";
import { HeaderText } from "../atoms/HeaderText";

const Membership = () => {
  return (
    <div className="bg-yellow_200 py-20">
      <HeaderText
        title="Membership"
        subtitle="Join our community of change-makers committed to Imoru's development"
      />

      <div className="flex items-center justify-center mx-20">
        <section className="bg-primary border-2 border-secondary rounded-lg py-2 px-6 w-full lg:w-1/2 drop-shadow-card">
          <p className="font-bold text-xl sm:text-2xl text-secondary playfair pb-4">
            Member Benefits
          </p>

          <p className="text-green_200 text-sm sm:text-base leading-snug">
            Financial members in good standing (60% dues up-to-date) receive:
          </p>

          <div className="mt-3 space-y-2">
            {memberBenefits.map(({ id, name }) => (
              <div key={id} className="flex items-start sm:items-center">
                <p className="text-green_200 text-sm sm:text-base leading-snug">
                  {name}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-primary border-2 border-secondary rounded-lg py-2 px-6 w-full lg:w-1/2 drop-shadow-card">
          <p className="font-bold text-xl sm:text-2xl text-secondary playfair pb-4">
            Member Benefits
          </p>

          <p className="text-green_200 text-sm sm:text-base leading-snug">
            Financial members in good standing (60% dues up-to-date) receive:
          </p>

          <div className="mt-3 space-y-2">
            {memberBenefits.map(({ id, name }) => (
              <div key={id} className="flex items-start sm:items-center">
                <p className="text-green_200 text-sm sm:text-base leading-snug">
                  {name}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export { Membership };
