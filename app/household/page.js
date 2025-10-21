// app/household/page.js
import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import {
    Biohazard, Trash2, Footprints, Briefcase, Baby, Leaf, ShieldCheck,
    Bug, BugOff, BedDouble, Fish, Activity, HeartHandshake, Shield
} from 'lucide-react';
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

        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-poppins font-bold text-gray-900 text-center mb-12">
                Insect <span className="text-green-600">Repellent</span>
            </h2>

            {/* Bacteria Repellent */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
                {/* Text */}
                <div>
                    <div className="flex items-center mb-4">
                        <div className="bg-green-100 p-3 rounded-lg mr-3">
                            <Biohazard className="text-green-600" size={28} />
                        </div>
                        <h3 className="text-2xl font-semibold text-gray-800">
                            Bacteria Repellent
                        </h3>
                    </div>
                    <p className="text-lg text-gray-600 mb-4">
                        Synergized essential oils captured in{" "}
                        <span className="font-semibold text-green-700">Bio-Pel™ technology</span> are
                        formulated to target a wide spectrum of bacteria.
                    </p>
                    <p className="text-lg teShoe
Shoext-gray-600 mb-4">
                        The sachets are placed in areas where bad odors caused by bacterial
                        activity are present, for example:
                    </p>
                    <ul className="text-gray-600 mb-4 space-y-2">
                        <li className="flex items-center">
                            <Trash2 className="text-green-600 mr-2" size={20} />
                            Garbage cans
                        </li>
                        <li className="flex items-center">
                            <Footprints className="text-green-600 mr-2" size={20} />
                            Shoes
                        </li>
                        <li className="flex items-center">
                            <Briefcase className="text-green-600 mr-2" size={20} />
                            Gym bags
                        </li>
                        <li className="flex items-center">
                            <Baby className="text-green-600 mr-2" size={20} />
                            Diaper bags
                        </li>
                    </ul>
                    <div className="bg-gray-50 p-4 rounded-lg mt-6">
                        <p className="text-lg text-gray-600 flex items-start">
                            <Leaf className="text-green-600 mr-3 mt-1" size={24} />
                            Crafted with eco-friendly ingredients that are safe for your family
                            and the environment, each sachet neutralizes unpleasant odors while
                            combating bacteria — for a cleaner, fresher space.
                        </p>
                    </div>
                </div>
                {/* Image */}
                <div className="flex justify-center">
                    <Image
                        src="/images/household/hbacteria.png"
                        alt="Bacteria illustration"
                        width={1000}
                        height={850}
                        className="rounded-2xl shadow-lg object-cover"
                    />
                </div>
            </div>

            {/* Pest Repellent */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Image */}
                <div className="flex justify-center">
                    <Image
                        src="/images/household/hinsect.png"
                        alt="Insect illustration"
                        width={1000}
                        height={850}
                        className="rounded-2xl shadow-lg object-cover"
                    />
                </div>
                {/* Text */}
                <div>
                    <div className="flex items-center mb-4">
                        <div className="bg-amber-100 p-3 rounded-lg mr-3">
                            <Bug className="text-amber-600" size={28} />
                        </div>
                        <h3 className="text-2xl font-semibold text-gray-800">
                            Pest Repellent
                        </h3>
                    </div>
                    <p className="text-lg text-gray-600 mb-4">
                        Synergized essential oils captured in{" "}
                        <span className="font-semibold text-amber-700">Bio-Pel™ technology</span> are
                        formulated to target a wide spectrum of household pests.
                    </p>
                    <p className="text-lg text-gray-600 mb-4">
                        Only vapors are released through the sachet — oils or powders never
                        touch humans, pets, clothes, food, or utensils. All ingredients are
                        EPA approved.
                    </p>
                    <p className="text-lg text-gray-600 mb-4">
                        The sachets are placed in cupboards, drawers, and wherever pests are
                        present.
                    </p>
                    <p className="text-lg text-gray-700 font-medium mb-2">
                        Targeted insects:
                    </p>
                    <ul className="text-gray-600 mb-4 space-y-2">
                        <li className="flex items-center">
                            <BedDouble className="text-amber-600 mr-2" size={20} />
                            Bed bugs
                        </li>
                        <li className="flex items-center">
                            <Bug className="text-amber-600 mr-2" size={20} />
                            Cockroaches
                        </li>
                        <li className="flex items-center">
                            <Fish className="text-amber-600 mr-2" size={20} />
                            Silverfish
                        </li>
                        <li className="flex items-center">
                            <Activity className="text-amber-600 mr-2" size={20} />
                            Ants
                        </li>
                    </ul>
                    <div className="bg-amber-50 p-4 rounded-lg mt-6">
                        <p className="text-lg text-gray-600 flex items-start">
                            <HeartHandshake className="text-amber-600 mr-3 mt-1" size={24} />
                            Crafted with eco-friendly ingredients, our sachets provide lasting
                            protection against household pests — safe for both your home and
                            family.
                        </p>
                    </div>
                </div>
            </div>
        </section>


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
                From bacteria control to insect repellents, our solutions provide
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
                    Across many homes, pests disturb sleep, cockroaches spread germs,
                    and rodents damage food and property. These everyday struggles
                    threaten comfort and wellbeing.
                </p>
            </div>


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Budbugs infestation can be a nuisance!",
                description:
                  "Small, red-brown spots or bloodstains, Live bugs in cracks, crevices, or bedding and Sweet, musty odor.",
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
                                "Effective pest control protects families from Small, red-brown spots or bloodstains",
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

