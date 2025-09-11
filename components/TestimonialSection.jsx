
'use client';
import { useState, useEffect } from 'react';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Organic Farmer',
    content: 'Magnetar\'s Biopel products have transformed our farming practices. We\'ve seen a 30% increase in yield while maintaining our organic certification.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
  },
  {
    name: 'Michael Chen',
    role: 'Agricultural Engineer',
    content: 'The scientific approach behind Magnetar\'s products is impressive. Their solutions are both effective and environmentally responsible.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
  },
  {
    name: 'Elena Rodriguez',
    role: 'Vineyard Owner',
    content: 'We\'ve been using CropShield Plus for two seasons now. Exceptional results against pests while being gentle on our vines.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
  }
];

export default function TestimonialSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
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
            What Our <span className="text-primary-600">Customers Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from farmers and agricultural professionals who have experienced the Magnetar difference
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <Quote className="h-12 w-12 text-primary-200 mb-6" />

            <div className="relative h-48 overflow-hidden">
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
                  <p className="text-xl text-gray-700 italic mb-8">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover mr-6"
                      onError={(e) => {
                        e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiBmaWxsPSIjZjVmNWY1Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEyIiBmaWxsPSIjOTk5OTk5IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+QXZhdGFyPC90ZXh0Pjwvc3ZnPg==';
                      }}
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

          {/* Navigation arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-12 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow"
          >
            <ChevronLeft className="h-6 w-6 text-primary-600" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-12 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow"
          >
            <ChevronRight className="h-6 w-6 text-primary-600" />
          </button>

          {/* Dots indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentTestimonial ? 'bg-primary-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
