// app/page.js
import Hero from '@/components/Hero';
import ProductShowcase from '@/components/ProductShowcase';
import TestimonialSection from '@/components/TestimonialSection';
import BannerSection from '@/components/BannerSection';
import Image from 'next/image'
import AboutSection from "@/components/AboutSection";

export const metadata = {
  title: 'Magnetar - Innovative Agricultural Solutions',
  description: 'vvv',
};

export default function HomePage() {
  return (
    <>
      <Hero
        title="Innovative Solution for Organic Safe Pest Management and Post Harvest losses."
        subtitle=" At Magnater Bethel, we are dedicated to providing eco-friendly pest control solutions that protect your home and crops.
Our Bio-Pel™ technology ensure safely for your family, pets and environment."
        imageUrl="/images/home/home.png"
        showButton={true}
        buttonText="Explore Products"
        buttonLink="#products"
      />

        <AboutSection />

      {/* Products Section */}
      <ProductShowcase />


        {/*Product Section*/}
        <section className="py-20 bg-gradient-to-r from-primary-50 to-secondary-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    <div className="">
                        <h2 className="text-4xl font-poppins font-bold text-gray-900 mb-6">
                            Our <span className="text-secondary-600">Innovative Technology</span>
                        </h2>
                        <p className="text-lg text-gray-600 mb-6">
                            Our Bio-Pel™ Slow-Release technology is effective at repelling insects, mite fungi,
                            bacteria and nematodes, prevents sprouting, bacteria and mold in post harvest storage.
                            Our synergized essential oils captured in Bio-Pel™ technology are formulated to target
                            a wide spectrum of household pests.
                        </p>
                        <p className="text-lg text-gray-600 mb-8">
                            The technology is truly cutting edge technology from Israel in the agriculture industry.
                            We will happily consult for you on the best way to solve your problem.
                        </p>
                        <div className="bg-white rounded-xl p-6 shadow-md">
                            <h3 className="text-xl font-poppins font-semibold text-gray-900 mb-3">Key Benefits:</h3>
                            <ul className="space-y-2">
                                <li className="flex items-center">
                                    <div className="w-2 h-2 bg-primary-600 rounded-full mr-3"></div>
                                    <span className="text-gray-700">Organic and environmentally friendly</span>
                                </li>
                                <li className="flex items-center">
                                    <div className="w-2 h-2 bg-primary-600 rounded-full mr-3"></div>
                                    <span className="text-gray-700">Slow-release technology for long-lasting protection</span>
                                </li>
                                <li className="flex items-center">
                                    <div className="w-2 h-2 bg-primary-600 rounded-full mr-3"></div>
                                    <span className="text-gray-700">Effective against a wide spectrum of pests</span>
                                </li>
                                <li className="flex items-center">
                                    <div className="w-2 h-2 bg-primary-600 rounded-full mr-3"></div>
                                    <span className="text-gray-700">Prevents post-harvest losses</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="">
                        <div className="bg-gradient-to-br from-green-400 to-blue-400 rounded-2xl p-1">
                            <Image
                                src="/images/about/product-banner.png"
                                alt="Bio-Pel Technology"
                                width={1000}
                                height={750}
                                className="rounded-2xl shadow-lg w-full h-auto"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>

      {/* Testimonial Section */}
      {/* <TestimonialSection /> */}

      {/* Banner Section */}
      <BannerSection />
    </>
  );
}
