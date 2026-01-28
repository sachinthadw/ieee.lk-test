
export interface PolicyItem {
    id: string;
    title: string;
    content: string; // Markdown or HTML string
}

export const BYLAWS_DATA: PolicyItem[] = [
    {
        id: "article-1",
        title: "Article I: Name and Territory",
        content: `
            <p><strong>Sec. 1.</strong> This organization shall be known as the IEEE Sri Lanka Section, hereinafter referred to as the IEEE-SL section.</p>
            <p><strong>Sec. 2.</strong> The territory of the IEEE-SL section shall be the Democratic Socialist Republic of Sri Lanka, as approved by the MGA Board.</p>
        `
    },
    {
        id: "article-2",
        title: "Article II: Officers",
        content: `
            <p><strong>Sec. 1.</strong> The elected executive officers of the Section shall be the Chair, Vice Chair, Secretary, Treasurer, Assistant Secretary, Assistant Treasurer and Editor. The offices of the Secretary and Treasurer may be combined.</p>
            <p><strong>Sec. 2.</strong> The terms of office of the elected officers shall be for a period of one year.</p>
            <p><strong>Sec. 3.</strong> The terms of office will ordinarily be from January 1st to December 31st. Outgoing officers shall continue until their successors are duly appointed or take office.</p>
        `
    },
    {
        id: "article-3",
        title: "Article III: Standing Committees",
        content: `
            <p><strong>Sec. 1.</strong> The Standing Committees of the Section may include the following:</p>
            <ul class="list-disc pl-5 space-y-2 mt-2">
                <li>Membership Development</li>
                <li>Professional Activities</li>
                <li>Industry Relations</li>
                <li>Student Activities</li>
                <li>Educational Activities</li>
                <li>Awards and Recognition</li>
                <li>Editorial Activities</li>
                <li>Electronic Communications</li>
                <li>Chapter/Sub-section Coordination</li>
            </ul>
        `
    },
    {
        id: "article-4",
        title: "Article IV: Management",
        content: `
            <p><strong>Sec. 1.</strong> The management of the IEEE-SL section shall be by the Section Executive Committee which shall consist of the elected officers, the Past Section Chair and the appointed members.</p>
            <p><strong>Sec. 2.</strong> A majority of the Section Executive Committee shall constitute a quorum.</p>
        `
    },
    {
        id: "article-5",
        title: "Article V: Nomination and Election of Officers",
        content: `
            <p><strong>Sec. 1.</strong> A Section Election Committee consisting of five members who are not officers of the section shall be appointed by the Section Chair.</p>
            <p><strong>Sec. 2.</strong> The Chair of the Section Election Committee shall place a call for nominations for all vacant positions in the upcoming term.</p>
        `
    },
    {
        id: "article-6",
        title: "Article VI: Business Meetings",
        content: `
            <p><strong>Sec. 1.</strong> In order to transact business at a Section meeting (AGM), at least 25 or 20% of section membership must be present to constitute a quorum.</p>
        `
    },
    {
        id: "article-7",
        title: "Article VII: Finances",
        content: `
            <p><strong>Sec. 1.</strong> The Section may conduct its finances in any manner permitted by the IEEE Constitution and Bylaws.</p>
            <p><strong>Sec. 2.</strong> The fiscal year of the Section shall be January 1 – December 31.</p>
        `
    },
    {
        id: "article-8",
        title: "Article VIII: Amendments",
        content: `
            <p><strong>Sec. 1.</strong> Proposals for amendments to these Bylaws may originate in the Section Executive Committee or by a petition signed by 20% voting members.</p>
        `
    }
];
