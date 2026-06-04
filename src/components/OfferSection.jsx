"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Button } from "@heroui/react";
import {
  FaShoppingCart,
  FaHamburger,
  FaPizzaSlice,
} from "react-icons/fa";
import { GiFrenchFries } from "react-icons/gi";
import { MdFastfood } from "react-icons/md";

import gsap from "gsap";

export default function OfferSection() {
  const sectionRef = useRef(null);

  const [time, setTime] = useState({
    hours: 8,
    minutes: 20,
    seconds: 59,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => {
        let { hours, minutes, seconds } = prev;

        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        }

        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    gsap.from(".offer-left", {
      x: -100,
      opacity: 0,
      duration: 1.2,
      ease: "power4.out",
    });

    gsap.from(".offer-right", {
      x: 100,
      opacity: 0,
      duration: 1.2,
      ease: "power4.out",
    });

    gsap.to(".floating-food", {
      y: 20,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      stagger: 0.2,
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-28 bg-[#fff8f2]"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        <FaHamburger
          className="floating-food absolute top-20 left-10 text-orange-200 text-7xl opacity-20"
        />

        <GiFrenchFries
          className="floating-food absolute top-40 right-20 text-yellow-300 text-8xl opacity-20"
        />

        <FaPizzaSlice
          className="floating-food absolute bottom-24 left-32 text-red-300 text-7xl opacity-20"
        />

        <MdFastfood
          className="floating-food absolute bottom-20 right-32 text-orange-300 text-8xl opacity-20"
        />

        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,115,0,0.03)_25%,rgba(255,115,0,0.03)_50%,transparent_50%,transparent_75%,rgba(255,115,0,0.03)_75%)] bg-[length:50px_50px]" />
      </div>

      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <div className="offer-left relative z-10">

            <span className="inline-flex items-center gap-2 bg-amber-400 px-5 py-2 rounded-lg font-bold text-sm tracking-widest uppercase">
              ⚡ Limited Time Offer
            </span>

            <h2 className="mt-6 text-5xl lg:text-7xl font-black leading-tight text-zinc-900">
              Get 30% Off
              <br />
              Our Signature
              <br />
              <span className="text-orange-500">
                Burger
              </span>{" "}
              Meal
            </h2>

            <p className="mt-8 text-zinc-600 text-lg leading-8 max-w-xl">
              Don't miss our weekend special. Grab our
              award-winning signature burger combo with loaded
              fries and premium shake at an unbeatable price.
            </p>

            {/* TIMER */}
            <div className="flex gap-4 mt-10">

              {[
                {
                  value: time.hours,
                  label: "Hours",
                },
                {
                  value: time.minutes,
                  label: "Minutes",
                },
                {
                  value: time.seconds,
                  label: "Seconds",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="w-28 h-28 rounded-2xl border border-orange-200 bg-white/60 backdrop-blur-lg flex flex-col justify-center items-center shadow-lg"
                >
                  <h3 className="text-4xl font-black">
                    {String(item.value).padStart(2, "0")}
                  </h3>

                  <span className="uppercase text-xs tracking-widest text-zinc-500">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

            <Button
              size="lg"
              radius="full"
              startContent={<FaShoppingCart />}
              className="mt-10 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold px-10 py-7 text-lg shadow-2xl hover:scale-105 transition"
            >
              Grab The Deal
            </Button>
          </div>

          {/* RIGHT */}
          <div className="offer-right relative">

            <div className="absolute -left-8 top-10 z-20 w-35 h-35 rounded-full bg-red-500 text-white flex flex-col items-center justify-center shadow-[0_0_60px_rgba(255,60,0,.5)]">
              <span className="line-through text-sm">
                $24.99
              </span>

              <h3 className="text-4xl font-black">
                $17.49
              </h3>
            </div>

            <div className="relative rounded-[40px] overflow-hidden shadow-[0_20px_80px_rgba(0,0,0,.15)]">

              <Image
                src="/img/off-img.jpg"
                alt="Burger"
                width={900}
                height={700}
                className="w-full h-[550px] object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>

            {/* Rating Card */}
            <div className="absolute -bottom-8 right-10 bg-white rounded-3xl px-8 py-5 shadow-2xl">
              <h4 className="font-bold text-lg">
                Loved by 25K+
              </h4>

              <div className="text-yellow-500 text-xl">
                ★★★★★
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}