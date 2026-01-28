import React from 'react';
import { Reveal } from '../components/Reveal';
import { Construction } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';

interface GenericPageProps {
    title?: string;
}

export const GenericPage: React.FC<GenericPageProps> = ({ title }) => {
    const { subpage } = useParams();
    const displayTitle = title || subpage?.replace(/-/g, ' ');

    return (
        <div className="max-w-7xl mx-auto px-6 py-20 min-h-[60vh] flex flex-col items-center justify-center text-center">
            <Reveal>
                <div className="mb-8 p-6 rounded-[2rem] bg-ieee-blue/5 border border-ieee-blue/10 text-ieee-blue inline-block">
                    <Construction size={48} className="animate-pulse" />
                </div>
                <h1 className="text-4xl md:text-6xl font-display font-bold text-slate-900 dark:text-white mb-6 capitalize">
                    {displayTitle}
                </h1>
                <p className="text-xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
                    We are currently building the <strong>{displayTitle}</strong> section. <br />
                    Our team is working hard to bring you the latest content. Check back soon!
                </p>
                <Link to="/" className="mt-10 inline-block px-8 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold rounded-full hover:scale-105 transition-transform">
                    Return Home
                </Link>
            </Reveal>
        </div>
    );
};
