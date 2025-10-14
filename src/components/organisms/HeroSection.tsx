import CustomButton from "../atoms/CustomButton";
import { stats } from "@/data";

const HeroSection = () => {
  return (
    // <>
    //   <div className="mt-6 rounded-tl-lg rounded-tr-lg overflow-hidden">
    //     <div className="custom-background relative h-[600px]">
    //       <div className="absolute inset-0 bg-black bg-opacity-50"></div>

    //       <div className="relative h-full flex flex-col justify-center px-6 md:px-20 max-w-7xl">
    //         <h1 className="max-w-[876px] font-bold text-white text-[64px] leading-[72px] playfair pb-4">
    //           Empowering Imoru's Youth: Progress Through Culture and Education
    //         </h1>

    //         <p className="text-white text-lg md:text-xl mb-8 max-w-2xl font-medium">
    //           Join us in transforming lives through education, cultural
    //           preservation, and community welfare in Ondo State, Nigeria.
    //         </p>

    //         {/* CTA Buttons */}
    //         <div className="flex gap-4">
    //           <CustomButton variant="cta" className="px-8 py-3 ">
    //             Partner with Us
    //           </CustomButton>
    //           <CustomButton variant="outline" className="px-8 py-3">
    //             Join as a Member
    //           </CustomButton>
    //         </div>
    //       </div>
    //     </div>

    //     <div className="bg-secondary text-white py-8">
    //       <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
    //         {stats.map(({ desc, icon: Icon, id, num }) => {
    //           return (
    //             <div key={id} className="flex flex-col items-center">
    //               <Icon
    //                 className="w-10 h-10 mb-4 text-orange_200"
    //                 strokeWidth={1.5}
    //               />
    //               <div className="text-[30px] font-bold pb-2">{num}</div>
    //               <div className="text-base font-normal">{desc}</div>
    //             </div>
    //           );
    //         })}
    //       </div>
    //     </div>
    //   </div>
    // </>

    <>
      <div className="mt-6 rounded-tl-lg rounded-tr-lg overflow-hidden">
        <div className="custom-background relative h-[400px] sm:h-[500px] md:h-[550px] lg:h-[600px]">
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>

          <div className="relative h-full flex flex-col justify-center px-4 sm:px-6 md:px-12 lg:px-20 max-w-7xl">
            <h1 className="max-w-[876px] font-bold text-white text-[28px] sm:text-[36px] md:text-[48px] lg:text-[56px] xl:text-[64px] leading-[32px] sm:leading-[40px] md:leading-[52px] lg:leading-[64px] xl:leading-[72px] playfair pb-3 sm:pb-4">
              Empowering Imoru's Youth: Progress Through Culture and Education
            </h1>

            <p className="text-white text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-2xl font-medium">
              Join us in transforming lives through education, cultural
              preservation, and community welfare in Ondo State, Nigeria.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <CustomButton variant="cta" className="px-6 sm:px-8 py-3 ">
                Partner with Us
              </CustomButton>
              <CustomButton variant="outline" className="px-6 sm:px-8 py-3">
                Join as a Member
              </CustomButton>
            </div>
          </div>
        </div>

        <div className="bg-secondary text-white py-6 sm:py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
            {stats.map(({ desc, icon: Icon, id, num }) => {
              return (
                <div key={id} className="flex flex-col items-center">
                  <Icon
                    className="w-8 h-8 sm:w-10 sm:h-10 mb-3 sm:mb-4 text-orange_200"
                    strokeWidth={1.5}
                  />
                  <div className="text-[24px] sm:text-[30px] font-bold pb-1 sm:pb-2">
                    {num}
                  </div>
                  <div className="text-sm sm:text-base font-normal">{desc}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export { HeroSection };
