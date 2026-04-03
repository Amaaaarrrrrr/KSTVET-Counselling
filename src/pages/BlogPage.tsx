import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight, Search } from 'lucide-react';
import { ScrollReveal } from '../components/ui/ScrollReveal';
import { Badge } from '../components/ui/Badge';
import { blog } from '../data/blog';
import { cn } from '../utils/cn';

const BlogPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const categories = ['all', 'Mental Health', 'Career', 'Financial'];

  const filteredPosts = activeCategory === 'all' 
    ? blog 
    : blog.filter(p => p.category === activeCategory);

  return (
    <div className="pt-32 md:pt-40">
      {/* Hero */}
      <section className="section-pad bg-sand-50">
        <div className="max-w-7xl mx-auto text-center">
          <ScrollReveal>
            <Badge variant="teal" className="mb-6">Wellness Blog</Badge>
            <h1 className="section-heading mb-8">Insights & Advice</h1>
            <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
              Practical wisdom and professional perspectives on navigating the unique challenges of TVET life and beyond.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 flex justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "px-5 py-2 rounded-full text-sm font-medium transition-all cursor-pointer",
                activeCategory === cat 
                  ? "bg-teal-400 text-white shadow-md" 
                  : "bg-slate-50 text-slate-500 hover:bg-slate-100"
              )}
            >
              {cat === 'all' ? 'All Posts' : cat}
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="section-pad bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <ScrollReveal key={post.id} delay={index * 0.1}>
                <Link to={`/blog/${post.slug}`} className="card-base p-0 flex flex-col h-full group overflow-hidden">
                  {post.imageUrl && (
                    <div className="aspect-video overflow-hidden">
                      <img 
                        src={post.imageUrl} 
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  )}
                  <div className="p-8 flex flex-col h-full">
                    <Badge variant={
                      post.category === 'Mental Health' ? 'teal' :
                      post.category === 'Career' ? 'purple' : 'amber'
                    } size="sm" className="mb-4 w-fit">
                      {post.category}
                    </Badge>
                    <h3 className="font-serif text-2xl text-slate-900 mb-4 group-hover:text-teal-600 transition-colors leading-tight">
                      {post.title}
                    </h3>
                    <p className="text-slate-500 text-sm mb-8 line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <div className="mt-auto pt-6 border-t border-slate-50 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-500">
                          {post.authorInitials}
                        </div>
                        <span className="text-xs font-medium text-slate-600">{post.author}</span>
                      </div>
                      <div className="flex items-center gap-3 text-slate-400">
                        <div className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest">
                          <Calendar className="w-3 h-3" />
                          {post.date}
                        </div>
                        <div className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest">
                          <Clock className="w-3 h-3" />
                          {post.readTime}
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
