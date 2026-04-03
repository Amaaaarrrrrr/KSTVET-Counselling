import React, { useState } from 'react';
import { FileText, BookOpen, Search, Download, ArrowRight } from 'lucide-react';
import { ScrollReveal } from '../ui/ScrollReveal';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { resources } from '../../data/resources';
import { cn } from '../../utils/cn';

export const Resources: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const categories = [
    { id: 'all', label: 'All Resources' },
    { id: 'mental_health', label: 'Mental Health' },
    { id: 'career', label: 'Career' },
    { id: 'financial', label: 'Financial' },
    { id: 'academic', label: 'Academic' },
  ];

  const filteredResources = activeCategory === 'all' 
    ? resources.slice(0, 6) 
    : resources.filter(r => r.category === activeCategory);

  return (
    <section className="section-pad bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <ScrollReveal className="max-w-2xl">
            <h2 className="section-heading">Supportive Resources</h2>
            <p className="section-sub">
              Access our library of guides, checklists, and articles designed to support your wellbeing and success.
            </p>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2} className="flex flex-wrap gap-2">
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
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredResources.map((resource, index) => (
            <ScrollReveal key={resource.id} delay={index * 0.1}>
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

        <ScrollReveal delay={0.4} className="mt-16 text-center">
          <Button variant="outline" href="/resources">
            View Full Library
          </Button>
        </ScrollReveal>
      </div>
    </section>
  );
};
