// src/app/me/page.js
import Image from "next/image";

export default function MePage() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen px-6 py-10 bg-gray-50">
      {/* Left section */}
      <div className="flex flex-col items-center md:w-1/3 mb-8 md:mb-0">
        <Image
          src="/me.jpg" // place your photo in public/me.jpg
          alt="Vishwavijeth V"
          width={160}
          height={160}
          className="w-40 h-40 rounded-full shadow-lg border-4 border-white object-cover"
        />
        <h2 className="text-2xl font-semibold mt-4 text-gray-800">
          Vishwavijeth V
        </h2>
        <p className="text-gray-600 mt-1 text-sm text-center">
          vishwavijay2621@gmail.com
        </p>
      </div>

      {/* Right section */}
      <div className="md:w-2/3 md:pl-10">
        <h1 className="text-3xl font-bold mb-4 text-gray-900">About</h1>
        <p className="text-gray-700 leading-relaxed mb-4">
          I’m a Software Engineer with experience in designing and building
          scalable, efficient software systems. My expertise includes software
          architecture, problem-solving, and implementing robust solutions that
          meet real-world requirements. I enjoy tackling complex challenges and
          creating reliable, maintainable, and high-quality software.
        </p>
      </div>
    </div>
  );
}
