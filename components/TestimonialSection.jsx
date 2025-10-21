
'use client';
import { useState, useEffect } from 'react';
import {  Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Organic Farmer',
    content: 'Magnetar\'s Biopel products have transformed our farming practices. We\'ve seen a 30% increase in yield while maintaining our organic certification.',
    rating: 5,
    image: '/images/testimonial/darkl.jpeg'
  },
  {
    name: 'Michael Ogodu',
    role: 'Agricultural Engineer',
    content: 'The scientific approach behind Magnetar\'s products is impressive. Their solutions are both effective and environmentally responsible.',
    rating: 5,
    image: '/images/testimonial/darkm.jpeg'
  },
  {
    name: 'Elena Rodriguez',
    role: 'Vineyard Owner',
    content: 'We\'ve been using CropShield Plus for two seasons now. Exceptional results against pests while being gentle on our vines.',
    rating: 5,
    image: '/images/testimonial/darkl1.jpeg'
  }
];

export default function TestimonialSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gradient-to-r from-primary-50 to-secondary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-poppins font-bold text-gray-900 mb-4">
            What Our <span className="text-secondary-600">Customers Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from farmers and agricultural professionals who have experienced the Magnetar difference
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">

            <div className="relative h-72 lg:h-48 overflow-hidden">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
                    index === currentTestimonial
                      ? 'translate-x-0 opacity-100'
                      : index < currentTestimonial
                      ? '-translate-x-full opacity-0'
                      : 'translate-x-full opacity-0'
                  }`}
                >
                  <p className="text-lg text-gray-700 italic mb-8">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover mr-6"
                    />
                    <div>
                      <h4 className="font-poppins font-bold text-gray-900">{testimonial.name}</h4>
                      <p className="text-gray-600">{testimonial.role}</p>
                      <div className="flex mt-2">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
