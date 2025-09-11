// app/pest-control/page.js
import Hero from '@/components/Hero';
import ProductCard from '@/components/ProductCard';
import { Package, Truck } from 'lucide-react';
import Image from "next/image";

export const metadata = {
    title: 'Pest Control Solutions | Magnetar - Crop Preservation Products',
    description: 'Discover Magnetar\'s pest control products designed to protect and preserve your crops after harvesting, reducing waste and maintaining quality.',
};

export default function PestControlPage() {
    return (
        <>
            <Hero
                title="Pest Control Solutions"
                subtitle="Protect and preserve your harvest with our innovative pest control products that reduce waste and maintain quality."
                imageUrl="/images/pest-control/pchero.jpeg" // Pest spraying in crops
                showButton={false}
            />

            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl font-poppins font-bold text-gray-900 mb-6">
                                Protecting Your <span className="text-secondary-600">Harvest</span>
                            </h2>
                            <p className="text-lg text-gray-600 mb-6">
                                Pest control losses can significantly impact your profitability. Our pest control
                                solutions are designed to protect your crops from spoilage, pests, and diseases
                                during storage and transportation.
                            </p>
                            <p className="text-lg text-gray-600 mb-8">
                                We offer a range of products that help maintain the quality, freshness, and market
                                value of your produce from the field to the consumer.
                            </p>

                            <div className="grid grid-cols-2 gap-8 mb-8">
                                <div className="flex items-center">
                                    <Package className="h-8 w-8 text-green-500 mr-4" />
                                    <div>
                                        <h3 className="font-poppins font-bold text-gray-900">Storage Protection</h3>
                                        <p className="text-gray-600">Prevent spoilage during storage</p>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <Truck className="h-8 w-8 text-blue-500 mr-4" />
                                    <div>
                                        <h3 className="font-poppins font-bold text-gray-900">Transport Safety</h3>
                                        <p className="text-gray-600">Maintain quality during transit</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl p-1">
                                <Image
                                    src="/images/pest-control/pcimage.jpeg" // Pest fumigation / prevention
                                    alt="Pest Control Storage"
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
                            Pest Control <span className="text-secondary-600">Product Line</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Explore our range of solutions designed for crop preservation
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                name: 'StoreSafe Granules',
                                description: 'Prevent mold and pest infestation in stored grains',
                                image: '/images/products/pest-1.jpeg' // Stored grains pest prevention
                            },
                            {
                                name: 'FreshKeep CoatingsFreshKeep Coatings',
                                description: 'Extend the shelf life of fruits and vegetables',
                                image: '/images/products/pest-2.jpeg' // Pest-free produce
                            },
                            {
                                name: 'TransportGuard Sprays',
                                description: 'Protect produce during transportation from spoilage',
                                image: '/images/products/pest-3.jpeg' // Spraying crops against pests
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
