
export interface AwardItem {
    name: string;
    recipient?: string;
    url?: string;
}

export interface AwardCategory {
    title: string;
    awards: (AwardItem | string)[];
}

export const AWARDS_NOMINATION_2025: AwardCategory[] = [
    {
        title: "Organizational Unit (OU) Awards",
        awards: [
            { name: "Outstanding Chapter Award (Sectional Category)", url: "https://docs.google.com/document/d/1O85JxsftmCCHXsPZg4lC8qzegTVTk4jN/edit#heading=h.d7bg5ya4iv4h" },
            { name: "Outstanding Affinity Group Award (Sectional Category)", url: "https://docs.google.com/document/d/1O85JxsftmCCHXsPZg4lC8qzegTVTk4jN/edit#heading=h.psk6eh2ft5x7" }
        ]
    },
    {
        title: "Special Activities Awards",
        awards: [
            { name: "Best Sectional Project Award", url: "https://docs.google.com/document/d/1O85JxsftmCCHXsPZg4lC8qzegTVTk4jN/edit#heading=h.i8wel1a10n0u" },
            { name: "Best Affinity Group Project Award (Section AG Category)", url: "https://docs.google.com/document/d/1O85JxsftmCCHXsPZg4lC8qzegTVTk4jN/edit#heading=h.oqqv8nhgs4jb" },
            { name: "Best Technical Chapter Project Award (Section Chapter)", url: "https://docs.google.com/document/d/1O85JxsftmCCHXsPZg4lC8qzegTVTk4jN/edit#heading=h.j7fow4141jpz" },
            { name: "Best Industry Collaborative Project Award (Section OU Category)", url: "https://docs.google.com/document/d/1O85JxsftmCCHXsPZg4lC8qzegTVTk4jN/edit#heading=h.d949283q15d9" }
        ]
    },
    {
        title: "Individual Volunteer Awards",
        awards: [
            { name: "Section Outstanding Volunteer Award (Student Category)", url: "https://docs.google.com/document/d/1O85JxsftmCCHXsPZg4lC8qzegTVTk4jN/edit#heading=h.xbhwfp3jwc0z" },
            { name: "Section Outstanding Volunteer Award (Member Category)", url: "https://docs.google.com/document/d/1O85JxsftmCCHXsPZg4lC8qzegTVTk4jN/edit#heading=h.r69416sg846" },
            { name: "Section Outstanding WIE Volunteer Award (Member Category)", url: "https://docs.google.com/document/d/1O85JxsftmCCHXsPZg4lC8qzegTVTk4jN/edit#heading=h.kupgn7l9i0av" },
            { name: "Section Outstanding WIE Volunteer Award (Student Category)", url: "https://docs.google.com/document/d/1O85JxsftmCCHXsPZg4lC8qzegTVTk4jN/edit#heading=h.wg0veaohj95" },
            { name: "Section Outstanding Young Professionals Volunteer Award (Academician)", url: "https://docs.google.com/document/d/1O85JxsftmCCHXsPZg4lC8qzegTVTk4jN/edit#heading=h.gcwwyyqr3fkn" },
            { name: "Section Outstanding Young Professionals Volunteer Award (Industry Practitioner)", url: "https://docs.google.com/document/d/1O85JxsftmCCHXsPZg4lC8qzegTVTk4jN/edit#heading=h.i4sly0fmilip" },
            { name: "Section Outstanding Student Branch Counselor/Chapter Advisor/ WIE Affinity Group Advisor Award", url: "https://docs.google.com/document/d/1O85JxsftmCCHXsPZg4lC8qzegTVTk4jN/edit#heading=h.oasxuyw1fs4n" }
        ]
    },
    {
        title: "External Recognition",
        awards: [
            { name: "Outstanding Industry Partner(s)", url: "https://docs.google.com/document/d/1O85JxsftmCCHXsPZg4lC8qzegTVTk4jN/edit#heading=h.lvktg4oodage" }
        ]
    }
];

