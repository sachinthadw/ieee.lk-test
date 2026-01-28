import React, { useState, useEffect, useRef } from 'react';
import { Post } from '../types';
import { PostCard } from '../components/PostCard';
import { Reveal } from '../components/Reveal';
import { ChevronRight, Users, Zap, Award, Calendar, ArrowLeft, Construction } from 'lucide-react';

interface PublicViewProps {
  view: string;
  posts: Post[];
  setView: (view: string) => void;
}

// Internal Component for Number Animation
const AnimatedCounter = ({ value }: { value: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  // Extract numeric part and non-numeric suffix (e.g., "4,000+" -> 4000 and "+")
  const numericValue = parseInt(value.replace(/[^0-9]/g, ''), 10);
  const suffix = value.replace(/[0-9,]/g, ''); 

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let startTimestamp: number | null = null;
          const duration = 2000; // 2 seconds animation

          const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            
            // Easing function (easeOutExpo) for smooth landing
            const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
            
            setCount(Math.floor(easeProgress * numericValue));
            
            if (progress < 1) {
              window.requestAnimationFrame(step);
            }
          };
          window.requestAnimationFrame(step);
        }
      },
      { threshold: 0.5 }
    );
    
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [numericValue]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}{suffix}
    </span>
  );
};

export const PublicView: React.FC<PublicViewProps> = ({ view, posts, setView }) => {
  const featuredEvent = posts.find(p => p.type === 'EVENT');
  const recentNews = posts.filter(p => p.id !== featuredEvent?.id).slice(0, 3);
  
  // Carousel State
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Example hero images (in production these could come from the CMS/API)
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

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Render Single Post View
  const [selectedPostId, setSelectedPostId] = useState<string | null>(null);

  if (selectedPostId) {
    const post = posts.find(p => p.id === selectedPostId);
    if (!post) return null;
    return (
      <div className="animate-fade-in max-w-4xl mx-auto px-6 py-10">
        <button 
          onClick={() => setSelectedPostId(null)} 
          className="mb-8 group flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-ieee-blue dark:text-slate-400 dark:hover:text-white transition-colors"
        >
          <div className="p-2 rounded-full bg-slate-100 dark:bg-white/10 group-hover:bg-ieee-blue group-hover:text-white transition-all">
            <ArrowLeft size={16} /> 
          </div>
          Back to {view}
        </button>
        
        <Reveal>
          <div className="relative rounded-[2rem] overflow-hidden mb-12 shadow-2xl shadow-black/10 aspect-video bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-white/10">
              <img src={post.image} className="w-full h-full object-cover" alt={post.title} />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8 md:p-12">
                  <div className="flex flex-wrap gap-4 text-sm text-white/90 mb-4">
                      <span className="bg-ieee-blue/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg shadow-ieee-blue/20">{post.type}</span>
                      <span className="flex items-center gap-2 px-3 py-1 rounded-full bg-black/30 backdrop-blur text-xs font-medium border border-white/10"><Calendar size={14}/> {post.date}</span>
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
              <div dangerouslySetInnerHTML={{__html: post.content}} className="opacity-90 leading-loose" />
          </div>
        </Reveal>
      </div>
    );
  }

  // Render Home View
  if (view === 'home') {
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
                  <button onClick={() => setView('events')} className="px-8 py-4 bg-ieee-blue hover:bg-white hover:text-ieee-blue text-white font-bold rounded-full transition-all shadow-lg shadow-ieee-blue/30 transform hover:scale-105 hover:shadow-xl">
                     Explore Events <ChevronRight className="inline ml-1 w-4 h-4" />
                  </button>
                  <button onClick={() => setView('about')} className="px-8 py-4 bg-transparent border border-white/30 text-white font-bold rounded-full hover:bg-white/10 transition-all backdrop-blur-sm">
                     About Us
                  </button>
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
              <button onClick={() => setView('news')} className="group text-ieee-blue font-bold flex items-center gap-2 hover:text-ieee-dark transition-colors bg-blue-50 dark:bg-blue-900/20 px-4 py-2 rounded-full">
                View All <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </Reveal>
          
          <div className="grid md:grid-cols-3 gap-8">
            {recentNews.map((post, index) => (
              <Reveal key={post.id} delay={index * 150}>
                <PostCard post={post} onClick={() => setSelectedPostId(post.id)} />
              </Reveal>
            ))}
          </div>
        </section>
      </div>
    );
  }

  // Render Event/News Lists
  if (view === 'events' || view === 'news') {
     const filteredPosts = posts.filter(p => view === 'events' ? p.type === 'EVENT' : p.type === 'NEWS');
     return (
       <div className="max-w-7xl mx-auto px-6 py-10">
         <Reveal>
            <div className="mb-16 text-center">
                <span className="text-ieee-blue dark:text-ieee-cyan font-bold tracking-widest uppercase text-xs mb-4 block">Discover</span>
                <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 capitalize text-slate-900 dark:text-white">{view}</h1>
                <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-lg">
                  Stay up to date with the latest happenings, workshops, and gatherings in the IEEE Sri Lanka community.
                </p>
            </div>
         </Reveal>
         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <Reveal key={post.id} delay={index * 100}>
                <PostCard post={post} onClick={() => setSelectedPostId(post.id)} />
              </Reveal>
            ))}
         </div>
       </div>
     )
  }

  // Render About
  if (view === 'about' || view.startsWith('about-')) {
    return (
      <div className="max-w-5xl mx-auto px-6 py-10 space-y-24">
         <Reveal>
            <div className="text-center space-y-6">
                <span className="px-3 py-1 border border-slate-200 dark:border-white/10 rounded-full text-[10px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
                    {view === 'about-committee' ? 'Leadership' : view === 'about-constitution' ? 'Governance' : 'Since 2003'}
                </span>
                <h1 className="text-5xl md:text-7xl font-display font-bold text-slate-900 dark:text-white">
                    {view === 'about-committee' ? 'Executive Committee' : view === 'about-constitution' ? 'Constitution' : 'About Us'}
                </h1>
                <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-4xl mx-auto font-light">
                  {view === 'about-committee' 
                    ? 'Meet the dedicated volunteers driving the vision and mission of IEEE Sri Lanka Section.'
                    : view === 'about-constitution'
                    ? 'The guiding principles and bylaws that govern our operations and ensure transparency.'
                    : 'The IEEE Sri Lanka Section is the premier professional body for engineering and technology in Sri Lanka. We act as a bridge between the global IEEE network and the local technical community.'
                  }
                </p>
            </div>
         </Reveal>
         
         {view === 'about' && (
           <>
             <div className="grid md:grid-cols-2 gap-8">
               <Reveal delay={100}>
                  <div className="h-full bg-white/50 dark:bg-white/5 backdrop-blur-md p-10 rounded-3xl border border-slate-200 dark:border-white/10 hover:border-ieee-blue/50 transition-colors group">
                    <div className="w-12 h-12 bg-ieee-blue rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                      <Zap />
                    </div>
                    <h3 className="text-2xl font-display font-bold text-slate-900 dark:text-white mb-4">Vision</h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">To be the essential resource for the technical professional worldwide, and to be universally recognized for the contributions of technology and of technical professionals in improving global conditions.</p>
                  </div>
               </Reveal>
               <Reveal delay={200}>
                  <div className="h-full bg-white/50 dark:bg-white/5 backdrop-blur-md p-10 rounded-3xl border border-slate-200 dark:border-white/10 hover:border-ieee-cyan/50 transition-colors group">
                    <div className="w-12 h-12 bg-ieee-cyan rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                      <Award />
                    </div>
                    <h3 className="text-2xl font-display font-bold text-slate-900 dark:text-white mb-4">Mission</h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">To foster technological innovation and excellence for the benefit of humanity.</p>
                  </div>
               </Reveal>
             </div>

             <Reveal delay={300}>
                <div className="bg-gradient-to-br from-slate-100 to-white dark:from-slate-900 dark:to-slate-950 rounded-[2.5rem] p-8 md:p-16 shadow-2xl border border-slate-200 dark:border-slate-800 text-center relative overflow-hidden">
                    {/* Decorative background element */}
                    <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-ieee-blue/10 rounded-full blur-3xl pointer-events-none"></div>
                    
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 dark:text-white mb-6 relative z-10">Our Journey</h2>
                    <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-10 max-w-3xl mx-auto relative z-10">
                      Since our inception, we have grown to be one of the most active sections in Region 10. We take pride in our vibrant community of students, young professionals, and industry veterans who work tirelessly to organize conferences, humanitarian projects, and technical workshops.
                    </p>
                    <button className="relative z-10 px-8 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold rounded-full hover:scale-105 transition-transform">Read Full History</button>
                </div>
             </Reveal>
           </>
         )}
      </div>
    )
  }

  // Generic Page Handler for other sections (Communities, Membership, Awards, etc.)
  return (
    <div className="max-w-7xl mx-auto px-6 py-20 min-h-[60vh] flex flex-col items-center justify-center text-center">
        <Reveal>
            <div className="mb-8 p-6 rounded-[2rem] bg-ieee-blue/5 border border-ieee-blue/10 text-ieee-blue inline-block">
                <Construction size={48} className="animate-pulse" />
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-slate-900 dark:text-white mb-6 capitalize">
                {view.replace(/-/g, ' ')}
            </h1>
            <p className="text-xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
                We are currently building the <strong>{view.replace(/-/g, ' ')}</strong> section. <br/>
                Our team is working hard to bring you the latest content. Check back soon!
            </p>
            <button onClick={() => setView('home')} className="mt-10 px-8 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold rounded-full hover:scale-105 transition-transform">
                Return Home
            </button>
        </Reveal>
    </div>
  );
};