export interface CruiseLine {
  id: string;
  name: string;
  image: string;
}

export const cruiseLines: CruiseLine[] = [
  {
    id: "carnival",
    name: "Carnival",
    image: "/assets/Cruises/Carnival.jpg",
  },
  {
    id: "celebrity",
    name: "Celebrity",
    image: "/assets/Cruises/Celebrity.jpg",
  },
  {
    id: "disney",
    name: "Disney",
    image: "/assets/Cruises/Disney.jpg",
  },
  {
    id: "holland",
    name: "Holland America",
    image: "/assets/Cruises/Holland.jpg",
  },
  {
    id: "norwegian",
    name: "Norwegian",
    image: "/assets/Cruises/Norwegian.jpg",
  },
  {
    id: "princess",
    name: "Princess",
    image: "/assets/Cruises/Princess.jpg",
  },
  {
    id: "royal-caribbean",
    name: "Royal Caribbean",
    image: "/assets/Cruises/RoyalCarribean.jpg",
  },
];
