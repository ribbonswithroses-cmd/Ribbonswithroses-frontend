import React from "react";
import { Gift, CalendarHeart, ShieldCheck, Info, BookOpen } from "lucide-react";

const Policy = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      {/* Title */}
      <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
        Substitution Policy
      </h1>

      {/* Introduction */}
      <div className="bg-white shadow-md rounded-xl p-6 mb-8">
        <div className="flex items-center gap-2 mb-3">
          <BookOpen className="w-6 h-6 stroke-current text-yellow-500" />
          <h2 className="text-2xl font-semibold text-gray-800">Introduction</h2>
        </div>
        <p className="text-lg text-gray-700 leading-relaxed">
          We take great pride in delivering high-quality products. However,
          certain items (such as ribbons, baskets, or special packaging) may be
          limited at times. In such cases, substitutions may be necessary to
          ensure your order is delivered on time while maintaining the same
          quality and value.
        </p>
      </div>

      {/* Section 1: Product Substitutions */}
      <div className="bg-white shadow-md rounded-xl p-6 mb-8">
        <div className="flex items-center gap-2 mb-3">
          <Gift className="w-6 h-6 stroke-current text-pink-600" />
          <h2 className="text-2xl font-semibold text-gray-800">
            Product Substitutions
          </h2>
        </div>
        <p className="text-lg text-gray-700 leading-relaxed">
          If a certain flower, ribbon, or accessory is unavailable, we will
          substitute it with an item of equal or greater value. Substitutions
          are made carefully, keeping the overall style, theme, and color scheme
          of your chosen arrangement.
        </p>
      </div>

      {/* Section 2: Special Occasions */}
      <div className="bg-white shadow-md rounded-xl p-6 mb-8">
        <div className="flex items-center gap-2 mb-3">
          <CalendarHeart className="w-6 h-6 stroke-current text-red-500" />
          <h2 className="text-2xl font-semibold text-gray-800">
            Special Occasions
          </h2>
        </div>
        <p className="text-lg text-gray-700 leading-relaxed">
          For important events (such as weddings, anniversaries, or birthdays),
          we prioritize contacting you in advance if a major substitution is
          required. Minor changes (such as ribbon styles, fillers, or packaging)
          may be made without notice to ensure timely delivery.
        </p>
      </div>

      {/* Section 3: Guarantee */}
      <div className="bg-white shadow-md rounded-xl p-6 mb-8">
        <div className="flex items-center gap-2 mb-3">
          <ShieldCheck className="w-6 h-6 stroke-current text-green-600" />
          <h2 className="text-2xl font-semibold text-gray-800">Our Guarantee</h2>
        </div>
        <p className="text-lg text-gray-700 leading-relaxed">
          Every substitution is made with the goal of delivering an arrangement
          that meets or exceeds your expectations. We guarantee that your order
          will always reflect the quality and value you expect from us.
        </p>
      </div>

      {/* Reminder */}
      <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-lg">
        <div className="flex items-center gap-2 mb-3">
          <Info className="w-6 h-6 stroke-current text-blue-600" />
          <h2 className="text-xl font-semibold text-gray-900">Customer Reminder</h2>
        </div>
        <p className="text-lg text-gray-700 leading-relaxed">
          Substitutions are rare and only made when absolutely necessary. Thank
          you for trusting us to make your special days memorable.
        </p>
      </div>
    </div>
  );
};

export default Policy;