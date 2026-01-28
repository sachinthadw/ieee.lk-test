import React, { useState } from 'react';
import { Post } from '../types';
import { Reveal } from '../components/Reveal';
import { ArrowLeft, Calendar } from 'lucide-react';
import { useParams, Link, Navigate } from 'react-router-dom';

interface PostDetailProps {
    posts: Post[];
}

export const PostDetail: React.FC<PostDetailProps> = ({ posts }) => {
    const { id } = useParams();
    const post = posts.find(p => p.id === id);

    if (!post) return <Navigate to="/" />;

    return (
        <div className="animate-fade-in max-w-4xl mx-auto px-6 py-10">
            <Link
                to={post.type === 'EVENT' ? '/events' : '/news'}
                className="mb-8 group flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-ieee-blue dark:text-slate-400 dark:hover:text-white transition-colors"
            >
                <div className="p-2 rounded-full bg-slate-100 dark:bg-white/10 group-hover:bg-ieee-blue group-hover:text-white transition-all">
                    <ArrowLeft size={16} />
                </div>
                Back to {post.type === 'EVENT' ? 'Events' : 'News'}
            </Link>

            <Reveal>
                <div className="relative rounded-[2rem] overflow-hidden mb-12 shadow-2xl shadow-black/10 aspect-video bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-white/10">
                    <img src={post.image} className="w-full h-full object-cover" alt={post.title} />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-8 md:p-12">
                        <div className="flex flex-wrap gap-4 text-sm text-white/90 mb-4">
                            <span className="bg-ieee-blue/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg shadow-ieee-blue/20">{post.type}</span>
                            <span className="flex items-center gap-2 px-3 py-1 rounded-full bg-black/30 backdrop-blur text-xs font-medium border border-white/10"><Calendar size={14} /> {post.date}</span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-display font-bold text-white leading-tight drop-shadow-sm">{post.title}</h1>
                    </div>
                </div>
            </Reveal>

            <Reveal delay={200}>
                <div className="prose prose-lg md:prose-xl prose-slate dark:prose-invert max-w-none">
                    <div className="font-display text-2xl leading-relaxed text-slate-700 dark:text-slate-200 mb-10 border-l-4 border-ieee-blue pl-8 italic">
                        {post.excerpt}
                    </div>
                    <div dangerouslySetInnerHTML={{ __html: post.content }} className="opacity-90 leading-loose" />
                </div>
            </Reveal>
        </div>
    );
};
