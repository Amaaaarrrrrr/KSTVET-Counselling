import React from 'react';
import { cn } from '../../utils/cn';

interface OrganicBlobProps {
  color?: string;
  className?: string;
}

export const OrganicBlob: React.FC<OrganicBlobProps> = ({ color = "fill-teal-50", className }) => {
  return (
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className={cn("w-full h-auto", className)}>
      <path
        className={color}
        d="M44.7,-76.4C58.1,-69.2,69.2,-58.1,77.3,-44.7C85.4,-31.3,90.5,-15.7,90.1,-0.2C89.7,15.2,83.8,30.4,75.1,44.2C66.4,58,54.9,70.4,41,77.6C27.1,84.8,10.8,86.8,-4.8,85.1C-20.4,83.4,-35.3,78,-48.7,69.5C-62.1,61,-74,49.4,-80.7,35.6C-87.4,21.8,-88.9,5.8,-86.3,-9.6C-83.7,-25.1,-77,-40,-66.3,-51.7C-55.6,-63.4,-40.9,-71.9,-26.4,-78.3C-11.9,-84.7,2.4,-89,17.2,-88.2C32,-87.4,47.3,-81.5,44.7,-76.4Z"
        transform="translate(100 100)"
      />
    </svg>
  );
};
