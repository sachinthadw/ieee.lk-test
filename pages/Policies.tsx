import React, { useState } from 'react';
import { BYLAWS_DATA } from '../services/policiesData';
import { Reveal } from '../components/Reveal';
import { ChevronDown, ChevronUp, FileText } from 'lucide-react';

export const Policies: React.FC = () => {
    const [openItem, setOpenItem] = useState<string | null>('article-1');

    const toggleItem = (id: string) => {
        setOpenItem(openItem === id ? null : id);
    };

    return (
        <div className="min-h-screen pt-32 pb-20">
            <div className="max-w-4xl mx-auto px-6">
                <Reveal>
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-ieee-blue/10 text-ieee-blue mb-6">
                            <FileText size={32} />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 dark:text-white mb-6">
                            Bylaws & Policies
                        </h1>
                        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                            The governing documents that guide the operations and ensure transparency within the IEEE Sri Lanka Section.
                        </p>
                    </div>
                </Reveal>

                <div className="space-y-4">
                    {BYLAWS_DATA.map((item, idx) => (
                        <Reveal key={item.id} delay={idx * 50}>
                            <div className={`bg-white dark:bg-slate-900 rounded-2xl border transition-all duration-300 overflow-hidden ${openItem === item.id
                                ? 'border-ieee-blue/30 shadow-lg shadow-ieee-blue/5'
                                : 'border-slate-200 dark:border-white/5 hover:border-slate-300 dark:hover:border-white/10'
                                }`}>
                                <button
                                    onClick={() => toggleItem(item.id)}
                                    className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                                >
                                    <h3 className={`text-lg font-bold transition-colors ${openItem === item.id ? 'text-ieee-blue dark:text-ieee-cyan' : 'text-slate-900 dark:text-white'
                                        }`}>
                                        {item.title}
                                    </h3>
                                    <div className={`p-2 rounded-full transition-colors ${openItem === item.id ? 'bg-ieee-blue/10 text-ieee-blue' : 'bg-slate-100 dark:bg-white/5 text-slate-500'
                                        }`}>
                                        {openItem === item.id ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                                    </div>
                                </button>

                                <div className={`grid transition-[grid-template-rows] duration-300 ease-out ${openItem === item.id ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                                    }`}>
                                    <div className="overflow-hidden">
                                        <div
                                            className="p-6 pt-0 prose prose-slate dark:prose-invert max-w-none text-slate-600 dark:text-slate-300"
                                            dangerouslySetInnerHTML={{ __html: item.content }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </div>
    );
};
