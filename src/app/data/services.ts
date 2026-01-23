export interface Service {
  id: string;
  name: string;
  description: string;
  image: string;
}

export const services: Service[] = [
  {
    id: "corporate",
    name: "Corporate and Business Travel, Conventions, Meetings & Incentives",
    description: "Comprehensive corporate travel solutions including business trips, conventions, meetings, and incentive programs tailored to your company's needs.",
    image: "/assets/Services/Corporate.jpg",
  },
  {
    id: "group-tours",
    name: "Group Tour Packages (Escorted or Independent)",
    description: "Expertly curated group tours with flexible options for escorted or independent travel, perfect for exploring destinations with like-minded travelers.",
    image: "/assets/Services/GroupTourPackages.jpg",
  },
  {
    id: "student-religious",
    name: "Student Travel and Religious Pilgrimage",
    description: "Specialized travel arrangements for educational trips and sacred journeys, ensuring safe and meaningful experiences for students and pilgrims.",
    image: "/assets/Services/StudentTravelAndReligiousPilgrimage.jpg",
  },
  {
    id: "family-vacations",
    name: "Personal and Family Vacations",
    description: "Create unforgettable memories with customized vacation packages designed for individuals and families seeking adventure, relaxation, and quality time together.",
    image: "/assets/Services/PersonalAndFamilyVacations.jpg",
  },
  {
    id: "cruise",
    name: "Cruise Vacations",
    description: "Discover the world by sea with exceptional cruise packages to exotic destinations, featuring luxury accommodations and world-class onboard experiences.",
    image: "/assets/Services/CruiseVacations.jpg",
  },
  {
    id: "couples-honeymoon",
    name: "Couples/Honeymooners",
    description: "Romantic getaways and honeymoon packages crafted to celebrate love, featuring intimate settings and unforgettable experiences for couples.",
    image: "/assets/Services/CouplesAndHoneymooners.jpg",
  },
  {
    id: "all-inclusive",
    name: "All-inclusive Vacations",
    description: "Stress-free travel with all-inclusive packages covering accommodations, meals, drinks, and activities at stunning resort destinations worldwide.",
    image: "/assets/Services/AllInclusiveVacations.jpg",
  },
  {
    id: "airline-tickets",
    name: "International and Domestic Airline Tickets",
    description: "Competitive rates on flights worldwide, with access to major airlines and flexible booking options for both international and domestic travel.",
    image: "/assets/Services/AirlineTicket.jpg",
  },
  {
    id: "hotel",
    name: "Hotel Accommodations",
    description: "Wide selection of quality hotel accommodations from budget-friendly options to luxury properties, ensuring comfort at your destination.",
    image: "/assets/Services/HotelAccommodations.jpg",
  },
  {
    id: "car-rentals",
    name: "Car Rentals, Shuttle or Limousine Services",
    description: "Convenient ground transportation solutions including car rentals, shuttle services, and luxury limousine transfers for seamless travel.",
    image: "/assets/Services/CarRentals.jpg",
  },
  {
    id: "insurance",
    name: "Travel Insurance & Protection",
    description: "Comprehensive travel insurance coverage to protect your investment and provide peace of mind for unexpected events during your journey.",
    image: "/assets/Services/TravelInsurance.jpg",
  },
];
