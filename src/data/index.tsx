import {
  BookOpen,
  Calendar,
  Facebook,
  GraduationCap,
  HandHeart,
  Heart,
  HeartHandshake,
  Instagram,
  Landmark,
  LucideGlobe,
  Shield,
  Twitter,
  UserPlus,
  Users,
} from "lucide-react";
import pillarOne from "@assets/images/pillarOne.svg";

export const headerItems = [
  {
    id: 1,
    name: "Home",
    link: "",
  },
  {
    id: 2,
    name: "About",
    link: "",
  },
  {
    id: 3,
    name: "News and Events",
    link: "",
  },
  {
    id: 4,
    name: "Contacts",
    link: "",
  },
];

export const stats = [
  {
    id: 1,
    num: "5+",
    desc: "Years of Service",
    icon: Heart,
  },
  {
    id: 2,
    num: "100+",
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
    number: "100+",
    desc: "Scholarships Awarded",
  },
  {
    id: 2,
    number: "₦2M+",
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
    id: 2,
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
      "Empowering Imoru's youth through education, cultural preservation, and community welfare since 2019.",
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
    phone: "+234 XXX XXX XXXX",
    email: "info@ipgimoru.org",
  },
  social: [
    { id: 1, name: "Facebook", icon: Facebook, href: "#" },
    { id: 2, name: "Twitter", icon: Twitter, href: "#" },
    { id: 3, name: "Instagram", icon: Instagram, href: "#" },
  ],
};
