// components/ProductShowcase.js
'use client'
import {CheckCircle, Sprout, Shield, Warehouse} from 'lucide-react';

const products = [
    {
        name: 'Insect Repellent for a Pest-Free Home',
        description: 'Our Bio-Pel™ sachets effectively repel bed bugs, cockroaches, ants, and silverfish without harming humans or pets.',
        image: '/images/home/home-insect.png',
        features: ['Organic certified', 'Environmentally safe', 'Fast acting', 'Long lasting'],
        icon: Sprout,
        color: 'text-green-600'
    },
    {
        name: 'Bacteria Repellent for Cleaner Spaces',
        description: 'Neutralize unpleasant odors and bacteria in your home with our Bio-Pel™ sachets.',
        image: '/images/home/home-bacteria.png',
        features: ['Broad spectrum', 'Rainfast technology', 'Crop safe', 'Residual control'],
        icon: Shield,
        color: 'text-blue-600'
    },
    {
        name: 'Anti-Sprouting Solutions for Longer Shelf Life',
        description: 'Prevent sprouting and decay in tubers with our slow-release essential oils.',
        image: '/images/home/home-plant.png',
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
            Our <span className="text-secondary-600">Innovative Pest Control and Organic Preservation Solutions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our range of eco-friendly pest control solutions designed to protect your home and crops. Our products utilize advanced technology to ensure safety and effectiveness.
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
