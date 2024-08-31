
import Link from 'next/link';
import Image from 'next/image';
import discount from '@/public/coupon.jpg';


export const Hero = () => {
    
    

    return (
      <div className="overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
          <div className="mt-8 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="lg:grid lg:grid-cols-12 lg:gap-8">
              <div className="lg:col-span-6">
                <Image
                  className="h-56 w-full object-cover sm:h-72 md:h-96 lg:h-full lg:w-full"
                  src={discount}
                  alt="Hero image"
                  width={800}
                  height={600}
                />
              </div>
              <div className="mt-12 lg:mt-0 lg:col-span-6">
                <div className="sm:text-center lg:text-left">
                  <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                    <span className="block xl:inline">Best Deals, Offers and Discounts!!</span>{' '}
                    
                  </h1>
                  <p className="mt-3 text-base text-gray-800 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                    Find your favourite brands and products hot deals searching by today&apos;s hot deals or by category.
                  </p>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};