import Link from 'next/link';

export default function BannerSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-white mb-6">
              Ready to transform your Pest Management and Post Harvest losses
          </h2>
          <p className="text-xl text-white mb-10 max-w-3xl mx-auto">
            Join thousands of farmers and households who trust Magnetar for effective and sustainable solutions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-full font-poppins font-medium text-lg hover:bg-white hover:text-primary-600 transition-colors duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
