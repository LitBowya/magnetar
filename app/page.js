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
        imageUrl="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
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
