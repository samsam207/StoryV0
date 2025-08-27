
import HeroSection from "@/components/HeroSection";
import StorySection from "@/components/StorySection";
import StickyButton from "@/components/StickyButton";
import { useEffect } from "react";

const Index = () => {
  // Add smooth scrolling behavior
  useEffect(() => {
    // Add smooth scroll behavior to the entire page
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Clean up on unmount
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <StorySection />
      
      {/* Sticky CTA Button */}
      <StickyButton />
      
      {/* Simple footer */}
      <footer className="py-8 px-4 bg-gray-50 border-t border-gray-200">
        <div className="max-w-2xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-2xl">🤍</span>
            <div>
              <p className="text-gray-700 font-medium">قصة حقيقية مشاركة بهدف المساعدة</p>
              <p className="text-sm text-gray-500">كل بنت تستاهل تحس بالثقة والراحة</p>
            </div>
          </div>
          <p className="text-xs text-gray-400">© 2024 - مشاركة شخصية لتجربة حقيقية</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
