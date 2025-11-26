import CustomButton from "@/components/atoms/CustomButton";
import CustomInput from "@/components/atoms/CustomInput";
import { BenefitsCard } from "@/components/cards/BenefitsCard";
import { InfoCard } from "@/components/cards/InfoCard";
import { Banner } from "@/components/molecules/Banner";
import { contactUs, partnership, visitUs, whoCanBeAMemberTwo } from "@/data";
import { MessageSquare, Send } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const GetInTouch = () => {
  const { control, reset } = useForm();

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(
        "https://formsubmit.co/18b09801c3190a481e47a6b1d30f529e",
        {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json",
          },
        }
      );

      if (response.ok) {
        toast.success(
          "We have received your message and will get back to you as soon as possible"
        );
        reset();
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Banner
        title="Get In Touch"
        subtitle="Whether you want to partner, volunteer, or learn more about our work, we'd
love to hear from you"
      />

      <div className="mt-20">
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

          <form
            onSubmit={handleSubmit}
            className="mt-6 flex flex-col gap-y-4 sm:gap-y-6"
          >
            <CustomInput
              label="Full Name *"
              name="Full name"
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
              loading={loading}
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

// const ContactUs = () => {
//   const [activeId, setActiveId] = useState<number | null>(null);
//   const [loading, setLoading] = useState(false);

// const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//   e.preventDefault();
//   setLoading(true);

//   const form = e.currentTarget;
//   const formData = new FormData(form);

//   try {
//     const response = await fetch(
//       "https://formsubmit.co/36b93ebda3428f1dbe8e4ebee3a72e13",
//       {
//         method: "POST",
//         body: formData,
//         headers: {
//           Accept: "application/json",
//         },
//       }
//     );

//     if (response.ok) {
//       toast.success(
//         "We have received your message and will get back to you as soon as possible"
//       );
//       form.reset();
//     } else {
//       toast.error("Something went wrong. Please try again.");
//     }
//   } catch (error) {
//     console.log(error);
//   } finally {
//     setLoading(false);
//   }
// };

//   return (
//     <div>
//       <Header />

//       <div className="bg-biyar_purple flex flex-col items-center justify-center pt-24 relative pb-[50px]">
//         {" "}
//         {/* Added pb-[200px] to create space */}
//         <HeaderBadge text="Contact us" />
//         <CustomText variant="headingOne" className="text-white pt-4">
//           Let's Start a Conversation
//         </CustomText>
//         <CustomText
//           variant="body"
//           className="text-white_100 text-center w-full max-w-[614px] pt-4 pb-6"
//         >
//           Have a project in mind? Want to learn more about our services? We'd
//           love to hear from you. Reach out and let's discuss how we can help
//           bring your ideas to life.
//         </CustomText>
//       </div>

//       <div className="mt-32 flex justify-center">
//         <form
//           onSubmit={handleSubmit}
//           method="POST"
//           className="flex flex-col gap-y-8 shadow-custom bg-white border-neutral_100 rounded-[20px] p-[30px] mr-5 h-fit"
//         >
//           <div className="flex items-center gap-x-5">
//             <CustomInput
//               label="First Name"
//               name="First Name"
//               placeholder="John"
//               required
//               type="text"
//             />
//             <CustomInput
//               label="Last Name"
//               name="Last Name"
//               placeholder="Doe"
//               required
//               type="text"
//             />
//           </div>
//           <CustomInput
//             label="Email"
//             name="email"
//             placeholder="John@email.com"
//             required
//             type="email"
//           />
//           <CustomInput
//             label="Company"
//             name="company"
//             placeholder="Your company"
//             required
//             type="text"
//           />
//           <CustomInput
//             label="Subject"
//             placeholder="How can we help?"
//             required
//             name="subject"
//             type="text"
//           />
//           <CustomInput
//             label="Message"
//             textarea
//             placeholder="Tell us about your project"
//             required
//             name="message"
//             type="text"
//           />
//           <CustomButton type="submit" disabled={loading}>
//             {" "}
//             {loading ? "Sending..." : "Send message"}
//           </CustomButton>
//         </form>

//         <section>
//           <p className="font-semibold text-xl pb-6">Contact by Department</p>
//           {contactDetails.map(({ desc, email, icon, id, name }) => {
//             return (
//               <div className="bg-neutral_100 rounded-xl p-5 mb-6" key={id}>
//                 {React.cloneElement(icon, {
//                   className: "w-6 h-6 text-biyar_purple",
//                 })}
//                 <p className="font-medium text-gray_900 text-base py-2">
//                   {name}
//                 </p>
//                 <CustomText variant="body" className="text-gray_500 pb-2">
//                   {desc}
//                 </CustomText>
//                 <CustomText variant="body" className="text-biyar_purple">
//                   {email}
//                 </CustomText>
//               </div>
//             );
//           })}

//           <div className="mt-10">
//             <p className="font-semibold text-xl pb-6">
//               Frequently Asked Questions
//             </p>
//             <CustomText
//               variant="body"
//               className="pt-[10px] pb-6 w-full max-w-[464px]"
//             >
//               Quick answers to common questions. Don't see what you're looking
//               for? Contact us directly.
//             </CustomText>
//           </div>

//           {FAQs.map((item) => {
//             return (
//               <FAQ
//                 item={item}
//                 key={item.id}
//                 activeId={activeId}
//                 setActiveId={setActiveId}
//               />
//             );
//           })}
//         </section>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export { ContactUs };
