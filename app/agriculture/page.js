// app/agriculture/page.js
import Hero from '@/components/Hero';
import ProductCard from '@/components/ProductCard';
import { Sprout, TrendingUp } from 'lucide-react';
import Image from "next/image";

export const metadata = {
  title: 'Agriculture Solutions | Magnetar - Advanced Farming Products',
  description: 'Explore Magnetar\'s comprehensive range of agricultural products including pest control and growth enhancers for modern farming.',
};

export default function AgriculturePage() {
  return (
    <>
      <Hero
        title=" Innovative Organic Solutions for Agriculture"
        subtitle="Bio-Pel™ Slow-Release technology is effective to repel Insects, Mite Fungi, Bacteria and Nematodes. The technology is labeled for most vegetables, fruits, nuts, herbs, spices, greenhouse and field crops, landscape plants, bulbs and flowers."
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
                Our pest control and post harvest agricultural products are designed to meet the challenges of modern farming.
                From pest control management to crop enhancement, Magnetar provides
                effective solutions that are backed by scientific research and field testing.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                We understand that every farm is unique. That is why we offer a diverse range of
                pest control and post harvest management for all environmental conditions.
              </p>

              <div className="grid grid-cols-2 gap-8 mb-8">
                <div className="flex items-center">
                  <Sprout className="h-8 w-8 text-green-500 mr-4" />
                  <div>
                    <h3 className="font-poppins font-bold text-gray-900">Crop Protection from Pest</h3>
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
                          height={850}
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
                    Agricultural <span className="text-secondary-600">Challenges</span>
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Farmers face threats like pests, low yields, and stunted crops that limit growth and food security.
                </p>
            </div>


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
                {
                    name: "Crop Damage",
                    description:
                        "Locusts, caterpillars, and other pests destroy crops before harvest.",
                    image:
                        "/images/agriculture/agrip1.jpeg",
                },
                {
                    name: "Reduced Yields",
                    description:
                        "Insects weaken plants, leading to poor harvests and food insecurity.",
                    image:
                        "/images/agriculture/agrip2.jpeg",
                },
                {
                    name: "Stunted Growth",
                    description:
                        "Pests attack seedlings and young plants, stopping them from maturing.",
                    image:
                        "/images/agriculture/agrip3.jpeg",
                },

            ].map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>
        </div>
      </section>

        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-poppins font-bold text-gray-900 mb-4">
                        Agricultural <span className="text-secondary-600">Breakthroughs</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        With healthy crops, bigger harvests, and stronger plant growth, farming becomes more rewarding and sustainable.
                    </p>
                </div>


                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        {
                            name: "Protected Fields",
                            description:
                                "Crops grow healthy and free from destructive pests.",
                            image:
                            "/images/agriculture/agris1.jpeg"
                        },
                        {
                            name: "Bigger Harvests",
                            description:
                                "Healthy plants provide more food for families and markets.",
                            image:
                            "/images/agriculture/agris2.jpeg"
                        },
                        {
                            name: "Stronger Growth",
                            description:
                                "Seedlings and young plants thrive without pest destruction.",
                            image:
                            "/images/agriculture/agris3.jpeg"
                        },


                    ].map((product, index) => (
                        <ProductCard key={index} product={product} />
                    ))}
                </div>
            </div>
        </section>
    </>
  );
}
