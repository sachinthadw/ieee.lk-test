import React, { useState, useEffect } from 'react';
import { Post } from '../types';
import { Reveal } from '../components/Reveal';
import { PostCard } from '../components/PostCard';
import { Zap, ChevronRight, Users, Award, Calendar } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { AnimatedCounter } from '../components/AnimatedCounter';

const heroSlides = [
  {
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2940&auto=format&fit=crop",
    title: "Innovating for Tomorrow",
    subtitle: "Join the revolution of technology and humanity."
  },
  {
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2940&auto=format&fit=crop",
    title: "Global Connectivity",
    subtitle: "Connecting engineers across the island and beyond."
  },
  {
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2832&auto=format&fit=crop",
    title: "Empowering Leaders",
    subtitle: "Building the next generation of tech visionaries."
  }
];

interface HomeProps {
  posts: Post[];
}

export const Home: React.FC<HomeProps> = ({ posts }) => {
  const navigate = useNavigate();
  const featuredEvent = posts.find(p => p.type === 'EVENT');
  const recentNews = posts.filter(p => p.id !== featuredEvent?.id).slice(0, 3);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
      <div className="space-y-0">
        {/* Full Screen Carousel Hero */}
        <section className="relative w-full h-[90vh] min-h-[600px] -mt-32 overflow-hidden bg-slate-900">
           {/* Slides */}
           {heroSlides.map((slide, index) => (
             <div 
               key={index}
               className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
             >
                <img 
                  src={slide.image} 
                  alt={slide.title} 
                  className="w-full h-full object-cover scale-105 animate-[float_20s_infinite_alternate]" 
                /> 
             </div>
           ))}

           {/* Gradient Overlay: Dark on left, transparent on right */}
           <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/70 to-transparent" />
           <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent" />

           {/* Content Content */}
           <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex flex-col justify-center items-start pt-20">
              <Reveal>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-ieee-blue/20 border border-ieee-blue/30 text-ieee-cyan text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-md shadow-[0_0_15px_rgba(0,181,226,0.3)]">
                   <Zap size={14} className="fill-current" /> Advancing Technology for Humanity
                </div>
              </Reveal>
              
              <Reveal delay={100}>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white mb-6 leading-[1.1] drop-shadow-lg max-w-4xl">
                  Engineering the <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-ieee-blue to-ieee-cyan">Future of Sri Lanka</span>
                </h1>
              </Reveal>

              <Reveal delay={200}>
                <p className="text-lg md:text-xl text-slate-300 max-w-xl mb-10 leading-relaxed font-light border-l-2 border-ieee-blue/50 pl-6">
                   Join the largest technical professional organization dedicated to advancing technology for the benefit of humanity. Discover events, connect with peers, and innovate with IEEE Sri Lanka.
                </p>
              </Reveal>

              <Reveal delay={300}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/events" className="px-8 py-4 bg-ieee-blue hover:bg-white hover:text-ieee-blue text-white font-bold rounded-full transition-all shadow-lg shadow-ieee-blue/30 transform hover:scale-105 hover:shadow-xl flex items-center justify-center">
                     Explore Events <ChevronRight className="inline ml-1 w-4 h-4" />
                  </Link>
                  <Link to="/about" className="px-8 py-4 bg-transparent border border-white/30 text-white font-bold rounded-full hover:bg-white/10 transition-all backdrop-blur-sm text-center">
                     About Us
                  </Link>
                </div>
              </Reveal>
              
              {/* Carousel Indicators */}
              <div className="absolute bottom-10 left-6 right-6 flex items-center justify-between max-w-7xl mx-auto px-0">
                 <div className="flex gap-3">
                    {heroSlides.map((_, idx) => (
                      <button 
                        key={idx} 
                        onClick={() => setCurrentSlide(idx)}
                        className={`h-1.5 rounded-full transition-all duration-500 ${idx === currentSlide ? 'w-12 bg-ieee-cyan' : 'w-2 bg-white/20 hover:bg-white/40'}`} 
                        aria-label={`Go to slide ${idx + 1}`}
                      />
                    ))}
                 </div>
                 <div className="hidden md:flex gap-8 text-white/40 text-sm font-mono tracking-widest">
                    <span>0{currentSlide + 1} / 0{heroSlides.length}</span>
                 </div>
              </div>
           </div>
        </section>

        {/* Stats Grid */}
        <section className="relative z-10 max-w-7xl mx-auto px-6 py-24">
           <Reveal delay={400}>
             <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { label: 'Active Members', value: '4,000+', icon: Users },
                { label: 'Student Branches', value: '25+', icon: Zap },
                { label: 'Technical Chapters', value: '15+', icon: Award },
                { label: 'Annual Events', value: '100+', icon: Calendar },
              ].map((stat, i) => (
                <div key={i} className="group bg-white/40 dark:bg-white/5 p-8 rounded-3xl border border-white/20 dark:border-white/5 text-center hover:bg-white/60 dark:hover:bg-white/10 transition-all hover:-translate-y-2 backdrop-blur-md shadow-lg shadow-black/5">
                  <div className="w-14 h-14 bg-ieee-blue/10 dark:bg-ieee-cyan/10 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-500">
                    <stat.icon className="w-7 h-7 text-ieee-blue dark:text-ieee-cyan" />
                  </div>
                  <div className="text-4xl font-display font-bold text-slate-900 dark:text-white mb-2">
                    <AnimatedCounter value={stat.value} />
                  </div>
                  <div className="text-[10px] text-slate-500 dark:text-slate-400 uppercase tracking-widest font-bold">{stat.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        {/* Featured Content */}
        <section className="max-w-7xl mx-auto px-6 pb-24">
          <Reveal>
            <div className="flex justify-between items-end mb-12">
              <div>
                <h2 className="text-4xl font-display font-bold text-slate-900 dark:text-white mb-2">Latest Updates</h2>
                <p className="text-slate-500 dark:text-slate-400 font-medium">News and Highlights from the community</p>
              </div>
              <Link to="/news" className="group text-ieee-blue font-bold flex items-center gap-2 hover:text-ieee-dark transition-colors bg-blue-50 dark:bg-blue-900/20 px-4 py-2 rounded-full">
                View All <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </Reveal>
          
          <div className="grid md:grid-cols-3 gap-8">
            {recentNews.map((post, index) => (
              <Reveal key={post.id} delay={index * 150}>
                <PostCard post={post} onClick={() => navigate(`/news/${post.id}`)} />
              </Reveal>
            ))}
          </div>
        </section>
      </div>
  );
};
