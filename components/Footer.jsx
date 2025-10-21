"use client";

import Link from "next/link";
import { Facebook, Instagram, Linkedin, Phone, Mail, MapPin } from "lucide-react";
import { SiTiktok } from "react-icons/si"; // TikTok icon

import Logo from "@/components/Logo";


export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-100 to-white pt-16 pb-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="col-span-1 lg:col-span-2">
            <Link href="/" className="flex items-center mb-6">
              <Logo size={"xl"} />
            </Link>
            <p className="text-gray-600 mb-6 max-w-md">
              Providing innovative solutions for agricultural excellence and household protection.
              Our products are designed to enhance productivity while being environmentally conscious.
            </p>

            {/* Social Media Links */}
            <div className="flex space-x-4">
              {/* Facebook */}
              <a
                href="https://www.facebook.com/share/1BCaPg1etp/"
                target="_blank"
                rel="noopener noreferrer"
                className="relative group bg-primary-100 text-primary-600 rounded-full p-3 shadow-sm 
                           transition-all duration-300 ease-out transform hover:scale-110 hover:rotate-6 hover:shadow-lg 
                          overflow-hidden"
              >
              
                <Facebook className="h-5 w-5 relative z-10" />
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/magnetar_bethel?igsh=MWJqZHJicjNpb2dudw=="
                target="_blank"
                rel="noopener noreferrer"
                className="relative group bg-primary-100 text-primary-600 rounded-full p-3 shadow-sm 
                           transition-all duration-300 ease-out transform hover:scale-110 hover:rotate-6 hover:shadow-lg 
                          overflow-hidden"
              >
               
                <Instagram className="h-5 w-5 relative z-10" />
              </a>

              {/* TikTok */}
              <a
                href="https://www.tiktok.com/@magnetarel?_t=ZM-90cumqp5F5H&_r=1"
                target="_blank"
                rel="noopener noreferrer"
                className="relative group bg-primary-100 text-primary-600 rounded-full p-3 shadow-sm 
                           transition-all duration-300 ease-out transform hover:scale-110 hover:rotate-6 hover:shadow-lg 
                          overflow-hidden"
              >
                
                <SiTiktok className="h-5 w-5 relative z-10" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-poppins font-semibold text-gray-900 mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {["Biopel", "Post-Harvest", "Household", "Agriculture", "Services", "About", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      href={`/${item.toLowerCase().replace(" ", "-")}`}
                      className="text-gray-600 hover:text-primary-600 transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-poppins font-semibold text-gray-900 mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <Phone className="h-5 w-5 text-primary-600 mt-1 mr-3" />
                <span className="text-gray-600">+233 55 483 6031</span>
              </div>
              <div className="flex items-start">
                <Mail className="h-5 w-5 text-primary-600 mt-1 mr-3" />
                <span className="text-gray-600">info@magnetarel.com</span>
              </div>
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-primary-600 mt-1 mr-3" />
                <span className="text-gray-600">
                  Office location: No. 28, 31th Street, Dansoman, Accra, Ghana
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} Magnetar. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-600 hover:text-primary-600 text-sm ">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-600 hover:text-primary-600 text-sm ">
              Terms of Service
            </a>
            <a href="#" className="text-gray-600 hover:text-primary-600 text-sm ">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
