export interface Project {
  slug: string;
  name: string;
  description: string;
  images: string[];
  category: string; // For filtering
  location: string;
  area: string;
  type: string; // Service provided
}

// New categories based on your detailed list
export const projectCategories = [
  "All",
  "Government",
  "Corporate",
  "Hospitality",
  "Education",
  "Public Space",
];

export const projects: Project[] = [
  {
    slug: "aai-jorbagh",
    name: "Office Chambers of Minister of Civil Aviation, AAI",
    category: "Government",
    location: "Jorbagh, New Delhi",
    area: "5,500 sq.ft.",
    type: "Interior Turnkey",
    description: "A comprehensive interior project for the Airports Authority of India at Jorbagh, focusing on a modern and efficient workspace.",
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
  },
  {
    slug: "banquet-hall",
    name: "Banquet Hall & Reception",
    category: "Hospitality",
    location: "Faridabad",
    area: "6,000 sq.ft.",
    type: "Banquet/Events",
    description: "Elegant and spacious design for a banquet hall and reception area, creating a welcoming and luxurious atmosphere for events.",
    images: [
      
      "/Singh_FurnCraft_Portfolio/BANQUET HALL AND RECEPTION/Pasted image (2).png",
      "/Singh_FurnCraft_Portfolio/BANQUET HALL AND RECEPTION/Pasted image (3).png",
    ],
  },
  {
    slug: "polyplex-hydro-office",
    name: "Hydro Office at Polyplex Corporation Ltd.",
    category: "Corporate",
    location: "Sector-1, Noida",
    area: "5,200 sq.ft.",
    type: "Office Interior",
    description: "A state-of-the-art office design for the Hydro division of Polyplex Corporation, emphasizing functionality and corporate identity.",
    images: [
      "/Singh_FurnCraft_Portfolio/HYDRO OFFICE AT POLYPLEX CORPORATION LIMITED/Pasted image.png",
      "/Singh_FurnCraft_Portfolio/HYDRO OFFICE AT POLYPLEX CORPORATION LIMITED/Pasted image (2).png",
      "/Singh_FurnCraft_Portfolio/HYDRO OFFICE AT POLYPLEX CORPORATION LIMITED/Pasted image (3).png",
      "/Singh_FurnCraft_Portfolio/HYDRO OFFICE AT POLYPLEX CORPORATION LIMITED/Pasted image (4).png",
      "/Singh_FurnCraft_Portfolio/HYDRO OFFICE AT POLYPLEX CORPORATION LIMITED/Pasted image (5).png",
    ],
  },
  {
    slug: "iilm-auditorium",
    name: "Auditorium, IILM University",
    category: "Education",
    location: "Lodhi Road, New Delhi",
    area: "N/A",
    type: "Turnkey Project",
    description: "Acoustically optimized and aesthetically pleasing auditorium for the IILM Institute, designed for lectures and performances.",
    images: [
      "/Singh_FurnCraft_Portfolio/IILM AUDITORIUM/Pasted image.png",
      "/Singh_FurnCraft_Portfolio/IILM AUDITORIUM/Pasted image (2).png",
      "/Singh_FurnCraft_Portfolio/IILM AUDITORIUM/Pasted image (3).png",
    ],
  },
  {
    slug: "imfa",
    name: "IMFA Chairman’s Office",
    category: "Corporate",
    location: "Bhubaneswar, Odisha",
    area: "4,000 sq.ft.",
    type: "Executive Office",
    description: "Corporate office interior for IMFA, reflecting the company's brand and providing a productive environment for its employees.",
    images: [
      "/Singh_FurnCraft_Portfolio/IMFA/Pasted image.png",
      "/Singh_FurnCraft_Portfolio/IMFA/Pasted image (2).png",
      "/Singh_FurnCraft_Portfolio/IMFA/Pasted image (3).png",
      "/Singh_FurnCraft_Portfolio/IMFA/Pasted image (4).png",
      "/Singh_FurnCraft_Portfolio/IMFA/Pasted image (5).png",
    ],
  },
  {
    slug: "innovacer",
    name: "Innovaccer",
    category: "Corporate",
    location: "Sector 62, Noida",
    area: "18,000 sq.ft.",
    type: "Office Space",
    description: "A dynamic and collaborative workspace for the healthcare technology company Innovaccer, designed to foster innovation.",
    images: [
      "/Singh_FurnCraft_Portfolio/INNOVACER/Pasted image.png",
      "/Singh_FurnCraft_Portfolio/INNOVACER/Pasted image (2).png",
      "/Singh_FurnCraft_Portfolio/INNOVACER/Pasted image (3).png",
    ],
  },
  {
    slug: "kaushal-bhawan",
    name: "Kaushal Bhawan",
    category: "Government",
    location: "Moti Bagh, Delhi",
    area: "1,05,000 sq.ft.",
    type: "Government Building",
    description: "A government building project focusing on creating a functional and dignified space for public service.",
    images: [
      "/Singh_FurnCraft_Portfolio/KAUSHAL BHAWAN/Pasted image.png",
      "/Singh_FurnCraft_Portfolio/KAUSHAL BHAWAN/Pasted image (2).png",
      "/Singh_FurnCraft_Portfolio/KAUSHAL BHAWAN/Pasted image (3).png",
      "/Singh_FurnCraft_Portfolio/KAUSHAL BHAWAN/Pasted image (4).png",
    ],
  },
  {
    slug: "nhit",
    name: "National Highways Infra Trust (NHIT)",
    category: "Government",
    location: "Dwarka, New Delhi",
    area: "3,500 sq.ft.",
    type: "Interior",
    description: "Office interiors for the National Highways Infra Trust, designed to be both professional and inviting.",
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
  },
  {
    slug: "nau-sena-bhawan-2",
    name: "Nau Sena Bhawan 2",
    category: "Government",
    location: "Delhi Cantt, New Delhi",
    area: "3,00,000 sq.ft.",
    type: "Defense Infrastructure",
    description: "A prestigious project for the Indian Navy, delivering a secure and modern facility.",
    images: [
      "/Singh_FurnCraft_Portfolio/NAU SENA BHAWAN 2/Pasted image.png",
      "/Singh_FurnCraft_Portfolio/NAU SENA BHAWAN 2/Pasted image (2).png",
      "/Singh_FurnCraft_Portfolio/NAU SENA BHAWAN 2/Pasted image (3).png",
    ],
  },
  {
    slug: "polyplex",
    name: "Polyplex Corporation Ltd. (Common Areas)",
    category: "Corporate",
    location: "Sector-1, Noida",
    area: "5,900 sq.ft.",
    type: "Corporate Interior",
    description: "Modern office space for Polyplex, designed to enhance collaboration and employee well-being.",
    images: [
      "/Singh_FurnCraft_Portfolio/POLYPLEX/Pasted image.png",
      "/Singh_FurnCraft_Portfolio/POLYPLEX/Pasted image (2).png",
      "/Singh_FurnCraft_Portfolio/POLYPLEX/Pasted image (3).png",
    ],
  },
  {
    slug: "vanijya-bhawan",
    name: "Vanijya Bhawan",
    category: "Government",
    location: "Akbar Road, New Delhi",
    area: "1,27,000 sq.ft.",
    type: "Government Building",
    description: "A large-scale government project for the Ministry of Commerce, featuring a blend of traditional and modern design elements.",
    images: [
      "/Singh_FurnCraft_Portfolio/VANIJYA BHAWAN/Pasted image.png",
      "/Singh_FurnCraft_Portfolio/VANIJYA BHAWAN/Pasted image (2).png",
      "/Singh_FurnCraft_Portfolio/VANIJIA BHAWAN/Pasted image (3).png",
      "/Singh_FurnCraft_Portfolio/VANIJYA BHAWAN/Pasted image (4).png",
      "/Singh_FurnCraft_Portfolio/VANIJYA BHAWAN/Pasted image (5).png",
    ],
  },
];

// Helper functions to get the data
export const getProjectBySlug = (slug: string) => {
  return projects.find((p) => p.slug === slug);
};

// --- THIS IS THE FIX ---
export const getAllProjectSlugs = () => {
  return projects.map((p) => ({ params: { slug: p.slug } }));
};