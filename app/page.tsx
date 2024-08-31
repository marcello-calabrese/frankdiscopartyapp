import React from "react"; // Add this line

import Image from "next/image";
import { Hero } from "./components/hero/Hero";
import { Carousel } from "./components/carousel/Carousel";
import { Footer } from "./components/footer/Footer";  


export default function Home() {
  return (
    <main>
      <div className="bg-lime-500 container max-w-full">
        <div className="mb-0.5">
          <p className="text-center text-5xl text-base-content">
            Welcome to your discount page
          </p>
        </div>
        <div>
          <Hero />
        </div>
      </div>

      <div className="container bg-white max-w-full">
        <div className="mb-0.5 mt-3">
          <p className="text-center text-5xl text-base-content">
            Today&apos;s Hot Coupons Code
          </p>
        </div>

        <div className="mt-8">
          <Carousel />
        </div>
        
        
      </div>

     
    </main>
    
  );
}
