import { joinOurClub } from "@/data";
import { HeaderText } from "../atoms/HeaderText";
import CustomButton from "../atoms/CustomButton";

const JoinClub = () => {
  return (
    <div className="mt-12 py-20 px-11 bg-custom-gradient flex items-center justify-between">
      <section>
        <HeaderText
          title="Join the Socio-Cultural Club"
          subtitle="IPG is more than an NGO—it's a community. Our members are the heart of everything we do, contributing time, resources, and passion to uplift Imoru."
        />

        <div className="mt-6">
          {joinOurClub.map(({ desc, icon: Icon, id, name }) => {
            return (
              <div key={id} className="flex items-center mb-6">
                <div className="bg-secondary/10 w-12 h-12 text-secondary mr-4 rounded-full flex items-center justify-center">
                  <Icon />
                </div>
                <div className="">
                  <p className="playfair font-bold text-secondary text-xl">
                    {name}
                  </p>
                  <p className="text-green_200 text-base">{desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        <CustomButton
          variant="secondary"
          className="uppercase w-[342px] h-[44px] mt-6"
        >
          BECOME A MEMBER / VOLUNTEER
        </CustomButton>
      </section>

      <section></section>
    </div>
  );
};

export { JoinClub };
