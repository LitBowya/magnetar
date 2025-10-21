import React from 'react'
import {Shield} from "lucide-react";

const AboutSection = () => {
    return (

    <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                    <h2 className="text-4xl font-poppins font-bold text-gray-900 mb-6">
                        About <span className="text-secondary-600">Magnetar</span>
                    </h2>
                    <p className="text-lg text-gray-600 mb-6">
                        Magnetar is a leading provider of innovative agricultural solutions, specializing in
                        advanced pest control and biopel products. With years of research and
                        development, we deliver effective and environmentally conscious products.
                    </p>
                    <p className="text-lg text-gray-600 mb-8">
                        Our mission is to enhance agricultural productivity while minimizing environmental
                        impact through science-driven solutions that farmers and households can trust.
                    </p>
                    <div className="grid grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-2xl font-poppins font-bold text-secondary-600 mb-2">24/7</h3>
                            <p className="text-gray-600">Support Available</p>
                        </div>
                        <div>
                            <h3 className="text-2xl font-poppins font-bold text-secondary-600 mb-2">20+</h3>
                            <p className="text-gray-600">Years Experience</p>
                        </div>
                    </div>
                </div>
                <div className="relative">
                    <div className="bg-gradient-to-br from-secondary-500 to-secondary-100 rounded-2xl p-1">
                        <img
                            src="/images/home/home1.png"
                            alt="Agricultural field"
                            className="rounded-2xl shadow-lg"
                        />
                    </div>
                    <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-lg">
                        <div className="flex items-center">
                            <div className="bg-primary-100 p-3 rounded-full">
                                <Shield className="h-8 w-8 text-secondary-600" />
                            </div>
                            {/* <div>
                                <h3 className="font-poppins font-bold text-gray-900">Quality Certified</h3>
                                <p className="text-sm text-gray-600">ISO 9001:2015</p>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}
export default AboutSection
