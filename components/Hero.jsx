// components/Hero.js
"use client";
import Image from "next/image";
import { ArrowRight, Play } from "lucide-react";

export default function Hero({
  title,
  subtitle,
  imageUrl,
  showButton = false,
  buttonText = "Explore Products",
  buttonLink = "/products",
}) {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={imageUrl}
          alt="Hero background"
          fill
          priority
          className="object-cover"
          onError={(e) => {
            e.target.src =
              "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiNmNWY1ZjUiLz48dGV4dCB4PSI1MCUiIHk9IjUwJSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMjQiIGZpbGw9IiM5OTk5OTkiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5NYWduZXRhciBJbWFnZTwvdGV4dD48L3N2Zz4=";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-poppins font-bold mb-6 animate-fade-in">
          <span className="bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
            {title}
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto animate-slide-up">
          {subtitle}
        </p>
      </div>

      {/* Floating elements for visual interest */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary-500 rounded-full opacity-50 animate-bounce-slow"></div>
      <div
        className="absolute top-40 right-20 w-16 h-16 bg-secondary-500 rounded-full opacity-50 animate-bounce-slow"
        style={{ animationDelay: "0.2s" }}
      ></div>
      <div
        className="absolute bottom-40 left-24 w-12 h-12 bg-primary-500 rounded-full opacity-50 animate-bounce-slow"
        style={{ animationDelay: "0.4s" }}
      ></div>
    </section>
  );
}
