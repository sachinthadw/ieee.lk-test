import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';
import { Post } from '../types';

interface PostCardProps {
  post: Post;
  onClick: () => void;
}

export const PostCard: React.FC<PostCardProps> = ({ post, onClick }) => {
  return (
    <div 
      className="group flex flex-col h-full bg-white/60 dark:bg-[#0f0f0f]/60 backdrop-blur-md border border-slate-200 dark:border-white/5 rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-ieee-blue/10 hover:border-ieee-blue/30 dark:hover:border-ieee-blue/30 transition-all duration-500 cursor-pointer hover:-translate-y-2"
      onClick={onClick}
    >
      <div className="relative h-56 overflow-hidden">
        <div className="absolute inset-0 bg-slate-200 dark:bg-slate-800 animate-pulse" />
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out" 
          loading="lazy"
        />
        <div className="absolute top-4 right-4">
          <span className="text-[10px] font-bold tracking-wider uppercase bg-white/90 dark:bg-black/60 backdrop-blur-md text-slate-900 dark:text-white px-3 py-1.5 rounded-full shadow-sm border border-white/20">
            {post.type}
          </span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      
      <div className="p-8 flex flex-col flex-grow relative">
        <div className="flex items-center gap-3 mb-4">
          {post.tags.slice(0, 2).map(tag => (
             <span key={tag} className="text-[10px] uppercase font-bold tracking-wider text-ieee-blue dark:text-ieee-cyan bg-ieee-blue/5 dark:bg-ieee-cyan/10 px-2.5 py-1 rounded-md border border-ieee-blue/10 dark:border-ieee-cyan/20">
              {tag}
             </span>
          ))}
          <div className="ml-auto flex items-center text-xs font-medium text-slate-400 gap-1.5">
            <Calendar size={12} />
            <span>{post.date}</span>
          </div>
        </div>
        
        <h3 className="text-xl font-display font-bold text-slate-900 dark:text-white mb-3 group-hover:text-ieee-blue dark:group-hover:text-ieee-cyan transition-colors line-clamp-2 leading-tight">
          {post.title}
        </h3>
        
        <p className="text-slate-500 dark:text-slate-400 text-sm line-clamp-3 mb-6 flex-grow leading-relaxed">
          {post.excerpt}
        </p>
        
        <div className="flex items-center text-ieee-blue dark:text-ieee-cyan text-sm font-bold mt-auto pt-6 border-t border-slate-100 dark:border-white/5 group-hover:border-ieee-blue/20 transition-colors">
          Read Article <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-2 transition-transform duration-300" />
        </div>
      </div>
    </div>
  );
};