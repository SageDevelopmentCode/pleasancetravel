export interface Destination {
  id: string;
  name: string;
  image: string;
  description: string;
}

export const destinations: Destination[] = [
  {
    id: "hawaii",
    name: "Hawaii",
    image: "/assets/Hawaii.jpg",
    description: "Escape to Hawaii where turquoise waters, golden beaches, and island adventure await. Book your dream Hawaiian getaway today."
  },
  {
    id: "canada",
    name: "Canada",
    image: "/assets/Canada.jpg",
    description: "Discover Canada's breathtaking landscapes, from pristine mountain lakes to vibrant cities. Experience the beauty of the Great White North."
  },
  {
    id: "fiji",
    name: "Fiji",
    image: "/assets/Fiji.jpg",
    description: "Experience paradise in Fiji with crystal-clear waters, tropical islands, and warm hospitality. Your perfect island escape awaits."
  },
  {
    id: "mexico",
    name: "Mexico",
    image: "/assets/Mexico.jpg",
    description: "Explore Mexico's rich culture, ancient ruins, and stunning beaches. From vibrant cities to serene coastlines, adventure calls."
  }
];
