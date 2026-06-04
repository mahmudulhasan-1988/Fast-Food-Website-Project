"use client";

import Image from "next/image";

import {
  FaHamburger,
  FaPizzaSlice,
  FaIceCream,
} from "react-icons/fa";

import {
  GiFrenchFries,
  GiHotMeal,
} from "react-icons/gi";

const foods = [
  {
    id: 1,
    title: "Classic Burger",
    image: "/img/portfolio/work1.jpg",
    className: "lg:row-span-2",
  },
  {
    id: 2,
    title: "Pizza",
    image: "/img/portfolio/work2.jpg",
  },
  {
    id: 3,
    title: "Chicken Burger",
    image: "/img/portfolio/work3.jpg",
  },
  {
    id: 4,
    title: "Donut",
    image: "/img/portfolio/work4.jpg",
  },
  {
    id: 5,
    title: "Premium Dish",
    image: "/img/portfolio/work5.jpg",
  },
];

export default function FoodShowcase() {
  return (
    <section className="relative py-24 bg-[#f8f5f2] overflow-hidden">
      {/* Background Icons */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <FaHamburger className="absolute top-20 left-10 text-[80px] text-orange-200/30 animate-bounce" />

        <GiFrenchFries className="absolute top-24 right-10 text-[90px] text-yellow-300/30 animate-pulse" />

        <FaPizzaSlice className="absolute bottom-20 left-20 text-[70px] text-red-300/30 animate-bounce" />

        <FaIceCream className="absolute bottom-20 right-20 text-[70px] text-pink-300/30 animate-pulse" />

        <GiHotMeal className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[120px] text-orange-100/20" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-20 block w-full">
          <p className="text-[#ff4d2d] font-semibold italic text-xl md:text-2xl">
            Food Showcase
          </p>

          <h2 className="mt-3 text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight">
            Let's See Our{" "}
            <span className="text-[#ff4d2d]">
              Fast Food
            </span>
          </h2>

          <div className="w-16 h-1 bg-orange-500 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Food Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 auto-rows-[250px]">
          {foods.map((food) => (
            <div
              key={food.id}
              className={`relative overflow-hidden rounded-3xl shadow-xl group ${food.className || ""}`}
            >
              <Image
                src={food.image}
                alt={food.title}
                fill
                sizes="(max-width:768px)100vw,(max-width:1200px)50vw,33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              <div className="absolute bottom-5 left-5 z-10">
                <h3 className="text-white text-2xl font-bold">
                  {food.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}