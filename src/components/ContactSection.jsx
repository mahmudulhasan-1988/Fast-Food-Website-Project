"use client";

import { useEffect } from "react";

import gsap from "gsap";

import { Button } from "@heroui/react";

import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaPaperPlane,
  FaHamburger,
  FaPizzaSlice,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

import { GiFrenchFries } from "react-icons/gi";
import { LuCupSoda } from "react-icons/lu";

export default function ContactSection() {
  useEffect(() => {
    gsap.from(".contact-heading", {
      y: 60,
      opacity: 0,
      duration: 1,
    });

    gsap.from(".contact-left", {
      x: -80,
      opacity: 0,
      duration: 1,
      delay: 0.3,
    });

    gsap.from(".contact-right", {
      x: 80,
      opacity: 0,
      duration: 1,
      delay: 0.4,
    });

    gsap.to(".floating-food", {
      y: -30,
      repeat: -1,
      yoyo: true,
      duration: 4,
      stagger: 0.5,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#f7f2eb] py-28">

      {/* Background Blur */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full bg-orange-200/20 blur-[150px]" />

      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-red-200/20 blur-[150px]" />

      {/* Floating Food Icons */}
      <FaHamburger
        className="
          floating-food
          absolute
          left-[5%]
          top-[12%]
          text-[120px]
          text-orange-400/10
          rotate-12
        "
      />

      <FaPizzaSlice
        className="
          floating-food
          absolute
          right-[8%]
          top-[15%]
          text-[100px]
          text-red-400/10
          -rotate-12
        "
      />

      <GiFrenchFries
        className="
          floating-food
          absolute
          left-[10%]
          bottom-[12%]
          text-[120px]
          text-yellow-500/10
        "
      />

      <LuCupSoda
        className="
          floating-food
          absolute
          right-[12%]
          bottom-[10%]
          text-[100px]
          text-orange-500/10
        "
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="contact-heading text-center mb-20">

          <span className="text-[#ff3d21] text-3xl italic font-serif">
            Get In Touch
          </span>

          <h2 className="mt-4 text-5xl lg:text-7xl font-black text-[#171717]">

            Contact{" "}

            <span className="text-[#ff3d21]">
              Us
            </span>

          </h2>

          <div className="w-24 h-1 bg-[#ff3d21] rounded-full mx-auto mt-6" />

          <p className="mt-8 max-w-3xl mx-auto text-xl text-gray-500 leading-relaxed">
            Have a question, feedback, or want to plan a special
            event? We'd love to hear from you.
          </p>

        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-12 gap-8">

          {/* Left Card */}
          <div className="contact-left lg:col-span-4">

            <div
              className="
                h-full
                rounded-[32px]
                bg-[#111111]
                p-10
                text-white
                shadow-2xl
              "
            >
              <h3 className="text-5xl font-serif mb-5">
                Let's Talk
              </h3>

              <p className="text-gray-400 text-lg leading-relaxed mb-10">
                We typically respond within 2 hours during
                business hours.
              </p>

              <div className="space-y-8">

                <div className="flex gap-5">

                  <div
                    className="
                      h-14
                      w-14
                      rounded-2xl
                      bg-red-600/20
                      flex
                      items-center
                      justify-center
                    "
                  >
                    <FaMapMarkerAlt className="text-red-500" />
                  </div>

                  <div>
                    <h4 className="uppercase text-gray-400 text-sm font-bold">
                      Address
                    </h4>

                    <p className="text-lg font-medium">
                      42 Flavor Street, Manhattan,
                      <br />
                      New York, NY 10001
                    </p>
                  </div>

                </div>

                <div className="flex gap-5">

                  <div className="h-14 w-14 rounded-2xl bg-red-600/20 flex items-center justify-center">
                    <FaPhoneAlt className="text-red-500" />
                  </div>

                  <div>
                    <h4 className="uppercase text-gray-400 text-sm font-bold">
                      Phone
                    </h4>

                    <p className="text-lg font-medium">
                      +1 (800) 123-4567
                    </p>
                  </div>

                </div>

                <div className="flex gap-5">

                  <div className="h-14 w-14 rounded-2xl bg-red-600/20 flex items-center justify-center">
                    <FaEnvelope className="text-red-500" />
                  </div>

                  <div>
                    <h4 className="uppercase text-gray-400 text-sm font-bold">
                      Email
                    </h4>

                    <p className="text-lg font-medium">
                      hello@sarabfood.com
                    </p>
                  </div>

                </div>

                <div className="flex gap-5">

                  <div className="h-14 w-14 rounded-2xl bg-red-600/20 flex items-center justify-center">
                    <FaClock className="text-red-500" />
                  </div>

                  <div>
                    <h4 className="uppercase text-gray-400 text-sm font-bold">
                      Working Hours
                    </h4>

                    <p className="text-lg font-medium">
                      Wed - Sun: 9 AM - 11 PM
                    </p>
                  </div>

                </div>

              </div>

              {/* Social */}
              <div className="flex gap-4 mt-12">

                {[
                  FaFacebookF,
                  FaInstagram,
                  FaTwitter,
                  FaYoutube,
                ].map((Icon, index) => (
                  <button
                    key={index}
                    className="
                      w-12
                      h-12
                      rounded-xl
                      bg-white/10
                      hover:bg-red-600
                      transition-all
                      duration-300
                      flex
                      items-center
                      justify-center
                    "
                  >
                    <Icon />
                  </button>
                ))}

              </div>

            </div>

          </div>

          {/* Right Form */}
          <div className="contact-right lg:col-span-8">

            <div
              className="
                rounded-[32px]
                bg-white/80
                backdrop-blur-xl
                p-8 lg:p-10
                shadow-xl
              "
            >
              <div className="grid md:grid-cols-2 gap-6">

                <div>
                  <label className="font-semibold block mb-3">
                    Your Name *
                  </label>

                  <input
                    type="text"
                    placeholder="John Doe"
                    className="
                      w-full
                      h-14
                      rounded-2xl
                      border
                      border-gray-200
                      px-5
                      outline-none
                    "
                  />
                </div>

                <div>
                  <label className="font-semibold block mb-3">
                    Email Address *
                  </label>

                  <input
                    type="email"
                    placeholder="you@email.com"
                    className="
                      w-full
                      h-14
                      rounded-2xl
                      border
                      border-gray-200
                      px-5
                      outline-none
                    "
                  />
                </div>

                <div>
                  <label className="font-semibold block mb-3">
                    Phone Number
                  </label>

                  <input
                    type="text"
                    placeholder="+1 (800) 000-0000"
                    className="
                      w-full
                      h-14
                      rounded-2xl
                      border
                      border-gray-200
                      px-5
                      outline-none
                    "
                  />
                </div>

                <div>
                  <label className="font-semibold block mb-3">
                    Subject *
                  </label>

                  <select
                    className="
                      w-full
                      h-14
                      rounded-2xl
                      border
                      border-gray-200
                      px-5
                      outline-none
                    "
                  >
                    <option>General Inquiry</option>
                    <option>Reservation</option>
                    <option>Event Booking</option>
                    <option>Feedback</option>
                  </select>
                </div>

              </div>

              <div className="mt-6">

                <label className="font-semibold block mb-3">
                  Message *
                </label>

                <textarea
                  rows={6}
                  placeholder="Write your message here..."
                  className="
                    w-full
                    rounded-2xl
                    border
                    border-gray-200
                    p-5
                    outline-none
                    resize-none
                  "
                />

              </div>

              <Button
                radius="full"
                className="
                  mt-8
                  bg-gradient-to-r
                  from-red-600
                  to-red-500
                  text-white
                  h-14
                  px-10
                  text-lg
                  font-semibold
                  shadow-xl
                "
              >
                <FaPaperPlane />

                Send Message

              </Button>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}