import React, { useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { CommitteeGrid } from '../components/CommitteeGrid';
import { EXCOM_DATA, COMMITTEE_DATA } from '../services/governanceData';
import { Reveal } from '../components/Reveal';
import { ChevronDown, Users, Calendar, GraduationCap, BookOpen } from 'lucide-react';

export const Governance: React.FC = () => {
    const { year, slug } = useParams<{ year?: string; slug?: string }>();
    const navigate = useNavigate();
    const location = useLocation();

    // Determine context (ExCom vs Standing Committee)
    const isStandingCommittee = location.pathname.includes('standing-committee');

    // Default to current year if not specified

    // Default to current year if not specified
    const currentYear = year || '2026';

    // Get Data based on context
    let activeData: any = [];
    let title = "";

    if (isStandingCommittee) {
        // Handle Standing Committees (SLSAC, Editorial, etc.)
        const committeeSlug = slug || 'slsac'; // Default fallback
        activeData = COMMITTEE_DATA[committeeSlug]?.[currentYear] || [];

        // Title logic handled by tabs mainly, but fallback here
        title = "Standing Committees";
    } else {
        // Handle Executive Committee
        activeData = EXCOM_DATA[currentYear] || [];
        title = "Executive Committee";
    }

    const handleYearChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newYear = e.target.value;
        if (isStandingCommittee) {
            navigate(`/governance/standing-committee/${slug || 'slsac'}/${newYear}`);
        } else {
            navigate(`/governance/executive-committee/${newYear}`);
        }
    };

    const handleTabChange = (newSlug: string) => {
        navigate(`/governance/standing-committee/${newSlug}/${currentYear}`);
    }

    return (
        <div className="min-h-screen pt-32 pb-20">
            <div className="max-w-7xl mx-auto px-6">

                {/* Header with Year Selector */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                    <Reveal>
                        <div>
                            <div className="flex items-center gap-2 text-ieee-blue dark:text-ieee-cyan font-bold uppercase tracking-widest text-sm mb-3">
                                <Users size={16} />
                                <span>Governance Structure</span>
                            </div>
                            <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 dark:text-white">
                                {isStandingCommittee ? 'Standing Committees' : 'Executive Committee'}
                            </h1>
                        </div>
                    </Reveal>

                    <Reveal delay={100}>
                        <div className="relative z-20">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-500">
                                <Calendar size={18} />
                            </div>
                            <select
                                value={currentYear}
                                onChange={handleYearChange}
                                className="appearance-none bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 rounded-xl py-3 pl-12 pr-12 font-bold text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-ieee-blue shadow-lg shadow-slate-200/50 dark:shadow-none min-w-[180px]"
                            >
                                <option value="2026">Term 2026</option>
                                <option value="2025">Term 2025</option>
                                <option value="2024">Term 2024</option>
                                <option value="2023">Term 2023</option>
                                <option value="2022">Term 2022</option>
                                <option value="2021">Term 2021</option>
                            </select>
                            <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none text-slate-500">
                                <ChevronDown size={18} />
                            </div>
                        </div>
                    </Reveal>
                </div>

                {/* Tabs for Standing Committees (Pill Switch Design) */}
                {isStandingCommittee && (
                    <Reveal delay={150}>
                        <div className="flex justify-center mb-12">
                            <div className="inline-flex p-1 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 shadow-sm">
                                {[
                                    { id: 'slsac', label: 'Student Activities', icon: GraduationCap },
                                    { id: 'editorial', label: 'Editorial', icon: BookOpen }
                                ].map((tab) => {
                                    const isActive = (slug || 'slsac') === tab.id;
                                    return (
                                        <button
                                            key={tab.id}
                                            onClick={() => handleTabChange(tab.id)}
                                            className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold transition-all ${isActive
                                                ? 'bg-ieee-blue text-white shadow-md'
                                                : 'text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-white/5'
                                                }`}
                                        >
                                            <tab.icon size={16} />
                                            {tab.label}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                    </Reveal>
                )}

                {/* Content Grid */}
                <CommitteeGrid members={activeData} />
            </div>
        </div>
    );
};
