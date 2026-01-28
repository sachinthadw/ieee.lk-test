import React, { useState } from 'react';
import { Reveal } from '../components/Reveal';
import { Users, Globe, BookOpen, Briefcase, Award, Zap, ChevronRight, CheckCircle2, Heart, GraduationCap, LayoutGrid } from 'lucide-react';

export const Membership: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'student' | 'professional' | 'other'>('student');

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative py-24 bg-slate-900 overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2868&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
                    <Reveal>
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-ieee-blue/20 border border-ieee-blue/30 text-ieee-cyan text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-md">
                            <Globe size={14} className="fill-current" /> Global Community
                        </div>
                        <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6">
                            Join the World's Largest <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-ieee-blue to-ieee-cyan">Technical Professional Organization</span>
                        </h1>
                        <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-light mb-10">
                            Connect with over 450,000 technology and engineering professionals. Access essential technical information, networking opportunities, and career development tools.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="https://www.ieee.org/membership/join/index.html" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-ieee-blue hover:bg-white hover:text-ieee-blue text-white font-bold rounded-full transition-all shadow-lg shadow-ieee-blue/30 transform hover:scale-105">
                                Join IEEE Now
                            </a>
                            <a href="https://www.ieee.org/membership/renew/index.html" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-transparent border border-white/30 text-white font-bold rounded-full hover:bg-white/10 transition-all backdrop-blur-sm">
                                Renew Membership
                            </a>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* Benefits Section - Standardized Grid */}
            <section className="py-24 max-w-7xl mx-auto px-6">
                <Reveal>
                    <div className="text-center mb-16">
                        <span className="text-ieee-blue dark:text-ieee-cyan font-bold tracking-widest uppercase text-xs mb-4 block">Why Join?</span>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 dark:text-white mb-6">Exclusive Member Benefits</h2>
                        <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-lg">
                            Unlock a suite of resources designed to accelerate your career and connect you with global experts.
                        </p>
                    </div>
                </Reveal>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        {
                            icon: BookOpen,
                            title: "Knowledge",
                            desc: "Get full access to the IEEE Spectrum magazine and significant discounts on the IEEE Xplore Digital Library.",
                            color: "text-blue-500",
                            bg: "bg-blue-500/10",
                            border: "group-hover:border-blue-500/50"
                        },
                        {
                            icon: Users,
                            title: "Community",
                            desc: "Connect with local Sections and access IEEE Collabratec to network with experts worldwide.",
                            color: "text-purple-500",
                            bg: "bg-purple-500/10",
                            border: "group-hover:border-purple-500/50"
                        },
                        {
                            icon: Briefcase,
                            title: "Profession",
                            desc: "Access the IEEE Job Site, Mentoring Programs, and Continuing Education resources for career growth.",
                            color: "text-green-500",
                            bg: "bg-green-500/10",
                            border: "group-hover:border-green-500/50"
                        },
                        {
                            icon: Zap,
                            title: "Discounts",
                            desc: "Enjoy reduced registration fees for IEEE Conferences, plus member-only rates on insurance and technology.",
                            color: "text-yellow-500",
                            bg: "bg-yellow-500/10",
                            border: "group-hover:border-yellow-500/50"
                        }
                    ].map((item, i) => (
                        <Reveal key={i} delay={i * 100} className="h-full">
                            <div className={`h-full p-8 rounded-[2rem] bg-white dark:bg-slate-800 border border-slate-200 dark:border-white/5 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group ${item.border}`}>
                                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${item.bg} ${item.color} group-hover:scale-110 transition-transform`}>
                                    <item.icon size={28} />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{item.title}</h3>
                                <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-sm">
                                    {item.desc}
                                </p>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </section>

            {/* Membership Grades - Tabbed Interface */}
            <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
                <div className="max-w-7xl mx-auto px-6">
                    <Reveal>
                        <div className="mb-12 text-center">
                            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 dark:text-white mb-6">Membership Grades</h2>
                            <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto mb-8">
                                Choose the membership that matches your professional journey.
                            </p>

                            {/* Tabs */}
                            <div className="inline-flex p-1 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 shadow-sm">
                                {[
                                    { id: 'student', label: 'Students', icon: GraduationCap },
                                    { id: 'professional', label: 'Professionals', icon: Briefcase },
                                    { id: 'other', label: 'Special & Affiliates', icon: LayoutGrid },
                                ].map((tab) => (
                                    <button
                                        key={tab.id}
                                        onClick={() => setActiveTab(tab.id as any)}
                                        className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold transition-all ${activeTab === tab.id
                                            ? 'bg-ieee-blue text-white shadow-md'
                                            : 'text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-white/5'
                                            }`}
                                    >
                                        <tab.icon size={16} />
                                        {tab.label}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </Reveal>

                    <div className="min-h-[400px]">
                        {activeTab === 'student' && (
                            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto animate-fade-in">
                                {[
                                    {
                                        grade: "Student Member",
                                        desc: "For undergraduate or graduate students taking at least 50% of a normal full-time course of study.",
                                        price: "$14 - $27",
                                        highlight: true
                                    },
                                    {
                                        grade: "Graduate Student Member",
                                        desc: "For those who are 50% full-time graduate students.",
                                        price: "$14 - $27",
                                        highlight: false
                                    }
                                ].map((item, i) => (
                                    <GradeCard key={i} item={item} />
                                ))}
                            </div>
                        )}

                        {activeTab === 'professional' && (
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto animate-fade-in">
                                {[
                                    {
                                        grade: "Member",
                                        desc: "For professional engineers, scientists, and technologists.",
                                        price: "$176 - $236",
                                        highlight: true
                                    },
                                    {
                                        grade: "Senior Member",
                                        desc: "The highest grade for which application may be made. Requires experience and references.",
                                        price: "Recognition",
                                        highlight: false
                                    },
                                    {
                                        grade: "Life Member",
                                        desc: "Special status for members based on age and years of membership.",
                                        price: "Waived Dues",
                                        highlight: false
                                    }
                                ].map((item, i) => (
                                    <GradeCard key={i} item={item} />
                                ))}
                            </div>
                        )}

                        {activeTab === 'other' && (
                            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto animate-fade-in">
                                {[
                                    {
                                        grade: "Society Affiliate",
                                        desc: "Join a specific technical society (e.g., Computer Society) without full IEEE membership.",
                                        price: "Varies",
                                        highlight: false
                                    },
                                    {
                                        grade: "e-Membership",
                                        desc: "Reduced-cost option for developing nations. Digital-only access (no paper publications).",
                                        price: "~$88",
                                        highlight: true
                                    }
                                ].map((item, i) => (
                                    <GradeCard key={i} item={item} />
                                ))}
                            </div>
                        )}
                    </div>

                    <Reveal delay={300}>
                        <div className="mt-12 text-center">
                            <p className="text-sm text-slate-500 dark:text-slate-400">
                                * Fees are estimated and vary by Region. <br /> New members joining between 1 March and 15 August usually pay half-year dues.
                            </p>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* Volunteering */}
            <section className="py-24 max-w-7xl mx-auto px-6">
                <Reveal>
                    <div className="bg-slate-900 dark:bg-white/5 rounded-[3rem] p-8 md:p-16 relative overflow-hidden text-center md:text-left">
                        {/* Decorative blobs */}
                        <div className="absolute top-0 right-0 w-96 h-96 bg-ieee-blue/20 rounded-full blur-3xl -mr-20 -mt-20"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-ieee-cyan/20 rounded-full blur-3xl -ml-20 -mb-20"></div>

                        <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold uppercase tracking-widest mb-6">
                                    <Heart size={12} className="fill-current text-red-500" /> Give Back
                                </div>
                                <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">Become a Volunteer</h2>
                                <p className="text-lg text-slate-300 leading-relaxed mb-8">
                                    Volunteering is a core part of the IEEE experience. Develop leadership skills, organize conferences, review papers, or mentor the next generation.
                                </p>

                                <ul className="space-y-3 mb-10 text-slate-300">
                                    <li className="flex items-center gap-3"><ChevronRight size={16} className="text-ieee-cyan" /> Local Leadership (Section/Student Branch officers)</li>
                                    <li className="flex items-center gap-3"><ChevronRight size={16} className="text-ieee-cyan" /> Conference Organization & Program Committees</li>
                                    <li className="flex items-center gap-3"><ChevronRight size={16} className="text-ieee-cyan" /> Standards Development Groups</li>
                                    <li className="flex items-center gap-3"><ChevronRight size={16} className="text-ieee-cyan" /> STEM Outreach & Mentoring</li>
                                </ul>

                                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                                    <a href="https://volunteer.ieee.org" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-white text-slate-900 font-bold rounded-xl hover:bg-slate-100 transition-colors">
                                        Find Opportunities
                                    </a>
                                </div>
                            </div>

                            <div className="hidden md:block">
                                {/* Visual representation */}
                                <div className="grid grid-cols-2 gap-4 opacity-80">
                                    <div className="space-y-4 translate-y-8">
                                        <div className="p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10">
                                            <h4 className="font-bold text-white mb-1">Leadership</h4>
                                            <p className="text-xs text-slate-400">Lead local initiatives</p>
                                        </div>
                                        <div className="p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10">
                                            <h4 className="font-bold text-white mb-1">Impact</h4>
                                            <p className="text-xs text-slate-400">Shape the future</p>
                                        </div>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10">
                                            <h4 className="font-bold text-white mb-1">Network</h4>
                                            <p className="text-xs text-slate-400">Connect globally</p>
                                        </div>
                                        <div className="p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10">
                                            <h4 className="font-bold text-white mb-1">Mentorship</h4>
                                            <p className="text-xs text-slate-400">Guide others</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Reveal>
            </section>
        </div>
    );
};

