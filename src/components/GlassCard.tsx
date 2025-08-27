import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'warm' | 'cool' | 'accent';
  blur?: 'sm' | 'md' | 'lg';
  glow?: boolean;
}

const GlassCard = ({ 
  children, 
  className, 
  variant = 'default', 
  blur = 'md',
  glow = false 
}: GlassCardProps) => {
  const variants = {
    default: 'bg-white/80 border-white/30',
    warm: 'bg-gradient-to-br from-rose-50/90 via-pink-50/80 to-orange-50/70 border-rose-200/40',
    cool: 'bg-gradient-to-br from-blue-50/90 via-cyan-50/80 to-teal-50/70 border-blue-200/40',
    accent: 'bg-gradient-to-br from-purple-50/90 via-pink-50/80 to-rose-50/70 border-purple-200/40'
  };

  const blurLevels = {
    sm: 'backdrop-blur-sm',
    md: 'backdrop-blur-md',
    lg: 'backdrop-blur-lg'
  };

  return (
    <div className={cn(
      'relative overflow-hidden rounded-2xl border shadow-xl transition-all duration-500',
      'hover:shadow-2xl hover:scale-[1.02] hover:border-opacity-60',
      variants[variant],
      blurLevels[blur],
      '',
      className
    )}>
      {/* Glass effect overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>

      {/* Subtle border glow */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </div>
  );
};

export default GlassCard;
