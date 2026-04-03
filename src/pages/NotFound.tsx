import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import { Button } from '../components/ui/Button';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-sand-50 px-6 pt-32">
      <div className="text-center space-y-8 max-w-md">
        <div className="font-serif text-9xl text-teal-100">404</div>
        <h1 className="font-serif text-4xl text-slate-900">Page not found</h1>
        <p className="text-slate-600 leading-relaxed">
          The page you are looking for doesn't exist or has been moved. Let's get you back to a place of peace.
        </p>
        <div className="pt-4">
          <Button variant="primary" size="lg" href="/" icon={<Home className="w-5 h-5" />}>
            Back to Home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
