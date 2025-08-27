
const SocialProof = () => {
  const testimonials = [
    {
      id: 1,
      name: "نور أحمد",
      age: "25 سنة",
      location: "الإسكندرية",
      text: "والله العظيم النتيجة مذهلة! بعد أسبوعين فقط البقع الداكنة اختفت تماماً. مش مصدقة نفسي!",
      likes: 342,
      rating: 5,
      verified: true,
      image: "👩🏻‍💼"
    },
    {
      id: 2,
      name: "مريم سعد",
      age: "32 سنة",
      location: "القاهرة",
      text: "بعد الولادة كنت مكسوفة من جسمي... دلوقتي حاسة بثقة جديدة تماماً. شكراً لكم من كل قلبي 💕",
      likes: 198,
      rating: 5,
      verified: true,
      image: "👩🏽‍⚕️"
    },
    {
      id: 3,
      name: "سارة محمود",
      age: "28 سنة",
      location: "طنطا",
      text: "أخيراً لقيت حل فعلاً ينفع! جربت منتجات كتير قبل كده بس ده بس اللي نجح معايا. وبسعر ممتاز كمان!",
      likes: 267,
      rating: 5,
      verified: true,
      image: "👩🏻‍🎓"
    }
  ];

  const stats = [
    { number: "50,000+", label: "عميلة سعيدة", icon: "👥" },
    { number: "4.9/5", label: "تقييم العملاء", icon: "⭐" },
    { number: "14", label: "يوم للنتائج", icon: "⚡" },
    { number: "95%", label: "معدل الرضا", icon: "💯" }
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-white via-rose-50/50 to-pink-50/30 relative">
      {/* Background decorative elements */}
      <div className="absolute top-10 left-1/4 w-24 h-24 bg-gradient-to-br from-rose-200/20 to-pink-300/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-10 right-1/3 w-32 h-32 bg-gradient-to-br from-purple-200/30 to-rose-200/30 rounded-full blur-2xl animate-pulse delay-500"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            شوفي رأي العملاء الحقيقيين
          </h3>
          <p className="text-xl text-muted-foreground">
            آلاف البنات جربوا وحققوا النتائج المطلوبة ✨
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border-2 border-rose-100 text-center hover:scale-105 transition-transform duration-300">
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-2xl md:text-3xl font-bold text-rose-600 mb-1">{stat.number}</div>
              <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="space-y-6 mb-12">
          <h4 className="text-2xl font-bold text-center text-foreground mb-8">
            قصص نجاح حقيقية من عميلاتنا 💖
          </h4>
          
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id} 
              className={`bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border-2 border-rose-100/80 hover:shadow-3xl transition-all duration-300 hover:scale-[1.02] relative overflow-hidden ${
                index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
              }`}
            >
              {/* Verified Badge */}
              {testimonial.verified && (
                <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center space-x-1">
                  <span>✓</span>
                  <span>عميلة موثقة</span>
                </div>
              )}

              {/* Quote Mark */}
              <div className="absolute top-4 right-4 text-4xl text-rose-200/50 font-serif">"</div>
              
              <div className="flex items-start space-x-4">
                {/* Avatar */}
                <div className="w-16 h-16 bg-gradient-to-br from-rose-400 to-pink-500 rounded-full flex-shrink-0 flex items-center justify-center shadow-lg text-2xl">
                  {testimonial.image}
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  {/* User Info */}
                  <div className="mb-4">
                    <h5 className="text-lg font-bold text-foreground">{testimonial.name}</h5>
                    <p className="text-sm text-muted-foreground">{testimonial.age} - {testimonial.location}</p>
                    
                    {/* Rating */}
                    <div className="flex items-center space-x-1 mt-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="text-yellow-400 text-sm">⭐</span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Testimonial Text */}
                  <p className="text-lg leading-relaxed text-foreground font-medium mb-4">
                    "{testimonial.text}"
                  </p>
                  
                  {/* Interaction */}
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <button className="flex items-center space-x-1 hover:text-rose-500 transition-colors group">
                      <span className="group-hover:animate-pulse">💜</span>
                      <span className="font-semibold">{testimonial.likes}</span>
                    </button>
                    <span>منذ يومين</span>
                    <button className="text-rose-600 hover:text-rose-700 font-medium">رد</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Live Activity Feed */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border-2 border-green-200 shadow-xl">
          <h4 className="text-xl font-bold text-green-700 mb-4 text-center">
            🔴 نشاط مباشر - طلبات جديدة كل دقيقة!
          </h4>
          <div className="space-y-2 text-center">
            <p className="text-green-600 font-medium animate-pulse">
              🛍️ فاطمة من أسوان طلبت الكريم قبل 3 دقائق
            </p>
            <p className="text-green-600 font-medium animate-pulse delay-100">
              🛍️ هبة من المنصورة طلبت الكريم قبل 7 دقائق
            </p>
            <p className="text-green-600 font-medium animate-pulse delay-200">
              🛍️ ندى من الغردقة طلبت الكريم قبل 12 دقيقة
            </p>
          </div>
        </div>

        {/* Final CTA in Social Proof */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-rose-100 to-pink-100 rounded-2xl p-6 border-2 border-rose-200 shadow-lg">
            <p className="text-lg font-semibold text-rose-700 mb-4">
              انضمي لآلاف البنات اللي حققوا أحلامهم! 🌟
            </p>
            <a 
              href="#product"
              className="inline-flex items-center bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white px-8 py-4 rounded-full text-lg font-bold transition-all duration-300 hover:scale-105 shadow-xl"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('product')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              💜 أريد نفس النتائج →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
