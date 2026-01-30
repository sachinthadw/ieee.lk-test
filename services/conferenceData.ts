export interface Conference {
    title: string;
    link: string;
    description?: string;
    startDate?: string;
    endDate?: string;
    year?: string;
    fullDate?: string;
    location?: string;
    logo?: string;
    tags?: string[];
}

export const CONFERENCE_GUIDELINES = {
    title: "Guidelines for Conference Technical Co-Sponsorships and Financial Co-Sponsorships",
    downloadLink: "https://ieee.lk/wp-content/uploads/2025/01/Guidelines-for-Conference-Technical-Co-Sponsorships-and-Financial-Co-Sponsorships.pdf",
    description: "Comprehensive guidelines for organizing IEEE Sri Lanka Section sponsored conferences. This document covers technical and financial co-sponsorship requirements, approval processes, and best practices.",
};

// CURRENT DATE: Jan 30, 2026
export const UPCOMING_CONFERENCES: Conference[] = [
    {
        title: "International Conference on Advanced Research in Computing (ICARC 2025)",
        link: "http://www.icarc.sab.ac.lk/",
        description: "The 6th IEEE ICARC 2025 organized by Sabaragamuwa University of Sri Lanka. (Rescheduled to Feb 2026)",
        startDate: "Feb 18",
        endDate: "Feb 19",
        year: "2026",
        location: "Sabaragamuwa, Sri Lanka",
        tags: ["Computing", "Advanced Research"],
        logo: "https://ui-avatars.com/api/?name=ICARC&background=00629B&color=fff&size=128"
    }
];

