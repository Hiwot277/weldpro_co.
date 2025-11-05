import { MessageCircle } from 'lucide-react';
import heroImage from 'figma:asset/da071c5c12963ed1603d5310839fd631008ba3ca.png';

export default function HeroSection() {
  return (
    <section className="relative h-[460px] w-full overflow-hidden bg-black">
      {/* Background Image */}
      <img 
        src={heroImage}
        alt="Welding sparks"
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      {/* Content */}
      <div className="relative max-w-[1200px] mx-auto px-8 h-full flex flex-col justify-center">
        <h1 className="text-white text-[72px] leading-[1.1] mb-4" style={{ fontWeight: 700 }}>
          Welding Co.
        </h1>
        <p className="text-white text-[15px] max-w-[520px] mb-8 leading-[1.6]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div>
          <button className="bg-[#d97f3c] hover:bg-[#c16f2f] text-white px-8 py-3 text-sm transition-colors">
            Обратная связь
          </button>
        </div>
      </div>

      {/* Floating Button */}
      <button className="absolute bottom-8 right-8 w-12 h-12 bg-[#d97f3c] hover:bg-[#c16f2f] rounded-full flex items-center justify-center transition-colors shadow-lg">
        <MessageCircle className="w-6 h-6 text-white" />
      </button>
    </section>
  );
}
