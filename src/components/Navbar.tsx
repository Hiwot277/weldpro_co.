import { Menu } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#3a3a3a] text-white sticky top-0 z-50">
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="flex justify-between items-center h-[52px]">
          <div className="flex-shrink-0">
            <span className="text-white text-sm">Welding Co.</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-12">
            <a href="#about" className="hover:text-gray-300 transition-colors text-sm">
              О компании
            </a>
            <a href="#partners" className="hover:text-gray-300 transition-colors text-sm">
              Партнеры
            </a>
            <a href="#contacts" className="hover:text-gray-300 transition-colors text-sm">
              Контакты
            </a>
          </div>

          <div className="hidden md:block text-sm">
            +7 (987) 765 - 43 - 21
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-gray-300 transition-colors"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-3">
              <a href="#about" className="hover:text-gray-300 transition-colors text-sm" onClick={() => setIsOpen(false)}>
                О компании
              </a>
              <a href="#partners" className="hover:text-gray-300 transition-colors text-sm" onClick={() => setIsOpen(false)}>
                Партнеры
              </a>
              <a href="#contacts" className="hover:text-gray-300 transition-colors text-sm" onClick={() => setIsOpen(false)}>
                Контакты
              </a>
              <div className="text-sm pt-2 border-t border-gray-600">
                +7 (987) 765 - 43 - 21
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
