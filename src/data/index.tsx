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
import pillarTwo from "@assets/images/pillarTwo.jpeg";
import edu from "@assets/images/edu.jpeg";
import eventOne from "@assets/images/eventOne.svg";
import eventTwo from "@assets/images/eventTwo.svg";
import cultural from "@assets/images/cultural.png";
import VP from "@assets/images/VP.jpeg";
import president from "@assets/images/president.jpeg";
import eventThree from "@assets/images/eventThree.svg";
import imgOne from "@assets/images/imgOne.jpeg";
import imgTwo from "@assets/images/imgTwo.jpeg";
import imgThree from "@assets/images/imgThree.jpeg";
import imgFour from "@assets/images/imgFour.jpeg";
import imgFive from "@assets/images/imgFive.jpeg";
import imgSix from "@assets/images/imgSix.jpeg";
import imgSeven from "@assets/images/imgSeven.jpeg";
import imgEight from "@assets/images/imgEight.jpeg";
import imgNine from "@assets/images/imgNine.jpeg";
import imgTen from "@assets/images/imgTen.jpeg";
import imgEleven from "@assets/images/imgEleven.jpeg";
import imgTwelve from "@assets/images/imgTwelve.jpeg";
import imgThirteen from "@assets/images/imgThirteen.jpeg";
import imgFourteen from "@assets/images/imgFourteen.jpeg";
import imgFifteen from "@assets/images/imgFifteen.jpeg";
import imgSixteen from "@assets/images/imgSixteen.jpeg";
import imgSeventeen from "@assets/images/imgSeventeen.jpeg";
import imgEighteen from "@assets/images/imgEighteen.jpeg";
import imgNineteen from "@assets/images/imgNineteen.jpeg";
import imgTwenty from "@assets/images/imgTwenty.jpeg";
import imgTwentyOne from "@assets/images/imgTwentyOne.jpeg";
import imgTwentyTwo from "@assets/images/imgTwentyTwo.jpeg";
import imgTwentyThree from "@assets/images/imgTwentyThree.jpeg";
import imgTwentyFour from "@assets/images/imgTwentyFour.jpeg";
import imgTwentyFive from "@assets/images/imgTwentyFive.jpeg";
import imgTwentySix from "@assets/images/imgTwentySix.jpeg";
import imgTwentySeven from "@assets/images/imgTwentySeven.jpeg";
import imgTwentyEight from "@assets/images/imgTwentyEight.jpeg";
import imgTwentyNine from "@assets/images/imgTwentyNine.jpeg";
import imgThirty from "@assets/images/imgThirty.jpeg";
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
  // {
  //   id: 3,
  //   name: "News and Events",
  //   link: "/news-and-events",
  // },
  {
    id: 5,
    name: "Gallery",
    link: "/gallery",
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
    image: edu,
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
    image: pillarTwo,
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
    image: cultural,
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
    execName: "Mr Olugbade Rotimi",
    img: president,
    bio: "Rotimi Olugbade is an accomplished finance professional with nearly 20 years of experience and advanced degrees in Accounting and Finance. He currently leads as Finance & Administration Manager at Sammya Nigeria Limited and serves as President of the Imoru Otu Atuluse Socio-Cultural Club, driving both corporate excellence and community development.",
  },
  {
    id: 2,
    name: "Vice President",
    execName: "Mrs. Grace Oyegoke",
    img: VP,
    bio: "Mrs. Grace Oyegoke is the MD/CEO of TOPGRACE ENTERPRISES, specializing in construction, real estate, and building materials. She is also an accomplished gospel artist, worship leader, and founder of HOUSE OF GRACE ministry, with songs streaming on YouTube and Spotify. A committed philanthropist, she was elected Vice-President of IPG in September 2025, working to advance the club and drive development in Imoru town.",
  },
  {
    id: 3,
    name: "General Secretary",
    execName: "Banji Oredola",
    img: VP,
    bio: "Banji Oredola, General Secretary of  IPG Association, brings over 20 years of nursing experience along with multiple certifications and degrees from institutions such as the College of Nursing and Technology (California), Howard Community College, and Allegany College of Maryland. Dedicated to driving excellence and fostering new ideas in healthcare. Banji is committed to advancing and supporting the growth of IPG.",
  },
  {
    id: 4,
    name: "Financial Secretary",
    execName: "Mrs. Grace Oyegoke",
    img: VP,
    bio: "Mrs. Grace Oyegoke is the MD/CEO of TOPGRACE ENTERPRISES, specializing in construction, real estate, and building materials. She is also an accomplished gospel artist, worship leader, and founder of HOUSE OF GRACE ministry, with songs streaming on YouTube and Spotify. A committed philanthropist, she was elected Vice-President of IPG in September 2025, working to advance the club and drive development in Imoru town.",
  },
  {
    id: 5,
    name: "Social/Welfare Officer",
    execName: "Member Welfare",
    img: VP,
    bio: "With a decade of experience in non-profit administration, our General Secretary has been instrumental in streamlining our operations and enhancing member engagement. Their dedication to transparency and effective communication has significantly contributed to our organization's growth and impact.",
  },
  {
    id: 6,
    name: "Public Relations Officer",
    execName: "Communications",
    img: president,
    bio: "With a decade of experience in non-profit administration, our General Secretary has been instrumental in streamlining our operations and enhancing member engagement. Their dedication to transparency and effective communication has significantly contributed to our organization's growth and impact.",
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

export const images = [
  {
    id: 1,
    img: imgOne,
  },
  {
    id: 2,
    img: imgTwo,
  },
  {
    id: 3,
    img: imgThree,
  },
  {
    id: 4,
    img: imgFour,
  },
  {
    id: 5,
    img: imgFive,
  },
  {
    id: 6,
    img: imgSix,
  },
  {
    id: 7,
    img: imgSeven,
  },
  {
    id: 8,
    img: imgEight,
  },
  {
    id: 9,
    img: imgNine,
  },
  {
    id: 10,
    img: imgTen,
  },
  {
    id: 11,
    img: imgEleven,
  },
  {
    id: 12,
    img: imgTwelve,
  },
  {
    id: 13,
    img: imgThirteen,
  },
  {
    id: 14,
    img: imgFourteen,
  },
  {
    id: 15,
    img: imgFifteen,
  },
  {
    id: 16,
    img: imgSixteen,
  },
  {
    id: 17,
    img: imgSeventeen,
  },
  {
    id: 18,
    img: imgEighteen,
  },
  {
    id: 19,
    img: imgNineteen,
  },
  {
    id: 20,
    img: imgTwenty,
  },
  {
    id: 21,
    img: imgTwentyOne,
  },
  {
    id: 22,
    img: imgTwentyTwo,
  },
  {
    id: 23,
    img: imgTwentyThree,
  },
  {
    id: 24,
    img: imgTwentyFour,
  },
  {
    id: 25,
    img: imgTwentyFive,
  },
  {
    id: 26,
    img: imgTwentySix,
  },
  {
    id: 27,
    img: imgTwentySeven,
  },
  {
    id: 28,
    img: imgTwentyEight,
  },
  {
    id: 29,
    img: imgTwentyNine,
  },
  {
    id: 30,
    img: imgThirty,
  },
];
