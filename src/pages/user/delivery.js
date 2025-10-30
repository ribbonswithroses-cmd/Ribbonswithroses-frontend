import React from "react";
import { MapPin, Truck, Weight, Clock, Bell } from "lucide-react";

const Delivery = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      {/* Title */}
      <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
        Delivery Information
      </h1>

      {/* Section 1: Shop Pickup */}
      <div className="bg-white shadow-md rounded-xl p-6 mb-8">
        <div className="flex items-center gap-2 mb-3">
          <MapPin className="w-6 h-6 text-pink-600" />
          <h2 className="text-2xl font-semibold text-gray-800">Shop Pickup</h2>
        </div>
        <p className="text-lg text-gray-700 leading-relaxed">
          Clients may collect their orders directly from our shop at the address
          provided. This option is free of charge and convenient for urgent
          pickups.
        </p>
      </div>

      {/* Section 2: Home Delivery */}
      <div className="bg-white shadow-md rounded-xl p-6 mb-8">
        <div className="flex items-center gap-2 mb-3">
          <Truck className="w-6 h-6 text-red-500" />
          <h2 className="text-2xl font-semibold text-gray-800">Home Delivery</h2>
        </div>
        <p className="text-lg text-gray-700 leading-relaxed">
          If you cannot pick up from our shop, we provide delivery to your given
          address. Delivery charges will apply and are calculated based on the
          weight and dimensions of the package.
        </p>
      </div>

      {/* Section 3: Delivery Charges */}
      <div className="bg-white shadow-md rounded-xl p-6 mb-8">
        <div className="flex items-center gap-2 mb-3">
          <Weight className="w-6 h-6 text-purple-600" />
          <h2 className="text-2xl font-semibold text-gray-800">
            Delivery Charges
          </h2>
        </div>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Charges are clearly mentioned in our chart below according to Box size.
        </p>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 rounded-lg overflow-hidden">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-3 text-left text-gray-700 font-semibold border-b">
                  Package Size
                </th>
                <th className="px-6 py-3 text-left text-gray-700 font-semibold border-b">
                  Box size
                </th>
                <th className="px-6 py-3 text-left text-gray-700 font-semibold border-b">
                  Delivery Charge
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-6 py-3 border-b">Normall Product</td>
                <td className="px-6 py-3 border-b">Small + Medium Box</td>
                <td className="px-6 py-3 border-b">$7</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-6 py-3 border-b">Big Product(Money bouquets)</td>
                <td className="px-6 py-3 border-b">Big Box</td>
                <td className="px-6 py-3 border-b">$10</td>
              </tr>
              <tr>
                <td className="px-6 py-3">Large Product </td>
                <td className="px-6 py-3">Large Box</td>
                <td className="px-6 py-3">$15</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Section 4: Delivery Time */}
      <div className="bg-white shadow-md rounded-xl p-6 mb-8">
        <div className="flex items-center gap-2 mb-3">
          <Clock className="w-6 h-6 text-green-600" />
          <h2 className="text-2xl font-semibold text-gray-800">
            Delivery Time
          </h2>
        </div>
        <p className="text-lg text-gray-700 leading-relaxed">
          Orders are delivered within{" "}
          <span className="font-medium">24 – 48 hours</span> after confirmation.
          For urgent deliveries, please contact us directly for express
          arrangements.
        </p>
      </div>

      {/* Section 5: Customer Reminder */}
      <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-lg">
        <div className="flex items-center gap-2 mb-3">
          <Bell className="w-6 h-6 text-blue-600" />
          <h2 className="text-xl font-semibold text-gray-900">
            Customer Reminder
          </h2>
        </div>
        <p className="text-lg text-gray-700 leading-relaxed">
          Please ensure your contact details and delivery address are correct.
          Failed deliveries due to incomplete information may result in extra
          charges or delays.
        </p>
      </div>
    </div>
  );
};

export default Delivery;