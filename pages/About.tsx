import React, { useEffect } from 'react';
import { Reveal } from '../components/Reveal';
import {
    Zap, Award, Users, Target, History, Globe,
    Mail, Phone, MapPin, ChevronRight, LayoutGrid,
    FileText
} from 'lucide-react';
import { useParams, Link } from 'react-router-dom';
import { MILESTONES, MISSION_VISION } from '../services/aboutData';

export const About: React.FC = () => {
    const { section } = useParams<{ section?: string }>();
    const activeSection = section || 'overview';

    // Navigation Items - ExCom moved to /governance
    const navItems = [
        { id: 'overview', label: 'Overview', icon: LayoutGrid },
        { id: 'mission-vision', label: 'Mission & Vision', icon: Target },
        { id: 'milestones', label: 'Milestones', icon: History },
        { id: 'contact', label: 'Contact Us', icon: Mail },
    ];

    const getTitle = () => {
        const item = navItems.find(i => i.id === activeSection);
        return item ? item.label : 'About Us';
    };

    return (
        <div className="min-h-screen pt-24 pb-20">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-12 gap-12">

                    {/* Sidebar Navigation */}
                    <div className="lg:col-span-3">
                        <div className="sticky top-32">
                            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6 px-4">About</h2>
                            <nav className="space-y-2">
                                {navItems.map((item) => {
                                    const Icon = item.icon;
                                    const isActive = activeSection === item.id;
                                    return (
                                        <Link
                                            key={item.id}
                                            to={`/about/${item.id}`}
                                            className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 group ${isActive
                                                ? 'bg-ieee-blue text-white shadow-lg shadow-ieee-blue/20'
                                                : 'text-slate-600 dark:text-slate-400 hover:bg-white dark:hover:bg-white/5 hover:text-slate-900 dark:hover:text-white'
                                                }`}
                                        >
                                            <Icon size={18} className={`${isActive ? 'text-white' : 'text-slate-400 group-hover:text-ieee-blue dark:group-hover:text-ieee-cyan'}`} />
                                            <span className="font-medium">{item.label}</span>
                                            {isActive && <ChevronRight size={16} className="ml-auto opacity-50" />}
                                        </Link>
                                    );
                                })}
                                {/* Link to Governance Section */}

                            </nav>
                        </div>
                    </div>

                    {/* Main Content Area */}
                    <div className="lg:col-span-9">
                        <Reveal>
                            <div className="mb-12">
                                <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 dark:text-white mb-4">
                                    {getTitle()}
                                </h1>
                                <div className="h-1.5 w-24 bg-gradient-to-r from-ieee-blue to-ieee-cyan rounded-full"></div>
                            </div>
                        </Reveal>

                        <div className="min-h-[500px]">
                            {/* OVERVIEW SECTION */}
                            {activeSection === 'overview' && (
                                <Reveal>
                                    <div className="space-y-12">
                                        <div className="prose prose-lg dark:prose-invert max-w-none">
                                            <p className="lead text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
                                                The IEEE Sri Lanka Section is the premier professional body for engineering and technology in Sri Lanka.
                                                Since 2003, we have acted as a bridge between the global IEEE network and the local technical community,
                                                fostering innovation and professional growth.
                                            </p>
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-white/5 shadow-sm">
                                                <div className="w-12 h-12 bg-amber-100 dark:bg-amber-500/10 rounded-2xl flex items-center justify-center text-amber-600 dark:text-amber-400 mb-6">
                                                    <Globe size={24} />
                                                </div>
                                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Global Reach</h3>
                                                <p className="text-slate-600 dark:text-slate-400">Part of Region 10 (Asia Pacific), connecting Sri Lankan professionals to the world's largest technical professional organization.</p>
                                            </div>
                                            <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-white/5 shadow-sm">
                                                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-600 dark:text-blue-400 mb-6">
                                                    <Users size={24} />
                                                </div>
                                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Vibrant Community</h3>
                                                <p className="text-slate-600 dark:text-slate-400">Home to thousands of student members, young professionals, and industry veterans driving technological advancement.</p>
                                            </div>
                                        </div>
                                    </div>
                                </Reveal>
                            )}

                            {/* MISSION & VISION */}
                            {activeSection === 'mission-vision' && (
                                <div className="grid gap-8">
                                    <Reveal>
                                        <div className="bg-white dark:bg-slate-900 p-10 rounded-[2rem] border border-slate-200 dark:border-white/5 shadow-xl relative overflow-hidden group">
                                            <div className="absolute top-0 right-0 w-32 h-32 bg-ieee-blue/5 rounded-full blur-3xl group-hover:bg-ieee-blue/10 transition-colors"></div>
                                            <div className="w-16 h-16 bg-ieee-blue rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg shadow-ieee-blue/20">
                                                <Zap size={32} />
                                            </div>
                                            <h3 className="text-sm font-bold uppercase tracking-widest text-ieee-blue mb-4">Our Vision</h3>
                                            <p className="text-2xl rc:text-3xl font-display font-medium text-slate-900 dark:text-white leading-relaxed">
                                                "{MISSION_VISION.vision}"
                                            </p>
                                        </div>
                                    </Reveal>
                                    <Reveal delay={100}>
                                        <div className="bg-white dark:bg-slate-900 p-10 rounded-[2rem] border border-slate-200 dark:border-white/5 shadow-xl relative overflow-hidden group">
                                            <div className="absolute top-0 right-0 w-32 h-32 bg-ieee-cyan/5 rounded-full blur-3xl group-hover:bg-ieee-cyan/10 transition-colors"></div>
                                            <div className="w-16 h-16 bg-ieee-cyan rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg shadow-ieee-cyan/20">
                                                <Award size={32} />
                                            </div>
                                            <h3 className="text-sm font-bold uppercase tracking-widest text-ieee-cyan mb-4">Our Mission</h3>
                                            <p className="text-2xl rc:text-3xl font-display font-medium text-slate-900 dark:text-white leading-relaxed">
                                                "{MISSION_VISION.mission}"
                                            </p>
                                        </div>
                                    </Reveal>
                                </div>
                            )}

                            {/* MILESTONES */}
                            {activeSection === 'milestones' && (
                                <div className="space-y-8 relative">
                                    <div className="absolute left-8 top-4 bottom-4 w-0.5 bg-slate-200 dark:bg-slate-800"></div>
                                    {MILESTONES.map((milestone, idx) => (
                                        <Reveal key={idx} delay={idx * 100}>
                                            <div className="relative pl-24">
                                                <div className="absolute left-0 top-0 w-16 h-16 bg-white dark:bg-slate-900 border-4 border-slate-100 dark:border-slate-800 rounded-2xl flex items-center justify-center z-10 shadow-sm">
                                                    <span className="font-bold text-slate-400 text-xs">{milestone.year}</span>
                                                </div>
                                                <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-100 dark:border-white/5 shadow-sm hover:translate-x-2 transition-transform duration-300">
                                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{milestone.title}</h3>
                                                    <p className="text-slate-600 dark:text-slate-400">{milestone.description}</p>
                                                </div>
                                            </div>
                                        </Reveal>
                                    ))}
                                </div>
                            )}

                            {/* CONTACT US */}
                            {activeSection === 'contact' && (
                                <Reveal>
                                    <div className="space-y-8">
                                        <div className="grid md:grid-cols-2 gap-8">
                                            <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-white/5">
                                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Get in Touch</h3>
                                                <div className="space-y-6">
                                                    <div className="flex items-start gap-4">
                                                        <div className="w-10 h-10 rounded-full bg-ieee-blue/10 flex items-center justify-center text-ieee-blue mt-1">
                                                            <MapPin size={18} />
                                                        </div>
                                                        <div>
                                                            <p className="font-bold text-slate-900 dark:text-white">IEEE Sri Lanka Section</p>
                                                            <p className="text-slate-500 dark:text-slate-400 mt-1">
                                                                University of Colombo School of Computing,<br />
                                                                Reid Avenue, Colombo 07,<br />
                                                                Sri Lanka.
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center gap-4">
                                                        <div className="w-10 h-10 rounded-full bg-ieee-blue/10 flex items-center justify-center text-ieee-blue">
                                                            <Mail size={18} />
                                                        </div>
                                                        <a href="mailto:info@ieee.lk" className="text-slate-600 dark:text-slate-300 hover:text-ieee-blue transition-colors">
                                                            info@ieee.lk
                                                        </a>
                                                    </div>
                                                    <div className="flex items-center gap-4">
                                                        <div className="w-10 h-10 rounded-full bg-ieee-blue/10 flex items-center justify-center text-ieee-blue">
                                                            <Globe size={18} />
                                                        </div>
                                                        <a href="https://ieee.lk" target="_blank" rel="noopener" className="text-slate-600 dark:text-slate-300 hover:text-ieee-blue transition-colors">
                                                            www.ieee.lk
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="bg-slate-100 dark:bg-white/5 rounded-3xl p-8 flex items-center justify-center text-center">
                                                <div>
                                                    <div className="w-16 h-16 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center text-ieee-blue mx-auto mb-4 shadow-sm">
                                                        <Phone size={24} />
                                                    </div>
                                                    <h3 className="font-bold text-slate-900 dark:text-white mb-2">Need Help?</h3>
                                                    <p className="text-slate-500 dark:text-slate-400 mb-6">Contact our secretary for any direct inquiries.</p>
                                                    <a href="mailto:secretary@ieee.lk" className="px-6 py-2 bg-ieee-blue text-white rounded-lg font-bold hover:bg-ieee-dark transition-colors">
                                                        Contact Secretary
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Reveal>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
