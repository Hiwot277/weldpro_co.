export default function PartnersSection() {
  const partners = [
    { name: 'Logoipsum', type: 'mountain' },
    { name: 'Logoipsum', type: 'circle' },
    { name: 'LIJYR', type: 'text' },
    { name: 'Logoipsum Brand Standard', type: 'lines' },
    { name: 'LOGO', type: 'bold' },
    { name: 'IPSUM', type: 'tech' },
  ];

  return (
    <section id="partners" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <h2 className="border-b-4 border-orange-500 pb-3 mb-12">НАШИ ПАРТНЕРЫ</h2>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16">
          {partners.map((partner, index) => (
            <div key={index} className="flex items-center justify-center h-20 text-gray-700">
              <div className="text-center">
                {partner.type === 'mountain' && (
                  <div className="flex flex-col items-center">
                    <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                      <path d="M30 10L10 40H50L30 10Z" fill="#3B82F6" />
                      <path d="M30 20L20 40H40L30 20Z" fill="#60A5FA" />
                    </svg>
                    <span className="text-xs mt-1">logoipsum</span>
                  </div>
                )}
                {partner.type === 'circle' && (
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-red-500 via-yellow-500 to-blue-500 flex items-center justify-center">
                    <span className="text-white text-xs">Logo</span>
                  </div>
                )}
                {partner.type === 'text' && (
                  <span className="italic tracking-wider">LIJYR</span>
                )}
                {partner.type === 'lines' && (
                  <div className="flex flex-col items-start">
                    <div className="flex items-center gap-1 mb-1">
                      <div className="w-6 h-1 bg-blue-600 rounded"></div>
                      <div className="w-6 h-1 bg-blue-600 rounded"></div>
                      <div className="w-6 h-1 bg-blue-600 rounded"></div>
                    </div>
                    <div className="text-xs">
                      <div>Logoipsum</div>
                      <div className="italic text-[10px]">Brand Standard</div>
                    </div>
                  </div>
                )}
                {partner.type === 'bold' && (
                  <span className="tracking-[0.3em]">LOGO</span>
                )}
                {partner.type === 'tech' && (
                  <span className="tracking-wider">IPSUM</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
