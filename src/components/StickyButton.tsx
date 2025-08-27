import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const StickyButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // إظهار الزر بعد scroll 300px
      const scrolled = window.scrollY;
      setIsVisible(scrolled > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    // تتبع النقرة على الـ CTA
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'Lead', {
        content_name: 'Sticky CTA Click',
        content_category: 'CTA Button'
      });
    }
    window.open('https://landing-v0-zeta.vercel.app', '_blank');
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Mobile Sticky Button */}
      <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-gradient-to-t from-white via-white/95 to-transparent md:hidden animate-slide-up">
        <Button
          onClick={handleClick}
          className="w-full bg-gradient-to-r from-rose-500 via-pink-500 to-purple-600 hover:from-rose-600 hover:via-pink-600 hover:to-purple-700 text-white py-4 text-lg font-bold rounded-full shadow-2xl border-2 border-white/50 transition-all duration-300 hover:scale-[1.02] animate-pulse"
        >
          💜 شوفي الكريم دلوقتي - خصم خاص!
        </Button>
      </div>

      {/* Desktop Floating Button */}
      <div className="fixed bottom-6 right-6 z-50 hidden md:block animate-bounce-slow">
        <Button
          onClick={handleClick}
          className="bg-gradient-to-r from-rose-500 via-pink-500 to-purple-600 hover:from-rose-600 hover:via-pink-600 hover:to-purple-700 text-white px-6 py-4 text-base font-bold rounded-full shadow-2xl border-2 border-white/50 transition-all duration-300 hover:scale-110 animate-pulse"
        >
          💜 شوفي الكريم
        </Button>
        
        {/* Arrow pointing to button */}
        <div className="absolute -top-8 right-2 animate-bounce">
          <div className="bg-amber-400 text-amber-900 px-2 py-1 rounded-lg text-xs font-bold shadow-lg">
            اضغطي هنا!
          </div>
          <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-amber-400 mx-auto"></div>
        </div>
      </div>

      {/* Pulsing Ring Effect */}
      <div className="fixed bottom-6 right-6 z-40 hidden md:block pointer-events-none">
        <div className="w-16 h-16 bg-rose-400/30 rounded-full animate-ping"></div>
      </div>
    </>
  );
};

export default StickyButton;
