// app/page.js
import Hero from '@/components/Hero';
import ProductShowcase from '@/components/ProductShowcase';
import TestimonialSection from '@/components/TestimonialSection';
import BannerSection from '@/components/BannerSection';
import {Shield} from 'lucide-react'
import AboutPage from "@/app/about/page";
import AboutSection from "@/components/AboutSection";

export const metadata = {
  title: 'Magnetar - Innovative Agricultural Solutions',
  description: 'Discover Magnetar\'s advanced weedicides, insecticides, and biopel products for modern agriculture and household use.',
};

export default function HomePage() {
  return (
    <>
      <Hero
        title="Innovative Agricultural Solutions"
        subtitle="Discover our advanced weedicides, insecticides, and biopel products for modern agriculture and household use."
        imageUrl="/images/home/home.png"
        showButton={true}
        buttonText="Explore Products"
        buttonLink="#products"
      />

        <AboutSection />

      {/* Products Section */}
      <ProductShowcase />

      {/* Testimonial Section */}
      <TestimonialSection />

      {/* Banner Section */}
      <BannerSection />
    </>
  );
}
