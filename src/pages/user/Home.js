import React from 'react';
import BannerVideo from '../../assets/flowerbanner.mp4';
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate(); 
  return (
    
    <div className="overflow-x-hidden">
  {/* Hero Section */}
<div className="relative w-full h-[50vh] sm:h-[70vh] md:h-screen overflow-hidden">
    {/* Background Video */}
    <video
      src={BannerVideo} // imported at top
      autoPlay
      loop
      muted
      playsInline
      className="w-full h-full object-cover"
    />

    {/* Overlay Content */}
    <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-lg mt-80">
        Explore!
      </h1>
    </div>
  </div>



      {/* Our Story Section */}
      <section className="py-12 px-4 bg-white text-center">
        <h2 className="text-lg tracking-widest text-gray-500 mb-2">Our Story</h2>
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4">
          About House of Flowers
        </h3>
        <p className="max-w-2xl mx-auto text-gray-600 leading-relaxed">
          Welcome to House of Flowers — your premier destination for elegant and fresh floral arrangements.
          Our passion is creating moments through flowers, delivered with care and quality.
        </p>
      </section>

      {/* Promo Section (scroll effect) */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">

          {/* Image */}
       <div
  className="w-full md:w-1/2 overflow-hidden relative"
  data-aos="fade-right"
  data-aos-duration="1000"
>
  <img
    src={require('../../assets/boxes home.jpg')}
    alt="Promo"
    className="w-full h-full object-cover block max-w-full"
  />
</div>

          {/* Text Content */}
          <div
            className="w-full md:w-1/2 text-center md:text-left"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Birthday Bucket
            </h2>
            <p className="mb-6 text-gray-600">
              Explore our premium collection of the most beautiful buckets.
            </p>
            <button
      onClick={() => navigate("/boxes")}
      className="bg-orange-500 text-white px-6 py-3 rounded hover:bg-orange-600"
    >
      Shop Boxes
    </button>
          </div>

        </div>
      </section>

{/* ----- Collections Section ----- */}
<section className="py-12 px-4">
  <div className="text-center mb-6">
    <h2 className="text-3xl font-bold">Collections</h2>
  </div>

  <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-3">
    {/* Card 1 */}
<div className="relative group h-80 md:h-96 overflow-hidden">
      <img
        src={require('../../assets/collection1.jpg')}
        alt="Collection 1"
className="w-full h-full object-cover transition-transform duration-500 sm:scale-105 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
        <h3 className="text-white text-xl font-semibold">Graduation</h3>
      </div>
    </div>

    {/* Card 2 */}
<div className="relative group h-80 md:h-96 overflow-hidden">
      <img
        src={require('../../assets/moneycollection.png')}
        alt="Collection 2"
className="w-full h-full object-cover transition-transform duration-500 sm:scale-105 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
        <h3 className="text-white text-xl font-semibold">Money Bouquet</h3>
      </div>
    </div>

    {/* Card 3 */}
<div className="relative group h-80 md:h-96 overflow-hidden">
      <img
        src={require('../../assets/imgboxgift.jpg')}
        alt="Collection 3"
className="w-full h-full object-cover transition-transform duration-500 sm:scale-105 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
        <h3 className="text-white text-xl font-semibold">Boxes</h3>
      </div>
    </div>
  </div>
</section>


{/* ----------- Products Section ----------- */}
<section className="py-12 px-4">
  <div className="text-center mb-8">
    <h2 className="text-3xl font-bold mb-2">Featured Products</h2>
    <div className="h-[3px] bg-gray-400 w-24 mx-auto"></div>
  </div>

  {/* Product Grid */}
  <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
    
    {/* Card #1 */}
  <div className="group">
  <div className="relative w-full h-[420px] overflow-hidden">
    {/* First Image */}
    <img
      src={require('../../assets/FeaturedProduct1.1.jpg')}
      className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0 active:opacity-0"
      alt="prod"
    />
    {/* Second Image on hover or tap */}
    <img
      src={require('../../assets/FeaturedProduct1.2.jpg')}
      className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100 active:opacity-100"
      alt="prod2"
    />
    {/* Add to cart (centered) */}
       <button
      onClick={() => navigate("/occasions")}
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black text-white px-4 py-2 text-sm opacity-0 group-hover:opacity-100 active:opacity-100 transition duration-300"
    >
      View more
    </button>
  </div>
  {/* Title & Price */}
  <div className="mt-3">
    <p className="text-base font-medium">Graduation White Bouquet</p>
    <p className="text-gray-600 text-sm"></p>
  </div>
</div>


    {/* Copy the same div 11 more times and replace image + text */}
    {/* Card #2 example */}
    <div className="group">
      <div className="relative w-full h-[420px] overflow-hidden">
        <img
          src={require('../../assets/FeaturedProduct2.1.jpg')}
          className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
          alt="prod"
        />
        <img
          src={require('../../assets/FeaturedProduct2.2.jpg')}
          className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          alt="prod2"
        />
           <button
      onClick={() => navigate("/occasions")}
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black text-white px-4 py-2 text-sm opacity-0 group-hover:opacity-100 active:opacity-100 transition duration-300"
    >
      View more
    </button>
      </div>
      <div className="mt-3">
        <p className="text-base font-medium">Graduation Black Bouquet</p>
        <p className="text-gray-600 text-sm"></p>
      </div>
    </div>
    


     <div className="group">
      <div className="relative w-full h-[420px] overflow-hidden">
        <img
          src={require('../../assets/angle 2.jpg')}
          className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
          alt="prod"
        />
        <img
          src={require('../../assets/angle 1.jpg')}
          className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          alt="prod2"
        />
           <button
      onClick={() => navigate("/occasions")}
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black text-white px-4 py-2 text-sm opacity-0 group-hover:opacity-100 active:opacity-100 transition duration-300"
    >
      View more
    </button>
      </div>
      <div className="mt-3">
        <p className="text-base font-medium">The Proposal</p>
        <p className="text-gray-600 text-sm"></p>
      </div>
    </div>




     <div className="group">
      <div className="relative w-full h-[420px] overflow-hidden">
        <img
          src={require('../../assets/angles 1.jpg')}
          className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
          alt="prod"
        />
        <img
          src={require('../../assets/angles 2.jpg')}
          className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          alt="prod2"
        />
          <button
      onClick={() => navigate("/occasions")}
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black text-white px-4 py-2 text-sm opacity-0 group-hover:opacity-100 active:opacity-100 transition duration-300"
    >
      View more
    </button>
      </div>
      <div className="mt-3">
        <p className="text-base font-medium">The Proposal</p>
        <p className="text-gray-600 text-sm"></p>
      </div>
    </div>



  </div>

  <div className="text-center mt-10">
 <button
      onClick={() => navigate("/occasions")}
      className="bg-orange-400 text-white px-6 py-3 rounded hover:bg-pink-400 transition"
    >
      View All
    </button>  </div>
</section>



<section className="relative w-full h-[70vh] md:h-[60vh] lg:h-[50vh]">
  {/* Background Image */}
  <img
    src={require('../../assets/box1.jpg')}
    alt="Red Rose Collection"
    className="w-full h-full object-cover"
  />

  {/* Overlay */}
  <div className="absolute inset-0 flex">
    {/* Transparent left half */}
    <div className="w-1/2"></div>
    {/* White overlay on right half */}
    <div className="w-1/2 bg-white bg-opacity-80 flex items-center justify-center p-6">
      <div className="max-w-md">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
          Money Bouquet
        </h2>
        <p className="text-base md:text-lg text-gray-800 mb-6">
          Explore our premium more Bouquets collection—perfect for any occasion.
        </p>
         <button
      onClick={() => navigate("/bouquets")}
      className="px-6 py-3 bg-black text-white rounded hover:bg-gray-800 transition"
    >
      Explore Now
    </button>
      </div>
    </div>
  </div>
</section>



{/* Pink Roses Banner Section */}
<section className="py-12 px-4">
  <div className="flex flex-col md:flex-row items-center justify-between gap-6">

    {/* Text Area */}
    <div
      className="w-full md:w-1/2 text-center md:text-left"
      data-aos="fade-right"
      data-aos-duration="1000"
    >
      <p className="text-sm tracking-widest text-gray-500 mb-2 uppercase">Sweet Small keychains</p>
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Key Chains</h2>
      <p className="text-gray-700 mb-6 leading-relaxed">
Carry a piece of nature wherever you go.
Each flower keychain is delicately crafted to preserve the beauty of real blooms in a timeless design.
Lightweight, elegant, and full of charm — a perfect everyday accessory that never fades.      </p>

      <button
      onClick={() => navigate("/keychain")}
      className="bg-black text-white px-8 py-3 uppercase tracking-widest hover:bg-gray-800 transition"
    >
      Explore
    </button>
    </div>

    {/* Image Area */}
    <div
      className="w-full md:w-1/2 overflow-hidden"
      data-aos="fade-left"
      data-aos-duration="1000"
    >
      <img
        src={require('../../assets/key.jpg')}
        alt="Pink Roses"
        className="w-full h-auto object-cover transform transition duration-700 hover:scale-105"
      />
    </div>
  </div>
</section>



    </div>
  );
};

export default Home;
