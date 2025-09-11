// app/gallery/page.js
'use client';
import { useState } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight, Search, ZoomIn } from 'lucide-react';

// export const metadata = {
//     title: 'Gallery | Magnetar - Our Work in Pest Control',
//     description: 'View our gallery of successful pest control projects across various industries including factories, hospitals, farms, and residential properties.',
// };

// Sample images from Unsplash related to pest control and facilities
const galleryImages = [
    {
        id: 1,
        src: 'https://images.unsplash.com/photo-1585494189917-1d8db2d67b02?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        alt: 'Pest control in factory setting',
        category: 'Factories',
        title: 'Industrial Pest Management'
    },
    {
        id: 2,
        src: 'https://images.unsplash.com/photo-1555854871-d4c5fdb98aa8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        alt: 'Hospital pest control',
        category: 'Healthcare',
        title: 'Healthcare Facility Protection'
    },
    {
        id: 3,
        src: 'https://images.unsplash.com/photo-1461354464878-ad92f492a5a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        alt: 'Farm pest control',
        category: 'Farms',
        title: 'Agricultural Pest Solutions'
    },
    {
        id: 4,
        src: 'https://images.unsplash.com/photo-1560448204-603b3fc33ddc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        alt: 'Warehouse pest management',
        category: 'Warehouses',
        title: 'Storage Facility Protection'
    },
    {
        id: 5,
        src: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        alt: 'Office pest control',
        category: 'Offices',
        title: 'Commercial Office Solutions'
    },
    {
        id: 6,
        src: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        alt: 'Home pest control',
        category: 'Residences',
        title: 'Residential Pest Management'
    },
    {
        id: 7,
        src: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        alt: 'Restaurant pest control',
        category: 'Restaurants',
        title: 'Food Service Protection'
    },
    {
        id: 8,
        src: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        alt: 'School pest control',
        category: 'Education',
        title: 'Educational Facility Solutions'
    },
    {
        id: 9,
        src: 'https://images.unsplash.com/photo-1572021335466-0cd2cee6c7a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        alt: 'Government building pest control',
        category: 'Government',
        title: 'Public Building Protection'
    },
    {
        id: 10,
        src: 'https://images.unsplash.com/photo-1576671414121-aa0eb65182cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        alt: 'Manufacturing pest control',
        category: 'Manufacturing',
        title: 'Production Facility Management'
    },
    {
        id: 11,
        src: 'https://images.unsplash.com/photo-1594736797933-d0401ba94693?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        alt: 'Hotel pest control',
        category: 'Hotels',
        title: 'Hospitality Industry Solutions'
    },
    {
        id: 12,
        src: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        alt: 'Pharmaceutical facility pest control',
        category: 'Healthcare',
        title: 'Pharmaceutical Protection'
    },
];

export default function GalleryPage() {
    const [selectedImage, setSelectedImage] = useState(null);
    const [filter, setFilter] = useState('all');

    const filteredImages = filter === 'all'
        ? galleryImages
        : galleryImages.filter(image => image.category === filter);

    const categories = ['all', ...new Set(galleryImages.map(image => image.category))];

    const openLightbox = (image) => {
        setSelectedImage(image);
    };

    const closeLightbox = () => {
        setSelectedImage(null);
    };

    const navigateImage = (direction) => {
        const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
        let newIndex;

        if (direction === 'next') {
            newIndex = (currentIndex + 1) % filteredImages.length;
        } else {
            newIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
        }

        setSelectedImage(filteredImages[newIndex]);
    };

    return (
        <>
            {/* Hero Section */}
            <section className="relative py-20 bg-gradient-to-br from-primary-50 to-secondary-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-poppins font-bold text-gray-900 mb-6">
                        Our <span className="text-primary-600">Gallery</span>
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Explore our successful pest control projects across various industries and facilities
                    </p>
                </div>
            </section>

            {/* Filter Section */}
            <section className="py-12 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap justify-center gap-4">
                        {categories.map(category => (
                            <button
                                key={category}
                                onClick={() => setFilter(category)}
                                className={`px-6 py-2 rounded-full font-poppins font-medium transition-all duration-300 ${
                                    filter === category
                                        ? 'bg-primary-600 text-white'
                                        : 'bg-gray-100 text-gray-700 hover:bg-primary-100 hover:text-primary-600'
                                }`}
                            >
                                {category.charAt(0).toUpperCase() + category.slice(1)}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Gallery Grid */}
            <section className="py-12 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredImages.map((image, index) => (
                            <div
                                key={image.id}
                                className={`relative group overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 card-hover ${
                                    index % 5 === 0 ? 'md:col-span-2 md:row-span-2' : ''
                                }`}
                                onClick={() => openLightbox(image)}
                            >
                                <div className="aspect-w-16 aspect-h-9">
                                    <Image
                                        src={image.src}
                                        alt={image.alt}
                                        width={600}
                                        height={400}
                                        className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500"
                                    />
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-sm text-primary-300 font-poppins font-medium mb-1">
                    {image.category}
                  </span>
                                    <h3 className="text-xl font-poppins font-semibold text-white mb-2">
                                        {image.title}
                                    </h3>
                                    <div className="flex items-center justify-center w-10 h-10 bg-primary-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <ZoomIn className="h-5 w-5 text-white" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {filteredImages.length === 0 && (
                        <div className="text-center py-12">
                            <Search className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                            <h3 className="text-xl font-poppins font-semibold text-gray-700">
                                No images found for this category
                            </h3>
                            <p className="text-gray-600 mt-2">
                                Try selecting a different category or check back later for new additions.
                            </p>
                        </div>
                    )}
                </div>
            </section>

            {/* Lightbox Modal */}
            {selectedImage && (
                <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
                    <button
                        onClick={closeLightbox}
                        className="absolute top-4 right-4 text-white hover:text-primary-400 transition-colors"
                    >
                        <X className="h-8 w-8" />
                    </button>

                    <button
                        onClick={() => navigateImage('prev')}
                        className="absolutse left-4 text-white hover:text-primary-400 transition-colors"
                    >
                        <ChevronLeft className="h-8 w-8" />
                    </button>

                    <button
                        onClick={() => navigateImage('next')}
                        className="absolute right-4 text-white hover:text-primary-400 transition-colors"
                    >
                        <ChevronRight className="h-8 w-8" />
                    </button>

                    <div className="max-w-4xl mx-auto">
                        <div className="relative">
                            <Image
                                src={selectedImage.src}
                                alt={selectedImage.alt}
                                width={800}
                                height={600}
                                className="rounded-lg object-contain max-h-[80vh]"
                            />
                        </div>
                        <div className="text-center mt-4 text-white">
                            <h3 className="text-2xl font-poppins font-semibold">{selectedImage.title}</h3>
                            <p className="text-primary-300">{selectedImage.category}</p>
                        </div>
                    </div>
                </div>
            )}

            {/* Call to Action */}
            <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-poppins font-bold text-white mb-6">
                        Ready to Protect Your Property?
                    </h2>
                    <p className="text-xl text-white mb-10 max-w-3xl mx-auto">
                        Contact us today for a free consultation and see how our pest control solutions can work for you.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <a
                            href="/contact"
                            className="inline-flex items-center bg-white text-primary-600 px-8 py-4 rounded-full font-poppins font-medium text-lg hover:bg-gray-100 transition-colors duration-300"
                        >
                            Get Free Consultation
                        </a>
                        <a
                            href="/services"
                            className="inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-full font-poppins font-medium text-lg hover:bg-white hover:text-primary-600 transition-colors duration-300"
                        >
                            View Our Services
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}