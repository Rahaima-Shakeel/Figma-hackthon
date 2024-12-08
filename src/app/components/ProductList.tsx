import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const NewCeramics = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-8">New ceramics</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Section 1: The Dandy Chair */}
        <div className="text-center">
          <Image
            src="/images/Product Card (1).png"
            alt="The Dandy Chair"
            width={400}
            height={400}
            className="w-full h-auto mb-4"
            layout="responsive"
            objectFit="cover"
          />
        </div>

        {/* Section 2: Rustic Vase Set */}
        <div className="text-center">
          <Image
            src="/images/vase.png"
            alt="Rustic Vase Set"
            width={400}
            height={400}
            className="w-full h-auto mb-4"
            layout="responsive"
            objectFit="cover"
          />
        </div>

        {/* Section 3: The Silky Vase */}
        <div className="text-center">
          <Image
            src="/images/black vase.png"
            alt="The Silky Vase"
            width={400}
            height={400}
            className="w-full h-auto mb-4"
            layout="responsive"
            objectFit="cover"
          />
        </div>

        {/* Section 4: The Lucy Lamp */}
        <div className="text-center">
          <Image
            src="/images/lamp.png"
            alt="The Lucy Lamp"
            width={400}
            height={400}
            className="w-full h-auto mb-4"
            layout="responsive"
            objectFit="cover"
          />
        </div>
      </div>

      <div className="text-center mt-8">
        <Link href="#">
          <span className="text-black bg-slate-200 px-4 py-2 rounded hover:underline">View collection</span>
        </Link>
      </div>
    </div>
  );
};

export default NewCeramics;
