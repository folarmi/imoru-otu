import {
  Award,
  BookOpen,
  Building2,
  Calendar,
  Clock,
  CreditCard,
  Facebook,
  GraduationCap,
  HandHeart,
  Heart,
  HeartHandshake,
  Instagram,
  Landmark,
  LucideGlobe,
  Mail,
  MapPin,
  PhoneIcon,
  Shield,
  ShieldAlertIcon,
  Target,
  Twitter,
  User,
  UserPlus,
  Users,
} from "lucide-react";
import pillarOne from "@assets/images/pillarOne.svg";
import eventOne from "@assets/images/eventOne.svg";
import eventTwo from "@assets/images/eventTwo.svg";
import eventThree from "@assets/images/eventThree.svg";
import countryList from "react-select-country-list";

export const headerItems = [
  {
    id: 1,
    name: "Home",
    link: "",
  },
  {
    id: 2,
    name: "About",
    link: "/about-us",
  },
  {
    id: 3,
    name: "News and Events",
    link: "/news-and-events",
  },
  {
    id: 4,
    name: "Contact Us",
    link: "/get-in-touch",
  },
];

export const stats = [
  {
    id: 1,
    num: "6+",
    desc: "Years of Service",
    icon: Heart,
  },
  {
    id: 2,
    num: "450+",
    desc: "Students Supported",
    icon: GraduationCap,
  },
  {
    id: 3,
    num: "Community-Led",
    desc: "Local Ownership",
    icon: Users,
  },
  {
    id: 4,
    num: "100%",
    desc: "Transparency",
    icon: Shield,
  },
];

export const statTwo = [
  {
    id: 1,
    number: "450+",
    desc: "Scholarships Awarded",
  },
  {
    id: 2,
    number: "₦8M+",
    desc: "In Educational Support",
  },
  {
    id: 3,
    number: "15+",
    desc: "Cultural Events Held",
  },
];

export const threePillars = [
  {
    id: 1,
    title: "Educational Upliftment",
    desc: "Providing scholarships, school supplies, and mentorship to underserved students in Imoru. We believe education is the key to breaking the cycle of poverty.",
    benefits: [
      "Full & Partial Scholarships",
      "School Supply Distribution",
      "Academic Mentorship",
      "Career Guidance",
    ],
    image: pillarOne,
    icon: BookOpen,
  },
  {
    id: 2,
    title: "Welfare & Support",
    desc: "Supporting families in need with emergency assistance, healthcare access, and community development initiatives that create lasting positive change.",
    benefits: [
      "Emergency Financial Aid",
      "Healthcare Support",
      "Food Security Programs",
      "Community Development",
    ],
    image: pillarOne,
    icon: HandHeart,
  },
  {
    id: 3,
    title: "Cultural Development",
    desc: "Preserving and promoting Imoru's rich cultural heritage through festivals, language programs, and traditional arts preservation for future generations.",
    benefits: [
      "Cultural Festivals",
      "Language Preservation",
      "Traditional Arts",
      "Heritage Documentation",
    ],
    image: pillarOne,
    icon: Landmark,
  },
];

export const joinOurClub = [
  {
    id: 1,
    name: "Community Connection",
    desc: "Join a network of dedicated individuals committed to Imoru's progress.",
    icon: Users,
  },
  {
    id: 2,
    name: "Monthly Meetings",
    desc: "Participate in regular gatherings to plan initiatives and celebrate culture.",
    icon: Calendar,
  },
  {
    id: 3,
    name: "Make a Difference",
    desc: "Your membership dues directly fund scholarships and community projects.",
    icon: LucideGlobe,
  },
];

export const memberShipInfo = [
  {
    id: 1,
    name: "Monthly Dues:",
    desc: "₦5,000",
  },
  {
    id: 2,
    name: "Meeting Schedule:",
    desc: "Monthly",
  },
  {
    id: 3,
    name: "Location:",
    desc: "Imoru, Ondo State",
  },
];

