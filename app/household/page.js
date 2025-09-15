// app/household/page.js
import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import {Shield, Leaf} from 'lucide-react';
import Image from "next/image";

export const metadata = {
  title: "Household Solutions | Magnetar - Safe Home Pest Control",
  description:
    "Discover Magnetar's household pest control products that keep your home safe and pest-free without harmful chemicals.",
};

export default function HouseholdPage() {
  return (
    <>
      <Hero
        title="Household Solutions"
        subtitle="Keep your home safe and pest-free with our effective and environmentally conscious household products."
        imageUrl="/images/household/hhero.jpeg"
        showButton={false}
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-poppins font-bold text-gray-900 mb-6">
                Safe <span className="text-secondary-600">Home Protection</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Our household products are specifically formulated to address
                common pest problems in and around your home. We prioritize
                safety for your family, pets, and the environment without
                compromising on effectiveness.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                From ant control to mosquito repellents, our solutions provide
                long-lasting protection against household pests using
                innovative, science-backed formulations.
              </p>

              <div className="grid grid-cols-2 gap-8 mb-8">
                <div className="flex items-center">
                  <Shield className="h-8 w-8 text-green-500 mr-4" />
                  <div>
                    <h3 className="font-poppins font-bold text-gray-900">
                      Family Safe
                    </h3>
                    <p className="text-gray-600">Non-toxic formulations</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Leaf className="h-8 w-8 text-blue-500 mr-4" />
                  <div>
                    <h3 className="font-poppins font-bold text-gray-900">
                      Eco-Friendly
                    </h3>
                    <p className="text-gray-600">Environmentally conscious</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl p-1">
                <Image
                  src="/images/household/himage.jpeg"
                  alt="Household"
                  width={1000}
                  height={850}
                  className="rounded-2xl shadow-lg w-full h-auto"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-poppins font-bold text-gray-900 mb-4">
                    Household <span className="text-secondary-600">Realities</span>
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Across many homes, mosquitoes disturb sleep, cockroaches spread germs,
                    and rodents damage food and property. These everyday struggles
                    threaten comfort and wellbeing.
                </p>
            </div>


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Mosquito Infestation",
                description:
                  "Mosquitoes spread malaria and disturb peaceful rest.",
                image:
                  "/images/household/householdp1.jpeg",
              },
              {
                name: "Unhygienic Homes",
                description:
                  "Cockroaches, rats, and insects contaminate food and water.",
                image:
                  "/images/household/householdp2.jpeg",
              },
              {
                name: "Bedbug Bites",
                description:
                  "Infestations cause discomfort, skin irritation, and embarrassment.",
                image:
                  "/images/household/householdp3.jpeg",
              },
            ].map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>
        </div>
      </section>

        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-poppins font-bold text-gray-900 mb-4">
                        Household <span className="text-secondary-600">Care</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        With safer, cleaner, and healthier living spaces, families enjoy
                        peaceful nights, protected kitchens, and homes free from pests.
                    </p>
                </div>


                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        {
                            name: "Peaceful Sleep",
                            description:
                                "Effective mosquito control protects families from malaria.",
                            image:
                                "/images/household/households1.jpeg",
                        },
                        {
                            name: "Safe & Clean Kitchen",
                            description:
                                "Pest-free homes improve hygiene and protect health.",
                            image:
                                "/images/household/households2.jpeg",
                        },
                        {
                            name: "Comfortable Living",
                            description:
                                "Eliminating bedbugs restores comfort and dignity at home.",
                            image:
                                "/images/household/households3.jpeg",
                        },
                    ].map((product, index) => (
                        <ProductCard key={index} product={product} />
                    ))}
                </div>
            </div>
        </section>
    </>
  );
}

