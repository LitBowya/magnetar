// app/agriculture/page.js
import Hero from '@/components/Hero';
import ProductCard from '@/components/ProductCard';
import { Sprout, TrendingUp } from 'lucide-react';
import Image from "next/image";

export const metadata = {
  title: 'Agriculture Solutions | Magnetar - Advanced Farming Products',
  description: 'Explore Magnetar\'s comprehensive range of agricultural products including weedicides, insecticides, and growth enhancers for modern farming.',
};

export default function AgriculturePage() {
  return (
    <>
      <Hero
        title="Agricultural Solutions"
        subtitle="Discover our comprehensive range of products designed to enhance productivity and protect your crops."
        imageUrl="/images/agriculture/ahero.jpeg"
        showButton={false}
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-poppins font-bold text-gray-900 mb-6">
                Advanced <span className="text-secondary-600">Farming Solutions</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Our agricultural products are designed to meet the challenges of modern farming.
                From weed control to pest management and crop enhancement, Magnetar provides
                effective solutions that are backed by scientific research and field testing.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                We understand that every farm is unique. That is why we offer a diverse range of
                products that can be tailored to specific crops, soil types, and environmental conditions.
              </p>

              <div className="grid grid-cols-2 gap-8 mb-8">
                <div className="flex items-center">
                  <Sprout className="h-8 w-8 text-green-500 mr-4" />
                  <div>
                    <h3 className="font-poppins font-bold text-gray-900">Crop Protection</h3>
                    <p className="text-gray-600">Comprehensive pest management</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <TrendingUp className="h-8 w-8 text-blue-500 mr-4" />
                  <div>
                    <h3 className="font-poppins font-bold text-gray-900">Yield Enhancement</h3>
                    <p className="text-gray-600">Boost productivity and quality</p>
                  </div>
                </div>
              </div>
            </div>

              <div className="relative">
                  <div className="bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl p-1 h-full">
                      <Image
                          src="/images/agriculture/aimage.jpeg"
                          alt="Farm field"
                          width={1000}
                          height={600}
                          className="rounded-2xl shadow-lg w-full h-auto"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                  </div>
              </div>

          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-poppins font-bold text-gray-900 mb-4">
              Agricultural <span className="text-primary-600">Product Line</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our range of solutions designed for modern agriculture
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'WeedMaster Pro',
                description: 'Advanced herbicide for broad-spectrum weed control',
                image: '/images/products/a1.jpeg'
              },
              {
                name: 'InsectGuard Plus',
                description: 'Effective insecticide against common agricultural pests',
                image: '/images/products/a2.jpeg'
              },
              {
                name: 'CropBoost Elite',
                description: 'Plant growth regulator for enhanced yield and quality',
                image: '/images/products/a3.jpeg'
              }
            ].map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
