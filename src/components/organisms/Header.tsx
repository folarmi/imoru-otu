import logo from "@/assets/images/logo.svg";
import { headerItems } from "@/data";
import { Link } from "react-router-dom";
import CustomButton from "../atoms/CustomButton";
const Header = () => {
  return (
    <nav className="mx-6">
      <div className="flex items-center justify-between py-2">
        <section className="flex items-center">
          <img src={logo} className="mr-2" />
          <p className="uppercase text-secondary font-semibold text-2xl leading-7">
            Imoru otu atuluse socio-cultural club
          </p>
        </section>

        <section className="flex items-center gap-x-5">
          {headerItems?.map(({ id, link, name }) => {
            return (
              <Link className="font-medium text-base" key={id} to={link}>
                {name}
              </Link>
            );
          })}
          <CustomButton variant="secondary" primaryButtonSize="xs">
            Partner with Us
          </CustomButton>
          <CustomButton className="mr-4">Join Us</CustomButton>
        </section>
      </div>
      <div className="h-[2px] w-full bg-border"></div>
    </nav>
  );
};

export { Header };
