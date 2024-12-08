import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const PopularProducts = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8">Our popular products</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Left Image: Wider */}
          <div className="lg:col-span-2">
            <Image
              src="/images/Product Card.png"
              alt="The Poplar suede sofa"
              className="mb-4"
              width={800}
              height={400}
              layout="responsive"
              objectFit="cover"
            />
          </div>

          {/* Second Image */}
          <div className="lg:col-span-1">
            <Image
              src="/images/Product Card (1).png"
              alt="The Dandy chair"
              className="mb-4"
              width={400}
              height={400}
              layout="responsive"
              objectFit="cover"
            />
          </div>

          {/* Third Image */}
          <div className="lg:col-span-1">
            <Image
              src="/images/Product Card (2).png"
              alt="The Dandy chair"
              className="mb-4"
              width={400}
              height={400}
              layout="responsive"
              objectFit="cover"
            />
          </div>
        </div>

        <div className="text-center mt-16">
          <Link href="#">
            <span className="text-black bg-slate-200 px-4 py-2 rounded hover:underline">
              View collection
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PopularProducts;
