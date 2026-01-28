import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, Lock, Moon, Sun, ChevronRight, ChevronDown, ChevronUp } from 'lucide-react';
import { BackgroundParticles } from './BackgroundParticles';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

export const Layout: React.FC<LayoutProps> = ({ children, theme, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeSubDropdown, setActiveSubDropdown] = useState<string | null>(null);
  const [expandedMobileMenu, setExpandedMobileMenu] = useState<string | null>(null);
  const [expandedMobileSubMenu, setExpandedMobileSubMenu] = useState<string | null>(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Logic: The navbar should be transparent ONLY if we are on the Home page AND at the top.
  // Everywhere else (subpages or scrolled), it should be the "Glass" style.
  const isHome = location.pathname === '/';
  const useGlassStyle = isScrolled || !isHome;

  const navLinks = [
    { id: '/', label: 'Home' },
    {
      id: '/about',
      label: 'About',
      children: [
        { id: '/about/overview', label: 'Overview' },
        {
          id: '/governance',
          label: 'Governance',
          children: [
            { id: '/governance/executive-committee', label: 'Executive Committee' },
            { id: '/governance/standing-committee/slsac', label: 'Standing Committees' }
          ]
        },
        { id: '/about/policies', label: 'Policies / Bylaws' },
      ]
    },
    {
      id: '/communities',
      label: 'Communities',
      children: [
        { id: '/communities-chapters', label: 'Chapters & Subsections' },
        { id: '/communities-sb', label: 'Student Branches' },
        { id: '/communities-yp', label: 'Young Professionals (YP)' },
        { id: '/communities-wie', label: 'Women in Engineering (WIE)' },
        { id: '/communities-sight', label: 'SIGHT' },
        { id: '/communities-groups', label: 'Local Groups' },
      ]
    },
    { id: '/membership', label: 'Membership' },
    { id: '/events', label: 'Events' },
    {
      id: '/news',
      label: 'News & Resources',
      children: [
        { id: '/news', label: 'All News' },
        { id: '/news-spotlight', label: 'Spotlight (Featured)' },
        { id: '/news-announcements', label: 'Announcements' },
        { id: '/news-newsletters', label: 'Newsletter Archive' },
        { id: '/news-gallery', label: 'Media Gallery' },
      ]
    },
    { id: '/awards', label: 'Awards' },
  ];

  const handleMobileNav = (id: string, hasChildren: boolean) => {
    if (hasChildren) {
      setExpandedMobileMenu(expandedMobileMenu === id ? null : id);
    } else {
      navigate(id);
      setMobileMenuOpen(false);
    }
  };

  // Helper to check if a link is active (including children)
  const isActive = (path: string, children?: any[]) => {
    if (location.pathname === path) return true;
    if (children && children.some(c => location.pathname === c.id)) return true;
    return false;
  };

  return (
    <div className="flex flex-col min-h-screen relative overflow-hidden">

      {/* Live Background */}
      <BackgroundParticles />

      {/* Navbar Container */}
      <div className="flex justify-center w-full z-50 fixed top-0 left-0 right-0 pointer-events-none p-4 md:p-6">
        <nav
          className={`pointer-events-auto transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] flex justify-between items-center rounded-2xl ${useGlassStyle
            ? 'w-full max-w-[85rem] bg-white/80 dark:bg-[#050505]/80 backdrop-blur-xl border border-slate-200/50 dark:border-white/10 py-3 px-6 shadow-lg shadow-black/5 ring-1 ring-black/5'
            : 'w-full max-w-7xl bg-transparent border-transparent py-4 px-2'
            }`}
        >
          {/* Logo */}
          <div
            onClick={() => navigate('/')}
            className="flex items-center gap-3 cursor-pointer group shrink-0 transition-transform duration-300 hover:scale-105"
          >
            <img
              src="https://file.garden/aTVAtCzGbgwzLBKB/IEEE%20Sri%20Lanka%20Section%20Flag%20Identifier.png"
              alt="IEEE Sri Lanka Section"
              className={`w-auto object-contain transition-all duration-300 ${useGlassStyle ? 'h-8 md:h-9' : 'h-10 md:h-12 drop-shadow-lg'}`}
            />
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-1">
            <div className="p-1 rounded-full flex items-center transition-all">
              {navLinks.map((link) => (
                <div
                  key={link.id}
                  className="relative group/dropdown"
                  onMouseEnter={() => setActiveDropdown(link.id)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    onClick={() => !link.children && navigate(link.id)}
                    className={`px-3 lg:px-3 xl:px-4 py-1.5 md:py-2 text-[13px] xl:text-sm font-semibold rounded-full transition-all duration-300 flex items-center gap-1 whitespace-nowrap ${isActive(link.id, link.children)
                      ? 'bg-ieee-blue text-white shadow-md'
                      : useGlassStyle
                        ? 'text-slate-600 dark:text-slate-300 hover:text-ieee-blue dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10'
                        : 'text-white/90 hover:text-white hover:bg-white/10 drop-shadow-md'
                      }`}
                  >
                    {link.label}
                    {link.children && <ChevronDown size={12} className={`opacity-70 transition-transform duration-300 ${activeDropdown === link.id ? 'rotate-180' : ''}`} />}
                  </button>

                  {/* Dropdown Menu */}
                  {link.children && (
                    <div className={`absolute top-full left-0 mt-2 w-64 p-2 rounded-xl bg-white/95 dark:bg-[#0a0a0a]/95 backdrop-blur-xl border border-slate-200 dark:border-white/10 shadow-xl transition-all duration-200 origin-top-left z-50 ${activeDropdown === link.id ? 'opacity-100 scale-100 visible translate-y-0' : 'opacity-0 scale-95 invisible -translate-y-2'}`}>
                      {link.children.map(child => (
                        <div key={child.id} className="relative group/sub">
                          {child.children ? (
                            <>
                              <button
                                className={`w-full text-left flex justify-between items-center px-4 py-2.5 text-sm font-medium rounded-lg transition-colors text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/10 hover:text-ieee-blue dark:hover:text-white group-hover/sub:bg-slate-100 dark:group-hover/sub:bg-white/10`}
                                onMouseEnter={() => setActiveSubDropdown(child.id)}
                              >
                                {child.label}
                                <ChevronRight size={14} className="opacity-70" />
                              </button>

                              {/* Level 3 Nested Dropdown */}
                              <div className={`absolute left-full top-0 ml-2 w-64 p-2 rounded-xl bg-white/95 dark:bg-[#0a0a0a]/95 backdrop-blur-xl border border-slate-200 dark:border-white/10 shadow-xl transition-all duration-200 origin-top-left z-50 ${activeSubDropdown === child.id ? 'opacity-100 scale-100 visible translate-y-0' : 'opacity-0 scale-95 invisible -translate-y-2'}`}>
                                {child.children.map(grandChild => (
                                  <Link
                                    key={grandChild.id}
                                    to={grandChild.id}
                                    onClick={() => setActiveDropdown(null)}
                                    className="block w-full text-left px-4 py-2.5 text-sm font-medium rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/10 hover:text-ieee-blue dark:hover:text-white"
                                  >
                                    {grandChild.label}
                                  </Link>
                                ))}
                              </div>
                            </>
                          ) : (
                            <Link
                              to={child.id}
                              onClick={(e) => setActiveDropdown(null)}
                              className={`block w-full text-left px-4 py-2.5 text-sm font-medium rounded-lg transition-colors ${location.pathname === child.id
                                ? 'bg-ieee-blue/10 text-ieee-blue dark:text-ieee-cyan'
                                : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/10 hover:text-ieee-blue dark:hover:text-white'
                                }`}
                              onMouseEnter={() => setActiveSubDropdown(null)}
                            >
                              {child.label}
                            </Link>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-1 p-1">
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-full transition-all hover:scale-110 ${useGlassStyle
                  ? 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/10'
                  : 'text-white/90 hover:text-white hover:bg-white/10 drop-shadow-md'
                  }`}
                aria-label="Toggle Theme"
              >
                {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
              </button>

              <Link
                to="/admin"
                className={`p-2 rounded-full transition-all hover:scale-110 ${useGlassStyle
                  ? 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/10'
                  : 'text-white/90 hover:text-white hover:bg-white/10 drop-shadow-md'
                  }`}
                aria-label="Admin"
              >
                <Lock size={18} />
              </Link>
            </div>
          </div>

          {/* Mobile Toggle */}
          <div className={`lg:hidden flex items-center gap-2 transition-all ${useGlassStyle ? '' : 'text-white drop-shadow-md'
            }`}>
            <button
              onClick={toggleTheme}
              className={`p-2 transition-colors ${useGlassStyle ? 'text-slate-600 dark:text-slate-300' : 'text-white'}`}
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <div className={`w-px h-5 ${useGlassStyle ? 'bg-slate-200 dark:bg-slate-700' : 'bg-white/30'}`}></div>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 transition-colors ${useGlassStyle ? 'text-slate-900 dark:text-white' : 'text-white'}`}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* Mobile Menu Dropdown */}
          <div className={`lg:hidden absolute top-full left-0 right-0 mt-4 mx-auto w-full max-h-[80vh] overflow-y-auto bg-white/95 dark:bg-[#050505]/95 backdrop-blur-xl border border-slate-200 dark:border-slate-800 transition-all duration-300 rounded-2xl shadow-2xl ${mobileMenuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
            <div className="p-4 flex flex-col space-y-1">
              {navLinks.map((link) => (
                <div key={link.id}>
                  <button
                    onClick={() => handleMobileNav(link.id, !!link.children)}
                    className={`w-full flex justify-between items-center text-left text-lg font-bold p-3 rounded-xl transition-colors ${isActive(link.id, link.children)
                      ? 'bg-ieee-blue/10 text-ieee-blue'
                      : 'text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-white/5'
                      }`}
                  >
                    {link.label}
                    {link.children && <ChevronDown size={20} className={`transition-transform ${expandedMobileMenu === link.id ? 'rotate-180' : ''}`} />}
                  </button>

                  {/* Mobile Submenu */}
                  {link.children && expandedMobileMenu === link.id && (
                    <div className="ml-4 pl-4 border-l-2 border-slate-200 dark:border-slate-800 mt-1 space-y-1 bg-slate-50/50 dark:bg-white/5 rounded-lg mb-2">
                      {link.children.map(child => (
                        <div key={child.id}>
                          {child.children ? (
                            <>
                              <button
                                onClick={() => setExpandedMobileSubMenu(expandedMobileSubMenu === child.id ? null : child.id)}
                                className="w-full flex justify-between items-center text-left text-base font-medium p-3 rounded-lg text-slate-500 dark:text-slate-400 hover:text-ieee-blue dark:hover:text-white"
                              >
                                {child.label}
                                <ChevronDown size={16} className={`transition-transform ${expandedMobileSubMenu === child.id ? 'rotate-180' : ''}`} />
                              </button>
                              {/* Level 3 Mobile */}
                              {expandedMobileSubMenu === child.id && (
                                <div className="ml-4 pl-4 border-l border-slate-200 dark:border-slate-700 mt-1 space-y-1">
                                  {child.children.map(grandChild => (
                                    <button
                                      key={grandChild.id}
                                      onClick={() => {
                                        navigate(grandChild.id);
                                        setMobileMenuOpen(false);
                                      }}
                                      className={`block w-full text-left text-sm font-medium p-2.5 rounded-lg ${location.pathname === grandChild.id
                                        ? 'text-ieee-blue'
                                        : 'text-slate-500 dark:text-slate-400'
                                        }`}
                                    >
                                      {grandChild.label}
                                    </button>
                                  ))}
                                </div>
                              )}
                            </>
                          ) : (
                            <button
                              onClick={() => {
                                navigate(child.id);
                                setMobileMenuOpen(false);
                              }}
                              className={`block w-full text-left text-base font-medium p-3 rounded-lg ${location.pathname === child.id
                                ? 'text-ieee-blue'
                                : 'text-slate-500 dark:text-slate-400'
                                }`}
                            >
                              {child.label}
                            </button>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="h-px bg-slate-200 dark:bg-slate-800 my-2"></div>
              <Link
                to="/admin"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-left text-lg font-bold p-3 text-slate-600 dark:text-slate-300 hover:text-ieee-blue"
              >
                Admin Portal
              </Link>
            </div>
          </div>
        </nav>
      </div>

      {/* Main Content - Adjusted padding to account for fixed navbar */}
      <main className="flex-grow pt-32 pb-12 w-full z-10 relative">
        {children}
      </main>

      {/* Footer */}
      <footer className="relative z-10 bg-white/50 dark:bg-slate-950/50 backdrop-blur-xl border-t border-slate-200 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img
                src="https://file.garden/aTVAtCzGbgwzLBKB/IEEE%20Sri%20Lanka%20Section%20Flag%20Identifier.png"
                alt="IEEE Sri Lanka Section"
                className="h-8 w-auto object-contain"
              />
            </div>
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed font-medium">
              Empowering the engineering community in Sri Lanka through innovation, collaboration, and professional development.
            </p>
          </div>

          <div>
            <h4 className="font-display font-bold text-slate-900 dark:text-white mb-6">Navigation</h4>
            <ul className="space-y-3 text-sm font-medium text-slate-500 dark:text-slate-400">
              <li><Link to="/" className="hover:text-ieee-blue transition-colors hover:translate-x-1 inline-block transform">Home</Link></li>
              <li><Link to="/events" className="hover:text-ieee-blue transition-colors hover:translate-x-1 inline-block transform">Events</Link></li>
              <li><Link to="/news" className="hover:text-ieee-blue transition-colors hover:translate-x-1 inline-block transform">News</Link></li>
              <li><Link to="/about" className="hover:text-ieee-blue transition-colors hover:translate-x-1 inline-block transform">About Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-slate-900 dark:text-white mb-6">Contact</h4>
            <ul className="space-y-4 text-sm font-medium text-slate-500 dark:text-slate-400">
              <li className="flex items-start gap-3">
                <Globe size={18} className="mt-0.5 text-ieee-blue" />
                <span>Colombo, Sri Lanka</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                info@ieee.lk
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-slate-900 dark:text-white mb-6">Stay Updated</h4>
            <div className="flex group">
              <input
                type="email"
                placeholder="Enter email..."
                className="bg-white/80 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-700 px-4 py-3 rounded-l-xl focus:outline-none focus:border-ieee-blue w-full text-sm text-slate-900 dark:text-white transition-all"
              />
              <button className="bg-ieee-blue text-white px-5 py-3 rounded-r-xl hover:bg-ieee-dark transition-colors">
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-200 dark:border-white/5 py-8 text-center text-xs font-semibold text-slate-400 dark:text-slate-600 bg-slate-50/50 dark:bg-black/20">
          © {new Date().getFullYear()} IEEE Sri Lanka Section. All rights reserved.
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-50 p-4 rounded-full bg-ieee-blue text-white shadow-lg hover:bg-ieee-dark hover:-translate-y-1 transition-all duration-300 ${showScrollTop ? 'opacity-100 translate-y-0 visible' : 'opacity-0 translate-y-10 invisible'
          }`}
        aria-label="Scroll to top"
      >
        <ChevronUp size={24} />
      </button>
    </div>
  );
};
