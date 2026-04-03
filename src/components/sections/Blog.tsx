import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { ScrollReveal } from '../ui/ScrollReveal';
import { Badge } from '../ui/Badge';
import { blog } from '../../data/blog';

export const Blog: React.FC = () => {
  return (
    <section className="section-pad bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <ScrollReveal className="max-w-2xl">
            <h2 className="section-heading">Wellness Blog</h2>
            <p className="section-sub">
              Insights, advice, and stories from our counsellors to help you navigate life's challenges.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <Link to="/blog" className="text-teal-600 font-bold flex items-center gap-2 hover:gap-3 transition-all group">
              View all posts
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blog.map((post, index) => (
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
  );
};
