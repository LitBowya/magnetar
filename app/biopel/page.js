// app/biopel/page.js
import Hero from '@/components/Hero';
import ProductCard from '@/components/ProductCard';
import {Shield, Leaf} from 'lucide-react';
import Image from "next/image";

export const metadata = {
  title: 'Biopel Products | Magnetar - Natural Agricultural Solutions',
  description: 'Explore Magnetar\'s Biopel line of natural agricultural products designed for effective and environmentally conscious pest control.',
};

export default function BiopelPage() {
  return (
    <>
      <Hero
        title="Biopel Natural Solutions"
        subtitle="Discover our eco-friendly biopel products that provide effective pest control while protecting the environment."
        imageUrl="/images/biopel/bhero.jpeg"
        showButton={false}
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-poppins font-bold text-gray-900 mb-6">
                What is <span className="text-secondary-600">Biopel</span>?
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Biopel represents our commitment to sustainable agriculture through innovative
                biological products. These solutions harness the power of natural ingredients
                to provide effective pest control while minimizing environmental impact.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Our Biopel line includes organic herbicides, natural insecticides, and
                biological growth enhancers that work in harmony with nature to protect
                your crops and improve yield.
              </p>

              <div className="grid grid-cols-2 gap-8 mb-8">
                <div className="flex items-center">
                  <Leaf className="h-8 w-8 text-green-500 mr-4" />
                  <div>
                    <h3 className="font-poppins font-bold text-gray-900">100% Organic</h3>
                    <p className="text-gray-600">Certified organic ingredients</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Shield className="h-8 w-8 text-blue-500 mr-4" />
                  <div>
                    <h3 className="font-poppins font-bold text-gray-900">Eco-Safe</h3>
                    <p className="text-gray-600">Environmentally friendly</p>
                  </div>
                </div>
              </div>
            </div>

              <div className="relative">
                  <div className="bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl p-1 h-full">
                      <Image
                          src="/images/biopel/bimage.png"
                          alt="Farm field"
                          width={1000}
                          height={850}
                          className="rounded-2xl shadow-lg w-full h-auto"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                  </div>
              </div>

          </div>
        </div>
      </section>Eco-friendly practices protect the land, water, and future generations.

      {/* Product Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
              <h2 className="text-4xl font-poppins font-bold text-gray-900 mb-4">
                  Biopel <span className="text-secondary-600">Context</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Across villages and fields, farmers struggle with tired soils,
                  high expenses, and fragile ecosystems.
              </p>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Low Crop Yields',
                description: 'Poor soil health reduces food production for farmers.',
                image: '/images/biopel/biopelp1.jpeg'
              },
              {
                name: 'High Fertilizer Costs',
                description: 'Expensive inputs strain small farmers’ limited budgets.',
                image: '/images/biopel/biopelp2.jpeg'
              },
              {
                name: 'Environmental Damage',
                description: 'Chemical use pollutes rivers, soil, and rural communities.',
                image: '/images/biopel/biopelp3.jpeg'
              }
            ].map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>
        </div>
      </section>

        {/* Product Grid */}
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-poppins font-bold text-gray-900 mb-4">
                        Biopel <span className="text-secondary-600">Opportunities</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Richer harvests, lower costs, and cleaner environments
                        create stronger farming communities across Africa.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        {
                            name: 'Boosted Harvests',
                            description: 'Healthy soil supports abundant and nutritious crops.',
                            image: '/images/biopel/biopels1.jpeg'
                        },
                        {
                            name: 'Affordable Farming',
                            description: 'A cost-friendly approach reduces dependence on costly chemicals.',
                            image: '/images/biopel/biopels2.jpeg'
                        },
                        {
                            name: 'Sustainable Farming',
                            description: 'Eco-friendly practices protect the land, water, and future generations.',
                            image: '/images/biopel/biopels3.jpeg'
                        }
                    ].map((product, index) => (
                        <ProductCard key={index} product={product} />
                    ))}
                </div>
            </div>
        </section>

      {/* Additional sections can be added here */}
    </>
  );
}