export const yourFund = [
  {
    id: 1,
    name: "Direct student scholarships and educational materials",
  },
  {
    id: 2,
    name: "Community welfare and emergency assistance programs",
  },
  {
    id: 3,
    name: "Cultural events and heritage preservation initiatives",
  },
];

export const makeADifference = [
  {
    id: 1,
    name: "Sponsor Sustainable Impact",
    desc: "Partner with us to fund scholarships, school supplies, and mentorship programs that create lasting change for students in Imoru.",
    features: [
      "Tax-deductible contribution",
      "Transparent impact reporting",
      "Connect with beneficiaries (optional)",
    ],
    buttonText: "Become A Sponsor",
    icon: HeartHandshake,
    buttonBgColor: "#FFBF00",
    iconBgColor: "#FFBF001A",
    iconColor: "#FFBF00",
    buttonTextColor: "#004D45",
  },
  {
    id: 2,
    name: "Join Our Community",
    desc: "Become a member or volunteer to actively participate in programs, events, and initiatives that transform lives.",
    features: [
      "Hands-on community impact",
      "Network with like-minded individuals",
      "Monthly meetings and cultural events",
    ],
    buttonText: "Volunteer your time",
    icon: UserPlus,
    buttonBgColor: "#004D45",
    iconBgColor: "#004D451A",
    iconColor: "#004D45",
    buttonTextColor: "#FFFFFF",
  },
];

export const newsAndEvents = [
  {
    id: 1,
    date: "March 15, 2025",
    tag: "Upcoming Event",
    title: "Monthly Meeting: Planning 2025 Initiatives",
    summary:
      "Join us for our monthly gathering to discuss upcoming scholarship programs and cultural events.",
    location: "Community Hall, Imoru",
  },
  {
    id: 2,
    date: "February 28, 2025",
    tag: "Recent News",
    title: "20 Students Receive Full Scholarships",
    summary:
      "Imoru Progressive Group awards full academicyear scholarships to 20 outstanding students from underprivileged families.",
    location: "",
  },
  {
    id: 3,
    date: "January 10, 2025",
    tag: "Recent News",
    title: "Annual Cultural Festival Success",
    summary:
      "Over 500 community members celebrated Imoru's heritage at our annual cultural festival.",
    location: "Imoru Town Square",
  },
];

export const footerData = {
  organization: {
    name: "Imoru Progressive Group",
    description:
      "Development of Imoru land Through Culture, Social welfare and Education.",
  },
  quickLinks: [
    { id: 1, label: "About Us", href: "#about" },
    { id: 2, label: "Our Programs", href: "#programs" },
    { id: 3, label: "Partnership Opportunities", href: "#partnership" },
    { id: 4, label: "Annual Reports", href: "#reports" },
    { id: 5, label: "Our Governance", href: "#governance" },
  ],
  contact: {
    location: "Imoru, Ondo State, Nigeria",
    phone: "+234 803 420 3441",
    email: "otuatuluse@gmail.com",
  },
  social: [
    { id: 1, name: "Facebook", icon: Facebook, href: "#" },
    { id: 2, name: "Twitter", icon: Twitter, href: "#" },
    { id: 3, name: "Instagram", icon: Instagram, href: "#" },
  ],
};

export const getAllCountryOptions = () => {
  return countryList().getData();
};

export const getAllCountryOptionsWithNames = () => {
  const countries = countryList().getData();
  return countries.map((country) => ({
    value: country.label,
    label: country.label,
  }));
};

export const missionAndVision = [
  {
    id: 1,
    name: "Our Mission",
    desc: "Contribute towards  the development of Imoru commmunity through the promotion of  members welfare, care for  the less privileged and partnership with corporate bodies, individual and government in the provision of free health and basic education among members and the community.",
    icon: Target,
  },
  {
    id: 2,
    name: "Our Vision",
    desc: "To develop Imoru Land  through social welfare support.",
    icon: Award,
  },
];

