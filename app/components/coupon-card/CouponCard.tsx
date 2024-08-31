import Link from 'next/link';

export const CouponCard = () => {
    return (
        <div className="flex flex-col items-center justify-center p-8">
            <div className="bg-white shadow-lg rounded-lg w-80 md:w-96">
            <div className="w-full h-52 bg-gray-300 rounded-t-lg flex items-center justify-center">
                <p className="text-2xl text-center text-base-content">Get 20% off on your next purchase on Shein Website</p>
            </div>
            <div className="p-4">
                <p className="text-lg text-center text-base-content">Use code (copy and paste): <span className="text-base-content">FRANK20</span></p>
                <Link href="https://www.shein.co.uk/">
                <button className="bg-lime-500 w-full p-2 rounded-md text-white">Go to Shein Website</button>
                </Link>
            </div>
            </div>
        </div>
        );
}