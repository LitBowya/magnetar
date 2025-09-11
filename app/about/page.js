// app/about/page.js
import Hero from '@/components/Hero';
import { Target, Eye, Shield, Users, Heart, Award } from "lucide-react";
import Image from "next/image";

export const metadata = {
    title: 'About Us | Magnetar Bethel - Innovative Agricultural Solutions',
    description: 'Learn about Magnetar Bethel\'s commitment to quality, consistency, and innovative Bio-Pel™ technology for agricultural solutions.',
};

export default function AboutPage() {
    return (
        <>
            <Hero
                title="About Magnetar Bethel"
                subtitle="Consistency, quality, and service above all else"
                imageUrl="/images/about/about.jpeg"
                showButton={false}
            />

            {/* Company Introduction Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl font-poppins font-bold text-gray-900 mb-6">
                                Our <span className="text-secondary-600">Commitment</span>
                            </h2>
                            <p className="text-lg text-gray-600 mb-6">
                                Magnetar Bethel is a company that values consistency, quality, and service above all else.
                                We give you the highest standards in product and service quality, delivery and flexible service options.
                                We are committed to exceptional service and products.
                            </p>
                            <p className="text-lg text-gray-600 mb-8">
                                Behind every company there is a good organisation and structure. We are offering our clients
                                and the agriculture industry not only high quality post-harvest losses solutions which is organic,
                                but also very effective professional services.
                            </p>
                            <div className="flex items-center bg-primary-50 rounded-xl p-4">
                                <Heart className="h-8 w-8 text-primary-600 mr-4" />
                                <p className="text-primary-700 font-poppins font-medium">
                                    We share a common goal of building relationships based on trust; this shared goal helps us
                                    to deliver our belief that great people make great companies.
                                </p>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl p-1">
                                <Image
                                    src="/images/about/aboutc.jpeg"
                                    alt="Team meeting" width={1000}
                                    height={600}
                                    className="rounded-2xl shadow-lg w-full h-auto"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                            </div>
                            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-lg">
                                <div className="flex items-center">
                                    <div className="bg-primary-100 p-3 rounded-full mr-4">
                                        <Award className="h-8 w-8 text-primary-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-poppins font-bold text-gray-900">Quality Certified</h3>
                                        <p className="text-sm text-gray-600">ISO 9001:2015</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Technology Section */}
            <section className="py-20 bg-gradient-to-r from-primary-50 to-secondary-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="relative order-2 lg:order-1">
                            <div className="bg-gradient-to-br from-green-400 to-blue-400 rounded-2xl p-1">
                                <Image
                                    src="/images/about/aboutt.jpeg"
                                    alt="Bio-Pel Technology"
                                    width={1000}
                                    height={600}
                                    className="rounded-2xl shadow-lg w-full h-auto"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                            </div>
                        </div>
                        <div className="order-1 lg:order-2">
                            <h2 className="text-4xl font-poppins font-bold text-gray-900 mb-6">
                                Our <span className="text-secondary-600">Innovative Technology</span>
                            </h2>
                            <p className="text-lg text-gray-600 mb-6">
                                Our Bio-Pel™ Slow-Release technology is effective at repelling insects, mite fungi,
                                bacteria and nematodes, prevents sprouting, bacteria and mold in post harvest storage.
                                Our synergized essential oils captured in Bio-Pel™ technology are formulated to target
                                a wide spectrum of household pests.
                            </p>
                            <p className="text-lg text-gray-600 mb-8">
                                The technology is truly cutting edge technology from Israel in the agriculture industry.
                                We will happily consult for you on the best way to solve your problem.
                            </p>
                            <div className="bg-white rounded-xl p-6 shadow-md">
                                <h3 className="text-xl font-poppins font-semibold text-gray-900 mb-3">Key Benefits:</h3>
                                <ul className="space-y-2">
                                    <li className="flex items-center">
                                        <div className="w-2 h-2 bg-primary-600 rounded-full mr-3"></div>
                                        <span className="text-gray-700">Organic and environmentally friendly</span>
                                    </li>
                                    <li className="flex items-center">
                                        <div className="w-2 h-2 bg-primary-600 rounded-full mr-3"></div>
                                        <span className="text-gray-700">Slow-release technology for long-lasting protection</span>
                                    </li>
                                    <li className="flex items-center">
                                        <div className="w-2 h-2 bg-primary-600 rounded-full mr-3"></div>
                                        <span className="text-gray-700">Effective against a wide spectrum of pests</span>
                                    </li>
                                    <li className="flex items-center">
                                        <div className="w-2 h-2 bg-primary-600 rounded-full mr-3"></div>
                                        <span className="text-gray-700">Prevents post-harvest losses</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-poppins font-bold text-gray-900 mb-4">
                            Our <span className="text-secondary-600">Mission & Vision</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Driving agricultural innovation for a sustainable future
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="bg-gradient-to-br from-primary-50 to-transparent rounded-2xl shadow-lg p-8">
                            <div className="bg-primary-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                                <Target className="h-8 w-8 text-primary-600" />
                            </div>
                            <h3 className="text-2xl font-poppins font-bold text-gray-900 mb-4">Our Mission</h3>
                            <p className="text-gray-600">
                                To provide the highest standards in product and service quality, delivery and flexible
                                service options. We are committed to exceptional service and products that meet the
                                evolving needs of the agriculture industry.
                            </p>
                        </div>
                        <div className="bg-gradient-to-br from-secondary-50 to-transparent rounded-2xl shadow-lg p-8">
                            <div className="bg-secondary-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                                <Eye className="h-8 w-8 text-secondary-600" />
                            </div>
                            <h3 className="text-2xl font-poppins font-bold text-gray-900 mb-4">Our Vision</h3>
                            <p className="text-gray-600">
                                To be the leading provider of innovative, organic post-harvest solutions that
                                significantly reduce losses while promoting sustainable agricultural practices
                                worldwide.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-poppins font-bold text-gray-900 mb-4">
                            Our <span className="text-secondary-600">Core Values</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            The principles that guide everything we do
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white rounded-2xl p-8 text-center shadow-md hover:shadow-lg transition-shadow duration-300 card-hover">
                            <div className="flex items-center justify-center w-20 h-20 bg-primary-100 rounded-full mb-6 mx-auto">
                                <Shield className="h-10 w-10 text-primary-600" />
                            </div>
                            <h3 className="text-2xl font-poppins font-semibold text-gray-900 mb-4">Quality</h3>
                            <p className="text-gray-600">
                                We never compromise on quality. Every product we deliver meets the highest standards
                                of excellence and effectiveness.
                            </p>
                        </div>

                        <div className="bg-white rounded-2xl p-8 text-center shadow-md hover:shadow-lg transition-shadow duration-300 card-hover">
                            <div className="flex items-center justify-center w-20 h-20 bg-secondary-100 rounded-full mb-6 mx-auto">
                                <Users className="h-10 w-10 text-secondary-600" />
                            </div>
                            <h3 className="text-2xl font-poppins font-semibold text-gray-900 mb-4">Trust</h3>
                            <p className="text-gray-600">
                                We build relationships based on trust with our clients, partners, and team members.
                                Honesty and integrity guide all our interactions.
                            </p>
                        </div>

                        <div className="bg-white rounded-2xl p-8 text-center shadow-md hover:shadow-lg transition-shadow duration-300 card-hover">
                            <div className="flex items-center justify-center w-20 h-20 bg-primary-100 rounded-full mb-6 mx-auto">
                                <Award className="h-10 w-10 text-primary-600" />
                            </div>
                            <h3 className="text-2xl font-poppins font-semibold text-gray-900 mb-4">Innovation</h3>
                            <p className="text-gray-600">
                                We continuously seek cutting-edge technologies and approaches to solve agricultural
                                challenges in new and effective ways.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}