interface GradeItem {
    grade: string;
    desc: string;
    price: string;
    highlight: boolean;
}

const GradeCard: React.FC<{ item: GradeItem }> = ({ item }) => (
    <div className={`h-full flex flex-col p-8 rounded-3xl border transition-all duration-300 group hover:-translate-y-2 hover:shadow-xl bg-white dark:bg-slate-800 ${item.highlight
        ? 'border-ieee-blue/50 dark:border-ieee-cyan/50 shadow-lg shadow-ieee-blue/5 dark:shadow-ieee-cyan/5'
        : 'border-slate-100 dark:border-white/5 hover:border-ieee-blue/30 dark:hover:border-ieee-cyan/30'
        }`}>
        <div className="flex items-start justify-between mb-4">
            <div className="p-3 bg-ieee-blue/10 dark:bg-white/10 rounded-xl text-ieee-blue dark:text-white group-hover:bg-ieee-blue group-hover:text-white transition-colors">
                <Award size={24} />
            </div>
            {item.highlight && (
                <span className="px-3 py-1 bg-ieee-blue text-white text-[10px] font-bold uppercase tracking-widest rounded-full">
                    Popular
                </span>
            )}
        </div>

        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{item.grade}</h3>
        <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6 flex-grow">
            {item.desc}
        </p>

        <div className="pt-6 border-t border-slate-100 dark:border-white/10">
            <div className="flex items-center justify-between">
                <div>
                    <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Estimated Cost</p>
                    <p className="text-lg font-bold text-slate-900 dark:text-white">{item.price}</p>
                </div>
                <CheckCircle2 size={20} className="text-ieee-blue dark:text-ieee-cyan opacity-50 group-hover:opacity-100 transition-opacity" />
            </div>
        </div>
    </div>
);
