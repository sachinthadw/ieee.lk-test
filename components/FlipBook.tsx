import React from 'react';
import './FlipBook.css';
import { BookOpen, ExternalLink } from 'lucide-react';

interface FlipBookProps {
    title: string;
    pdfLink: string;
    coverImage?: string;
}

export const FlipBook: React.FC<FlipBookProps> = ({ title, pdfLink, coverImage }) => {
    return (
        <div className="flip-book-container py-10">
            <div className="book group">
                {/* The Front Cover which flips */}
                <div className="book-cover">
                    <div className="book-front bg-gradient-to-br from-ieee-blue to-ieee-dark">
                        <img
                            src="https://file.garden/aTVAtCzGbgwzLBKB/IEEE%20Sri%20Lanka%20Section%20Flag%20Identifier.png"
                            alt="IEEE Logo"
                            className="w-20 mb-6 drop-shadow-md"
                        />
                        <h3 className="font-display font-bold text-xl leading-tight mb-2 drop-shadow-sm">
                            CONFERENCE
                        </h3>
                        <h4 className="font-display font-light text-lg uppercase tracking-widest mb-8 border-b border-white/30 pb-2">
                            Guidelines
                        </h4>
                        <div className="text-xs font-mono opacity-70">
                            IEEE Sri Lanka Section<br />Official Document
                        </div>
                    </div>
                    <div className="book-back"></div>
                </div>

                {/* The Inside Page (Static mostly) */}
                <div className="book-page">
                    <div className="flex flex-col items-center gap-4">
                        <p className="text-slate-500 text-sm font-medium italic">
                            "Click to read the full guidelines document along with technical and financial sponsorship details."
                        </p>
                        <a
                            href={pdfLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 bg-ieee-blue text-white rounded-lg text-sm font-bold hover:bg-ieee-dark transition-colors shadow-lg shadow-ieee-blue/20"
                        >
                            <BookOpen size={16} />
                            Open PDF
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};
