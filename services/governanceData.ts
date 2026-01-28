
export interface CommitteeMember {
    name: string;
    role: string;
    image: string;
    email?: string;
    linkedin?: string;
}

export const EXCOM_DATA: Record<string, CommitteeMember[]> = {
    "2026": [
        { name: "Prof. Tharaka Samarasinghe", role: "Chair", image: "https://ui-avatars.com/api/?name=Tharaka+Samarasinghe" },
        { name: "Prof. Shanmuganathan Vasanthapriyan", role: "Past Chair / Conference Quality Management Lead", image: "https://ui-avatars.com/api/?name=Shanmuganathan+Vasanthapriyan" },
        { name: "Mr. Kavinga Upul Ekanayake", role: "Chair-elect / Professional Activities Lead", image: "https://ui-avatars.com/api/?name=Kavinga+Upul+Ekanayake" },
        { name: "Ms. Warunika Hippola", role: "Treasurer", image: "https://ui-avatars.com/api/?name=Warunika+Hippola" },
        { name: "Dr. Sureka Thiruchittampalam", role: "Secretary", image: "https://ui-avatars.com/api/?name=Sureka+Thiruchittampalam" },
        { name: "Ms. Thihara Mallikaratchy", role: "Asst. Secretary / OU Coordination Lead", image: "https://ui-avatars.com/api/?name=Thihara+Mallikaratchy" },
        { name: "Mr. Manodya Nabadawewa", role: "Asst. Treasurer / Industrial Activities Lead", image: "https://ui-avatars.com/api/?name=Manodya+Nabadawewa" },
        { name: "Mr. Sachintha Wickramasinghe", role: "Editor", image: "https://ui-avatars.com/api/?name=Sachintha+Wickramasinghe" },
        { name: "Prof. Sidath Liyanage", role: "Education Activities Lead", image: "https://ui-avatars.com/api/?name=Sidath+Liyanage" },
        { name: "Dr. Nuwan Herath", role: "Technical Activities Lead", image: "https://ui-avatars.com/api/?name=Nuwan+Herath" },
        { name: "Dr. Thilina Thanthriwatta", role: "Membership Development Lead", image: "https://ui-avatars.com/api/?name=Thilina+Thanthriwatta" },
        { name: "Prof. Anuradha Jayakody", role: "Awards and Recognition Lead", image: "https://ui-avatars.com/api/?name=Anuradha+Jayakody" },
        { name: "Mr. Yohan Joseph", role: "Student Activities Chair", image: "https://ui-avatars.com/api/?name=Yohan+Joseph" },
        { name: "Mr. Uvindu Kodikara", role: "Section Student Representative", image: "https://ui-avatars.com/api/?name=Uvindu+Kodikara" }
    ],
    "2025": [
        { name: "Mr. Dhammika Marasinghe", role: "Chair", image: "https://ieeelk.org/wp-content/uploads/2024/02/Dhammika-Marasinghe.jpg", email: "chair@ieee.lk" },
        { name: "Prof. S. Vasanthapriyan", role: "Chair-Elect", image: "https://ieeelk.org/wp-content/uploads/2024/02/S-Vasanthapriyan.jpg" },
        { name: "Prof. Buddhika Jayasekara", role: "Immediate Past Chair", image: "https://ieeelk.org/wp-content/uploads/2024/02/Buddhika-Jayasekara.jpg" },
        { name: "Ms. Sewwandie Nanayakkara", role: "Secretary", image: "https://ieeelk.org/wp-content/uploads/2024/02/Sewwandie-Nanayakkara.jpg" },
        { name: "Ms. Umaya Balagalla", role: "Assistant Secretary", image: "https://ieeelk.org/wp-content/uploads/2024/02/Umaya-Balagalla.jpg" },
        { name: "Mr. Lakshan Madhushanka", role: "Treasurer", image: "https://ieeelk.org/wp-content/uploads/2024/02/Lakshan-Madhushanka.jpg" },
        { name: "Dr. Logeeshan Velmanickam", role: "Assistant Treasurer", image: "https://ieeelk.org/wp-content/uploads/2024/02/Logeeshan-Velmanickam.jpg" },
        { name: "Mr. Dimuthu Anuraj", role: "Editor", image: "https://ieeelk.org/wp-content/uploads/2024/02/Dimuthu-Anuraj.jpg" }
    ],
    "2024": [
        { name: "Mr. Dhammika Marasinghe", role: "Chair", image: "https://ieeelk.org/wp-content/uploads/2024/02/Dhammika-Marasinghe.jpg" },
        { name: "Prof. S. Vasanthapriyan", role: "Chair-Elect", image: "https://ieeelk.org/wp-content/uploads/2024/02/S-Vasanthapriyan.jpg" }
        // Add more 2024 members if available/needed
    ],
    // Add historic data as needed
};

// Structure: Slug -> Year -> Members
export const COMMITTEE_DATA: Record<string, Record<string, CommitteeMember[]>> = {
    "slsac": {
        "2026": [
            {
                name: "Dr. Heshan Perera",
                role: "Chair",
                image: "https://ui-avatars.com/api/?name=Heshan+Perera&background=0f172a&color=fff&size=512",
                email: "heshan.p@ieee.org"
            },
            {
                name: "Ms. Nethmi De Silva",
                role: "Secretary",
                image: "https://ui-avatars.com/api/?name=Nethmi+De+Silva&background=0f172a&color=fff&size=512"
            },
            {
                name: "Mr. Kaveen Dissanayake",
                role: "Membership Development Lead",
                image: "https://ui-avatars.com/api/?name=Kaveen+Dissanayake&background=random&color=fff"
            }
        ],
        "2025": [
            { name: "Ms. Lihini Rajapaksha", role: "Chair", image: "https://ui-avatars.com/api/?name=Lihini+Rajapaksha" }
        ]
    },
    "editorial": {
        "2026": [
            {
                name: "Prof. Ruwan Jayasinghe",
                role: "Editor-in-Chief",
                image: "https://ui-avatars.com/api/?name=Ruwan+Jayasinghe&background=0f172a&color=fff&size=512",
                email: "ruwan.j@ieee.org"
            },
            {
                name: "Mr. Amal Perera",
                role: "Associate Editor",
                image: "https://ui-avatars.com/api/?name=Amal+Perera&background=0f172a&color=fff&size=512"
            }
        ],
        "2025": [
            { name: "Mr. Dimuthu Anuraj", role: "Editor-in-Chief", image: "https://ieeelk.org/wp-content/uploads/2024/02/Dimuthu-Anuraj.jpg" }
        ]
    }
};
