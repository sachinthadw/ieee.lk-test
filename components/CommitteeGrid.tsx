import React from 'react';
import { Reveal } from './Reveal';
import { CommitteeMember } from '../services/governanceData';
import { Mail, Linkedin, User } from 'lucide-react';

interface CommitteeGridProps {
    members: CommitteeMember[];
    title?: string;
}

export const CommitteeGrid: React.FC<CommitteeGridProps> = ({ members, title }) => {
    if (!members || members.length === 0) {
        return (
            <div className="text-center py-20 bg-slate-50 dark:bg-slate-900/50 rounded-3xl border border-slate-200 dark:border-white/5 border-dashed">
                <div className="w-16 h-16 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-4 text-slate-400">
                    <User size={32} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">No Members Found</h3>
                <p className="text-slate-500 dark:text-slate-400 max-w-sm mx-auto">
                    We couldn't find any committee members for the selected year. Try selecting a different term.
                </p>
            </div>
        );
    }

    return (
        <div className="space-y-8">
            {title && (
                <Reveal>
                    <h3 className="text-2xl font-display font-bold text-slate-900 dark:text-white mb-6 border-b border-slate-200 dark:border-white/10 pb-4">
                        {title}
                    </h3>
                </Reveal>
            )}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {members.map((member, idx) => (
                    <Reveal key={idx} delay={idx * 50}>
                        <div className="group relative bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-ieee-blue/10 transition-all duration-500 border border-slate-200 dark:border-white/5 hover:border-ieee-blue/20">

                            {/* Image Container with Gradient Overlay */}
                            <div className="aspect-[3/4] relative overflow-hidden bg-slate-100 dark:bg-slate-800">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    onError={(e) => {
                                        (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=random&size=512`;
                                    }}
                                />

                                {/* Overlay Gradient - Always visible at bottom, grows on hover */}
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-60 group-hover:opacity-90 transition-all duration-500"></div>

                                {/* Floating Social Actions */}
                                <div className="absolute top-4 right-4 flex flex-col gap-2 translate-x-12 group-hover:translate-x-0 transition-transform duration-300 ease-out z-20">
                                    {member.email && (
                                        <a
                                            href={`mailto:${member.email}`}
                                            className="w-10 h-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-ieee-blue transition-all shadow-lg"
                                            title="Email"
                                        >
                                            <Mail size={16} />
                                        </a>
                                    )}
                                    {member.linkedin && (
                                        <a
                                            href={member.linkedin}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-10 h-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-[#0077b5] hover:border-[#0077b5] transition-all shadow-lg"
                                            title="LinkedIn"
                                        >
                                            <Linkedin size={16} />
                                        </a>
                                    )}
                                </div>

                                {/* Content positioned at bottom over image */}
                                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                                    <div className="h-1 w-12 bg-ieee-blue mb-4 rounded-full origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-100"></div>
                                    <h4 className="font-display font-bold text-white text-xl leading-tight mb-2 drop-shadow-md">
                                        {member.name}
                                    </h4>
                                    <p className="text-white/80 font-medium text-sm tracking-wide uppercase">
                                        {member.role}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Reveal>
                ))}
            </div>
        </div>
    );
};
