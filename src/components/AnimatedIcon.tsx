import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedIconProps {
  children: ReactNode;
  variant?: 'bounce' | 'pulse' | 'float' | 'spin' | 'glow';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: 'primary' | 'secondary' | 'accent' | 'warm';
  className?: string;
}

const AnimatedIcon = ({ 
  children, 
  variant = 'float', 
  size = 'md',
  color = 'primary',
  className 
}: AnimatedIconProps) => {
  const animations = {
    bounce: '',
    pulse: '',
    float: '',
    spin: '',
    glow: ''
  };

  const sizes = {
    sm: 'w-8 h-8 text-lg',
    md: 'w-12 h-12 text-xl',
    lg: 'w-16 h-16 text-2xl',
    xl: 'w-20 h-20 text-3xl'
  };

  const colors = {
    primary: 'bg-gradient-to-br from-rose-400 to-pink-500 text-white shadow-rose-500/30',
    secondary: 'bg-gradient-to-br from-blue-400 to-cyan-500 text-white shadow-blue-500/30',
    accent: 'bg-gradient-to-br from-purple-400 to-pink-500 text-white shadow-purple-500/30',
    warm: 'bg-gradient-to-br from-amber-400 to-orange-500 text-white shadow-amber-500/30'
  };

  return (
    <div className={cn(
      'inline-flex items-center justify-center rounded-full shadow-lg transition-all duration-300',
      'hover:scale-110 hover:shadow-xl',
      sizes[size],
      colors[color],
      animations[variant],
      className
    )}>
      {children}
    </div>
  );
};

export default AnimatedIcon;
