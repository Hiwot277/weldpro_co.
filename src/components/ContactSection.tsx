import { useState } from 'react';
import { MapPin } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Форма отправлена! (Это демонстрация)');
    setFormData({ name: '', phone: '', message: '' });
  };

  return (
    <section id="contacts" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="border-b-4 border-orange-500 pb-3 mb-12">КОНТАКТЫ</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Map Section */}
          <div className="relative bg-gray-200 rounded-lg overflow-hidden h-[400px]">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-100">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <MapPin className="w-12 h-12 text-orange-600" />
              </div>
              <div className="absolute bottom-8 left-8 bg-white p-4 rounded-lg shadow-lg max-w-xs">
                <p className="text-sm text-gray-700">
                  улица Большая Полянка, 24С1, Москва, 119180
                </p>
              </div>
            </div>
            {/* Subtle road pattern */}
            <svg className="absolute inset-0 w-full h-full opacity-30" style={{ mixBlendMode: 'multiply' }}>
              <line x1="0" y1="50%" x2="100%" y2="50%" stroke="#999" strokeWidth="2" />
              <line x1="50%" y1="0" x2="50%" y2="100%" stroke="#999" strokeWidth="2" />
              <path d="M 20% 80% Q 50% 30%, 80% 60%" stroke="#999" strokeWidth="2" fill="none" />
            </svg>
          </div>

          {/* Contact Form */}
          <div>
            <div className="mb-8">
              <h3 className="mb-4">ОСТАЛИСЬ ВОПРОСЫ?</h3>
              <p className="text-gray-600 text-sm">
                Заполните форму и мы свяжемся с вами в ближайшее время
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Имя"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
              
              <input
                type="tel"
                placeholder="Телефон"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
              
              <textarea
                placeholder="Сообщение"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />

              <div className="text-xs text-gray-500 mb-4">
                Для того чтобы мы обработали ваши персональные данные необходимо ваше согласие на обработку. Нажимая "Отправить" вы подтверждаете свое согласие.
              </div>

              <button
                type="submit"
                className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-md transition-colors"
              >
                Отправить
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
