import React, { useState } from 'react';
import { FileText, BookOpen, Search, Download, ArrowRight, X } from 'lucide-react';
import { ScrollReveal } from '../components/ui/ScrollReveal';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { resources } from '../data/resources';
import { cn } from '../utils/cn';

const ResourcesPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', label: 'All Resources' },
    { id: 'mental_health', label: 'Mental Health' },
    { id: 'career', label: 'Career' },
    { id: 'financial', label: 'Financial' },
    { id: 'academic', label: 'Academic' },
  ];

  const filteredResources = resources.filter(r => {
    const matchesCategory = activeCategory === 'all' || r.category === activeCategory;
    const matchesSearch = r.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         r.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-32 md:pt-40">
      {/* Hero */}
      <section className="section-pad bg-sand-50">
        <div className="max-w-7xl mx-auto text-center">
          <ScrollReveal>
            <Badge variant="teal" className="mb-6">Resource Library</Badge>
            <h1 className="section-heading mb-8">Tools for Your Journey</h1>
            <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
              Explore our collection of guides, articles, and practical tools designed to help you navigate life's challenges at your own pace.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Filters & Search */}
      <section className="py-12 bg-white border-b border-slate-100 sticky top-[80px] md:top-[124px] z-30 shadow-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-8 items-center justify-between">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={cn(
                  "px-5 py-2 rounded-full text-sm font-medium transition-all cursor-pointer",
                  activeCategory === cat.id 
                    ? "bg-teal-400 text-white shadow-md" 
                    : "bg-slate-50 text-slate-500 hover:bg-slate-100"
                )}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="relative w-full max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search resources..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-10 py-3 rounded-full bg-slate-50 border border-slate-200 focus:border-teal-400 focus:ring-2 focus:ring-teal-100 outline-none transition-all"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="section-pad bg-white min-h-[400px]">
        <div className="max-w-7xl mx-auto">
          {filteredResources.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredResources.map((resource, index) => (
                <ScrollReveal key={resource.id} delay={index * 0.05}>
                  <div className={cn(
                    "card-base p-8 h-full flex flex-col border-l-4",
                    resource.category === 'mental_health' && "border-teal-400",
                    resource.category === 'career' && "border-purple-400",
                    resource.category === 'financial' && "border-amber-400",
                    resource.category === 'academic' && "border-coral-400"
                  )}>
                    <div className="flex items-center justify-between mb-4">
                      <Badge variant={
                        resource.category === 'mental_health' ? 'teal' :
                        resource.category === 'career' ? 'purple' :
                        resource.category === 'financial' ? 'amber' : 'coral'
                      } size="sm">
                        {resource.category.replace('_', ' ')}
                      </Badge>
                      <div className="text-slate-300">
                        {resource.type === 'pdf' ? <FileText className="w-5 h-5" /> : <BookOpen className="w-5 h-5" />}
                      </div>
                    </div>
                    <h3 className="font-serif text-xl text-slate-900 mb-3">{resource.title}</h3>
                    <p className="text-sm text-slate-500 mb-8 flex-grow leading-relaxed">
                      {resource.description}
                    </p>
                    <div className="flex items-center justify-between pt-6 border-t border-slate-50">
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                        {resource.type === 'pdf' ? 'PDF Guide' : resource.readTime}
                      </span>
                      <Button variant="ghost" size="sm" className="text-teal-600 font-bold p-0 hover:bg-transparent">
                        {resource.type === 'pdf' ? 'Download' : 'Read Article'}
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Button>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="w-20 h-20 rounded-full bg-slate-50 flex items-center justify-center mx-auto mb-6 text-slate-300">
                <Search className="w-10 h-10" />
              </div>
              <h3 className="font-serif text-2xl text-slate-900 mb-2">No resources found</h3>
              <p className="text-slate-500">Try adjusting your search or category filters.</p>
              <Button variant="ghost" className="mt-6" onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}>
                Clear all filters
              </Button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default ResourcesPage;
