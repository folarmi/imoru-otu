import { footerData } from "@/data";
import { Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="mt-20 border-t border-black">
      <div className=" px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8 border-b border-black">
          {/* Organization Info */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold text-gray_100 playfair pb-4">
              {footerData.organization.name}
            </h3>
            <p className="text-sm leading-relaxed">
              {footerData.organization.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base font-bold playfair pb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footerData.quickLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    className="text-sm hover:text-gray-900 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="text-base font-bold playfair pb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <p className=" text-sm">{footerData.contact.location}</p>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-gray-700 flex-shrink-0" />
                <p className=" text-sm">{footerData.contact.phone}</p>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5  flex-shrink-0" />
                <p className=" text-sm">{footerData.contact.email}</p>
              </div>
            </div>
          </div>

          {/* Follow Us */}
          <div>
            <h4 className="text-base font-bold playfair pb-4">Follow Us</h4>
            <div className="flex gap-4">
              {footerData.social.map(({ id, name, icon: Icon, href }) => (
                <a
                  key={id}
                  href={href}
                  aria-label={name}
                  className="w-10 h-10 flex items-center justify-center hover:bg-gray-100 transition-colors"
                >
                  <Icon className="w-5 h-5 text-gray-700" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 text-center">
          <p className="text-gray-700 text-sm">
            © {currentYear} Imoru Progressive Group. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
