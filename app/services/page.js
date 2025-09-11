// app/services/page.js
import Hero from '@/components/Hero';
import { Building, Home, Hospital, Warehouse, School, Briefcase, Leaf, Utensils, ShieldCheck, Bug, Rat, Worm } from 'lucide-react';

export const metadata = {
    title: 'Our Services | Magnetar - Professional Pest Control Solutions',
    description: 'Magnetar provides comprehensive pest control services for factories, residences, healthcare facilities, farms, and more. Professional solutions for all your vector control needs.',
};

export default function ServicesPage() {
    const specializedAreas = [
        { name: 'Factories', icon: Building },
        { name: 'Residences', icon: Home },
        { name: 'Manufacturing Establishments', icon: Building },
        { name: 'Health care & Hospitals Facilities', icon: Hospital },
        { name: 'Food & Drug Processing Facilities', icon: ShieldCheck },
        { name: 'Warehouses', icon: Warehouse },
        { name: 'Educational Facilities', icon: School },
        { name: 'Offices', icon: Briefcase },
        { name: 'Homes', icon: Home },
        { name: 'Government Buildings', icon: Building },
        { name: 'Farms', icon: Leaf },
        { name: 'Hotels & Restaurants', icon: Utensils },
    ];

    const pestControlServices = [
        { name: 'Termite Control', icon: Bug },
        { name: 'Farm Pest Control & Protection', icon: Leaf },
        { name: 'Cockroach Control', icon: Bug },
        { name: 'Flies Control', icon: Bug },
        { name: 'Domestic Pests', icon: Bug },
        { name: 'Mouse Control', icon: Rat },
        { name: 'Electronic Flying Insect Control Units', icon: Bug },
        { name: 'Reptile Rodent Control', icon: Worm },
        { name: 'Fumigation Control Systems', icon: Bug },
        { name: 'Flea Control', icon: Bug },
        { name: 'Insect Control', icon: Bug },
    ];

    return (
        <>
            <Hero
                title="Our Professional Services"
                subtitle="Comprehensive pest control solutions for all your needs"
                imageUrl="https://images.unsplash.com/photo-1585494189917-1d8db2d67b02?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                showButton={false}
            />

            {/* Specialized Areas Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-poppins font-bold text-gray-900 mb-4">
                            <span className="text-secondary-600">Specialized</span> Areas of Vector Control
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            We provide professional pest control services for a wide range of facilities and establishments
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {specializedAreas.map((area, index) => {
                            const Icon = area.icon;
                            return (
                                <div key={index} className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300 card-hover">
                                    <div className="flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
                                        <Icon className="h-8 w-8 text-primary-600" />
                                    </div>
                                    <h3 className="text-xl font-poppins font-semibold text-gray-900 mb-2">{area.name}</h3>
                                    <p className="text-gray-600">
                                        Professional pest control solutions tailored for {area.name.toLowerCase()}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Pest Control Services Section */}
            <section className="py-20 bg-gradient-to-r from-primary-50 to-secondary-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-poppins font-bold text-gray-900 mb-4">
                            Comprehensive <span className="text-secondary-600">Pest Control</span> Services
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Our expert team handles all types of pests with effective and environmentally conscious solutions
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {pestControlServices.map((service, index) => {
                            const Icon = service.icon;
                            return (
                                <div key={index} className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300 card-hover">
                                    <div className="flex items-center justify-center w-16 h-16 bg-secondary-100 rounded-full mb-4">
                                        <Icon className="h-8 w-8 text-secondary-600" />
                                    </div>
                                    <h3 className="text-xl font-poppins font-semibold text-gray-900 mb-2">{service.name}</h3>
                                    <p className="text-gray-600">
                                        Effective and targeted solutions for {service.name.toLowerCase()}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-3xl p-12 text-center text-white">
                        <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-6">
                            We Keep Your Business In Business!
                        </h2>
                        <p className="text-xl mb-8 max-w-4xl mx-auto">
                            Even the cleanest buildings have pest control problems. Ants, termites, cockroach, rodents, reptiles,
                            they can enter in cardboard boxes and wooden pallets, through pipes and vents, through hidden cracks and crevasses.
                            Spotting one pest means there is likely a much larger colony or nest you can not see.
                        </p>
                        <p className="text-xl font-poppins font-semibold mb-10 max-w-4xl mx-auto">
                            With the expertise this kind Magnetar Bethel pest control will handle with our vast experience.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <a
                                href="/contact"
                                className="inline-flex items-center bg-white text-primary-600 px-8 py-4 rounded-full font-poppins font-medium text-lg hover:bg-gray-100 transition-colors duration-300"
                            >
                                Contact Us Today
                                <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </a>
                            <a
                                href="/about"
                                className="inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-full font-poppins font-medium text-lg hover:bg-white hover:text-primary-600 transition-colors duration-300"
                            >
                                Learn More About Us
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-poppins font-bold text-gray-900 mb-4">
                            Why Choose <span className="text-secondary-600">Magnetar</span>?
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Our approach to pest control sets us apart from the competition
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white rounded-2xl p-8 text-center shadow-md hover:shadow-lg transition-shadow duration-300 card-hover">
                            <div className="flex items-center justify-center w-20 h-20 bg-primary-100 rounded-full mb-6 mx-auto">
                                <ShieldCheck className="h-10 w-10 text-primary-600" />
                            </div>
                            <h3 className="text-2xl font-poppins font-semibold text-gray-900 mb-4">Expertise & Experience</h3>
                            <p className="text-gray-600">
                                With years of experience in pest control, our team has the knowledge to handle any infestation, no matter how complex.
                            </p>
                        </div>

                        <div className="bg-white rounded-2xl p-8 text-center shadow-md hover:shadow-lg transition-shadow duration-300 card-hover">
                            <div className="flex items-center justify-center w-20 h-20 bg-secondary-100 rounded-full mb-6 mx-auto">
                                <svg className="h-10 w-10 text-secondary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-2m2 0v-5a2 2 0 00-2-2H9a2 2 0 00-2 2v5m4 0h4m-4 0H9m4 0v-5a2 2 0 00-4 0v5" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-poppins font-semibold text-gray-900 mb-4">Environmentally Conscious</h3>
                            <p className="text-gray-600">
                                We use solutions that are effective against pests while being safe for your family, pets, and the environment.
                            </p>
                        </div>

                        <div className="bg-white rounded-2xl p-8 text-center shadow-md hover:shadow-lg transition-shadow duration-300 card-hover">
                            <div className="flex items-center justify-center w-20 h-20 bg-primary-100 rounded-full mb-6 mx-auto">
                                <svg className="h-10 w-10 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-poppins font-semibold text-gray-900 mb-4">24/7 Emergency Service</h3>
                            <p className="text-gray-600">
                                Pest problems do not always happen during business hours. We offer emergency services to address urgent infestations.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}