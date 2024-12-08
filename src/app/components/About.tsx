import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const AboutSection = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Text Section */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold mb-4">
              From a studio in London to a global brand with over 400 outlets
            </h2>
            <p className="text-gray-600 mb-8">
              When we started Avion, the idea was simple. Make high-quality furniture affordable and available for the mass market.
            </p>
            <p className="text-gray-600 mb-8">
              Handmade and lovingly crafted furniture and homeware is what we live, breathe, and design so our Chelsea boutique became the hotbed for the London interior design community.
            </p>
            <Link href="#">
              <span className="text-black bg-slate-200 px-4 py-2 rounded hover:underline">Get in touch</span>
            </Link>
          </div>

          {/* Image Section */}
          <div className="text-center md:text-right">
            <Image
              src="/images/Features.png"
              alt="About Us"
              width={500}
              height={400}
              className="w-full h-auto"
              layout="responsive"
              objectFit="cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
