
import { Button } from "@/components/ui/button";

const FinalCTA = () => {
  // Add click handler for the CTA button that opens landing page
  const handleCTAClick = () => {
    // Replace with actual landing page URL - for now redirecting to bikini-bliss-landing
    window.open('https://lp.digishop.autos/', '_blank');
  };

  return (
    <section id="product" className="py-16 px-4 bg-gradient-to-br from-rose-50/50 via-white to-pink-50/50 relative overflow-hidden">
      {/* Subtle background decorative elements */}
      <div className="absolute top-20 left-20 w-24 h-24 bg-gradient-to-br from-rose-200/20 to-pink-300/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-gradient-to-br from-purple-200/15 to-rose-300/15 rounded-full blur-2xl animate-pulse delay-700"></div>

      <div className="max-w-2xl mx-auto text-center relative z-10">
        {/* Natural transition */}
        <div className="mb-8">
          <p className="text-xl text-foreground mb-4">
            لو حبيتي تجربي نفس الكريم اللي استعملته...
          </p>
          <p className="text-base text-muted-foreground">
            هلاقيه هنا بنفس المكان اللي أنا طلبته منه
          </p>
        </div>

        {/* Simple product mention */}
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 mb-8 shadow-lg border border-rose-100/50">
          <div className="mb-6">
            <img 
              src="/placeholder.svg" 
              alt="الكريم الطبيعي" 
              className="w-32 h-32 mx-auto rounded-xl shadow-lg border-2 border-white/80"
            />
          </div>
          
          <h3 className="text-2xl font-semibold text-foreground mb-4">
            نفس الكريم الطبيعي
          </h3>
          
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            اللي لقيته على التيك توك وغير حياتي في أسبوعين. 
            100% طبيعي وآمن على البشرة الحساسة.
          </p>

          <div className="grid grid-cols-3 gap-4 mb-6 text-sm">
            <div className="text-center">
              <div className="text-2xl mb-1">🌿</div>
              <div className="font-medium text-green-600">طبيعي</div>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-1">⚡</div>
              <div className="font-medium text-blue-600">سريع المفعول</div>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-1">💜</div>
              <div className="font-medium text-purple-600">آمن</div>
            </div>
          </div>
        </div>

        {/* Simple, natural CTA */}
        <Button 
          onClick={handleCTAClick}
          size="lg"
          className="bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white px-12 py-6 text-xl rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 font-medium mb-6 border-2 border-white/30"
        >
          💜 شوفي الكريم من هنا
        </Button>

        {/* Gentle closing */}
        <div className="bg-gradient-to-r from-rose-50/80 to-pink-50/80 backdrop-blur-sm rounded-xl p-6 border border-rose-200/50">
          <p className="text-base text-muted-foreground italic">
            "أتمنى إن تجربتي تكون مفيدة ليكي. كل بنت تستاهل تحس بالراحة والثقة في جسمها ✨"
          </p>
          <p className="text-sm text-rose-600 mt-2 font-medium">- سارة</p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
