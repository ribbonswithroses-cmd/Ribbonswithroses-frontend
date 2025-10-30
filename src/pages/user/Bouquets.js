// src/pages/user/Bouquets.jsx
import React, { useEffect, useState } from "react";
import axios from "../../api/axios";
import { Link } from "react-router-dom";
import bouquetCover from "../../assets/Bouquets.png"; 
import discover1 from "../../assets/discover1.jpg";
import discover2 from "../../assets/discover2.jpg";
import discover3 from "../../assets/discover3.jpg";

const Bouquets = () => {
  const [sortOrder, setSortOrder] = useState("lowToHigh");
  const [bouquets, setBouquets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchBouquets = async (order = "lowToHigh") => {
    try {
      setLoading(true);
      const sort = order === "lowToHigh" ? "price_asc" : "price_desc";
      const res = await axios.get(`/bouquets?sort=${sort}`);
      setBouquets(res.data);
    } catch (err) {
      setError("Failed to load bouquets");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBouquets(sortOrder);
  }, [sortOrder]);

  return (
    <div className="w-full">
      {/* Cover */}
      <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh]">
        <img
          src={bouquetCover}
          alt="Bouquet Cover"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center">
          {/* Optional text */}
        </div>
      </div>

      {/* Sort */}
      <div className="max-w-6xl mx-auto px-4 mt-8 flex justify-between items-center border-b pb-4">
        <p className="text-gray-600 text-sm md:text-base">
          {loading ? "Loading..." : `${bouquets.length} bouquets`}
        </p>
        <div className="flex items-center gap-2">
          <label
            htmlFor="sort"
            className="text-gray-700 text-sm font-medium tracking-wide"
          >
            SORT BY
          </label>
          <select
            id="sort"
            className="border border-gray-300 rounded-md px-3 py-2 text-gray-700 focus:outline-none focus:ring-1 focus:ring-gray-400"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="lowToHigh">Price: Low to High</option>
            <option value="highToLow">Price: High to Low</option>
          </select>
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto px-4 mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {loading && (
          <p className="col-span-full text-center text-gray-500">
            Loading bouquets…
          </p>
        )}
        {error && (
          <p className="col-span-full text-center text-red-500">{error}</p>
        )}

        {!loading &&
          !error &&
          bouquets.map((bouquet) => (
            <div
              key={bouquet._id}
              className="group relative border rounded-lg overflow-hidden shadow hover:shadow-lg transition"
            >
              {/* Images (hover effect) */}
              <div className="relative w-full h-72">
                <img
                  src={bouquet.images?.[0]}
                  alt={bouquet.name}
                  className="w-full h-full object-cover absolute inset-0 transition-opacity duration-500 opacity-100 group-hover:opacity-0"
                />
                <img
                  src={bouquet.images?.[1] || bouquet.images?.[0]}
                  alt={`${bouquet.name} - hover`}
                  className="w-full h-full object-cover absolute inset-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100"
                />
              </div>

              {/* Details */}
              <div className="p-4 text-center">
                <h3 className="text-lg font-medium text-gray-900">
                  {bouquet.name}
                </h3>
                <p className="text-gray-600 mt-1">
                  ${bouquet.price.toLocaleString()}
                </p>
   <Link
  to={`/bouquets/${bouquet._id}`}
  className="inline-block mt-3 bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition"
>
  Show Details
</Link>

              </div>
            </div>
          ))}
      </div>

      {/* More to Discover */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-center text-3xl font-bold text-gray-900 mb-10">
          More to Discover
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="text-center border rounded-lg shadow hover:shadow-lg p-4">
            <img
              src={discover1}
              alt="Substitution Policy"
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-900">
              Substitution Policy
            </h3>
            <a
              href="/policy"
              className="inline-block mt-3 bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition"
            >
              Policy
            </a>
          </div>
          <div className="text-center border rounded-lg shadow hover:shadow-lg p-4">
            <img
              src={discover2}
              alt="Delivery Info"
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-900">
              Delivery Info
            </h3>
            <a
              href="/delivery"
              className="inline-block mt-3 bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition"
            >
              Explore
            </a>
          </div>
          <div className="text-center border rounded-lg shadow hover:shadow-lg p-4">
            <img
              src={discover3}
              alt="About the Shop"
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-900">
              About The Shop
            </h3>
            <a
              href="/about"
              className="inline-block mt-3 bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition"
            >
              Know Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bouquets;
