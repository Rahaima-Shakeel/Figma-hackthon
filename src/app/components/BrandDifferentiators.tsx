import React from 'react';

const BrandDifferentiators = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-2xl font-bold text-center mb-8">What makes our brand different</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Section 1: Next-Day Delivery */}
        <div className="text-center">
          <div>
            <svg className="text-blue-500 w-12 h-12 mx-auto mb-4" viewBox="0 0 24 24">
              {/* Your icon for next-day delivery here */}
            </svg>
            <h3 className="text-lg font-semibold">Next-Day Delivery</h3>
            <p className="text-gray-600">Order before 3pm and get your order the next day as standard</p>
          </div>
        </div>

        {/* Section 2: Handmade by Artisans */}
        <div className="text-center">
          <div>
            <svg className="text-green-500 w-12 h-12 mx-auto mb-4" viewBox="0 0 24 24">
              {/* Your icon for handmade by artisans here */}
            </svg>
            <h3 className="text-lg font-semibold">Handmade by Artisans</h3>
            <p className="text-gray-600">{`Handmade, crafted goods made with real passion and craftsmanship`}</p>
          </div>
        </div>

        {/* Section 3: Unbeatable Prices */}
        <div className="text-center">
          <div>
            <svg className="text-orange-500 w-12 h-12 mx-auto mb-4" viewBox="0 0 24 24">
              {/* Your icon for unbeatable prices here */}
            </svg>
            <h3 className="text-lg font-semibold">Unbeatable Prices</h3>
            <p className="text-gray-600">{`For our materials and quality, you won't find better prices anywhere`}</p>
          </div>
        </div>

        {/* Section 4: Recycled Packaging */}
        <div className="text-center">
          <div>
            <svg className="text-purple-500 w-12 h-12 mx-auto mb-4" viewBox="0 0 24 24">
              {/* Your icon for recycled packaging here */}
            </svg>
            <h3 className="text-lg font-semibold">Recycled Packaging</h3>
            <p className="text-gray-600">{`We use 100% recycled packaging to ensure our footprint is minimal`}</p>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default BrandDifferentiators;