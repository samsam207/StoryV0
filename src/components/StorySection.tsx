import { useEffect, useRef } from 'react';

const StorySection = () => {
  const midStoryRef = useRef<HTMLDivElement>(null);
  const hasTrackedMidStory = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasTrackedMidStory.current) {
            // تتبع وصول المستخدم لمنتصف القصة
            if (typeof window !== 'undefined' && (window as any).fbq) {
              (window as any).fbq('track', 'ViewContent', {
                content_name: 'Mid Story Reached',
                content_category: 'Story Progress'
              });
            }
            hasTrackedMidStory.current = true;
          }
        });
      },
      { threshold: 0.5 }
    );

    if (midStoryRef.current) {
      observer.observe(midStoryRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="story-section" className="py-8 sm:py-12 px-4 bg-gray-50/30">
      <div className="max-w-3xl mx-auto">
        {/* Simple story content */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100">
          
          {/* Personal intro */}
          <div className="text-center mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">أنا سارة، عندي 28 سنة</h2>
            <p className="text-gray-600">وده اللي حصل معايا...</p>
          </div>

          {/* Opening quote */}
          <div className="bg-gray-50 rounded-xl p-4 sm:p-6 mb-6 border-r-4 border-rose-400">
            <p className="text-base sm:text-lg leading-relaxed text-gray-700 italic">
              💬 "أصل أنا مش بحب أتكلم في الحاجات دي عادة... بس الموضوع ده فعلاً غير حياتي وحسيت إني لازم أشاركه."
            </p>
          </div>

          {/* Problem section */}
          <div className="space-y-6 mb-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <span>😔</span> المشكلة بدأت بعد الولادة
              </h3>
              <p className="text-base sm:text-lg leading-relaxed text-gray-700 mb-4">
                بعد ما خلفت، لاحظت تغييرات في جسمي. البقع الداكنة في المناطق الحساسة، الجلد بقى خشن، والالتهابات المستمرة. 
                كنت بحس إني مش أنا اللي كنت عليها قبل كده.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <span>😰</span> الأثر النفسي كان صعب
              </h3>
              <p className="text-base sm:text-lg leading-relaxed text-gray-700">
                بقيت أخفف الإضاءة في الأوضة، أتجنب النظر في المراية، وأشعر بالإحراج الشديد أثناء اللحظات الحميمة. 
                حتى الوقوف قدام المراية بعد الاستحمام بقى صعب جداً عليا.
              </p>
            </div>
          </div>

          {/* Failed attempts */}
          <div className="bg-red-50 rounded-xl p-4 sm:p-6 mb-8 border-r-4 border-red-400">
            <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
              <span>😤</span> جربت كل حاجة تقريباً
            </h3>
            <p className="text-base sm:text-lg leading-relaxed text-gray-700 mb-4">
              مقشرات كيميائية سببت لي حساسية، كريمات تفتيح غالية ما جابتش نتيجة، 
              وصفات من النت، صابون طبي... كله فشل وصرفت فلوس كتير من غير أي فايدة.
            </p>
            
            <div className="flex flex-wrap gap-2 text-sm text-gray-600">
              <span className="bg-white px-2 py-1 rounded">❌ مقشرات</span>
              <span className="bg-white px-2 py-1 rounded">❌ كريمات غالية</span>
              <span className="bg-white px-2 py-1 rounded">❌ وصفات النت</span>
            </div>
          </div>

          {/* Mid-Story CTA */}
          <div className="text-center my-8 p-6 bg-amber-50 rounded-xl border border-amber-200">
            <p className="text-lg font-semibold text-gray-800 mb-4 flex items-center justify-center gap-2">
              <span>💡</span> لو انتِ كمان تعبانة من نفس المشكلة دي...
            </p>
            <a 
              href="#solution" 
              className="inline-flex items-center bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-white px-6 py-3 rounded-full font-bold transition-all duration-300 hover:scale-105 shadow-lg"
              onClick={(e) => {
                e.preventDefault();
                // تتبع النقرة على الـ CTA الوسطي
                if (typeof window !== 'undefined' && (window as any).fbq) {
                  (window as any).fbq('track', 'Lead', {
                    content_name: 'Mid Story CTA Click',
                    content_category: 'CTA Button'
                  });
                }
                window.open('https://lp.digishop.autos/', '_blank');
              }}
            >
              ⭐ شوفي الحل اللي لقيته
            </a>
          </div>

          {/* Discovery */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
              <span>🔍</span> لحظة الاكتشاف
            </h3>
            <p className="text-base sm:text-lg leading-relaxed text-gray-700">
              البنت كانت بتشارك تجربتها مع كريم طبيعي لقته على النت. مش كان فيديو إعلان ولا حاجة، 
              كانت بتحكي بصدق عن اللي حصل معاها وعايزة تساعد البنات التانية.
            </p>
          </div>

          {/* Hesitation */}
          <div className="bg-yellow-50 rounded-xl p-4 sm:p-6 mb-6 border-r-4 border-yellow-400">
            <p className="text-base sm:text-lg leading-relaxed text-amber-700 italic">
              🤔 "صراحة ترددت كتير... اتحرقت مرات قبل كده. بس حاجة جوايا قالتلي: إيه اللي هيخسرك؟ جربي مرة أخيرة."
            </p>
          </div>

          {/* Timeline */}
          <div ref={midStoryRef} className="bg-blue-50 rounded-xl p-4 sm:p-6 mb-6 border-r-4 border-blue-400">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <span>📅</span> طلبت الكريم وبدأت رحلتي معاه...
            </h3>
            
            <div className="space-y-4">
              <div className="flex gap-3">
                <span className="text-lg">💫</span>
                <div>
                  <span className="font-semibold text-blue-600">اليوم الثالث:</span>
                  <p className="text-sm sm:text-base text-gray-700">
                    أول حاجة لاحظتها إن الملمس اتغير والريحة الكريهة اللي كانت بتضايقني اختفت. حسيت إن الالتهاب هدي شوية.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-3">
                <span className="text-lg">✨</span>
                <div>
                  <span className="font-semibold text-green-600">الأسبوع الأول:</span>
                  <p className="text-sm sm:text-base text-gray-700">
                    بدأت ألاحظ إن اللون بيفتح شوية شوية، والجلد بقى أنعم لما ألمسه. كان التحسن واضح ومشجع.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-3">
                <span className="text-lg">🌟</span>
                <div>
                  <span className="font-semibold text-purple-600">الأسبوع الثاني:</span>
                  <p className="text-sm sm:text-base text-gray-700">
                    صراحة مش كنت مصدقة نفسي! البقع الداكنة تقريباً اختفت، والملمس بقى ناعم زي الحرير. كان تحول حقيقي.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Emotional transformation */}
          <div className="bg-rose-50 rounded-xl p-4 sm:p-6 mb-8 border-r-4 border-rose-400">
            <h3 className="text-lg font-semibold text-rose-600 mb-4 flex items-center gap-2">
              <span>💖</span> التغيير مش كان بس في شكل بشرتي...
            </h3>
            
            <div className="space-y-4">
              <p className="text-sm sm:text-base leading-relaxed text-gray-700">
                كان التغيير الأهم في مشاعري ونظرتي لنفسي. أول مرة من زمن طويل أقف قدام المراية وأشوف نفسي بحب مش بخجل.
              </p>
              <p className="text-sm sm:text-base leading-relaxed text-gray-700">
                رجعت أعيش لحظاتي الحميمة بطبيعية وبدون التفكير المستمر في شكلي أو إخفاء أي حاجة. 
                حسيت إني رجعت أكون أنا... الأنا اللي كنت عايزة أفتكرها تاني.
              </p>
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center">
            <div className="mb-6">
              <p className="text-base sm:text-lg text-gray-600 italic flex items-center justify-center gap-2">
                <span>💜</span> "لو انتِ بتمري بنفس اللي مريت بيه... ده الكريم اللي استعملته"
              </p>
            </div>

              <a 
                href="#product" 
              className="inline-flex items-center bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white px-8 sm:px-12 py-4 sm:py-5 rounded-full text-lg sm:text-xl font-bold transition-all duration-300 hover:scale-105 shadow-xl"
              onClick={(e) => {
                e.preventDefault();
                // تتبع النقرة على الـ CTA النهائي
                if (typeof window !== 'undefined' && (window as any).fbq) {
                  (window as any).fbq('track', 'Lead', {
                    content_name: 'Final Story CTA Click',
                    content_category: 'CTA Button'
                  });
                }
                window.open('https://lp.digishop.autos/', '_blank');
              }}
            >
              ✨ شوفي الكريم من هنا
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;