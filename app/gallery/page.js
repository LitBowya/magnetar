// app/gallery/page.js
'use client';
import { useState } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

const galleryImages = Array.from({ length: 22 }, (_, i) => ({
    id: i + 1,
    src: `/images/gallery/g${i + 1}.jpeg`,
    alt: `Gallery image ${i + 1}`,
    title: `Gallery Image ${i + 1}`,
}));

export default function GalleryPage() {
    const [selectedImage, setSelectedImage] = useState(null);

    const openLightbox = (image) => {
        setSelectedImage(image);
    };

    const closeLightbox = () => {
        setSelectedImage(null);
    };

    const navigateImage = (direction) => {
        const currentIndex = galleryImages.findIndex(
            (img) => img.id === selectedImage.id
        );
        let newIndex;

        if (direction === 'next') {
            newIndex = (currentIndex + 1) % galleryImages.length;
        } else {
            newIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
        }

        setSelectedImage(galleryImages[newIndex]);
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
                        Explore our work and success stories across industries and households
                    </p>
                </div>
            </section>

            {/* Gallery Grid */}
            <section className="py-12 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {galleryImages.map((image) => (
                            <div
                                key={image.id}
                                className="relative group overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
                                onClick={() => openLightbox(image)}
                            >
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    width={300}
                                    height={200}
                                    className="object-cover w-full h-48 md:h-56 transform group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                        ))}
                    </div>
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
                        className="absolute left-4 text-white hover:text-primary-400 transition-colors"
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
                            <h3 className="text-2xl font-poppins font-semibold">
                                {selectedImage.title}
                            </h3>
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
                        Contact us today for a free consultation and see how our pest control
                        solutions can work for you.
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
