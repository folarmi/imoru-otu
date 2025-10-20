import { BenefitsCard } from "@/components/cards/BenefitsCard";
import { InfoCard } from "@/components/cards/InfoCard";
import { Banner } from "@/components/molecules/Banner";
import { contactUs, partnership, visitUs, whoCanBeAMemberTwo } from "@/data";

const GetInTouch = () => {
  return (
    <div>
      <Banner
        title="Get In Touch"
        subtitle="Whether you want to partner, volunteer, or learn more about our work, we'd
love to hear from you"
      />

      <div className="mt-20">
        <div className="flex items-stretch justify-center gap-x-6">
          {contactUs.map(
            ({ descOne, descThree, descTwo, icon: Icon, id, name }) => {
              return (
                <div
                  className="drop-shadow-card border border-secondary rounded-md w-[270px] py-8 bg-white cursor-pointer"
                  key={id}
                >
                  <div className="w-full flex items-center justify-center mb-4">
                    <Icon className="text-secondary w-12 h-12" />
                  </div>

                  <div className="flex flex-col items-center justify-center font-normal text-green_200 text-sm">
                    <p className="font-bold playfair text-secondary text-lg">
                      {name}
                    </p>
                    <p>{descOne}</p>
                    <p>{descTwo}</p>
                    <p>{descThree}</p>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>

      <div className="mt-20 flex items-center justify-center">
        <div className="flex flex-col gap-y-8">
          <BenefitsCard
            title="Partnership Inquiries"
            description="Interested in partnering with Imoru Progressive Group to support
community development, education, or cultural initiatives? We welcome collaborations with:"
            benefits={partnership}
            className="bg-white"
            buttonText="Download Partnership Prospectus"
          />

          <InfoCard
            title="Membership Information"
            description="Are you an Imoru son or daughter interested in joining our socio-
cultural club?"
            requirementsTitle="Membership Requirements:"
            requirements={whoCanBeAMemberTwo}
            className="bg-white"
            buttonText="Learn More About Membership"
          />

          <InfoCard
            title="Visit Us"
            description="Our office is located at the Palace Road in Imoru. Monthly
meetings are held on the third Saturday of every month."
            requirementsTitle="Monthly Meetings:"
            requirements={visitUs}
            className="bg-white"
          />
        </div>
      </div>
    </div>
  );
};

export { GetInTouch };
