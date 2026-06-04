"use client";

import { useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaHamburger,
  FaPizzaSlice,
} from "react-icons/fa";

import { GiFrenchFries } from "react-icons/gi";
import { LuCupSoda } from "react-icons/lu";

const chefs = [
  {
    id: 1,
    name: "Alice Mortal",
    role: "Head Chef",
    experience: "12 years experience",
    image: "/img/chefs/1.jpg",
  },
  {
    id: 2,
    name: "Michael Corn",
    role: "Grill Master",
    experience: "8 years experience",
    image: "/img/chefs/2.jpg",
  },
  {
    id: 3,
    name: "Faz Chowdel",
    role: "Pastry Chef",
    experience: "10 years experience",
    image: "/img/chefs/3.jpg",
  },
  {
    id: 4,
    name: "William Latnum",
    role: "Pizza Artisan",
    experience: "9 years experience",
    image: "/img/chefs/4.jpg",
  },
];

export default function ChefSection() {
 useEffect(() => {
  const ctx = gsap.context(() => {
    gsap.from(".chef-title", {
      y: 60,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });

    gsap.from(".chef-card", {
      y: 70,
      opacity: 0,
      stagger: 0.15,
      duration: 0.8,
      ease: "power3.out",
      clearProps: "all",
    });
  });

  return () => ctx.revert();
}, []);

  return (
    <section className="relative  bg-[#f7f2eb] py-28">

      {/* Background Blur */}

      <div className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full bg-orange-200/20 blur-[140px]" />

      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-red-200/20 blur-[140px]" />

      {/* Floating Fast Food Icons */}

      <FaHamburger
        className="
          floating-food
          absolute
          top-[10%]
          left-[5%]
          text-[120px]
          text-orange-400/10
          rotate-12
        "
      />

      <FaPizzaSlice
        className="
          floating-food
          absolute
          top-[15%]
          right-[6%]
          text-[100px]
          text-red-400/10
          -rotate-12
        "
      />

      <GiFrenchFries
        className="
          floating-food
          absolute
          bottom-[10%]
          left-[8%]
          text-[120px]
          text-yellow-500/10
        "
      />

      <LuCupSoda
        className="
          floating-food
          absolute
          bottom-[12%]
          right-[10%]
          text-[100px]
          text-orange-500/10
        "
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="chef-title text-center mb-20">

          <span className="text-[#ff3d21] text-3xl italic font-serif">
            The Culinary Team
          </span>

          <h2 className="mt-4 text-5xl lg:text-7xl font-black text-[#171717]">

            Meet Our Expert{" "}

            <span className="text-[#ff3d21]">
              Chefs
            </span>

          </h2>

          <div className="w-24 h-1 bg-[#ff3d21] rounded-full mx-auto mt-6" />

          <p className="max-w-2xl mx-auto mt-8 text-xl text-gray-500">
            Passionate culinary artists dedicated to delivering
            unforgettable dining experiences.
          </p>

        </div>

        {/* Chef Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {chefs.map((chef) => (

            <div
              key={chef.id}
              className="
                chef-card
                group
                relative
                overflow-hidden
                rounded-[32px]
                bg-white
                shadow-lg
                opacity-100
                transition-all
                duration-500
                hover:-translate-y-4
                hover:shadow-[0_30px_80px_rgba(255,61,33,0.18)]
              "
            >

              {/* Image */}

              <div className="relative h-[330px] min-h-[330px] overflow-hidden">

                <Image
                  src={chef.image}
                  alt={chef.name}
                  fill
                  className="
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-110
                  "
                />

                {/* Overlay */}

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/70
                    via-black/10
                    to-transparent
                    opacity-0
                    group-hover:opacity-100
                    transition-all
                    duration-500
                  "
                />

                {/* Social Icons */}

                <div
                  className="
                    absolute
                    bottom-6
                    left-1/2
                    -translate-x-1/2
                    flex
                    gap-3
                    opacity-0
                    translate-y-8
                    group-hover:opacity-100
                    group-hover:translate-y-0
                    transition-all
                    duration-500
                  "
                >

                  {[FaFacebookF, FaInstagram, FaTwitter].map(
                    (Icon, index) => (
                      <button
                        key={index}
                        className="
                          h-11
                          w-11
                          rounded-full
                          bg-white/20
                          backdrop-blur-md
                          text-white
                          hover:bg-[#ff3d21]
                          transition-all
                          duration-300
                          flex
                          items-center
                          justify-center
                        "
                      >
                        <Icon />
                      </button>
                    )
                  )}

                </div>

              </div>

              {/* Content */}

              <div className="p-8 text-center">

                <h3 className="text-3xl font-bold text-[#171717]">
                  {chef.name}
                </h3>

                <p
                  className="
                    mt-2
                    uppercase
                    tracking-widest
                    text-[#ff3d21]
                    font-bold
                    text-sm
                  "
                >
                  {chef.role}
                </p>

                <p className="mt-4 text-gray-500">
                  {chef.experience}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}