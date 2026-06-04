"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import gsap from "gsap";

import {
  FaHamburger,
  FaPizzaSlice,
} from "react-icons/fa";

import { GiFrenchFries } from "react-icons/gi";
import { LuCupSoda } from "react-icons/lu";

const categories = [
  {
    id: 1,
    name: "All Items",
    items: 99,
    image: "/img/category/1.jpg",
  },
  {
    id: 2,
    name: "Burgers",
    items: 24,
    image: "/img/category/2.jpg",
  },
  {
    id: 3,
    name: "Pizza",
    items: 18,
    image: "/img/category/3.jpg",
  },
  {
    id: 4,
    name: "Fried Chicken",
    items: 15,
    image: "/img/category/4.jpg",
  },
  {
    id: 5,
    name: "Wraps",
    items: 12,
    image: "/img/category/5.jpg",
  },
  {
    id: 6,
    name: "Desserts",
    items: 20,
    image: "/img/category/6.jpg",
  },
];

const marqueeItems = [
  "Fresh Wraps & Rolls",
  "Loaded Fries",
  "Ice Cream Shakes",
  "Grilled Sandwiches",
  "Crispy Fried Chicken",
  "Gourmet Burgers",
  "Artisan Pizzas",
];

export default function CategorySection() {
  const [active, setActive] = useState(1);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.from(".section-title", {
      y: 60,
      opacity: 0,
      duration: 1,
    });



gsap.fromTo(
  ".category-card",
  {
    y: 50,
    opacity: 0,
  },
  {
    y: 0,
    opacity: 1,
    stagger: 0.08,
    duration: 0.8,
    clearProps: "all",
  }
);
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#f7f2eb] py-24 category-card opacity-100 group ...">

      {/* BACKGROUND BLUR */}
      <div className="absolute left-0 top-0 h-[400px] w-[400px] rounded-full bg-orange-200/30 blur-[140px]" />

      <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-red-200/30 blur-[140px]" />

      {/* FLOATING FAST FOOD ICONS */}

      <FaHamburger
        className="
          floating-food
          absolute
          left-[4%]
          top-[15%]
          text-[100px]
          text-orange-400/15
          rotate-12
        "
      />

      <FaPizzaSlice
        className="
          floating-food
          absolute
          right-[5%]
          top-[18%]
          text-[90px]
          text-red-400/15
          -rotate-12
        "
      />

      <GiFrenchFries
        className="
          floating-food
          absolute
          left-[8%]
          bottom-[12%]
          text-[100px]
          text-yellow-500/15
        "
      />

      <LuCupSoda
        className="
          floating-food
          absolute
          right-[10%]
          bottom-[15%]
          text-[90px]
          text-orange-500/15
        "
      />

      {/* TOP MARQUEE */}

      <div className="relative z-10 bg-[#ff2b17] py-4 overflow-hidden mb-24">

        <div className="animate-marquee flex gap-14 whitespace-nowrap text-white font-semibold">

          {[...marqueeItems, ...marqueeItems, ...marqueeItems].map(
            (item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 shrink-0"
              >
                <span className="w-2 h-2 rounded-full bg-white/60" />
                {item}
              </div>
            )
          )}

        </div>

      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* HEADING */}

        <div className="text-center mb-20 section-title">

          <span className="text-[#ff3d21] text-3xl italic font-serif">
            What We Offer
          </span>

          <h2 className="mt-4 text-5xl lg:text-7xl font-black text-[#171717]">

            Browse by{" "}

            <span className="text-[#ff3d21]">
              Category
            </span>

          </h2>

          <div className="w-24 h-1 bg-[#ff3d21] rounded-full mx-auto mt-6" />

          <p className="max-w-2xl mx-auto mt-8 text-xl text-gray-500 leading-relaxed">
            From sizzling burgers to artisan pizzas and
            world-class desserts, discover your favourite
            meal crafted with premium ingredients.
          </p>

        </div>

        {/* CATEGORY GRID */}

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">

          {categories.map((category) => (

            <button
              key={category.id}
              onClick={() => setActive(category.id)}
              className={`
                category-card
                group
                relative
                h-[250px]
                rounded-[32px]
                bg-white/80
                backdrop-blur-xl
                p-6
                flex
                flex-col
                items-center
                justify-center
                text-center
                shadow-lg
                transition-all
                duration-500
                hover:-translate-y-3
                hover:shadow-[0_25px_60px_rgba(255,61,33,0.18)]

                ${
                  active === category.id
                    ? "border-2 border-[#ff3d21]"
                    : "border border-white/50"
                }
              `}
            >

              {/* IMAGE */}

              <div className="relative w-28 h-28 rounded-full overflow-hidden">

                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  sizes="120px"
                  className="
                    object-cover
                    transition-transform
                    duration-500
                    group-hover:scale-110
                  "
                />

              </div>

              <h3 className="mt-5 text-xl font-bold text-[#171717]">

                {category.name}

              </h3>

              <p className="mt-2 text-gray-500">

                {category.items} Items

              </p>

            </button>

          ))}

        </div>

      </div>

      <style jsx>{`
        .animate-marquee {
          width: max-content;
          animation: marquee 30s linear infinite;
        }

        @keyframes marquee {
          from {
            transform: translateX(0%);
          }

          to {
            transform: translateX(-33.33%);
          }
        }
      `}</style>

    </section>
  );
}