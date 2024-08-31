
import Image from 'next/image';
import Link from 'next/link';


import appstore from '@/public/app-store-logo.svg';
import bosch from '@/public/bosch-logo.svg';
import bose from '@/public/bose-logo.svg';
import next from '@/public/next.svg';
import nike from '@/public/nike-logo-black.jpg';
import shein from '@/public/sheinlogo.jpg';

export const Carousel = () => {
    return (
      <div className="grid grid-cols-3 gap-4 place-items-center h-56">
        <div>
            <Image
                src={appstore}
                alt="appstore"
                width="500"
                height="500"
            />
        </div>
        <div>
        <Image
                src={bosch}
                alt="appstore"
                width="500"
                height="500"
            />
        </div>
        <div>
        <Image
                src={bose}
                alt="appstore"
                width="500"
                height="500"
            />
        </div>
        <div>
        <Image
                src={next}
                alt="appstore"
                width="500"
                height="500"
            />
        </div>
        <div>
        <Image
                src={nike}
                alt="appstore"
                width="500"
                height="500"
            />
        </div>
        <div>
        <Link href="/coupon-code">
        <Image
                src={shein}
                alt="appstore"
                width="500"
                height="500"
            />
        </Link>
        </div>
      </div>
    );
};
