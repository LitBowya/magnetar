// components/ProductShowcase.js
'use client'
import {CheckCircle, Sprout, Shield, Warehouse} from 'lucide-react';

const products = [
    {
        name: 'BioPel Organic',
        description: 'Natural weed control solution made from plant extracts that effectively targets unwanted vegetation.',
        image: '/images/products/f1.jpeg',
        features: ['Organic certified', 'Environmentally safe', 'Fast acting', 'Long lasting'],
        icon: Sprout,
        color: 'text-green-600'
    },
    {
        name: 'CropShield Plus',
        description: 'Advanced insecticide formula that protects crops from over 50 different types of pests.',
        image: '/images/products/f2.jpeg',
        features: ['Broad spectrum', 'Rainfast technology', 'Crop safe', 'Residual control'],
        icon: Shield,
        color: 'text-blue-600'
    },
    {
        name: 'HarvestGuard',
        description: 'Post-harvest preservation solution that extends shelf life and reduces losses during storage and transport.',
        image: '/images/products/f3.jpeg',
        features: ['Prolongs freshness', 'Reduces spoilage', 'Safe for storage', 'Maintains quality'],
        icon: Warehouse,
        color: 'text-orange-600'
    }
];


export default function ProductShowcase() {
  return (
    <section id="products" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-poppins font-bold text-gray-900 mb-4">
            Our <span className="text-secondary-600">Featured Products</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our innovative solutions designed to meet the challenges of modern agriculture
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {products.map((product, index) => {
            const Icon = product.icon;
            return (
              <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-white rounded-full p-3 shadow-lg">
                    <Icon className={`h-8 w-8 ${product.color}`} />
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-poppins font-bold text-gray-900 mb-4">{product.name}</h3>
                  <p className="text-gray-600 mb-6">{product.description}</p>
                  <ul className="space-y-3">
                    {product.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
