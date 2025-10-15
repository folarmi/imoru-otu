import logo from "@/assets/images/logo.svg";
import { headerItems } from "@/data";
import { Link } from "react-router-dom";
import CustomButton from "../atoms/CustomButton";
import { useState } from "react";
import { Menu, X } from "lucide-react";
const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    // <nav className="sticky top-0 z-50 bg-white shadow-sm"> this makes it sticky
    <nav className="">
      <div className="flex items-center justify-between py-2">
        <section className="flex items-center">
          <img src={logo} className="mr-2" loading="lazy" />
          <p className="uppercase text-secondary font-semibold text-2xl leading-7 hidden lg:block">
            Imoru otu atuluse socio-cultural club(IPG)
          </p>
          <p className="uppercase text-secondary font-semibold text-base leading-5 lg:hidden">
            Imoru otu atuluse
          </p>
        </section>

        {/* Desktop Navigation */}
        <section className="hidden lg:flex items-center gap-x-5">
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

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <section className="lg:hidden flex flex-col gap-y-4 py-4">
          {headerItems?.map(({ id, link, name }) => {
            return (
              <Link
                className="font-medium text-base"
                key={id}
                to={link}
                onClick={() => setMobileMenuOpen(false)}
              >
                {name}
              </Link>
            );
          })}
          <div className="flex flex-col gap-y-3">
            <CustomButton variant="secondary" primaryButtonSize="xs">
              Partner with Us
            </CustomButton>
            <CustomButton>Join Us</CustomButton>
          </div>
        </section>
      )}

      <div className="h-[2px] w-full bg-border"></div>
    </nav>
  );
};

export { Header };
