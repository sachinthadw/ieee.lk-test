
export interface ExComMember {
    name: string;
    role: string;
    image: string; // URL or placeholder
    linkedin?: string;
    email?: string;
}

export interface Milestone {
    year: string;
    title: string;
    description: string;
}

export interface Committee {
    name: string;
    chair: string;
    description: string;
}

export const MISSION_VISION = {
    vision: "To be the essential resource for the technical professional worldwide, and to be universally recognized for the contributions of technology and of technical professionals in improving global conditions.",
    mission: "To foster technological innovation and excellence for the benefit of humanity."
};

export const MILESTONES: Milestone[] = [
    {
        year: "2025",
        title: "Global Recognition",
        description: "Participated in IEEE reaching the 500,000 members milestone worldwide. Ranked 7th globally in student member population."
    },
    {
        year: "2024",
        title: "13th SYW Congress",
        description: "Hosted the 'Revolutionizing the digital landscape' congress with over 200 participants."
    },
    {
        year: "2023",
        title: "20th Anniversary",
        description: "Celebrated two decades of excellence. Formed 7 new Student Branch Chapters and 1 Section-Level Technical Society Chapter."
    },
    {
        year: "2005",
        title: "First Chapters",
        description: "Establishment of the Sri Lanka Computer Chapter (C16) and the Central Region Subsection."
    },
    {
        year: "2003",
        title: "Inception",
        description: "Officially formed on November 14, 2003, following a petition by Dr. Sanath Alahakoon."
    }
];

export const EXCOM_MEMBERS_2025: ExComMember[] = [
    {
        name: "Mr. Dhammika Marasinghe",
        role: "Chair",
        image: "https://ieeelk.org/wp-content/uploads/2024/02/Dhammika-Marasinghe.jpg", // Placeholder - normally would verify
        email: "chair@ieee.lk"
    },
    {
        name: "Prof. S. Vasanthapriyan",
        role: "Chair-Elect",
        image: "https://ieeelk.org/wp-content/uploads/2024/02/S-Vasanthapriyan.jpg",
    },
    {
        name: "Prof. Buddhika Jayasekara",
        role: "Immediate Past Chair",
        image: "https://ieeelk.org/wp-content/uploads/2024/02/Buddhika-Jayasekara.jpg",
    },
    {
        name: "Ms. Sewwandie Nanayakkara",
        role: "Secretary",
        image: "https://ieeelk.org/wp-content/uploads/2024/02/Sewwandie-Nanayakkara.jpg",
    },
    {
        name: "Ms. Umaya Balagalla",
        role: "Assistant Secretary",
        image: "https://ieeelk.org/wp-content/uploads/2024/02/Umaya-Balagalla.jpg",
    },
    {
        name: "Mr. Lakshan Madhushanka",
        role: "Treasurer",
        image: "https://ieeelk.org/wp-content/uploads/2024/02/Lakshan-Madhushanka.jpg",
    },
    {
        name: "Dr. Logeeshan Velmanickam",
        role: "Assistant Treasurer",
        image: "https://ieeelk.org/wp-content/uploads/2024/02/Logeeshan-Velmanickam.jpg",
    },
    {
        name: "Mr. Dimuthu Anuraj",
        role: "Editor",
        image: "https://ieeelk.org/wp-content/uploads/2024/02/Dimuthu-Anuraj.jpg",
    }
];

export const STANDING_COMMITTEES: Committee[] = [
    {
        name: "Awards & Recognition",
        chair: "Prof. Lasith Gunawardena",
        description: "Recognizing the dedicated volunteers and organizational units."
    },
    {
        name: "Professional Activities",
        chair: "Dr. Anuradha Jayakody",
        description: "Enhancing the professional development of members."
    },
    {
        name: "Educational Activities",
        chair: "Dr. Subodha Charles",
        description: "Promoting educational initiatives and workshops."
    },
    {
        name: "Industry Relations",
        chair: "Mr. Kavinga Upul Ekanayaka",
        description: "Bridging the gap between academia and industry."
    },
    {
        name: "Student Activities",
        chair: "Ms. Lihini Rajapaksha",
        description: "Empowering the student community and student branches."
    }
];
