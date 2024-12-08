import React from 'react';
import Image from 'next/image';


const FurnitureSection = () => {
  return (
    <div className="w-full h-auto bg-[#F4F4F4]">
      {/* Parent Wrapper */}
      <div className="flex flex-col lg:flex-row w-full h-screen">
        {/* Left Section */}
        <div className="bg-[#2C2C60] flex flex-col justify-center px-6 lg:px-20 py-10 lg:w-1/1">
          <h1 className="text-white text-3xl lg:text-5xl font-light leading-snug lg:leading-snug mb-8">
            The furniture brand for the future, with timeless designs
          </h1>
          <button className="bg-[#605C90] text-white py-3 px-8 rounded-lg shadow-md hover:bg-[#4E4A7C] transition-all mb-8 self-start">
            View collection
          </button>
          <p className="text-white text-base lg:text-lg font-light leading-relaxed mb-8">
            A new era in eco-friendly furniture with Avelon, the French luxury
            retail brand with tasteful colors, and a beautiful way to display
            things digitally using modern web technologies.
          </p>
        </div>

        {/* Right Section */}
        <div
          className="bg-[#87A8A4] flex items-center justify-center lg:w-1/2 h-72 lg:h-auto"
        >
          <Image
            src="/images/HERO CHAIR.png"
            alt="Chair"
            width={700}
            height={700}
            className="lg:w-auto max-w-xs lg:max-w-md object-contain mt-60"
          />
        </div>
      </div>
      
    </div>
  );
};

export default FurnitureSection;
