import React, { useState } from 'react';
import { Post, ContentType } from '../types';
import { generatePostContent, suggestTags } from '../services/geminiService';
import { Plus, Edit3, Trash2, Wand2, Database, Save, ArrowLeft, Sun, Moon, LogOut } from 'lucide-react';

interface AdminPanelProps {
  posts: Post[];
  setPosts: React.Dispatch<React.SetStateAction<Post[]>>;
  onExit: () => void;
  theme: 'light' | 'dark';
}

// Base Layout Wrapper for Admin
const AdminLayout = ({ children }: { children?: React.ReactNode }) => (
  <div className="min-h-screen bg-gray-50 dark:bg-[#0a0a0a] text-slate-900 dark:text-slate-100 p-6 transition-colors">
    <div className="max-w-6xl mx-auto">
      {children}
    </div>
  </div>
);

export const AdminPanel: React.FC<AdminPanelProps> = ({ posts, setPosts, onExit, theme }) => {
  const [editingId, setEditingId] = useState<string | null>(null);
  const [isAiLoading, setIsAiLoading] = useState(false);
  const [dbTabOpen, setDbTabOpen] = useState(false);

  // Form State
  const [formData, setFormData] = useState<Partial<Post>>({
    title: '',
    excerpt: '',
    content: '',
    type: ContentType.NEWS,
    tags: [],
    image: 'https://picsum.photos/800/600',
    date: new Date().toISOString().split('T')[0]
  });

  const handleEdit = (post: Post) => {
    setEditingId(post.id);
    setFormData(post);
    setDbTabOpen(false);
  };

  const handleCreate = () => {
    setEditingId('new');
    setFormData({
      title: '',
      excerpt: '',
      content: '',
      type: ContentType.NEWS,
      tags: [],
      image: 'https://picsum.photos/800/600',
      date: new Date().toISOString().split('T')[0]
    });
    setDbTabOpen(false);
  };

  const handleSave = () => {
    if (!formData.title || !formData.content) return alert('Title and Content required');

    if (editingId === 'new') {
      const newPost: Post = {
        ...formData as Post,
        id: Date.now().toString(),
      };
      setPosts([newPost, ...posts]);
    } else {
      setPosts(posts.map(p => p.id === editingId ? { ...p, ...formData } as Post : p));
    }
    setEditingId(null);
  };

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this post?')) {
      setPosts(posts.filter(p => p.id !== id));
    }
  };

  // AI Helpers
  const handleAiGenerate = async () => {
    if (!formData.title) return alert('Please enter a title first so the AI knows what to write about.');
    setIsAiLoading(true);
    
    // Generate Body
    const content = await generatePostContent(formData.title, formData.excerpt || "General IEEE tech topic");
    
    // Suggest Tags
    const tags = await suggestTags(content);
    
    setFormData(prev => ({ ...prev, content, tags }));
    setIsAiLoading(false);
  };

  // List View
  if (!editingId && !dbTabOpen) {
    return (
      <AdminLayout>
        <div className="flex justify-between items-center mb-10">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Content Manager</h2>
            <p className="text-slate-500 dark:text-slate-400">Welcome back, Admin</p>
          </div>
          <div className="flex gap-3">
             <button onClick={() => setDbTabOpen(true)} className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors shadow-sm">
              <Database size={16} /> <span className="hidden sm:inline">Data Source</span>
            </button>
            <button onClick={handleCreate} className="flex items-center gap-2 px-4 py-2 rounded-lg bg-ieee-blue text-white font-medium hover:bg-ieee-dark transition-colors shadow-md shadow-ieee-blue/20">
              <Plus size={16} /> New Post
            </button>
            <button onClick={onExit} className="flex items-center gap-2 px-4 py-2 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white">
                <LogOut size={16} /> Exit
            </button>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm">
          <table className="w-full text-left">
            <thead className="bg-slate-50 dark:bg-slate-950/50 text-slate-500 dark:text-slate-400 text-xs uppercase font-semibold">
              <tr>
                <th className="p-5">Date</th>
                <th className="p-5">Title</th>
                <th className="p-5">Type</th>
                <th className="p-5 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {posts.map(post => (
                <tr key={post.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                  <td className="p-5 text-sm text-slate-500 dark:text-slate-400 font-mono">{post.date}</td>
                  <td className="p-5 font-medium text-slate-900 dark:text-white">{post.title}</td>
                  <td className="p-5"><span className="text-xs font-bold px-2 py-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">{post.type}</span></td>
                  <td className="p-5 text-right space-x-2">
                    <button onClick={() => handleEdit(post)} className="p-2 text-slate-400 hover:text-ieee-blue transition-colors"><Edit3 size={18} /></button>
                    <button onClick={() => handleDelete(post.id)} className="p-2 text-slate-400 hover:text-red-500 transition-colors"><Trash2 size={18} /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </AdminLayout>
    );
  }

  // Database Info Tab
  if (dbTabOpen) {
    return (
      <AdminLayout>
         <button onClick={() => setDbTabOpen(false)} className="mb-6 flex items-center gap-2 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"><ArrowLeft size={16}/> Back</button>
         <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-amber-200 dark:border-amber-900/50 space-y-6 shadow-sm">
            <h2 className="text-2xl font-bold flex items-center gap-3 text-amber-600 dark:text-amber-500"><Database /> WordPress Database Integration</h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              This React SPA is ready to connect with your existing ieee.lk WordPress database.
            </p>
            
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Recommended Integration: Headless WP</h3>
              <ul className="list-disc pl-5 space-y-2 text-slate-600 dark:text-slate-400">
                <li>Keep your existing WordPress installation at <code>admin.ieee.lk</code>.</li>
                <li>Ensure the <strong>WP REST API</strong> is enabled.</li>
                <li>Configure this app to fetch content from <code>https://ieee.lk/wp-json/wp/v2/posts</code>.</li>
                <li>This panel currently operates in <strong>Mock Mode</strong> for demonstration.</li>
              </ul>
            </div>
         </div>
      </AdminLayout>
    )
  }

  // Editor View
  return (
    <AdminLayout>
      <div className="flex justify-between items-center mb-6">
        <button onClick={() => setEditingId(null)} className="flex items-center gap-2 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors">
          <ArrowLeft size={16} /> Cancel
        </button>
        <div className="flex gap-4 items-center">
            <span className="text-sm text-slate-400 hidden sm:inline">{editingId === 'new' ? 'New Draft' : 'Editing Post'}</span>
            <button onClick={handleSave} className="flex items-center gap-2 px-6 py-2 bg-ieee-blue text-white font-bold rounded-lg hover:bg-ieee-dark transition-colors shadow-lg shadow-ieee-blue/20">
            <Save size={16} /> Save Changes
            </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Editor */}
        <div className="lg:col-span-2 space-y-6">
          <div className="space-y-2">
            <input 
              type="text" 
              value={formData.title} 
              onChange={e => setFormData({...formData, title: e.target.value})}
              className="w-full bg-transparent border-0 border-b-2 border-slate-200 dark:border-slate-800 py-4 px-0 focus:border-ieee-blue focus:ring-0 text-3xl font-bold text-slate-900 dark:text-white placeholder-slate-300 dark:placeholder-slate-700"
              placeholder="Post Title"
            />
          </div>

           <div className="space-y-2">
            <textarea 
              value={formData.excerpt} 
              onChange={e => setFormData({...formData, excerpt: e.target.value})}
              className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-lg focus:border-ieee-blue focus:outline-none h-24 text-slate-600 dark:text-slate-300 resize-none"
              placeholder="Write a short excerpt..."
            />
          </div>

          <div className="space-y-2 relative">
            <div className="flex justify-between items-center mb-2">
               <label className="text-xs uppercase text-slate-500 font-bold">Body Content</label>
               <button 
                onClick={handleAiGenerate}
                disabled={isAiLoading}
                className="text-xs flex items-center gap-1 text-purple-600 dark:text-purple-400 hover:underline disabled:opacity-50"
               >
                 <Wand2 size={12} /> {isAiLoading ? 'Gemini is writing...' : 'Write with Gemini AI'}
               </button>
            </div>
            <textarea 
              value={formData.content} 
              onChange={e => setFormData({...formData, content: e.target.value})}
              className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 rounded-lg focus:border-ieee-blue focus:outline-none h-[500px] font-mono text-sm text-slate-800 dark:text-slate-200"
              placeholder="<p>Start writing your article...</p>"
            />
          </div>
        </div>

        {/* Sidebar Settings */}
        <div className="space-y-6">
           <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-5">
             <div>
               <label className="block text-xs uppercase text-slate-500 font-bold mb-2">Post Type</label>
               <select 
                 value={formData.type} 
                 onChange={e => setFormData({...formData, type: e.target.value as ContentType})}
                 className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-2.5 rounded-lg focus:border-ieee-blue outline-none text-slate-900 dark:text-white"
               >
                 <option value={ContentType.NEWS}>News</option>
                 <option value={ContentType.EVENT}>Event</option>
                 <option value={ContentType.PAGE}>Page</option>
               </select>
             </div>

             <div>
               <label className="block text-xs uppercase text-slate-500 font-bold mb-2">Publish Date</label>
               <input 
                type="date"
                value={formData.date}
                onChange={e => setFormData({...formData, date: e.target.value})}
                className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-2.5 rounded-lg focus:border-ieee-blue outline-none text-slate-900 dark:text-white"
               />
             </div>

             <div>
               <label className="block text-xs uppercase text-slate-500 font-bold mb-2">Tags</label>
               <input 
                type="text"
                value={formData.tags?.join(', ')}
                onChange={e => setFormData({...formData, tags: e.target.value.split(',').map(s => s.trim())})}
                className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-2.5 rounded-lg focus:border-ieee-blue outline-none text-slate-900 dark:text-white placeholder-slate-400"
                placeholder="tech, ai, event"
               />
             </div>

             <div>
                <label className="block text-xs uppercase text-slate-500 font-bold mb-2">Featured Image</label>
                <input 
                  type="text"
                  value={formData.image}
                  onChange={e => setFormData({...formData, image: e.target.value})}
                  className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-2.5 rounded-lg focus:border-ieee-blue outline-none text-xs text-slate-600 dark:text-slate-300"
                  placeholder="https://..."
                />
                {formData.image && (
                  <div className="mt-3 rounded-lg overflow-hidden border border-slate-200 dark:border-slate-700 h-32 relative">
                      <img src={formData.image} alt="Preview" className="w-full h-full object-cover" />
                  </div>
                )}
             </div>
           </div>
        </div>
      </div>
    </AdminLayout>
  );
};