export const AWARDS_2025_WINNERS: AwardCategory[] = [
    {
        title: "Phase 01 - Organizational Unit (OU) Awards",
        awards: [
            { name: "Emerging Chapter Award (SB Category)", recipient: "IEEE Computational Intelligence Society Student Branch Chapter of the University of Jaffna" },
            { name: "Emerging Student Branch Award", recipient: "IEEE Student Branch of Wayamba University of Sri Lanka Campus" },
            { name: "Outstanding Affinity Group (SB Category)", recipient: "IEEE Women in Engineering Student Branch Affinity Group of the University of Jaffna" },
            { name: "Outstanding Chapter Award (SB Category)", recipient: "IEEE Engineering Medicine and Biology Society Student Branch Chapter of the University of Moratuwa" },
            { name: "Outstanding Student Branch Award", recipient: "IEEE Student Branch of NSBM Green University" },
            { name: "Special Recognition for Membership Recruitment & Retention", recipient: "IEEE Student Branch of Informatics Institute of Technology" }
        ]
    },
    {
        title: "Phase 01 - Special Activity Awards",
        awards: [
            { name: "Best Affinity Group Project Award (Student AG Category)", recipient: "SHErlock 2.0 – IEEE WIE SB AG of IIT" },
            { name: "Best Industry Collaborative Project Award (SB OU Category)", recipient: "Rise Up Mora 2025 – IEEE SB of University of Moratuwa" },
            { name: "Best Student Branch Project Award", recipient: "MoraForesight 3.0 – IEEE IES, SPS, GRSS, PCS Student Branch Chapters of UoM" },
            { name: "Special Recognition for the Best Humanitarian Project", recipient: "Perpetual 5.0 – IEEE WIE SB AG of SLIIT" },
            { name: "Best Technical Chapter Project Award (Student Chapter)", recipient: "InnovMind V2.0 – IEEE IAS SB Chapter of SLTC" }
        ]
    },
    {
        title: "Phase 02 - Organizational Unit (OU) Awards",
        awards: [
            { name: "Outstanding Chapter Award (Sectional Category)", recipient: "IEEE ComSoc Sri Lanka Chapter" },
            { name: "Outstanding Affinity Group Award (Sectional Category)", recipient: "IEEE Sri Lanka Section Special Interest Group on Humanitarian Technology" }
        ]
    },
    {
        title: "Phase 02 - Special Activity Awards",
        awards: [
            { name: "Best Affinity Group Project Award (Section AG Category)", recipient: "IEEE StudPro" },
            { name: "Best Technical Chapter Project Award (Section Chapter)", recipient: "EMBS Axon" },
            { name: "Best Industry Collaborative Project Award (Section OU Category)", recipient: "IEEE LETs talk – Vision to Value" },
            { name: "Best Sectional Project Award", recipient: "IEEE SL SYWC 2025" }
        ]
    },
    {
        title: "Individual Volunteer Awards",
        awards: [
            { name: "Section Outstanding Student Branch Counselor Award", recipient: "Dr E Y A Charles – IEEE SB UoJ" },
            { name: "Section Outstanding Student Branch Chapter Advisor Award", recipient: "Prof. A. Ramanan – IEEE CIS SB Chapter UoJ" },
            { name: "Section Outstanding Student Branch WIE Affinity Group Advisor Award", recipient: "Dr Jeyakumar Samantha Tharani - IEEE WIE SB AG UoJ" },
            { name: "Section Outstanding Young Professionals Volunteer Award (Academician)", recipient: "Peshan Sampath" },
            { name: "Section Outstanding Young Professionals Volunteer Award (Industry Practitioner)", recipient: "Mohammed Jaseem" },
            { name: "Section Outstanding WIE Volunteer Award (Member Category)", recipient: "Abarnah Kirupananda" },
            { name: "Section Outstanding WIE Volunteer Award (Student Category)", recipient: "Nishadarie Bandara" },
            { name: "Section Outstanding Volunteer Award (Student Category)", recipient: "Vismini Amarasinha" }
        ]
    },
    {
        title: "External Recognitions",
        awards: [
            { name: "Outstanding Industry Partner", recipient: "IFS, Zone 24×7, Sri Lanka Technological Campus, WSO2" }
        ]
    }
];

