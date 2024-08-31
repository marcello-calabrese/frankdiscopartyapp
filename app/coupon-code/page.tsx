import Image from "next/image";
import shein from "@/public/sheinlogo.jpg";
import { CouponCard } from "../components/coupon-card/CouponCard";

export default function CouponCode() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1 className="text-2xl text-center align-top justify-center font-bold">
          Get the Coupon code below!! Just Copy and Paste to the Brand Website
        </h1>
        <div className="flex items-start"> {/* Added flex and items-start */}
          <Image
            className="align-center p-3 border-orange-100"
            src={shein}
            alt="appstore"
            width="500"
            height="52"
          />
          <div className="flex flex-col justify-center align-middle">
            <CouponCard />
          </div> 
        </div>
      </div>
    </main>
  );
}