export const Objectives = [
  {
    id: 1,
    name: "Contribute to the development of our community, Imoru Land",
  },
  {
    id: 2,
    name: "Promote the welfare of its members",
  },
  {
    id: 3,
    name: "Support our community in every possible way that will yield her development",
  },
  {
    id: 4,
    name: "Help and care for the less privileged in our community",
  },
  {
    id: 5,
    name: "Foster friendly relationship and mutual understanding amongst members",
  },
  {
    id: 6,
    name: "Improve and uplift the educational system of our youth",
  },
  {
    id: 7,
    name: "Protect and globally promote history, traditions and cultures of Imoru land",
  },
  {
    id: 8,
    name: "Partner with corporate bodies, individual and government in the provision of free health and basic education",
  },
];

export const governance = [
  {
    id: 1,
    name: "Board of Trustees",
    desc: "2-6 members elected for a 5-year term, responsible for strategic oversight and policy-making",
    icon: ShieldAlertIcon,
  },
  {
    id: 2,
    name: "Executive Committee",
    desc: "Elected leadership serving 2-year renewable terms, managing day-to-day operations and programs",
    icon: Users,
  },
  {
    id: 3,
    name: "Special Committees",
    desc: "Project, Welfare, Planning, Electoral, and Reconciliation committees supporting specific initiatives",
    icon: Heart,
  },
];

export const executiveLeadership = [
  {
    id: 1,
    name: "President",
    type: "Executive Leadership",
  },
  {
    id: 2,
    name: "Vice President",
    type: "Executive Leadership",
  },
  {
    id: 3,
    name: "General Secretary",
    type: "Administrative Affairs",
  },
  {
    id: 4,
    name: "Financial Secretary",
    type: "Financial Management",
  },
  {
    id: 5,
    name: "Social/Welfare Officer",
    type: "Member Welfare",
  },
  {
    id: 6,
    name: "Public Relations Officer",
    type: "Communications",
  },
];

export const memberBenefits = [
  {
    id: 1,
    name: "• Support for weddings (₦20,000 minimum)",
  },
  {
    id: 2,
    name: "• Bereavement support (₦20,000 minimum)",
  },
  {
    id: 3,
    name: "• Support for naming ceremonies and other life events",
  },
  {
    id: 4,
    name: "• Health and critical sickness assistance",
  },
  {
    id: 5,
    name: "• Access to educational programs and workshops",
  },
  {
    id: 6,
    name: "• Networking and community connection",
  },
];

export const whoCanBeAMember = [
  {
    id: 1,
    name: "• Formal introduction by an existing member",
  },
  {
    id: 2,
    name: "• Commitment fee: ₦1,000",
  },
  {
    id: 3,
    name: "• Monthly dues: ₦500 (subject to review)",
  },
  {
    id: 4,
    name: "• Active participation in meetings and activities",
  },
];

export const whoCanBeAMemberTwo = [
  {
    id: 1,
    name: "• Imoru native or 10+ year resident",
  },
  {
    id: 2,
    name: "• Commitment fee: ₦1,000",
  },
  {
    id: 3,
    name: "• Monthly dues: ₦500",
  },
  {
    id: 4,
    name: "• Formal introduction required",
  },
];

export const categoriesData = [
  {
    id: 1,
    name: "All Categories",
  },
  {
    id: 2,
    name: "Upcoming Events",
  },
  {
    id: 3,
    name: "Recent News",
  },
];

export const sampleEvents = [
  {
    id: 1,
    img: eventOne,
    date: "March 15, 2025",
    title: "Monthly Meeting: Planning 2025 Initiatives",
    summary:
      "Join us for our monthly gathering to discuss upcoming scholarship programs and cultural events. All members are encouraged to attend and contribute ideas for community development projects.",
    location: "Community Hall, Imoru",
  },
  {
    id: 2,
    img: eventThree,
    date: "March 20, 2025",
    title: "Educational Workshop: Digital Skills for Youth",
    summary:
      "Free digital literacy workshop for Imoru youth covering basic computer skills, internet safety, and online opportunities. Registration required.",
    location: "Imoru Secondary School",
  },
  {
    id: 3,
    img: eventTwo,
    date: "April 5, 2025",
    title: "Annual Cultural Festival 2025",
    summary:
      "Save the date for our biggest cultural celebration of the year! Traditional dances, music, food, and heritage exhibitions. This year's theme: 'Preserving Our Legacy for Future Generations'.",
    location: "Community Hall, Imoru",
  },
];

