"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@heroui/react";
import { FaHeart, FaPlus, FaStar } from "react-icons/fa";
import AllFoodCard from "./AllFoodCard";

export default function HomeFoodCard({ fastFoodData = [] }) {
  const [active, setActive] = useState("All");

  const categories = [
    "All",
    "Burgers",
    "Pizza",
    "Chicken",
    "Wraps",
    "Desserts",
    "Pasta",
  ];

  const filteredFoods =
    active === "All"
      ? fastFoodData.slice(0, 6)
      : fastFoodData
          .filter((item) => item.category === active)
          .slice(0, 6);
console.log("Filtered Foods:", filteredFoods);
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">

        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold">
            Our Delicious Menu
          </h2>
          <p className="mt-4 text-gray-500">
            Fresh & Tasty Fast Foods
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((item) => (
            <button
              key={item}
              onClick={() => setActive(item)}
              className={`px-5 py-2 rounded-full transition ${
                active === item
                  ? "bg-red-500 text-white"
                  : "bg-white border"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredFoods.map((food) => ( <div
                        key={food._id}
                        className="group overflow-hidden rounded-[30px] bg-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3"
                      >
                        {/* Image */}
                        <div className="relative h-[260px] overflow-hidden">
                          <Image
                            src={food.image}
                            alt={food.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                          <div className="absolute left-4 top-4 rounded-full bg-[#ff3d21] px-4 py-1 text-sm font-semibold text-white">
                            {food.badge || "Popular"}
                          </div>
                          <button className="absolute right-4 top-4 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow hover:text-red-500 transition-colors duration-200">
                            <FaHeart />
                          </button>
                        </div>
          
                        {/* Content */}
                        <div className="p-6">
                          <p className="font-bold uppercase tracking-widest text-[#ff8a00] text-sm">
                            {food.category}
                          </p>
                          <h3 className="mt-3 text-2xl font-bold">{food.title}</h3>
                          <p className="mt-3 text-gray-500 line-clamp-2">
                            {food.description}
                          </p>
                          <div className="mt-5 flex items-center gap-2">
                            <FaStar className="text-yellow-500" />
                            <span className="text-sm font-medium">{food.rating}</span>
                          </div>
          
                          <div className="mt-6 flex items-end justify-between">
                            <div>
                              <div className="flex items-center gap-3">
                                <span className="text-3xl font-black text-[#ff3d21]">
                                  ${food.price}
                                </span>
                                {food.oldPrice && (
                                  <span className="text-gray-400 line-through">
                                    ${food.oldPrice}
                                  </span>
                                )}
                              </div>
                              <Button className="mt-4 bg-[#ff3d21] text-white rounded-full px-5">
                                View Details
                              </Button>
                            </div>
                            <button className="flex h-14 w-14 items-center justify-center rounded-full bg-[#ff3d21] text-white transition-all duration-300 hover:rotate-90 hover:bg-[#e02d13]">
                              <FaPlus />
                            </button>
                          </div>
                        </div>
                      </div>
                      
            
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/menuSection">
            <Button
              size="lg"
              className="bg-red-500 text-white"
            >
              View All Foods
            </Button>
          </Link>
        </div>

      </div>
    </section>
  );
}