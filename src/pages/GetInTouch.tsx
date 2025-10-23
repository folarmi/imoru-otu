import CustomButton from "@/components/atoms/CustomButton";
import CustomInput from "@/components/atoms/CustomInput";
import { BenefitsCard } from "@/components/cards/BenefitsCard";
import { InfoCard } from "@/components/cards/InfoCard";
import { Banner } from "@/components/molecules/Banner";
import { contactUs, partnership, visitUs, whoCanBeAMemberTwo } from "@/data";
import { MessageSquare, Send } from "lucide-react";
import { useForm } from "react-hook-form";

const GetInTouch = () => {
  const { control } = useForm();
  return (
    <div>
      <Banner
        title="Get In Touch"
        subtitle="Whether you want to partner, volunteer, or learn more about our work, we'd
love to hear from you"
      />

      <div className="mt-20">
        {/* <div className="flex flex-col lg:flex-row items-stretch justify-center gap-x-6">
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
        </div> */}
        <div className="flex flex-col sm:flex-row flex-wrap items-stretch justify-center gap-4 sm:gap-6">
          {contactUs.map(
            ({ descOne, descThree, descTwo, icon: Icon, id, name }) => {
              return (
                <div
                  className="drop-shadow-card border border-secondary rounded-md w-full sm:w-[calc(50%-12px)] lg:w-[270px] py-8 bg-white cursor-pointer hover:shadow-lg transition-shadow"
                  key={id}
                >
                  <div className="w-full flex items-center justify-center mb-4">
                    <Icon className="text-secondary w-12 h-12" />
                  </div>

                  <div className="flex flex-col items-center justify-center font-normal text-green_200 text-sm px-4">
                    <p className="font-bold playfair text-secondary text-lg mb-2">
                      {name}
                    </p>
                    <p className="text-center">{descOne}</p>
                    <p className="text-center">{descTwo}</p>
                    <p className="text-center">{descThree}</p>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>

      {/* <div className="mt-20 flex justify-center gap-x-8 mx-32">
        <div className="drop-shadow-card border border-secondary rounded-md p-8 bg-white cursor-pointer w-1/2">
          <MessageSquare className="w-10 h-10 text-secondary" />
          <p className="text-secondary playfair text-3xl font-semibold py-2">
            Send Us a Message
          </p>
          <p className="text-secondary text-base font-normal">
            Fill out the form below and we'll get back to you as soon as
            possible
          </p>

          <form className="mt-6 flex flex-col gap-y-6">
            <CustomInput
              label="Full Name *"
              name="fullname"
              placeholder="John Doe"
              control={control}
            />
            <CustomInput
              label="Email Address *"
              name="email"
              placeholder="johnDoe@example.com"
              control={control}
            />
            <CustomInput
              label="Phone Number"
              name="phoneNumber"
              placeholder="08076844968"
              control={control}
            />
            <CustomInput
              label="Subject *"
              name="subject"
              placeholder="How can we help you?"
              control={control}
            />
            <CustomInput
              label="Your Message *"
              name="message"
              placeholder="How can we help you?"
              control={control}
              as="textarea"
            />

            <CustomButton
              leftIcon={Send}
              variant="secondary"
              primaryButtonSize="xs"
              className="py-3.5"
            >
              Send us a message
            </CustomButton>
          </form>
        </div>

        <div className="flex flex-col gap-y-8 w-1/2">
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
      </div> */}
      <div className="mt-10 sm:mt-16 lg:mt-20 flex flex-col lg:flex-row justify-center gap-6 lg:gap-8 px-4 sm:px-8 lg:px-16 xl:px-32">
        {/* Contact Form Section */}
        <div className="drop-shadow-card border border-secondary rounded-md p-6 sm:p-8 bg-white cursor-pointer w-full lg:w-1/2">
          <MessageSquare className="w-10 h-10 text-secondary" />
          <p className="text-secondary playfair text-2xl sm:text-3xl font-semibold py-2">
            Send Us a Message
          </p>
          <p className="text-secondary text-sm sm:text-base font-normal">
            Fill out the form below and we'll get back to you as soon as
            possible
          </p>

          <form className="mt-6 flex flex-col gap-y-4 sm:gap-y-6">
            <CustomInput
              label="Full Name *"
              name="fullname"
              placeholder="John Doe"
              control={control}
            />
            <CustomInput
              label="Email Address *"
              name="email"
              placeholder="johnDoe@example.com"
              control={control}
            />
            <CustomInput
              label="Phone Number"
              name="phoneNumber"
              placeholder="08076844968"
              control={control}
            />
            <CustomInput
              label="Subject *"
              name="subject"
              placeholder="How can we help you?"
              control={control}
            />
            <CustomInput
              label="Your Message *"
              name="message"
              placeholder="How can we help you?"
              control={control}
              as="textarea"
            />

            <CustomButton
              leftIcon={Send}
              variant="secondary"
              primaryButtonSize="xs"
              className="py-3.5 w-full sm:w-auto"
            >
              Send us a message
            </CustomButton>
          </form>
        </div>

        {/* Info Cards Section */}
        <div className="flex flex-col gap-y-6 sm:gap-y-8 w-full lg:w-1/2">
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