export const sampleNews = [
  {
    id: 1,
    img: eventTwo,
    date: "February 28, 2025",
    title: "20 Students Receive Full Scholarships",
    summary:
      "Imoru Progressive Group awards full academic year scholarships to 20 outstanding students from underprivileged families. The scholarship covers tuition, books, and supplies for the 2025 academic year.",
  },
  {
    id: 2,
    img: eventTwo,
    date: "February 28, 2025",
    title: "20 Students Receive Full Scholarships",
    summary:
      "Imoru Progressive Group awards full academic year scholarships to 20 outstanding students from underprivileged families. The scholarship covers tuition, books, and supplies for the 2025 academic year.",
  },
  {
    id: 3,
    img: eventTwo,
    date: "February 28, 2025",
    title: "20 Students Receive Full Scholarships",
    summary:
      "Imoru Progressive Group awards full academic year scholarships to 20 outstanding students from underprivileged families. The scholarship covers tuition, books, and supplies for the 2025 academic year.",
  },
  {
    id: 4,
    img: eventTwo,
    date: "February 28, 2025",
    title: "20 Students Receive Full Scholarships",
    summary:
      "Imoru Progressive Group awards full academic year scholarships to 20 outstanding students from underprivileged families. The scholarship covers tuition, books, and supplies for the 2025 academic year.",
  },
  {
    id: 5,
    img: eventTwo,
    date: "February 28, 2025",
    title: "20 Students Receive Full Scholarships",
    summary:
      "Imoru Progressive Group awards full academic year scholarships to 20 outstanding students from underprivileged families. The scholarship covers tuition, books, and supplies for the 2025 academic year.",
  },
  {
    id: 6,
    img: eventTwo,
    date: "February 28, 2025",
    title: "20 Students Receive Full Scholarships",
    summary:
      "Imoru Progressive Group awards full academic year scholarships to 20 outstanding students from underprivileged families. The scholarship covers tuition, books, and supplies for the 2025 academic year.",
  },
];

export const contactUs = [
  {
    id: 1,
    name: "Address",
    icon: MapPin,
    descOne: "No. 1, Palace Road, Imoru",
    descTwo: "Ose LGA, Ondo State",
    descThree: "Nigeria",
  },
  {
    id: 2,
    name: "Phone",
    icon: PhoneIcon,
    descOne: "+234 803 420 3441",
    descTwo: "Mon - Fri, 9AM - 5PM",
    descThree: "",
  },
  {
    id: 3,
    name: "Email",
    icon: Mail,
    descOne: "otuatuluse@gmail.com",
    descTwo: "We reply within 24 hours",
    descThree: "",
  },
  {
    id: 4,
    name: "Office Hours",
    icon: Clock,
    descOne: "Monday - Friday",
    descTwo: "9:00 AM - 5:00 PM",
    descThree: "WAT",
  },
];

export const partnership = [
  {
    id: 1,
    name: "• Corporate organizations",
  },
  {
    id: 2,
    name: "• NGOs and foundations",
  },
  {
    id: 3,
    name: "• Government agencies",
  },
  {
    id: 4,
    name: "• Educational institutions",
  },
  {
    id: 5,
    name: "• Individual philanthropists",
  },
];

export const visitUs = [
  {
    id: 1,
    name: "Third Saturday of every month",
  },
  {
    id: 2,
    name: "Time: 3:00 PM - 5:00 PM",
  },
  {
    id: 3,
    name: " Location: Online",
  },
];

export const bankDetails = [
  {
    id: 1,
    name: "Account Name",
    icon: User,
    accountName: "Imoru otu atuluse socio cultural club",
  },
  {
    id: 2,
    name: "Account Number",
    icon: CreditCard,
    accountName: "0205157018",
  },
  {
    id: 3,
    name: "Bank Name",
    icon: Building2,
    accountName: "Union Bank",
  },
];
