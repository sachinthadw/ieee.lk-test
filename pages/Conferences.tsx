import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Reveal } from '../components/Reveal';
import { BookOpen, Calendar, Clock, Download, ExternalLink, MapPin, Tag, ArrowRight } from 'lucide-react';
import { CONFERENCE_GUIDELINES, UPCOMING_CONFERENCES, PAST_CONFERENCES_BY_YEAR } from '../services/conferenceData';
import { FlipBook } from '../components/FlipBook';

export const Conferences: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const pathname = location.pathname;

    // Tabs Configuration
    const tabs = [
        { id: 'guidelines', label: 'Guidelines', path: '/conference-guidelines', icon: BookOpen },
        { id: 'upcoming', label: 'Upcoming', path: '/upcoming-conferences', icon: Calendar },
        { id: 'past', label: 'Past', path: '/past-conferences', icon: Clock },
    ];

    // Determine active tab based on path
    const activeTab = tabs.find(t => pathname.includes(t.path))?.id || 'upcoming';

    const handleTabChange = (path: string) => {
        navigate(path);
    };

    return (
        <div className="min-h-screen pt-32 pb-20">
            <div className="max-w-7xl mx-auto px-6">

                {/* Header */}
                <Reveal>
                    <div className="mb-12 text-center">
                        <div className="flex items-center justify-center gap-2 text-ieee-blue dark:text-ieee-cyan font-bold uppercase tracking-widest text-sm mb-3">
                            <Calendar size={16} />
                            <span>IEEE Sri Lanka Section</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 dark:text-white mb-6">
                            Professional Conferences
                        </h1>
                        <p className="max-w-2xl mx-auto text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                            Explore our premier technical forums, research gatherings, and access official guidelines for conference organization.
                        </p>
                    </div>
                </Reveal>

                {/* Tabs (Pill Switch) */}
                <Reveal delay={100}>
                    <div className="flex justify-center mb-16">
                        <div className="inline-flex p-1 rounded-2xl bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-white/10 shadow-sm backdrop-blur-xl">
                            {tabs.map((tab) => {
                                const isActive = activeTab === tab.id;
                                return (
                                    <button
                                        key={tab.id}
                                        onClick={() => handleTabChange(tab.path)}
                                        className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold transition-all duration-300 ${isActive
                                                ? 'bg-ieee-blue text-white shadow-md'
                                                : 'text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-white/5 hover:text-ieee-blue dark:hover:text-white'
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

                {/* Content Views */}
                <div className="min-h-[400px]">
                    {activeTab === 'guidelines' && <GuidelinesView />}
                    {activeTab === 'upcoming' && <UpcomingView />}
                    {activeTab === 'past' && <PastView />}
                </div>

            </div>
        </div>
    );
};

// Sub-components for specific views

const GuidelinesView: React.FC = () => {
    return (
        <Reveal>
            <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">
                {/* 3D FlipBook */}
                <div className="flex-1 flex justify-center w-full max-w-md">
                    <FlipBook
                        title={CONFERENCE_GUIDELINES.title}
                        pdfLink={CONFERENCE_GUIDELINES.downloadLink}
                    />
                </div>

                {/* Content */}
                <div className="flex-1 max-w-xl text-center lg:text-left">
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
                        {CONFERENCE_GUIDELINES.title}
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8 text-lg">
                        {CONFERENCE_GUIDELINES.description}
                    </p>

                    <a
                        href={CONFERENCE_GUIDELINES.downloadLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 px-8 py-4 bg-ieee-blue text-white rounded-xl font-bold hover:bg-ieee-dark transition-all hover:scale-105 shadow-xl shadow-ieee-blue/20"
                    >
                        <Download size={20} />
                        Download PDF
                    </a>
                </div>
            </div>
        </Reveal>
    );
};

const UpcomingView: React.FC = () => {
    const conferences = UPCOMING_CONFERENCES;

    return (
        <div className="grid gap-8">
            {conferences.length > 0 ? (
                conferences.map((conf, index) => (
                    <Reveal key={index} delay={index * 100}>
                        <div className="group relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 rounded-3xl p-6 md:p-8 shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden">
                            {/* Decorative Gradient Blob */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-ieee-blue/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-ieee-blue/10 transition-colors"></div>

                            <div className="relative flex flex-col md:flex-row gap-8 items-stretch">
                                {/* Visual Section: Logo & Date Highlight */}
                                <div className="shrink-0 flex flex-col gap-4 w-full md:w-auto">
                                    {/* Logo Box */}
                                    <div className="w-full md:w-40 aspect-square rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 flex items-center justify-center p-4 shadow-inner">
                                        <img
                                            src={conf.logo}
                                            alt={`${conf.title} Logo`}
                                            className="w-full h-full object-contain opacity-90 group-hover:scale-110 transition-transform duration-500"
                                        />
                                    </div>

                                    {/* Date Highlight Box */}
                                    {conf.startDate && conf.endDate && (
                                        <div className="flex flex-col rounded-xl bg-ieee-blue/5 border border-ieee-blue/10 p-4 text-center">
                                            <span className="text-xs uppercase tracking-widest font-bold text-slate-500 dark:text-slate-400 mb-1">Event Dates</span>
                                            <div className="flex items-center justify-center gap-2 text-ieee-blue dark:text-ieee-cyan font-bold">
                                                <span>{conf.startDate}</span>
                                                <ArrowRight size={14} className="opacity-50" />
                                                <span>{conf.endDate}</span>
                                            </div>
                                            <span className="text-xs font-bold text-slate-400 mt-1">{conf.year}</span>
                                        </div>
                                    )}
                                </div>

                                <div className="flex-1 flex flex-col justify-center">
                                    <div className="flex flex-wrap items-center gap-3 mb-4">
                                        {conf.tags?.map(tag => (
                                            <span key={tag} className="flex items-center gap-1 px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-bold uppercase tracking-wide">
                                                <Tag size={12} /> {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <h3 className="text-2xl md:text-3xl font-display font-bold text-slate-900 dark:text-white mb-4 group-hover:text-ieee-blue transition-colors">
                                        {conf.title}
                                    </h3>

                                    <div className="flex items-center gap-2 text-sm font-medium text-slate-500 dark:text-slate-400 mb-6">
                                        <MapPin size={18} className="text-ieee-blue" />
                                        {conf.location}
                                    </div>

                                    {conf.description && (
                                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6 max-w-3xl">
                                            {conf.description}
                                        </p>
                                    )}

                                    <div className="mt-auto pt-4 md:pt-0">
                                        <a
                                            href={conf.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl font-bold hover:bg-ieee-blue dark:hover:bg-ieee-cyan transition-colors"
                                        >
                                            Visit Official Website
                                            <ExternalLink size={16} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Reveal>
                ))
            ) : (
                <div className="text-center py-20">
                    <p className="text-slate-500 dark:text-slate-400 text-lg">No upcoming conferences scheduled at the moment.</p>
                </div>
            )}
        </div>
    );
};

const PastView: React.FC = () => {
    const years = Object.keys(PAST_CONFERENCES_BY_YEAR).sort((a, b) => b === 'Other' ? 1 : a === 'Other' ? -1 : Number(b) - Number(a));

    return (
        <div className="space-y-16">
            {years.map((year, yearIndex) => (
                <Reveal key={year} delay={yearIndex * 100}>
                    <div className="relative">
                        <div className="flex items-end gap-4 mb-8 border-b border-slate-200 dark:border-white/10 pb-4">
                            <h2 className="text-4xl font-display font-bold text-slate-300 dark:text-slate-700">
                                {year}
                            </h2>
                            <span className="text-sm font-bold text-ieee-blue mb-2 uppercase tracking-wider">
                                {PAST_CONFERENCES_BY_YEAR[year].length} Conferences
                            </span>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {PAST_CONFERENCES_BY_YEAR[year].map((conf, index) => (
                                <a
                                    key={index}
                                    href={conf.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex flex-col p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/5 hover:border-ieee-blue/50 hover:shadow-lg transition-all duration-300 group"
                                >
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="w-12 h-12 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center shrink-0">
                                            <img
                                                src={conf.logo || `https://ui-avatars.com/api/?name=${conf.title.substring(0, 2)}&background=random&color=fff`}
                                                alt=""
                                                className="w-8 h-8 object-contain opacity-70 group-hover:opacity-100 transition-opacity"
                                            />
                                        </div>
                                        {/* Date Start - End Badge */}
                                        {conf.startDate && conf.endDate ? (
                                            <div className="flex flex-col items-end text-right">
                                                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Date</span>
                                                <div className="flex items-center gap-1 text-xs font-bold text-slate-700 dark:text-slate-300">
                                                    <span>{conf.startDate}</span>
                                                    <ArrowRight size={10} className="text-slate-400" />
                                                    <span>{conf.endDate}</span>
                                                </div>
                                            </div>
                                        ) : (
                                            <span className="text-xs font-bold text-slate-400">{conf.fullDate || year}</span>
                                        )}
                                    </div>

                                    <h3 className="text-sm font-bold text-slate-900 dark:text-white leading-snug mb-2 group-hover:text-ieee-blue transition-colors line-clamp-2">
                                        {conf.title}
                                    </h3>

                                    <div className="mt-auto pt-4 flex justify-between items-center border-t border-slate-100 dark:border-white/5">
                                        <span className="text-xs font-semibold text-slate-400 group-hover:text-ieee-blue transition-colors">View Archive</span>
                                        <ExternalLink size={14} className="text-slate-300 group-hover:text-ieee-blue transition-colors" />
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                </Reveal>
            ))}
        </div>
    );
};