export const PAST_CONFERENCES_BY_YEAR: Record<string, Conference[]> = {
    "2025": [
        {
            title: "10th International Conference on Advances In Technology And Computing (ICATC 2025)",
            link: "https://kln.ac.lk/",
            startDate: "Dec 16",
            endDate: "Dec 16",
            location: "Kelaniya",
            logo: "https://ui-avatars.com/api/?name=ICATC&background=00629B&color=fff&size=128"
        },
        {
            title: "7th International Conference on Advances in Computing (ICAC 2025)",
            link: "https://icac.lk/",
            startDate: "Dec 09",
            endDate: "Dec 10",
            location: "SLIIT",
            logo: "https://ui-avatars.com/api/?name=ICAC&background=00629B&color=fff&size=128"
        },
        {
            title: "9th SLAAI International Conference on Artificial Intelligence (SLAAI-ICAI 2025)",
            link: "https://slaai.lk/",
            startDate: "Nov 19",
            endDate: "Nov 21",
            location: "Colombo",
            logo: "https://ui-avatars.com/api/?name=SLAAI&background=00629B&color=fff&size=128"
        },
        {
            title: "11th Moratuwa Engineering Research Conference (MERCon 2025)",
            link: "https://mercon.uom.lk/",
            startDate: "Aug 14",
            endDate: "Aug 15",
            location: "Moratuwa",
            logo: "https://ui-avatars.com/api/?name=MERCon&background=00629B&color=fff&size=128"
        }
    ],
    "2024": [
        {
            title: "4th International Conference on Advanced Research in Computing (ICARC 2024)",
            link: "https://www.icarc.lk/",
            startDate: "Feb 23",
            endDate: "Feb 24",
            location: "Sabaragamuwa",
            logo: "https://ui-avatars.com/api/?name=ICARC&background=random&color=fff"
        },
        {
            title: "International Research Conference on Smart Computing and Systems Engineering (SCSE 2024)",
            link: "https://scse.kln.ac.lk/",
            startDate: "Apr 04",
            endDate: "Apr 04",
            location: "Kelaniya",
            logo: "https://ui-avatars.com/api/?name=SCSE&background=random&color=fff"
        },
        {
            title: "International Conference on Image Processing and Robotics (ICIPRob 2024)",
            link: "https://www.iciprob.com/2024/",
            startDate: "Mar 09",
            endDate: "Mar 10",
            location: "Colombo",
            logo: "https://ui-avatars.com/api/?name=ICIPR&background=random&color=fff"
        },
    ],
    "2023": [
        {
            title: "2023 IEEE 17th International Conference on Industrial and Information Systems (ICIIS 2023)",
            link: "https://iciis.net/",
            startDate: "Aug 25",
            endDate: "Aug 26",
            location: "Peradeniya",
            logo: "https://ui-avatars.com/api/?name=ICIIS&background=random&color=fff"
        },
        {
            title: "7th SLAAI International Conference on AI Innovations for Sustainable Development",
            link: "https://slaai.lk/icai/2023/",
            startDate: "Nov 23",
            endDate: "Nov 24",
            location: "Wayamba",
            logo: "https://ui-avatars.com/api/?name=SLAAI&background=random&color=fff"
        },
        {
            title: "International Conference on Innovations in ICT (ICIIT)",
            link: "https://iciit.iit.ac.lk/",
            startDate: "Aug 04",
            endDate: "Aug 04",
            location: "Sri Jayewardenepura",
            logo: "https://ui-avatars.com/api/?name=ICIIT&background=random&color=fff"
        },
        {
            title: "International Research Conference on Smart Computing and Systems Engineering (SCSE)",
            link: "https://scse.kln.ac.lk/",
            startDate: "Jun 29",
            endDate: "Jun 29",
            location: "Kelaniya",
            logo: "https://ui-avatars.com/api/?name=SCSE&background=random&color=fff"
        },
        {
            title: "Moratuwa Engineering Research Conference (MERCon)",
            link: "https://mercon.uom.lk/",
            startDate: "Nov 09",
            endDate: "Nov 11",
            location: "Moratuwa",
            logo: "https://ui-avatars.com/api/?name=MERCon&background=random&color=fff"
        },
        {
            title: "5th International Conference On Advancements In Computing (ICAC)",
            link: "https://icac.lk/",
            startDate: "Dec 07",
            endDate: "Dec 08",
            location: "SLIIT",
            logo: "https://ui-avatars.com/api/?name=ICAC&background=random&color=fff"
        },
        {
            title: "8th International Conference On Information Technology Research (ICITR)",
            link: "https://icitr.uom.lk/",
            startDate: "Dec 07",
            endDate: "Dec 08",
            location: "Moratuwa",
            logo: "https://ui-avatars.com/api/?name=ICITR&background=random&color=fff"
        },
    ],
    "2022": [
        {
            title: "2nd International Conference on Advanced Research in Computing (ICARC)",
            link: "http://www.icarc.sab.ac.lk/",
            startDate: "Feb 23",
            endDate: "Feb 24",
            location: "Sabaragamuwa",
            logo: "https://ui-avatars.com/api/?name=ICARC&background=random&color=fff"
        },
        {
            title: "2nd International Conference on Image Processing and Robotics (ICIPRob)",
            link: "https://www.iciprob.com/2022/",
            startDate: "Mar 12",
            endDate: "Mar 13",
            location: "Colombo",
            logo: "https://ui-avatars.com/api/?name=ICIPRob&background=random&color=fff"
        },
        {
            title: "Moratuwa Engineering Research Conference (MERCon)",
            link: "https://mercon.uom.lk/",
            startDate: "Jun 27",
            endDate: "Jun 29",
            location: "Moratuwa",
            logo: "https://ui-avatars.com/api/?name=MERCon&background=random&color=fff"
        },
        {
            title: "International Research Conference on Smart Computing and Systems Engineering (SCSE)",
            link: "https://scse.kln.ac.lk/",
            startDate: "Sep 01",
            endDate: "Sep 01",
            location: "Kelaniya",
            logo: "https://ui-avatars.com/api/?name=SCSE&background=random&color=fff"
        },
        {
            title: "22nd International Conference on Advances in ICT for Emerging Regions (ICTer)",
            link: "https://icter.lk/",
            startDate: "Nov 30",
            endDate: "Dec 01",
            location: "Colombo",
            logo: "https://ui-avatars.com/api/?name=ICTer&background=random&color=fff"
        },
        {
            title: "6th SLAAI International Conference on Artificial Intelligence",
            link: "https://slaai.lk/",
            startDate: "Dec 01",
            endDate: "Dec 02",
            location: "Colombo",
            logo: "https://ui-avatars.com/api/?name=SLAAI&background=random&color=fff"
        },
        {
            title: "7th International Conference On Information Technology Research (ICITR)",
            link: "https://icitr.uom.lk/",
            startDate: "Dec 07",
            endDate: "Dec 09",
            location: "Moratuwa",
            logo: "https://ui-avatars.com/api/?name=ICITR&background=random&color=fff"
        },
        {
            title: "4th International Conference On Advancements In Computing (ICAC)",
            link: "https://icac.lk/",
            startDate: "Dec 09",
            endDate: "Dec 10",
            location: "SLIIT",
            logo: "https://ui-avatars.com/api/?name=ICAC&background=random&color=fff"
        }
    ]
};
