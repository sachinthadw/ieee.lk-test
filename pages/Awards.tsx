import React, { useState, useEffect } from 'react';
import { Reveal } from '../components/Reveal';
import { Trophy, ChevronDown, Calendar, Star, ExternalLink, ScrollText, Medal, Crown } from 'lucide-react';
import { AWARDS_NOMINATION_2025, PAST_AWARDS } from '../services/awardsData';
import { useParams, useNavigate } from 'react-router-dom';

export const Awards: React.FC = () => {
    const { year } = useParams<{ year?: string }>();
    const navigate = useNavigate();

    // "nominations" is the default view (no year param)
    // "winners" is the view when a year is present
    const activeTab = !year ? 'nominations' : 'winners';
    const currentViewYear = year || '2025';

    const handleTabChange = (tab: 'nominations' | 'winners') => {
        if (tab === 'nominations') {
            navigate('/awards');
        } else {
            navigate('/awards/2025');
        }
    };

    const handleYearChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        navigate(`/awards/${e.target.value}`);
    };

    return (
        <div className="min-h-screen">
            {/* Hero Section - Premium Gold/Dark Theme */}
            <section className="relative py-20 bg-slate-950 overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=2940&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 via-slate-950/80 to-slate-950"></div>

                {/* Gold Abstract Elements */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-yellow-500/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
                    <Reveal>
                        <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-gradient-to-r from-amber-400/10 to-yellow-400/10 border border-amber-500/30 text-amber-300 text-sm font-bold uppercase tracking-widest mb-8 backdrop-blur-md shadow-lg shadow-amber-900/20">
                            <Crown size={16} className="fill-current text-amber-400" />
                            <span>Celebrating Excellence</span>
                        </div>
                        <h1 className="text-5xl md:text-8xl font-display font-bold text-white mb-8 tracking-tight">
                            IEEE Sri Lanka Section <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-500 drop-shadow-2xl filter">
                                Awards & Recognition
                            </span>
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-light mb-12">
                            Honoring the visionaries and leaders who are shaping the future of technology in Sri Lanka.
                        </p>

                        {/* Tabs moved to Hero Section */}
                        <div className="inline-flex p-2 rounded-full bg-slate-900/50 backdrop-blur-xl border border-white/10 shadow-2xl mb-8">
                            <button
                                onClick={() => handleTabChange('nominations')}
                                className={`flex items-center gap-3 px-8 py-4 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300 ${activeTab === 'nominations'
                                    ? 'bg-gradient-to-r from-amber-400 to-yellow-500 text-slate-950 shadow-lg shadow-amber-500/20 scale-105'
                                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                                    }`}
                            >
                                <ScrollText size={18} />
                                Nominations
                            </button>
                            <button
                                onClick={() => handleTabChange('winners')}
                                className={`flex items-center gap-3 px-8 py-4 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300 ${activeTab === 'winners'
                                    ? 'bg-gradient-to-r from-amber-400 to-yellow-500 text-slate-950 shadow-lg shadow-amber-500/20 scale-105'
                                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                                    }`}
                            >
                                <Trophy size={18} />
                                Hall of Fame
                            </button>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* Content Section */}
            <section className="relative py-12 min-h-screen z-20">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="min-h-[400px]">
                        {activeTab === 'nominations' ? (
                            // NOMINATIONS VIEW
                            <div className="space-y-24 animate-fade-in">
                                {/* Guidelines Box - Premium Card */}
                                <Reveal>
                                    <div className="relative overflow-hidden bg-white/10 dark:bg-slate-900/30 rounded-[2.5rem] p-10 md:p-16 border border-slate-200 dark:border-amber-500/20 shadow-2xl shadow-slate-200/50 dark:shadow-amber-900/20 backdrop-blur-sm">
                                        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-gradient-to-br from-amber-200/20 to-yellow-500/20 rounded-full blur-3xl opacity-50"></div>

                                        <div className="relative grid md:grid-cols-2 gap-12 items-center">
                                            <div>
                                                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-600 dark:text-green-400 text-xs font-bold uppercase tracking-widest mb-6">
                                                    <span className="relative flex h-2.5 w-2.5">
                                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                                                    </span>
                                                    Status: Open for Applications
                                                </div>
                                                <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 dark:text-white mb-6">Phase II Nominations</h2>
                                                <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-8">
                                                    We invite you to nominate outstanding individuals and organizational units who have demonstrated exceptional dedication to the IEEE mission.
                                                </p>

                                                <div className="p-6 bg-slate-50 dark:bg-white/5 rounded-2xl border-l-4 border-amber-500 mb-8">
                                                    <p className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">Submission Period</p>
                                                    <p className="text-xl font-bold text-slate-900 dark:text-white font-mono">23rd Nov 2025 — 07th Dec 2025</p>
                                                </div>

                                                <div className="flex flex-wrap gap-4">
                                                    <a href="https://docs.google.com/document/d/1O85JxsftmCCHXsPZg4lC8qzegTVTk4jN/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-slate-900 dark:bg-amber-500 hover:bg-slate-800 dark:hover:bg-amber-400 text-white dark:text-slate-950 font-bold rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
                                                        Read Guidelines
                                                    </a>
                                                    <a href="https://forms.gle/MJj2oWTs8ZMHfqfBA" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-white dark:bg-transparent border-2 border-slate-200 dark:border-amber-500/30 text-slate-900 dark:text-white font-bold rounded-xl hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
                                                        Apply Now
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="hidden md:flex justify-center">
                                                <div className="relative">
                                                    <div className="absolute inset-0 bg-amber-500 blur-[80px] opacity-20"></div>
                                                    <div className="relative bg-gradient-to-br from-amber-100 to-yellow-200 dark:from-amber-900/40 dark:to-yellow-900/40 p-12 rounded-[3rem] border border-amber-200 dark:border-amber-500/30 rotate-3 shadow-2xl">
                                                        <Trophy className="w-40 h-40 text-amber-600 dark:text-amber-400 drop-shadow-md" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Reveal>

                                {/* Nomination Categories */}
                                <div className="space-y-20">
                                    <div className="text-center max-w-3xl mx-auto">
                                        <h3 className="text-3xl font-display font-bold text-slate-900 dark:text-white mb-4">Award Categories</h3>
                                        <div className="h-1 w-24 bg-gradient-to-r from-amber-400 to-yellow-600 mx-auto rounded-full mb-6"></div>
                                        <p className="text-slate-500 dark:text-slate-400">Explore the various categories open for nomination in Phase II.</p>
                                    </div>

                                    {AWARDS_NOMINATION_2025.map((category, idx) => (
                                        <Reveal key={idx} delay={idx * 100}>
                                            <div className="relative">
                                                <h4 className="flex items-center gap-4 text-2xl font-display font-bold text-slate-900 dark:text-white mb-8">
                                                    <div className="p-3 rounded-xl bg-amber-100 dark:bg-amber-500/10 text-amber-600 dark:text-amber-400">
                                                        <Medal size={28} />
                                                    </div>
                                                    {category.title}
                                                </h4>

                                                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                                    {category.awards.map((award, i) => {
                                                        const item = typeof award === 'string' ? { name: award } : award;
                                                        return (
                                                            <div
                                                                key={i}
                                                                className="relative group bg-white/10 dark:bg-slate-900/20 backdrop-blur-sm p-8 rounded-2xl border border-slate-100 dark:border-slate-800 hover:border-amber-200 dark:hover:border-amber-500/30 shadow-sm hover:shadow-xl hover:shadow-amber-500/5 transition-all duration-300 overflow-hidden"
                                                            >
                                                                <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-4 group-hover:translate-x-0 duration-300">
                                                                    <Star className="text-amber-400 fill-current" size={24} />
                                                                </div>
                                                                <h5 className="font-bold text-slate-800 dark:text-slate-200 leading-snug group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors pr-6">
                                                                    {item.name}
                                                                </h5>
                                                            </div>
                                                        );
                                                    })}
                                                </div>
                                            </div>
                                        </Reveal>
                                    ))}
                                </div>

                                <div className="grid md:grid-cols-2 gap-8">
                                    <Reveal delay={200}>
                                        <div className="h-full bg-white/10 dark:bg-slate-900/20 backdrop-blur-sm p-8 rounded-3xl border border-slate-200 dark:border-slate-800">
                                            <h4 className="text-xl font-display font-bold text-slate-900 dark:text-white mb-4">Judging Committee</h4>
                                            <p className="text-slate-600 dark:text-slate-400 mb-4">
                                                The Judging Committee will include members from the IEEE Sri Lanka Section Executive Committee and prestigious IEEE Sri Lanka Section Volunteers. The decision of the judging committee shall be final and cannot be challenged.
                                            </p>
                                            <div className="inline-block px-4 py-2 bg-amber-500/10 rounded-lg border border-amber-500/20 text-amber-600 dark:text-amber-400 text-sm font-bold">
                                                Judging Period: 10th - 31st Dec 2025
                                            </div>
                                        </div>
                                    </Reveal>

                                    <Reveal delay={300}>
                                        <div className="h-full bg-white/10 dark:bg-slate-900/20 backdrop-blur-sm p-8 rounded-3xl border border-slate-200 dark:border-slate-800">
                                            <h4 className="text-xl font-display font-bold text-slate-900 dark:text-white mb-4">Award Instrument</h4>
                                            <p className="text-slate-600 dark:text-slate-400 mb-8">
                                                A certificate & a token of appreciation will be presented to the winners of each category.
                                            </p>
                                            <h4 className="text-xl font-display font-bold text-slate-900 dark:text-white mb-4">Presentation</h4>
                                            <p className="text-slate-600 dark:text-slate-400">
                                                The awards will be presented at the IEEE Sri Lanka Section Annual General Meeting 2026 held in January 2026.
                                            </p>
                                        </div>
                                    </Reveal>
                                </div>

                                <Reveal delay={400}>
                                    <div className="bg-white/10 dark:bg-slate-900/20 backdrop-blur-sm p-8 rounded-3xl border border-slate-200 dark:border-slate-800">
                                        <h4 className="text-xl font-display font-bold text-slate-900 dark:text-white mb-4">Publicity Rights & Record</h4>
                                        <p className="text-slate-600 dark:text-slate-400 mb-4">
                                            The Awards Committee will maintain a record of award recipients on the IEEE Sri Lanka Section website.
                                        </p>
                                        <p className="text-slate-600 dark:text-slate-400 text-sm">
                                            Information provided by the nominators for the IEEE Sri Lanka Section awards may be used for promotional and/or publicity purposes on IEEE websites, Facebook, Twitter & other social media handles, printed materials and press releases etc. By submitting a nomination, nominators and nominees agree to the release of submitted information.
                                        </p>
                                    </div>
                                </Reveal>

                                <Reveal delay={500}>
                                    <div className="bg-slate-900 dark:bg-slate-950 p-10 rounded-[2.5rem] border border-slate-800 relative overflow-hidden text-center">
                                        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
                                        <div className="relative z-10">
                                            <h3 className="text-2xl font-display font-bold text-white mb-8">Questions? Contact Us</h3>
                                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                                                <div>
                                                    <p className="text-amber-500 font-bold text-sm uppercase tracking-wider mb-1">Chair</p>
                                                    <p className="text-white font-bold">Mr. Dhammika Marasinghe</p>
                                                </div>
                                                <div>
                                                    <p className="text-amber-500 font-bold text-sm uppercase tracking-wider mb-1">Member</p>
                                                    <p className="text-white font-bold">Prof. Lasith Gunawardena</p>
                                                </div>
                                                <div>
                                                    <p className="text-amber-500 font-bold text-sm uppercase tracking-wider mb-1">Student Activities Chair</p>
                                                    <p className="text-white font-bold">Manodya Nabadawewa</p>
                                                </div>
                                                <div>
                                                    <p className="text-amber-500 font-bold text-sm uppercase tracking-wider mb-1">SAC Vice-Chair (AR)</p>
                                                    <p className="text-white font-bold">Amirah Rasmin</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Reveal>
                            </div>
                        ) : (
                            // HALL OF FAME VIEW
                            <div className="space-y-16 animate-fade-in">
                                <div className="flex flex-col md:flex-row justify-between items-center bg-slate-900/90 backdrop-blur-sm text-white rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
                                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                                    <div className="absolute right-0 bottom-0 w-64 h-64 bg-amber-500 rounded-full blur-[100px] opacity-20"></div>

                                    <div className="relative z-10 mb-8 md:mb-0">
                                        <div className="text-amber-400 font-bold tracking-widest uppercase text-sm mb-2">IEEE Sri Lanka Section</div>
                                        <h2 className="text-4xl md:text-5xl font-display font-bold">Hall of Fame {year}</h2>
                                    </div>

                                    <div className="relative z-10">
                                        <div className="relative group">
                                            <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-yellow-600 rounded-xl blur opacity-25 group-hover:opacity-50 transition-opacity"></div>
                                            <select
                                                value={currentViewYear}
                                                onChange={handleYearChange}
                                                className="relative appearance-none bg-slate-800 border border-slate-700 rounded-xl pl-6 pr-12 py-4 font-bold text-white focus:outline-none focus:border-amber-500 cursor-pointer text-lg min-w-[200px]"
                                            >
                                                <option value="2025">Year 2025</option>
                                                <option value="2024">Year 2024</option>
                                                <option value="2023">Year 2023</option>
                                                <option value="2022">Year 2022</option>
                                                <option value="2021">Year 2021</option>
                                            </select>
                                            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400" size={20} />
                                        </div>
                                    </div>
                                </div>

                                {PAST_AWARDS[currentViewYear] ? (
                                    <div className="space-y-20">
                                        {PAST_AWARDS[currentViewYear].map((category, idx) => (
                                            <Reveal key={idx} delay={idx * 100}>
                                                <div className="relative">
                                                    {/* Category Header */}
                                                    <div className="flex items-center gap-4 mb-10">
                                                        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-700 to-transparent"></div>
                                                        <h3 className="text-2xl font-display font-bold text-slate-900 dark:text-white px-4 py-2 border border-slate-200 dark:border-white/10 rounded-full bg-white dark:bg-slate-900">
                                                            {category.title}
                                                        </h3>
                                                        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-700 to-transparent"></div>
                                                    </div>

                                                    <div className="grid gap-6">
                                                        {category.awards.map((award, i) => {
                                                            const item = typeof award === 'string'
                                                                ? { name: award.split(':')[0], recipient: award.split(':')[1] || '' }
                                                                : award;

                                                            return (
                                                                <div key={i} className="group relative bg-white/10 dark:bg-slate-900/20 backdrop-blur-sm p-8 rounded-2xl border border-slate-100 dark:border-white/5 shadow-sm hover:shadow-xl hover:shadow-amber-500/5 transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                                                                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-amber-300 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>

                                                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                                                                        <div className="md:pr-8">
                                                                            <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                                                                                {item.name}
                                                                            </h4>
                                                                            <div className="w-12 h-0.5 bg-amber-200 dark:bg-amber-500/30 rounded-full"></div>
                                                                        </div>

                                                                        {item.recipient && (
                                                                            <div className="shrink-0">
                                                                                <div className="inline-flex items-center gap-3 px-6 py-3 bg-slate-50 dark:bg-white/5 rounded-xl border border-slate-100 dark:border-white/5 group-hover:bg-amber-50 dark:group-hover:bg-amber-500/10 group-hover:border-amber-200 dark:group-hover:border-amber-500/20 transition-all">
                                                                                    <Trophy size={16} className="text-amber-500" />
                                                                                    <span className="font-bold text-slate-700 dark:text-slate-200">
                                                                                        {item.recipient}
                                                                                    </span>
                                                                                </div>
                                                                            </div>
                                                                        )}
                                                                    </div>
                                                                </div>
                                                            );
                                                        })}
                                                    </div>
                                                </div>
                                            </Reveal>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="text-center py-32">
                                        <div className="inline-block p-6 rounded-full bg-slate-100 dark:bg-white/5 mb-6">
                                            <Trophy size={48} className="text-slate-300 dark:text-slate-600" />
                                        </div>
                                        <h3 className="text-xl font-bold text-slate-500 dark:text-slate-400">Archives are being updated for {currentViewYear}</h3>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
};
