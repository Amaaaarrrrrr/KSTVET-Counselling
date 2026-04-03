import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Calendar, Clock, ArrowLeft, Share2, Bookmark } from 'lucide-react';
import { motion } from 'motion/react';
import { blog } from '../data/blog';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { ScrollReveal } from '../components/ui/ScrollReveal';

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blog.find(p => p.slug === slug);

  if (!post) {
    return <Navigate to="/404" />;
  }

  return (
    <div className="pt-32 md:pt-40 pb-20">
      <article className="max-w-4xl mx-auto px-6">
        {/* Back Link */}
        <ScrollReveal>
          <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-bold text-green-800 mb-12 hover:gap-3 transition-all group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Blog
          </Link>
        </ScrollReveal>

        {/* Header */}
        <header className="space-y-8 mb-16">
          <ScrollReveal delay={0.1}>
            <Badge variant={
              post.category === 'Mental Health' ? 'green' :
              post.category === 'Career' ? 'gold' : 'gold'
            } size="md">
              {post.category}
            </Badge>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-slate-900 leading-tight mt-6">
              {post.title}
            </h1>
          </ScrollReveal>

          {post.imageUrl && (
            <ScrollReveal delay={0.15}>
              <div className="aspect-[21/9] rounded-[40px] overflow-hidden shadow-2xl border-8 border-white">
                <img 
                  src={post.imageUrl} 
                  alt={post.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </ScrollReveal>
          )}

          <ScrollReveal delay={0.2} className="flex flex-wrap items-center justify-between gap-6 pt-8 border-t border-slate-100">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center text-lg font-serif font-bold text-green-800">
                {post.authorInitials}
              </div>
              <div>
                <p className="font-bold text-slate-900">{post.author}</p>
                <div className="flex items-center gap-4 text-xs text-slate-400 font-bold uppercase tracking-widest">
                  <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readTime} read</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-green-50 hover:text-green-800 transition-all cursor-pointer">
                <Share2 className="w-4 h-4" />
              </button>
              <button className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-green-50 hover:text-green-800 transition-all cursor-pointer">
                <Bookmark className="w-4 h-4" />
              </button>
            </div>
          </ScrollReveal>
        </header>

        {/* Content */}
        <ScrollReveal delay={0.3} className="prose prose-lg max-w-none prose-slate prose-headings:font-serif prose-headings:text-slate-900 prose-p:text-slate-600 prose-p:leading-relaxed prose-li:text-slate-600 prose-strong:text-slate-900 prose-h3:text-3xl prose-h3:mt-12 prose-h3:mb-6">
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </ScrollReveal>

        {/* Footer CTA */}
        <ScrollReveal delay={0.4} className="mt-20 p-8 md:p-12 bg-ivory-50 rounded-[40px] border border-ivory-200 text-center space-y-6">
          <h3 className="font-serif text-3xl text-slate-900">Need someone to talk to?</h3>
          <p className="text-slate-600 max-w-xl mx-auto leading-relaxed">
            If this article resonated with you and you'd like to explore these topics further in a safe, confidential space, our counsellors are here for you.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <Button variant="primary" size="lg" href="/contact">Book a Session</Button>
            <Button variant="outline" size="lg" href="/services">View Services</Button>
          </div>
        </ScrollReveal>

        {/* Related Posts */}
        <div className="mt-24 pt-16 border-t border-slate-100">
          <h3 className="font-serif text-3xl text-slate-900 mb-12">Related Reading</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blog.filter(p => p.id !== post.id).slice(0, 2).map((related, i) => (
              <Link key={related.id} to={`/blog/${related.slug}`} className="card-base p-8 group border-b-4 border-transparent hover:border-green-800 transition-all">
                <Badge variant="green" size="sm" className="mb-4">{related.category}</Badge>
                <h4 className="font-serif text-xl text-slate-900 mb-4 group-hover:text-green-800 transition-colors">{related.title}</h4>
                <p className="text-sm text-slate-500 line-clamp-2">{related.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
};

export default BlogPost;
