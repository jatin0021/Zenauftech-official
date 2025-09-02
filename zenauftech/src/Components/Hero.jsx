import React from "react";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="bg-gray-100 px-16 py-20">
      <div className="container mx-auto px-6 grid md:grid-cols-2 items-center gap-10">
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <span className="w-3 h-3 rounded-full bg-lime-400"></span>
            <span className="w-3 h-3 rounded-full bg-green-800"></span>
            <span className="text-gray-700 font-medium text-2xl">
              Elevate Your Brand With Us
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Empowering Your <br /> Success with <br /> Digital Expertise
          </h1>

          <p className="text-gray-500 mb-8 w-3/4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore.
          </p>

          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 px-6 py-3 bg-green-900 text-white rounded-full shadow hover:bg-green-800 transition">
              Explore More <ArrowRight size={18} />
            </button>
            <button className="text-green-900 font-medium underline">
              View All Services
            </button>
          </div>
        </div>

        {/* Right Content */}
        <div className="relative flex justify-center">
          {/* Image Collage */}
          <div className="grid grid-cols-2 gap-4 max-w-sm">
            <img
              src="./successful-business-team-smiling-camera.jpg"
              alt="team-1"
              className="rounded-2xl object-cover col-span-2"
            />
            <img
              src="./successful-business-team-smiling-camera.jpg"
              alt="team-2"
              className="rounded-2xl object-cover"
            />
            <img
              src="./successful-business-team-smiling-camera.jpg"
              alt="team-3"
              className="rounded-2xl object-cover"
            />
          </div>

          <div className="absolute -left-8 top-1/2 -translate-y-1/2 w-[100px] h-[100px] bg-green-900 text-white px-4 py-2 rounded-full text-sm font-semibold shadow">
            Hire Us
          </div>

          <div className="absolute -bottom-6 right-1 text-lime-400 text-5xl">
            ✨
          </div>
        </div>
      </div>
    </section>
  );
}
