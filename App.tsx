import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout';
import { LoadingScreen } from './components/LoadingScreen';
import { INITIAL_POSTS } from './services/mockData';
import { Post } from './types';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { PostList } from './pages/PostList';
import { PostDetail } from './pages/PostDetail';
import { GenericPage } from './pages/GenericPage';
import { AdminPanel } from './pages/AdminPanel';
import { Awards } from './pages/Awards';
import { Membership } from './pages/Membership';
import { Governance } from './pages/Governance';
import { Policies } from './pages/Policies';

function App() {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState<Post[]>(INITIAL_POSTS);

  // Theme State - Default to 'light' per requirements
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const location = useLocation();

  // Handle Loading Simulation - only on initial load
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  // Handle Theme Changes
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  if (loading) {
    return <LoadingScreen />;
  }

  // Admin Panel is currently a separate full-screen view in this simplified version
  // In a real app, this would likely be a protected route structure
  if (location.pathname === '/admin') {
    return (
      <div className="min-h-screen transition-colors duration-300">
        <AdminPanel
          posts={posts}
          setPosts={setPosts}
          onExit={() => window.history.back()}
          theme={theme}
        />
      </div>
    )
  }

  return (
    <div className="min-h-screen transition-colors duration-300">
      <Layout theme={theme} toggleTheme={toggleTheme}>
        <Routes>
          <Route path="/" element={<Home posts={posts} />} />

          <Route path="/about" element={<About />} />
          <Route path="/about/:section" element={<About />} />
          <Route path="/about/policies" element={<Policies />} />

          <Route path="/governance" element={<Governance />} />
          <Route path="/governance/executive-committee" element={<Governance />} />
          <Route path="/governance/executive-committee/:year" element={<Governance />} />
          <Route path="/governance/standing-committee" element={<Navigate to="/governance/standing-committee/slsac" replace />} />
          <Route path="/governance/standing-committee/:slug" element={<Governance />} />
          <Route path="/governance/standing-committee/:slug/:year" element={<Governance />} />

          <Route path="/events" element={<PostList type="EVENT" posts={posts} title="Events" />} />
          <Route path="/events/:id" element={<PostDetail posts={posts} />} />

          <Route path="/news" element={<PostList type="NEWS" posts={posts} title="News & Resources" />} />
          <Route path="/news/:id" element={<PostDetail posts={posts} />} />

          <Route path="/communities" element={<GenericPage title="Communities" />} />
          <Route path="/communities/:subpage" element={<GenericPage />} />

          <Route path="/membership" element={<Membership />} />

          <Route path="/awards" element={<Awards />} />
          <Route path="/awards/:year" element={<Awards />} />

          {/* Catch-all for other generic pages or simple slugs */}
          <Route path="/:subpage" element={<GenericPage />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;