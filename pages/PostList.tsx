import React from 'react';
import { Post } from '../types';
import { Reveal } from '../components/Reveal';
import { PostCard } from '../components/PostCard';
import { useNavigate } from 'react-router-dom';

interface PostListProps {
    type: 'EVENT' | 'NEWS';
    posts: Post[];
    title: string;
}

export const PostList: React.FC<PostListProps> = ({ type, posts, title }) => {
    const navigate = useNavigate();
    const filteredPosts = posts.filter(p => p.type === type);

    return (
        <div className="max-w-7xl mx-auto px-6 py-10">
            <Reveal>
                <div className="mb-16 text-center">
                    <span className="text-ieee-blue dark:text-ieee-cyan font-bold tracking-widest uppercase text-xs mb-4 block">Discover</span>
                    <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 capitalize text-slate-900 dark:text-white">{title}</h1>
                    <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-lg">
                        Stay up to date with the latest happenings, workshops, and gatherings in the IEEE Sri Lanka community.
                    </p>
                </div>
            </Reveal>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post, index) => (
                    <Reveal key={post.id} delay={index * 100}>
                        <PostCard post={post} onClick={() => navigate(`/${type.toLowerCase()}s/${post.id}`)} />
                    </Reveal>
                ))}
            </div>
        </div>
    );
};
