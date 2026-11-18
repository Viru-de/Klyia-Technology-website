import React from 'react';
import {
  Code2,
  Compass,
  Cpu,
  Globe,
  Layers,
  MessageSquareText,
  Search,
  TrendingUp,
} from 'lucide-react';
import type {ServiceIconKey} from '../../config/homeData.ts';

interface ServiceIconProps {
  name: ServiceIconKey;
  className?: string;
}

export function ServiceIcon({name, className = 'w-5 h-5'}: ServiceIconProps) {
  switch (name) {
    case 'globe':
      return <Globe className={className} aria-hidden="true" />;
    case 'code':
      return <Code2 className={className} aria-hidden="true" />;
    case 'layers':
      return <Layers className={className} aria-hidden="true" />;
    case 'search':
      return <Search className={className} aria-hidden="true" />;
    case 'compass':
      return <Compass className={className} aria-hidden="true" />;
    case 'cpu':
      return <Cpu className={className} aria-hidden="true" />;
    case 'message':
      return <MessageSquareText className={className} aria-hidden="true" />;
    case 'trending':
      return <TrendingUp className={className} aria-hidden="true" />;
  }
}
