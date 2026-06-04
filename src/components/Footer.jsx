"use client";

import { useEffect } from "react";

import Link from "next/link";

import gsap from "gsap";

import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaTiktok,
  FaChevronRight,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaHamburger,
  FaPizzaSlice,
} from "react-icons/fa";

import { GiFrenchFries } from "react-icons/gi";

export default function Footer() {

  useEffect(() => {

    gsap.to(".floating-food", {
      y: -25,
      duration: 3,
      repeat: -1,
      yoyo: true,
      stagger: 0.4,
      ease: "power1.inOut",
    });

  }, []);

  return (

    <footer className="relative overflow-hidden bg-[#121212] text-white">

      {/* BACKGROUND GLOW */}

      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-red-500/10 blur-[150px]" />

      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-orange-500/10 blur-[150px]" />

      {/* FLOATING FOOD ICONS */}

      <FaHamburger
        className="
          floating-food
          absolute
          left-10
          top-20
          text-[120px]
          text-red-500/5
        "
      />

      <FaPizzaSlice
        className="
          floating-food
          absolute
          right-20
          top-32
          text-[110px]
          text-orange-500/5
        "
      />

      <GiFrenchFries
        className="
          floating-food
          absolute
          left-1/3
          bottom-20
          text-[130px]
          text-yellow-500/5
        "
      />

      <div className="max-w-7xl mx-auto px-6 py-24 relative z-10">

        <div className="grid lg:grid-cols-4 gap-14">

          {/* BRAND */}

          <div>

            <h2 className="text-5xl font-black mb-6">
              MH
               <span className="text-red-500">
                 ARIF
              </span>

            </h2>

            <p className="text-gray-400 leading-8">

              We bring the world&apos;s finest flavors
              together in a fast, friendly and affordable
              experience. Every meal crafted with love.

            </p>

            <div className="flex gap-3 mt-8">

              {[
                FaFacebookF,
                FaInstagram,
                FaTwitter,
                FaYoutube,
                FaTiktok,
              ].map((Icon, index) => (

                <button
                  key={index}
                  className="
                    w-12 h-12
                    rounded-xl
                    bg-white/5
                    hover:bg-red-500
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

          {/* QUICK LINKS */}

          <div>

            <h3 className="text-2xl font-bold mb-6">

              Quick Links

            </h3>

            <div className="w-20 h-1 bg-red-500 rounded-full mb-8" />

            <ul className="space-y-5">

              {[
                "Home",
                "About Us",
                "Our Menu",
                "Reservation",
                "Blog",
                "Contact",
              ].map((item) => (

                <li key={item}>

                  <Link
                    href="/"
                    className="
                      flex
                      items-center
                      gap-3
                      text-gray-400
                      hover:text-red-500
                      transition-all
                    "
                  >

                    <FaChevronRight />

                    {item}

                  </Link>

                </li>

              ))}

            </ul>

          </div>

          {/* MENU */}

          <div>

            <h3 className="text-2xl font-bold mb-6">

              Our Menu

            </h3>

            <div className="w-20 h-1 bg-red-500 rounded-full mb-8" />

            <ul className="space-y-5">

              {[
                "Burgers",
                "Pizza",
                "Fried Chicken",
                "Wraps & Rolls",
                "Pasta",
                "Desserts",
              ].map((item) => (

                <li key={item}>

                  <Link
                    href="/"
                    className="
                      flex
                      items-center
                      gap-3
                      text-gray-400
                      hover:text-red-500
                      transition-all
                    "
                  >

                    <FaChevronRight />

                    {item}

                  </Link>

                </li>

              ))}

            </ul>

          </div>

          {/* CONTACT */}

          <div>

            <h3 className="text-2xl font-bold mb-6">

              Get In Touch

            </h3>

            <div className="w-20 h-1 bg-red-500 rounded-full mb-8" />

            <div className="space-y-6">

              <div className="flex gap-4">

                <div
                  className="
                    w-12 h-12
                    rounded-xl
                    bg-red-500/10
                    flex
                    items-center
                    justify-center
                    text-red-500
                  "
                >
                  <FaMapMarkerAlt />
                </div>

                <div>

                  <h4 className="font-bold">
                    Address
                  </h4>

                  <p className="text-gray-400">
                    Jamirdia, Valuka, Mymensingh
                  </p>

                </div>

              </div>

              <div className="flex gap-4">

                <div
                  className="
                    w-12 h-12
                    rounded-xl
                    bg-red-500/10
                    flex
                    items-center
                    justify-center
                    text-red-500
                  "
                >
                  <FaPhoneAlt />
                </div>

                <div>

                  <h4 className="font-bold">
                    Phone
                  </h4>

                  <p className="text-gray-400">
                    + (880) 1811-562080
                  </p>

                </div>

              </div>

              <div className="flex gap-4">

                <div
                  className="
                    w-12 h-12
                    rounded-xl
                    bg-red-500/10
                    flex
                    items-center
                    justify-center
                    text-red-500
                  "
                >
                  <FaEnvelope />
                </div>

                <div>

                  <h4 className="font-bold">
                    Email
                  </h4>

                  <p className="text-gray-400">
                    engr.mharif24@gmail.com
                  </p>

                </div>

              </div>

              <div className="flex gap-4">

                <div
                  className="
                    w-12 h-12
                    rounded-xl
                    bg-red-500/10
                    flex
                    items-center
                    justify-center
                    text-red-500
                  "
                >
                  <FaClock />
                </div>

                <div>

                  <h4 className="font-bold">
                    Hours
                  </h4>

                  <p className="text-gray-400">
                    Wed - Sun: 09 AM - 11 PM
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* BOTTOM BAR */}

      <div className="border-t border-white/10">

        <div
          className="
            max-w-7xl
            mx-auto
            px-6
            py-8
            flex
            flex-col
            lg:flex-row
            items-center
            justify-between
            gap-5
          "
        >

          <p className="text-gray-500">

            © 2026
            <span className="text-red-500">
              {" "}Sarab Restaurant
            </span>

            . All Rights Reserved.

          </p>

          <div className="flex gap-8 text-gray-500">

            <Link href="/">
              Privacy Policy
            </Link>

            <Link href="/">
              Terms
            </Link>

            <Link href="/">
              Cookies
            </Link>

          </div>

        </div>

      </div>

      {/* SCROLL TOP */}

      <button
        className="
          fixed
          bottom-8
          right-8
          w-14
          h-14
          rounded-2xl
          bg-red-500
          hover:scale-110
          transition-all
          shadow-[0_0_40px_rgba(239,68,68,.5)]
          flex
          items-center
          justify-center
        "
      >
        ↑
      </button>

    </footer>

  );

}