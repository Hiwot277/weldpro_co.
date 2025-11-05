import { ImageWithFallback } from './figma/ImageWithFallback';

export default function AboutSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* About Company */}
        <div id="about" className="mb-20">
          <h2 className="border-b-4 border-orange-500 pb-3 mb-8">О КОМПАНИИ</h2>
          <div className="text-gray-600 space-y-4 max-w-3xl">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
              ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
              id est laborum.
            </p>
          </div>
        </div>

        {/* Quality Section */}
        <div id="quality" className="grid md:grid-cols-2 gap-8 mb-20 items-center">
          <div>
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1565383690591-1ee1b6582cef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWxkaW5nJTIwc3BhcmtzJTIwd29ya3xlbnwxfHx8fDE3NjE5MTcyNzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Welding sparks"
              className="w-full h-[400px] object-cover"
            />
          </div>
          <div>
            <h2 className="border-b-4 border-orange-500 pb-3 mb-6">КАЧЕСТВО</h2>
            <div className="text-gray-600 space-y-4">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
            </div>
          </div>
        </div>

        {/* Experience Section */}
        <div id="experience" className="grid md:grid-cols-2 gap-8 mb-20 items-center">
          <div className="order-2 md:order-1">
            <h2 className="border-b-4 border-orange-500 pb-3 mb-6">ОПЫТ</h2>
            <div className="text-gray-600 space-y-4">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1697281679290-ad7be1b10682?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWxkZXIlMjBpbmR1c3RyaWFsJTIwd29ya3xlbnwxfHx8fDE3NjE5MTcyODB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Industrial welder at work"
              className="w-full h-[400px] object-cover"
            />
          </div>
        </div>

        {/* Modern Equipment Section */}
        <div id="equipment" className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1565204294092-1b0870bd37d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZXRhbCUyMHdlbGRpbmclMjBibHVlfGVufDF8fHx8MTc2MTkxNzI4MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Modern welding equipment"
              className="w-full h-[400px] object-cover"
            />
          </div>
          <div>
            <h2 className="border-b-4 border-orange-500 pb-3 mb-6">СОВРЕМЕННОЕ ОБОРУДОВАНИЕ</h2>
            <div className="text-gray-600 space-y-4">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
