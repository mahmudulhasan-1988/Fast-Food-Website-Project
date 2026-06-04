"use client";

import { Button } from "@heroui/react";

import {
  FaHamburger,
  FaPizzaSlice,
  FaIceCream,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaTruck,
} from "react-icons/fa";

import { GiFrenchFries } from "react-icons/gi";
import { MdAccessTime } from "react-icons/md";

const schedule = [
  {
    day: "Monday - Tuesday",
    time: "Closed",
    closed: true,
  },
  {
    day: "Wednesday - Thursday",
    time: "09:00 AM - 10:00 PM",
  },
  {
    day: "Friday",
    time: "09:00 AM - 11:00 PM",
  },
  {
    day: "Saturday",
    time: "10:00 AM - 11:30 PM",
  },
  {
    day: "Sunday",
    time: "11:00 AM - 09:00 PM",
  },
];

export default function OpeningHoursSection() {
  return (
    <section className="relative overflow-hidden py-28 bg-[#17694d]">
      {/* Pattern Background */}
      <div
        className="
          absolute
          inset-0
          opacity-10
          bg-[repeating-linear-gradient(45deg,white_0px,white_1px,transparent_1px,transparent_24px)]
        "
      />

      {/* Floating Fast Food Icons */}

      <FaHamburger
        className="
          absolute
          left-10
          top-20
          text-[90px]
          text-orange-300/20
          animate-bounce
        "
      />

      <FaPizzaSlice
        className="
          absolute
          right-16
          top-32
          text-[80px]
          text-red-300/20
          animate-pulse
        "
      />

      <GiFrenchFries
        className="
          absolute
          left-20
          bottom-20
          text-[100px]
          text-yellow-300/20
          animate-bounce
        "
      />

      <FaIceCream
        className="
          absolute
          right-20
          bottom-24
          text-[80px]
          text-pink-300/20
          animate-pulse
        "
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Header */}

        <div className="text-center mb-20">
          <p className="text-white/70 italic text-2xl font-serif">
            Opening Hours
          </p>

          <h2 className="mt-4 text-4xl md:text-6xl font-black text-white">
            We're Open{" "}
            <span className="text-[#ffb020]">
              For You
            </span>
          </h2>

          <div className="w-16 h-1 bg-orange-400 mx-auto mt-5 rounded-full" />
        </div>

        {/* Content */}

        <div className="grid lg:grid-cols-12 gap-8 items-center">
          {/* Left Card */}

          <div
            className="
              lg:col-span-5
              rounded-3xl
              border
              border-white/10
              bg-white/5
              backdrop-blur-xl
              p-8
            "
          >
            {schedule.map((item, index) => (
              <div
                key={index}
                className="
                  flex
                  justify-between
                  items-center
                  py-5
                  border-b
                  border-white/10
                  last:border-none
                "
              >
                <div className="flex items-center gap-3">
                  <MdAccessTime className="text-[#ffb020]" />

                  <span className="text-white/80 font-semibold">
                    {item.day}
                  </span>
                </div>

                <div
                  className={`font-bold ${
                    item.closed
                      ? "text-red-400"
                      : "text-green-300"
                  }`}
                >
                  {item.closed ? (
                    <span>● Closed</span>
                  ) : (
                    <span>● {item.time}</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Center CTA */}

          <div className="lg:col-span-3">
            <div
              className="
                rounded-3xl
                bg-[#ff2514]
                p-10
                text-center
                shadow-[0_20px_60px_rgba(255,37,20,0.35)]
                hover:scale-105
                transition-all
                duration-500
              "
            >
              <FaTruck className="mx-auto text-5xl text-white mb-5" />

              <h3 className="text-3xl font-black text-white">
                Order Online
              </h3>

              <p className="mt-4 text-white/80">
                Get hot food delivered in 25 minutes
              </p>

              <Button
                radius="full"
                className="
                  mt-8
                  bg-white
                  text-[#ff2514]
                  font-bold
                  px-8
                "
              >
                Order Now ?
              </Button>
            </div>
          </div>

          {/* Right Card */}

          <div
            className="
              lg:col-span-4
              rounded-3xl
              border
              border-white/10
              bg-white/5
              backdrop-blur-xl
              p-8
            "
          >
            <h3 className="text-3xl font-bold text-white mb-8">
              Find Us
            </h3>

            <div className="space-y-8">
              <div className="flex justify-between gap-5">
                <div className="flex items-center gap-3 text-[#ffb020]">
                  <FaMapMarkerAlt />
                  <span className="text-white">
                    Address
                  </span>
                </div>

                <span className="text-white/80 text-right">
                  42 Flavor Street, NY
                </span>
              </div>

              <div className="flex justify-between gap-5">
                <div className="flex items-center gap-3 text-[#ffb020]">
                  <FaPhoneAlt />
                  <span className="text-white">
                    Phone
                  </span>
                </div>

                <span className="text-white/80">
                  +1 (800) 123-4567
                </span>
              </div>

              <div className="flex justify-between gap-5">
                <div className="flex items-center gap-3 text-[#ffb020]">
                  <FaEnvelope />
                  <span className="text-white">
                    Email
                  </span>
                </div>

                <span className="text-white/80">
                  hello@sarabfood.com
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}