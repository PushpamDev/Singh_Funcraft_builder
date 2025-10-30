export interface Project {
  slug: string;
  name: string;
  description: string;
  images: string[];
  category: string; // For filtering
  location: string;
  area: string;
  type: string; // Service provided
  
  // --- NEW FIELDS FOR THE CASE STUDY ---
  client: string;
  challenge: string;
  solution: string;
  processImages: {
    title: string;
    src: string;
  }[];
}

// Helper array for our filter buttons
export const projectCategories = [
  "All",
  "Government",
  "Corporate",
  "Hospitality",
  "Retail",
  "Education",
  "Public Space",
];

// --- FALLBACK DATA FOR PROJECTS WITHOUT A CASE STUDY ---
const defaultProcessImages = [
  { title: "01. Design & Visualization", src: "https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
  { title: "02. Build-out & Construction", src: "https://images.pexels.com/photos/157811/pexels-photo-157811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
  { title: "03. Fit-out & Handover", src: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
];
const defaultChallenge = "The client required a transformative interior solution that balanced modern aesthetics with functional requirements, all delivered on a strict timeline.";
const defaultSolution = "Our team executed a full-service turnkey plan, managing every detail from initial 3D visualization to final fit-outs. We delivered a space that exceeded expectations, perfectly aligning with the client's brand and operational needs.";

export const projects: Project[] = [
  {
    slug: "aai-jorbagh",
    name: "Office Chambers of Minister of Civil Aviation, AAI",
    category: "Government",
    location: "Jorbagh, New Delhi",
    area: "5,500 sq.ft.",
    type: "Turnkey Interior Fit-Outs",
    description: "Turnkey Interior Fit-Outs for Minister’s office with high-end detailing, premium furniture, and modern executive design.",
    images: [
      "/Singh_FurnCraft_Portfolio/AAI JORBAGH/Pasted image.png",
      "/Singh_FurnCraft_Portfolio/AAI JORBAGH/Pasted image (2).png",
      "/Singh_FurnCraft_Portfolio/AAI JORBAGH/Pasted image (3).png",
      "/Singh_FurnCraft_Portfolio/AAI JORBAGH/Pasted image (4).png",
      "/Singh_FurnCraft_Portfolio/AAI JORBAGH/Pasted image (5).png",
      "/Singh_FurnCraft_Portfolio/AAI JORBAGH/Pasted image (6).png",
      "/Singh_FurnCraft_Portfolio/AAI JORBAGH/Pasted image (7).png",
      "/Singh_FurnCraft_Portfolio/AAI JORBAGH/Pasted image (8).png",
    ],
    client: "Airports Authority of India (AAI)",
    challenge: defaultChallenge,
    solution: defaultSolution,
    processImages: defaultProcessImages,
  },
  {
    slug: "auditorium-amrita-vidyalayam",
    name: "Auditorium at Amrita Vidyalayam",
    category: "Education",
    location: "Saket, Delhi",
    area: "9,800 sq.ft.",
    type: "Educational Auditorium",
    description: "Complete educational auditorium with acoustic ceiling, wall paneling, lighting, and seating installation.",
    images: [
        "/Singh_FurnCraft_Portfolio/AUDITORIUMAT AMRITA VIDAYALAM/AAV1.png",
        "/Singh_FurnCraft_Portfolio/AUDITORIUMAT AMRITA VIDAYALAM/AAV2.png"
    ],
    client: "Amrita Vidyalayam",
    challenge: defaultChallenge,
    solution: defaultSolution,
    processImages: defaultProcessImages,
  },
  {
    slug: "banquet-hall",
    name: "Banquet Hall & Reception",
    category: "Hospitality",
    location: "Faridabad",
    area: "6,000 sq.ft.",
    type: "Banquet/Events",
    description: "Event and celebration space — contemporary lighting, false ceiling, and luxury wall paneling.",
    images: [
      "/Singh_FurnCraft_Portfolio/BANQUET HALL AND RECEPTION/Pasted image (2).png",
      "/Singh_FurnCraft_Portfolio/BANQUET HALL AND RECEPTION/Pasted image (3).png",
      "/Singh_FurnCraft_Portfolio/BANQUET HALL AND RECEPTION/BH1.png"
    ],
    client: "Delite Hotel Pvt. Ltd.",
    challenge: defaultChallenge,
    solution: defaultSolution,
    processImages: defaultProcessImages,
  },
  {
    slug: "convention-hall-dining-area",
    name: "Convention Hall with Dining Area",
    category: "Public Space",
    location: "Akbar Road, New Delhi",
    area: "6,400 sq.ft.",
    type: "Event Facility",
    description: "High-end event and meeting facility for official use — includes stage area, dining space, and lighting design.",
    images: [
        "/Singh_FurnCraft_Portfolio/CONVENTION HALL WITH DININGAREA/CHWD1.png",
        "/Singh_FurnCraft_Portfolio/CONVENTION HALL WITH DININGAREA/CHWD2.png",
        "/Singh_FurnCraft_Portfolio/CONVENTION HALL WITH DININGAREA/CHWD3.png"
    ],
    client: "Public Space",
    challenge: defaultChallenge,
    solution: defaultSolution,
    processImages: defaultProcessImages,
  },
  {
    slug: "delite-grand-hotel",
    name: "Delite Grand Hotel",
    category: "Hospitality",
    location: "Neelam Bata Road, Faridabad",
    area: "55,000 sq.ft.",
    type: "Hospitality Interior",
    description: "Full-scale hotel project including suites, banquet hall, restaurant, and reception design.",
    images: [
        "/Singh_FurnCraft_Portfolio/DELITE GRAND HOTEL/Delite 1.png",
        "/Singh_FurnCraft_Portfolio/DELITE GRAND HOTEL/DGH2.png",
        "/Singh_FurnCraft_Portfolio/DELITE GRAND HOTEL/DGH3.png"
    ],
    client: "Delite Hotel Pvt. Ltd.",
    challenge: defaultChallenge,
    solution: defaultSolution,
    processImages: defaultProcessImages,
  },
  {
    slug: "polyplex-hydro-office",
    name: "Hydro Office at Polyplex Corporation Ltd.",
    category: "Corporate",
    location: "Sector-1, Noida",
    area: "5,200 sq.ft.",
    type: "Office Interior",
    description: "Corporate office design featuring open layout, executive cabins, and modern lighting.",
    images: [
      "/Singh_FurnCraft_Portfolio/HYDRO OFFICE AT POLYPLEX CORPORATION LIMITED/Pasted image.png",
      "/Singh_FurnCraft_Portfolio/HYDRO OFFICE AT POLYPLEX CORPORATION LIMITED/Pasted image (2).png",
      "/Singh_FurnCraft_Portfolio/HYDRO OFFICE AT POLYPLEX CORPORATION LIMITED/Pasted image (3).png",
      "/Singh_FurnCraft_Portfolio/HYDRO OFFICE AT POLYPLEX CORPORATION LIMITED/Pasted image (4).png",
      "/Singh_FurnCraft_Portfolio/HYDRO OFFICE AT POLYPLEX CORPORATION LIMITED/Pasted image (5).png",
    ],
    client: "Polyplex Corporation Ltd.",
    challenge: defaultChallenge,
    solution: defaultSolution,
    processImages: defaultProcessImages,
  },
  {
    slug: "iilm-auditorium",
    name: "Auditorium, IILM University",
    category: "Education",
    location: "Lodhi Road, New Delhi",
    area: "N/A",
    type: "Turnkey Project",
    description: "Turnkey project for educational auditorium, complete with stage setup, acoustic paneling, and lighting.",
    images: [
      "/Singh_FurnCraft_Portfolio/IILM AUDITORIUM/Pasted image (2).png",
      "/Singh_FurnCraft_Portfolio/IILM AUDITORIUM/Pasted image (3).png",
      "/Singh_FurnCraft_Portfolio/IILM AUDITORIUM/Screenshot 2025-10-30 at 5.15.29 PM.png"
    ],
    client: "IILM University",
    challenge: defaultChallenge,
    solution: defaultSolution,
    processImages: defaultProcessImages,
  },
  {
    slug: "imfa",
    name: "IMFA Chairman’s Office",
    category: "Corporate",
    location: "Bhubaneswar, Odisha",
    area: "4,000 sq.ft.",
    type: "Executive Office",
    description: "Luxurious executive office space for the chairman — complete turnkey interior and furniture execution.",
    images: [
      "/Singh_FurnCraft_Portfolio/IMFA/Pasted image (2).png",
      "/Singh_FurnCraft_Portfolio/IMFA/Pasted image.png",
      "/Singh_FurnCraft_Portfolio/IMFA/Pasted image (3).png",
      "/Singh_FurnCraft_Portfolio/IMFA/Pasted image (4).png",
      "/Singh_FurnCraft_Portfolio/IMFA/Pasted image (5).png",
    ],
    client: "IMFA",
    challenge: defaultChallenge,
    solution: defaultSolution,
    processImages: defaultProcessImages,
  },
  {
    slug: "innovacer",
    name: "Innovaccer",
    category: "Corporate",
    location: "Sector 62, Noida",
    area: "18,000 sq.ft.",
    type: "Office Space",
    description: "Large-scale IT company office featuring collaborative spaces, glass cabins, and modern finishes.",
    images: [
      "/Singh_FurnCraft_Portfolio/INNOVACER/Pasted image.png",
      "/Singh_FurnCraft_Portfolio/INNOVACER/Pasted image (2).png",
      "/Singh_FurnCraft_Portfolio/INNOVACER/Pasted image (3).png",
    ],
    client: "Innovaccer",
    challenge: defaultChallenge,
    solution: defaultSolution,
    processImages: defaultProcessImages,
  },
  {
    slug: "kaushal-bhawan",
    name: "Kaushal Bhawan",
    category: "Government",
    location: "Moti Bagh, Delhi",
    area: "1,05,000 sq.ft.",
    type: "Government Building",
    description: "Government skill development headquarters, complete turnkey interior and civil works.",
    images: [
      "/Singh_FurnCraft_Portfolio/KAUSHAL BHAWAN/Pasted image.png",
      "/Singh_FurnCraft_Portfolio/KAUSHAL BHAWAN/Pasted image (2).png",
      "/Singh_FurnCraft_Portfolio/KAUSHAL BHAWAN/Pasted image (3).png",
      "/Singh_FurnCraft_Portfolio/KAUSHAL BHAWAN/Pasted image (4).png",
    ],
    // --- THIS IS THE DETAILED CASE STUDY ---
    client: "Ministry of Skill Development and Entrepreneurship",
    challenge: "The client required a large-scale government building that was not only functional for a high volume of staff but also stood as an architectural landmark. The brief demanded a blend of modern security, sustainable (LEED-compliant) features, and a design that reflects India's heritage.",
    solution: "Our team delivered a complete turnkey solution, engineering a state-of-the-art facility. We integrated smart infrastructure, energy-efficient MEP systems, and sourced sustainable materials. The final design blends traditional Indian motifs with a clean, modern aesthetic, creating a space that is both dignified and highly productive.",
    processImages: [
      {
        title: "01. Design & Visualization",
        src: "https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" // Placeholder: Replace with your blueprint/render
      },
      {
        title: "02. Civil & Build-out",
        src: "https://images.pexels.com/photos/1109543/pexels-photo-1109543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" // Placeholder: Replace with your construction photo
      },
      {
        title: "03. Fit-out & Handover",
        src: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" // Placeholder: Replace with your final photo
      }
    ]
  },
  {
    slug: "mecon-limited",
    name: "MECON Limited",
    category: "Government",
    location: "Laxmi Nagar, Delhi",
    area: "4,500 sq.ft.",
    type: "PSU Office",
    description: "Public sector engineering firm office — modernized interiors, meeting rooms, and workstations.",
    images: [
        "/Singh_FurnCraft_Portfolio/MECON LIMITED/ML1.png",
        "/Singh_FurnCraft_Portfolio/MECON LIMITED/ML2.png"
    ],
    client: "MECON Limited",
    challenge: defaultChallenge,
    solution: defaultSolution,
    processImages: defaultProcessImages,
  },
  {
    slug: "nhit",
    name: "National Highways Infra Trust (NHIT)",
    category: "Government",
    location: "Dwarka, New Delhi",
    area: "3,500 sq.ft.",
    type: "Government Office",
    description: "Government corporate office interior with functional modern design and efficient layout.",
    images: [
      "/Singh_FurnCraft_Portfolio/NATIONAL HIGHWAYS INFRA TRUST/Pasted image.png",
      "/Singh_FurnCraft_Portfolio/NATIONAL HIGHWAYS INFRA TRUST/Pasted image (2).png",
      "/Singh_FurnCraft_Portfolio/NATIONAL HIGHWAYS INFRA TRUST/Pasted image (3).png",
      "/Singh_FurnCraft_Portfolio/NATIONAL HIGHWAYS INFRA TRUST/Pasted image (4).png",
      "/Singh_FurnCraft_Portfolio/NATIONAL HIGHWAYS INFRA TRUST/Pasted image (5).png",
      "/Singh_FurnCraft_Portfolio/NATIONAL HIGHWAYS INFRA TRUST/Pasted image (6).png",
      "/Singh_FurnCraft_Portfolio/NATIONAL HIGHWAYS INFRA TRUST/Pasted image (7).png",
      "/Singh_FurnCraft_Portfolio/NATIONAL HIGHWAYS INFRA TRUST/Pasted image (8).png",
    ],
    client: "National Highways Infra Trust",
    challenge: defaultChallenge,
    solution: defaultSolution,
    processImages: defaultProcessImages,
  },
  {
    slug: "nau-sena-bhawan-2",
    name: "Nau Sena Bhawan 2",
    category: "Government",
    location: "Delhi Cantt, New Delhi",
    area: "3,00,000 sq.ft.",
    type: "Defense Infrastructure",
    description: "Massive defense infrastructure project involving structural and interior execution for Indian Navy facilities.",
    images: [
      "/Singh_FurnCraft_Portfolio/NAU SENA BHAWAN 2/Pasted image.png",
      "/Singh_FurnCraft_Portfolio/NAU SENA BHAWAN 2/Pasted image (2).png",
      "/Singh_FurnCraft_Portfolio/NAU SENA BHAWAN 2/Pasted image (3).png",
      "/Singh_FurnCraft_Portfolio/NAU SENA BHAWAN 2/NSB1.png"
    ],
    client: "Indian Navy",
    challenge: defaultChallenge,
    solution: defaultSolution,
    processImages: defaultProcessImages,
  },
  {
    slug: "pizza-express",
    name: "Pizza Express (Vasant Kunj)",
    category: "Retail",
    location: "Ambience Mall, Vasant Kunj, Delhi",
    area: "2,100 sq.ft.",
    type: "Restaurant",
    description: "Italian restaurant interior — wooden accents, ambient lighting, and open kitchen concept.",
    images: [
        "/Singh_FurnCraft_Portfolio/PIZZA EXPRESS/PE1.png",
        "/Singh_FurnCraft_Portfolio/PIZZA EXPRESS/PE2.png",
        "/Singh_FurnCraft_Portfolio/PIZZA EXPRESS/PE3.png",
        "/Singh_FurnCraft_Portfolio/PIZZA EXPRESS/PE4.png"
    ],
    client: "Pizza Express",
    challenge: defaultChallenge,
    solution: defaultSolution,
    processImages: defaultProcessImages,
  },
  {
    slug: "pizza-express-restaurant",
    name: "Pizza Express (Rajouri Garden)",
    category: "Retail",
    location: "Vishal Cinema, Rajouri Garden, New Delhi",
    area: "2,200 sq.ft.",
    type: "Restaurant",
    description: "Casual dining setup with modern lighting, textured walls, and seating layout.",
    images: [
        "/Singh_FurnCraft_Portfolio/PIZZA EXPRESS RESTAURANT/PER1.png",
        "/Singh_FurnCraft_Portfolio/PIZZA EXPRESS RESTAURANT/PER2.png",
        "/Singh_FurnCraft_Portfolio/PIZZA EXPRESS RESTAURANT/PER3.png"
    ],
    client: "Pizza Express",
    challenge: defaultChallenge,
    solution: defaultSolution,
    processImages: defaultProcessImages,
  },
  {
    slug: "polyplex",
    name: "Polyplex Corporation Ltd. (Common Areas)",
    category: "Corporate",
    location: "Sector-1, Noida",
    area: "5,900 sq.ft.",
    type: "Corporate Interior",
    description: "Premium corporate spaces with custom-designed lobbies and aesthetic architectural finishes.",
    images: [
      "/Singh_FurnCraft_Portfolio/POLYPLEX/Pasted image.png",
      "/Singh_FurnCraft_Portfolio/POLYPLEX/Pasted image (2).png",
      "/Singh_FurnCraft_Portfolio/POLYPLEX/Pasted image (3).png",
    ],
    client: "Polyplex Corporation Ltd.",
    challenge: defaultChallenge,
    solution: defaultSolution,
    processImages: defaultProcessImages,
  },
  {
    slug: "reliance-digital",
    name: "Reliance Digital (Faridabad)",
    category: "Retail",
    location: "Old Faridabad Metro Station",
    area: "N/A",
    type: "Retail Turnkey",
    description: "Turnkey project for electronic retail chain — complete interiors, lighting, display setup.",
    images: [
        "/Singh_FurnCraft_Portfolio/RELIANCE DIGITAL/RD1.png",
        "/Singh_FurnCraft_Portfolio/RELIANCE DIGITAL/RD2.png",
        "/Singh_FurnCraft_Portfolio/RELIANCE DIGITAL/RD3.png",
        "/Singh_FurnCraft_Portfolio/RELIANCE DIGITAL/RD4.png"
    ],
    client: "Reliance",
    challenge: defaultChallenge,
    solution: defaultSolution,
    processImages: defaultProcessImages,
  },
  {
    slug: "reliance-digital-ameya-sapphire-mall",
    name: "Reliance Digital (Ameya Sapphire Mall)",
    category: "Retail",
    location: "Manesar, Gurgaon",
    area: "6,200 sq.ft.",
    type: "Retail Showroom",
    description: "Large-format retail showroom with brand-consistent layout and finish.",
    images: [
        "/Singh_FurnCraft_Portfolio/RELIANCE DIGITALAMEYA SAPPHIRE MALL/RDS1.png",
        "/Singh_FurnCraft_Portfolio/RELIANCE DIGITALAMEYA SAPPHIRE MALL/RDS2.png"
    ],
    client: "Reliance",
    challenge: defaultChallenge,
    solution: defaultSolution,
    processImages: defaultProcessImages,
  },
  {
    slug: "reliance-jewels",
    name: "Reliance Jewels",
    category: "Retail",
    location: "Paschim Vihar, New Delhi",
    area: "6,500 sq.ft.",
    type: "Luxury Retail",
    description: "Luxury jewelry retail interior with gold-accented detailing and lighting design.",
    images: [
        "/Singh_FurnCraft_Portfolio/RELIANCE JEWELS/RJ1.png",
        "/Singh_FurnCraft_Portfolio/RELIANCE JEWELS/RJ2.png",
        "/Singh_FurnCraft_Portfolio/RELIANCE JEWELS/RJ3.png"
    ],
    client: "Reliance",
    challenge: defaultChallenge,
    solution: defaultSolution,
    processImages: defaultProcessImages,
  },
  {
    slug: "reliance-trends",
    name: "Reliance Trends (Ghaziabad)",
    category: "Retail",
    location: "Pacific Mall, Ghaziabad",
    area: "12,000 sq.ft.",
    type: "Retail Fit-Out",
    description: "Retail fashion outlet interior with modular display systems and lighting.",
    images: [
        "/Singh_FurnCraft_Portfolio/RELIANCE TRENDS/RT1.png",
        "/Singh_FurnCraft_Portfolio/RELIANCE TRENDS/RT2.png",
        "/Singh_FurnCraft_Portfolio/RELIANCE TRENDS/RT3.png"
    ],
    client: "Reliance",
    challenge: defaultChallenge,
    solution: defaultSolution,
    processImages: defaultProcessImages,
  },
  {
    slug: "reliance-trends-bhupinder-road",
    name: "Reliance Trends (Patiala)",
    category: "Retail",
    location: "Bhupinder Road, Patiala",
    area: "11,200 sq.ft.",
    type: "Retail Fit-Out",
    description: "Second Trends outlet — similar design with local adaptation and civil fit-out.",
    images: [
        "/Singh_FurnCraft_Portfolio/RELIANCE TRENDS BHUPINDER ROAD/RTBR1.png"
    ],
    client: "Reliance",
    challenge: defaultChallenge,
    solution: defaultSolution,
    processImages: defaultProcessImages,
  },
  {
    slug: "tata-cnoc",
    name: "TATA CNOC",
    category: "Corporate",
    location: "Sector 60, Noida",
    area: "32,000 sq.ft.",
    type: "High-Tech Operations Center",
    description: "High-tech operations center for Tata Communications — turnkey interior execution, MEP integration, and space optimization.",
    images: [
        "/Singh_FurnCraft_Portfolio/TATA CNOC/tata1.png",
        "/Singh_FurnCraft_Portfolio/TATA CNOC/tata2.png",
        "/Singh_FurnCraft_Portfolio/TATA CNOC/tata3.png"
    ],
    client: "TATA Communications",
    challenge: defaultChallenge,
    solution: defaultSolution,
    processImages: defaultProcessImages,
  },
  {
    slug: "the-coffee-bean-tea-leaf",
    name: "The Coffee Bean & Tea Leaf",
    category: "Retail",
    location: "Omaxe Complex, New Chandigarh",
    area: "1,550 sq.ft.",
    type: "Café Interior",
    description: "Boutique café interior with wood finishes, glass partitions, and cozy ambiance.",
    images: [
        "/Singh_FurnCraft_Portfolio/THE COFFEE BEAN & TEA LEAF/Screenshot 2025-10-30 at 5.50.54 PM.png",
        "/Singh_FurnCraft_Portfolio/THE COFFEE BEAN & TEA LEAF/Screenshot 2025-10-30 at 5.51.12 PM.png",
        "/Singh_FurnCraft_Portfolio/THE COFFEE BEAN & TEA LEAF/Screenshot 2025-10-30 at 5.51.30 PM.png"
    ],
    client: "The Coffee Bean & Tea Leaf",
    challenge: defaultChallenge,
    solution: defaultSolution,
    processImages: defaultProcessImages,
  },
  {
    slug: "times-now",
    name: "Times Now",
    category: "Corporate",
    location: "Sector 16, Noida",
    area: "17,000 sq.ft.",
    type: "Broadcast/Media Office",
    description: "News media office space — broadcast-ready interiors, acoustics, and branding-focused design.",
    images: [
        "/Singh_FurnCraft_Portfolio/TIMES NOW/Screenshot 2025-10-30 at 5.47.06 PM.png",
        "/Singh_FurnCraft_Portfolio/TIMES NOW/Screenshot 2025-10-30 at 5.47.26 PM.png"
    ],
    client: "Times Now",
    challenge: defaultChallenge,
    solution: defaultSolution,
    processImages: defaultProcessImages,
  },
  {
    slug: "vanijya-bhawan",
    name: "Vanijya Bhawan",
    category: "Government",
    location: "Akbar Road, New Delhi",
    area: "1,27,000 sq.ft.",
    type: "Government Building",
    description: "Large-scale government building interior — administrative offices, conference rooms, and public areas.",
    images: [
      "/Singh_FurnCraft_Portfolio/VANIJYA BHAWAN/Pasted image.png",
      "/Singh_FurnCraft_Portfolio/VANIJYA BHAWAN/Pasted image (2).png",
      "/Singh_FurnCraft_Portfolio/VANIJYA BHAWAN/Pasted image (3).png",
      "/Singh_FurnCraft_Portfolio/VANIJYA BHAWAN/Pasted image (4).png",
      "/Singh_FurnCraft_Portfolio/VANIJYA BHAWAN/Pasted image (5).png",
    ],
    client: "Ministry of Commerce",
    challenge: defaultChallenge,
    solution: defaultSolution,
    processImages: defaultProcessImages,
  },
];

// Helper functions to get the data
export const getProjectBySlug = (slug: string) => {
  return projects.find((p) => p.slug === slug);
};

export const getAllProjectSlugs = () => {
  return projects.map((p) => ({ params: { slug: p.slug } }));
};