export const PAST_AWARDS: Record<string, AwardCategory[]> = {
    "2025": AWARDS_2025_WINNERS,
    "2024": [
        {
            title: "Special Activities Awards",
            awards: [
                { name: "Best Affinity Group Project Award (Student AG)", recipient: "Eminence 4.0 – IEEE WIE University of Ruhuna" },
                { name: "Best Industry Collaborative Project Award (SB OU)", recipient: "IndSight – Informatics Institute of Technology" },
                { name: "Best Student Branch Project Award", recipient: "Power Up’23 - IEEE PES of SLIIT and University of Peradeniya" },
                { name: "Best Technical Chapter Project Award (Student Chapter)", recipient: "Sri Lanka Arduino Challenge – IEEE IES SLTC" },
                { name: "Special Recognition for Best Humanitarian Project", recipient: "Heenayata Sawiyak - IEEE Student Branch of USJ" }
            ]
        },
        {
            title: "Organizational Unit (OU) Awards",
            awards: [
                { name: "Outstanding Student Branch Award", recipient: "Informatics Institute of Technology" },
                { name: "Emerging Student Branch Award", recipient: "CINEC Campus" },
                { name: "Outstanding Chapter Award (Sectional)", recipient: "IEEE Computer Society Sri Lanka Chapter" },
                { name: "Outstanding Affinity Group Award (Sectional)", recipient: "IEEE Young Professionals Sri Lanka" },
                { name: "Outstanding Affinity Group (SB)", recipient: "IEEE WIE Student Branch Affinity Group of IIT" }
            ]
        },
        {
            title: "Individual Volunteer Awards",
            awards: [
                { name: "Section Outstanding Branch Counselor or Advisor Award", recipient: "Dr. Nirthika Rajendran" },
                { name: "Section Outstanding Volunteer Award (Student Category)", recipient: "Kulunu Weerasoory" },
                { name: "Section Outstanding WIE Volunteer Award (Student AG)", recipient: "Hiruni Hettiarachchi" },
                { name: "Section Outstanding WIE Volunteer Award (Section AG)", recipient: "Dr. Akila Wijethunge" },
                { name: "Section Outstanding YP Volunteer (Academician)", recipient: "Warunika Hippola" },
                { name: "Section Outstanding YP Volunteer (Industry)", recipient: "Tharaka Munasinghe" }
            ]
        }
    ],
    "2023": [
        {
            title: "Special Activities Awards",
            awards: [
                "Best Affinity Group Project Award (Section AG Category): Power Hour - IEEE WIE Sri Lanka",
                "Best Affinity Group Project Award (Student AG Category): Cypher - IEEE WIE KDU",
                "Best Industry Collaborative Project Award (SB OU Category): Rise Up Mora 2023 - IEEE SB UoM",
                "Best Sectional Project Award: IEEE Education Week Sri Lanka 2023",
                "Best Student Branch Project Award: MoraForesight 1.0 - IEEE SB UoM",
                "Best Technical Chapter Project Award (Student Chapter): Brainstorm 2023 - IEEE EMBS UoM",
                "Special Recognition for the Best Humanitarian Project: Walking Together - IEEE CS UoK"
            ]
        }
    ],
    "2022": [
        {
            title: "Special Activities Awards",
            awards: [
                "Best Sectional Project Award: IEEE SL SYW Congress 2022",
                "Best Student Branch Project Award: RevolUX - IEEE SB UCSC",
                "Best Affinity Group Project Award (Section AG Category): The Journey To Your Dream - IEEE SIGHT",
                "Best Technical Chapter Project Award (Section Chapter): BME Workshop Series - IEEE EMBS SL Chapter"
            ]
        }
    ],
    "2021": [
        {
            title: "Special Activities Awards",
            awards: [
                "Best Sectional Project Award: IEEE Techno Meetup Sri Lanka",
                "Best Student Branch Project Award: Rise Up Mora 2021",
                "Best Affinity Group Project Award (Section AG Category): AI – Driven Sri Lanka"
            ]
        }
    ]
};
