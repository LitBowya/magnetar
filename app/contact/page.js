// app/contact/page.js
import Hero from '@/components/Hero';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';

export const metadata = {
  title: 'Contact Us | Magnetar - Get in Touch',
  description: 'Reach out to Magnetar for inquiries about our agricultural and household products. We\'re here to help you find the right solutions.',
};

export default function ContactPage() {
  return (
    <>
      <Hero
        title="Get in Touch"
        subtitle="We're here to answer your questions and help you find the right solutions for your needs."
        imageUrl="https://images.unsplash.com/photo-1516387938699-a93567ec168e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
        showButton={false}
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-poppins font-bold text-gray-900 mb-6">
                Contact <span className="text-primary-600">Information</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Have questions about our products or need assistance? Reach out to our team through
                any of the following channels. We are always happy to help you find the right
                solutions for your agricultural or household needs.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-primary-600 mt-1 mr-4" />
                  <div>
                    <h3 className="font-poppins font-bold text-gray-900 mb-2">Phone</h3>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                    <p className="text-sm text-gray-500">Mon-Fri from 8am to 6pm</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-primary-600 mt-1 mr-4" />
                  <div>
                    <h3 className="font-poppins font-bold text-gray-900 mb-2">Email</h3>
                    <p className="text-gray-600">info@magnetar.com</p>
                    <p className="text-sm text-gray-500">We will respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-primary-600 mt-1 mr-4" />
                  <div>
                    <h3 className="font-poppins font-bold text-gray-900 mb-2">Office</h3>
                    <p className="text-gray-600">123 Agriculture Street</p>
                    <p className="text-gray-600">Farmville, CA 94203</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-primary-600 mt-1 mr-4" />
                  <div>
                    <h3 className="font-poppins font-bold text-gray-900 mb-2">Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 8:00 AM - 6:00 PM</p>
                    <p className="text-gray-600">Saturday: 9:00 AM - 1:00 PM</p>
                    <p className="text-gray-600">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-2xl font-poppins font-bold text-gray-900 mb-6">Send us a Message</h3>
                <p className="text-gray-600 mb-8">
                  Although we do not have a contact form, you can reach us directly through
                  phone or email. Our team is standing by to assist you with any questions
                  or concerns you may have about our products or services.
                </p>

                <div className="flex items-center bg-white rounded-lg p-4 mb-6">
                  <MessageCircle className="h-8 w-8 text-primary-600 mr-4" />
                  <div>
                    <h4 className="font-poppins font-bold text-gray-900">Prefer to chat?</h4>
                    <p className="text-gray-600">Use our live chat feature during business hours</p>
                  </div>
                </div>

                <div className="bg-primary-50 border border-primary-200 rounded-lg p-6">
                  <h4 className="font-poppins font-bold text-primary-900 mb-3">Emergency Support</h4>
                  <p className="text-primary-700 mb-4">
                    For urgent agricultural emergencies outside business hours, call our 24/7 support line:
                  </p>
                  <p className="text-xl font-poppins font-bold text-primary-600">+1 (555) EMERGENCY</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-poppins font-bold text-gray-900 mb-4">
              Our <span className="text-primary-600">Location</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Visit our headquarters or find a distributor near you
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="h-96 w-full bg-gray-200">
              {/* This would be a map in a real implementation */}
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary-100 to-secondary-100">
                <div className="text-center">
                  <MapPin className="h-16 w-16 text-primary-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-poppins font-bold text-gray-900">Interactive Map</h3>
                  <p className="text-gray-600">Would display our location here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
