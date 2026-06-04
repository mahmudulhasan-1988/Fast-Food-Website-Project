"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Button } from "@heroui/react";
import { FaLeaf } from "react-icons/fa";
import { GiLaurelCrown } from "react-icons/gi";
import { MdDeliveryDining, MdMenuBook } from "react-icons/md";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-image", {
        x: -120,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      gsap.from(".about-content", {
        x: 120,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      gsap.from(".feature-item", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".features-wrapper",
          start: "top 80%",
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-[#f7f7f7] overflow-hidden"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Side */}
          <div className="about-image relative">

            <div className="relative rounded-[24px] overflow-hidden shadow-2xl">
              <Image
                src="/img/about1.jpg"
                alt="Restaurant"
                width={800}
                height={900}
                className="w-full h-[600px] object-cover"
              />
            </div>

            {/* Experience Card */}
            <div className="absolute top-8 -left-6 bg-[#ff2d20] text-white rounded-3xl px-8 py-8 shadow-2xl">
              <h2 className="text-5xl font-bold">12+</h2>
              <p className="text-sm mt-2 font-medium">
                Years of Excellence
              </p>
            </div>

            {/* Small Floating Image */}
            <div className="absolute -bottom-8 right-0 border-[6px] border-white rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/img/about2.jpg"
                alt="Food"
                width={280}
                height={220}
                className="w-[260px] h-[180px] object-cover"
              />
            </div>
          </div>

          {/* Right Side */}
          <div className="about-content">

            <span className="text-[#ff2d20] font-semibold italic text-xl">
              Our Story
            </span>

            <h2 className="mt-4 text-4xl md:text-5xl xl:text-6xl font-black leading-tight text-zinc-900">
              We Invite You To Visit
              <br />
              Our{" "}
              <span className="text-[#ff2d20]">
                Food Restaurant
              </span>
            </h2>

            <div className="w-20 h-1 bg-[#ff2d20] rounded-full mt-8"></div>

            <p className="mt-8 text-zinc-600 text-lg leading-9">
              Founded in 2012, Sarab began as a small corner
              restaurant with one mission — serving exceptional
              food that brings people together. Today, we proudly
              serve thousands of happy guests every week while
              maintaining the same passion that started it all.
            </p>

            {/* Features */}
            <div className="features-wrapper mt-10 space-y-6">

              <div className="feature-item flex gap-5">
                <div className="w-14 h-14 rounded-2xl bg-red-100 flex items-center justify-center text-[#ff2d20] text-2xl">
                  <FaLeaf />
                </div>

                <div>
                  <h4 className="font-bold text-xl">
                    100% Fresh Ingredients
                  </h4>

                  <p className="text-zinc-500 mt-1">
                    Locally sourced ingredients selected every
                    morning for ultimate freshness.
                  </p>
                </div>
              </div>

              <div className="feature-item flex gap-5">
                <div className="w-14 h-14 rounded-2xl bg-yellow-100 flex items-center justify-center text-yellow-600 text-2xl">
                  <GiLaurelCrown />
                </div>

                <div>
                  <h4 className="font-bold text-xl">
                    Award-Winning Recipes
                  </h4>

                  <p className="text-zinc-500 mt-1">
                    Signature dishes recognized nationally for
                    quality, taste and innovation.
                  </p>
                </div>
              </div>

              <div className="feature-item flex gap-5">
                <div className="w-14 h-14 rounded-2xl bg-green-100 flex items-center justify-center text-green-600 text-2xl">
                  <MdDeliveryDining />
                </div>

                <div>
                  <h4 className="font-bold text-xl">
                    Lightning-Fast Delivery
                  </h4>

                  <p className="text-zinc-500 mt-1">
                    Hot and delicious meals delivered directly to
                    your doorstep in record time.
                  </p>
                </div>
              </div>
            </div>

            <Button
              size="lg"
              radius="full"
              startContent={<MdMenuBook size={22} />}
              className="mt-12 bg-[#ff2d20] text-white font-bold px-10 py-7 text-lg shadow-xl hover:scale-105 transition"
            >
              View Full Menu
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}