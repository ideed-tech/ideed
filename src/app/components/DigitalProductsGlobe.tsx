import { Globe } from "./ui/interactive-globe";

export function DigitalProductsGlobe() {
  return (
    <section className="bg-transparent py-16 md:py-24 relative flex items-center justify-center px-4 md:px-8">
      
      <div className="w-full max-w-6xl rounded-[2.5rem] border border-white/10 bg-[#0B0F19] overflow-hidden relative shadow-2xl">
        {/* Ambient glow inside card */}
        <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-blue-500/10 blur-[100px] pointer-events-none" aria-hidden="true" />

        <div className="flex flex-col lg:flex-row min-h-[500px] relative z-10">
          
          {/* Left Content */}
          <div className="flex-1 w-full text-center lg:text-left flex flex-col justify-center p-6 sm:p-10 md:p-16">
             
             <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[11px] font-medium text-gray-300 mb-8 w-fit mx-auto lg:mx-0 tracking-wider uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                Global Digital Reach
             </div>

             <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-white leading-[1.1] tracking-tight mb-6">
               Turning Ideas Into <br />
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                  Digital Products
               </span>
             </h2>
             
             <p className="text-base md:text-lg text-gray-400 mb-12 leading-relaxed max-w-lg mx-auto lg:mx-0 font-light">
               We design and develop websites, mobile apps, IoT systems, and digital platforms for startups, businesses, and individuals. iDEED transforms ideas into real, scalable technology solutions.
             </p>

             {/* Metrics / Specialties Bottom Grid */}
             <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-8 md:gap-12">
                <div className="flex flex-col items-center lg:items-start space-y-1">
                   <p className="text-lg md:text-xl font-bold text-white leading-none">Web &</p>
                   <p className="text-xs text-gray-500 font-medium">Mobile Apps</p>
                </div>
                
                <div className="w-px h-10 bg-white/10" aria-hidden="true" />
                
                <div className="flex flex-col items-center lg:items-start space-y-1">
                   <p className="text-lg md:text-xl font-bold text-white leading-none">UI/UX &</p>
                   <p className="text-xs text-gray-500 font-medium">Branding</p>
                </div>
                
                <div className="w-px h-10 bg-white/10" aria-hidden="true" />
                
                <div className="flex flex-col items-center lg:items-start space-y-1">
                   <p className="text-lg md:text-xl font-bold text-white leading-none">IoT &</p>
                   <p className="text-xs text-gray-500 font-medium">Automation</p>
                </div>
             </div>
          </div>

          {/* Right Globe Interactive Canvas */}
          <div className="flex-1 flex items-center justify-center relative min-h-[400px] p-6 lg:p-0">
             <Globe 
               className="w-full h-full max-w-[500px] relative z-10" 
               autoRotateSpeed={0.003} 
               arcColor="rgba(56, 189, 248, 0.4)" 
               markerColor="rgba(56, 189, 248, 1)" 
               dotColor="rgba(147, 197, 253, ALPHA)" 
             />
          </div>
        </div>
      </div>
    </section>
  );
}
