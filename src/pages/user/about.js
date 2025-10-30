import React from "react";

const About = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      {/* Title */}
      <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
        About The Shop
      </h1>

      {/* Intro */}
      <p className="text-lg text-gray-700 leading-relaxed mb-10 text-center">
        Welcome to <span className="font-semibold">Our Gift Shop</span>, where
        creativity meets elegance. We began with a passion for making every{" "}
        <span className="font-medium">special day</span> truly memorable through
        beautifully designed gifts, ribbons, and unique carts.
      </p>

      {/* Sections */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Special Days */}
        <div className="bg-white shadow rounded-xl p-6 text-center hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">🎉 Special Days</h2>
          <p className="text-gray-700 leading-relaxed">
            From birthdays and anniversaries to Eid, Valentine’s Day, and
            Mother’s Day — we create thoughtful gifts that celebrate life’s
            biggest moments.
          </p>
        </div>

        {/* Ribbons */}
        <div className="bg-white shadow rounded-xl p-6 text-center hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">🎀 Ribbons</h2>
          <p className="text-gray-700 leading-relaxed">
            Elegant ribbons crafted to add a touch of love and style to your
            celebrations, making each gift feel extra special.
          </p>
        </div>

        {/* Gift Carts */}
        <div className="bg-white shadow rounded-xl p-6 text-center hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">🛒 Gift Carts</h2>
          <p className="text-gray-700 leading-relaxed">
            Carefully curated carts filled with surprises and joy, designed to
            bring smiles on every occasion.
          </p>
        </div>
      </div>

      {/* Mission */}
      <div className="mt-12 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-3">Our Mission</h2>
        <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
          We are committed to making your{" "}
          <span className="font-medium">special days unforgettable</span>.
          Through creativity, ribbons, and unique gift carts, we bring happiness
          to every celebration.
        </p>
      </div>
    </div>
  );
};

export default About;