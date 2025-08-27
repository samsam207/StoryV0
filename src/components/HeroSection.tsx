
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToStory = () => {
    const storySection = document.getElementById('story-section');
    if (storySection) {
      storySection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-[70vh] flex flex-col justify-center items-center px-4 py-6 bg-gradient-to-b from-rose-50/50 to-white">
      <div className="max-w-3xl mx-auto text-center">
        {/* Simple icon */}
        <div className="mb-6">
          <span className="text-4xl">✨</span>
        </div>

        {/* Clean headline */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
          من الخجل والإحراج...
          <span className="block mt-2 text-rose-600">
            لثقة حقيقية
          </span>
        </h1>

        {/* Simple intro card */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 mb-8 shadow-lg border border-gray-100 max-w-2xl mx-auto">
          <p className="text-lg sm:text-xl text-gray-700 italic leading-relaxed mb-4">
            "هشارك معاكم حاجة شخصية جداً... حاجة غيرت نظرتي لنفسي تماماً"
          </p>
          
          <p className="text-base text-gray-600 leading-relaxed mb-6">
            قصة حقيقية عن رحلة استعادة الثقة بالنفس والراحة مع الجسم. 
            مش بس عن التغيير الجسدي... ده عن التغيير النفسي كمان.
          </p>

          {/* Simple trust indicators */}
          <div className="flex items-center justify-center gap-6 pt-4 border-t border-gray-200">
            <div className="flex items-center gap-2">
              <span>✅</span>
              <span className="text-sm text-gray-600">قصة حقيقية</span>
            </div>
            <div className="flex items-center gap-2">
              <span>🤍</span>
              <span className="text-sm text-gray-600">بهدف المساعدة</span>
            </div>
          </div>
        </div>

        {/* Simple CTA button */}
        <Button
          onClick={scrollToStory}
          size="lg"
          className="bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white px-8 py-4 text-lg rounded-full shadow-xl transition-all duration-300 hover:scale-105 font-semibold mb-6"
        >
          ✨ اقري القصة كاملة
        </Button>

        {/* Simple scroll indicator */}
        <div className="flex flex-col items-center">
          <p className="text-rose-500 text-sm mb-2">اسكرولي لتحت للقصة 👇</p>
          <div className="w-1 h-6 bg-rose-400 rounded-full opacity-60"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
