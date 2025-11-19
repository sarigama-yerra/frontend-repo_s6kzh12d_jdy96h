import { Link } from 'react-router-dom'
import { ArrowRight, ShoppingCart, Sparkles } from 'lucide-react'

function App() {
  return (
    <div dir="rtl" className="min-h-screen relative piq-bg text-white overflow-hidden">
      {/* Ambient glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -right-24 w-[42rem] h-[42rem] rounded-full blur-3xl opacity-50" style={{background:'radial-gradient(circle, rgba(0,230,255,0.12), rgba(122,92,255,0.08) 60%, rgba(0,0,0,0) 70%)'}}></div>
        <div className="absolute -bottom-40 -left-36 w-[36rem] h-[36rem] rounded-full blur-3xl opacity-40" style={{background:'radial-gradient(circle, rgba(26,115,255,0.18), rgba(0,0,0,0) 60%)'}}></div>
      </div>

      {/* Navbar */}
      <header className="relative z-10">
        <nav className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg flex items-center justify-center neon-edge" style={{background:'#1A1A22'}}>
              <span className="text-cyan-300 font-extrabold">P</span>
            </div>
            <div>
              <p className="text-lg font-bold tracking-tight">PRINTIQ</p>
              <p className="text-xs piq-text-secondary -mt-1">الطباعة ثلاثية الأبعاد حسب طلبك</p>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-2">
            <Link className="px-4 py-2 rounded-md neon-outline text-sm" to="/products">المنتجات</Link>
            <Link className="px-4 py-2 rounded-md neon-outline text-sm" to="/custom-print">طلب طباعة مخصص</Link>
            <Link className="px-4 py-2 rounded-md neon-outline text-sm" to="/admin">لوحة التحكم</Link>
            <Link className="px-4 py-2 rounded-md flex items-center gap-2 neon-button text-sm" to="/cart">
              <ShoppingCart size={16} /> السلة
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:py-24 grid lg:grid-cols-2 gap-10 items-center">
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs piq-text-secondary neon-edge" style={{background:'#1A1A22'}}>
              <Sparkles size={14} className="text-cyan-300" /> تقنية متقدمة • جودة عالية • تسليم سريع
            </div>
            <h1 className="mt-5 text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
              منصّة الطباعة ثلاثية الأبعاد المستقبلية
            </h1>
            <p className="mt-4 text-base md:text-lg piq-text-secondary max-w-xl">
              نفّذ أفكارك من التصميم إلى المنتج النهائي بدقّة عالية. اختر من كتالوج المنتجات أو ارفع ملفك واطلب طباعة مخصصة.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/products" className="neon-button px-6 py-3 rounded-lg font-semibold">
                استكشف الكتالوج
              </Link>
              <Link to="/custom-print" className="px-6 py-3 rounded-lg font-semibold neon-outline">
                طلب طباعة مخصص
              </Link>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative h-[360px] md:h-[440px] rounded-2xl hero-gradient neon-card overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_80%_20%,rgba(0,230,255,0.12),transparent)]" />
              {/* Placeholder 3D area; actual Spline used in full build */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-40 h-40 rounded-full border border-cyan-400/30 shadow-[0_0_60px_rgba(0,230,255,0.25)] animate-pulse" />
              </div>
              <div className="absolute bottom-4 right-4 text-xs piq-text-secondary">مشهد تفاعلي ثلاثي الأبعاد</div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature cards */}
      <section className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 pb-20 grid md:grid-cols-3 gap-6">
          {[
            {title:'مواد متعددة وخيارات تشطيب',desc:'PLA، ABS، PETG، Resin مع ألوان ولمسات نهائية احترافية.'},
            {title:'أسعار شفافة وفورية',desc:'حساب تلقائي للتكلفة والزمن بناءً على إعداداتك.'},
            {title:'لوحة تحكم إدارية',desc:'إدارة المنتجات والطلبات والملفات بسهولة تامة.'},
          ].map((f, i) => (
            <div key={i} className="p-6 rounded-xl neon-card neon-edge">
              <h3 className="font-bold text-lg mb-2">{f.title}</h3>
              <p className="piq-text-secondary text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/5">
        <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="piq-text-secondary text-sm">© {new Date().getFullYear()} PRINTIQ</p>
          <div className="flex items-center gap-3 text-xs piq-text-secondary">
            <span className="inline-block w-2 h-2 rounded-full" style={{background:'#00E6FF'}}></span>
            تجربة مظلمة مستقبلية بدقة عالية
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
