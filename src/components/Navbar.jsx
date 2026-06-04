


"use client";

import Link from "next/link";
import { useState } from "react";

import { Button } from "@heroui/react";

import {
  Bars,
  CircleXmark,
  Magnifier,
  ShoppingBag,
} from "@gravity-ui/icons";

import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa";

import {
  FiPhone,
  FiMail,
  FiMapPin,
} from "react-icons/fi";

const navLinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Menu",
    href: "/menuSection",
  },
  {
    name: "Chefs",
    href: "/chefs",
  },
  {
    name: "Reservation",
    href: "/reservation",
  },
  {
    name: "Reviews",
    href: "/reviews",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (

    <header className="sticky top-0 z-50 w-full">

      {/* TOP BAR */}
      <div className="bg-black text-white">

        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">

          {/* LEFT */}
          <div className="hidden lg:flex items-center gap-8 text-sm">

            <div className="flex items-center gap-2">

              <FiPhone className="text-orange-400" />

              <span>+ (880) 1811-562080</span>

            </div>

            <div className="flex items-center gap-2">

              <FiMail className="text-orange-400" />

              <span>engr.mharif24@gmail.com</span>

            </div>

            <div className="flex items-center gap-2">

              <FiMapPin className="text-orange-400" />

              <span>Jamirdia, Valuka, Mymensingh</span>

            </div>

          </div>

          {/* CENTER BADGE */}
          <div className="hidden lg:flex">

            <span
              className="
                rounded-full
                bg-gradient-to-r
                from-orange-500
                to-red-600
                px-4 py-1
                text-xs font-bold
              "
            >
              🔥 FREE DELIVERY TODAY!
            </span>

          </div>

          {/* SOCIAL */}
          <div className="flex items-center gap-3">

            <Link
              href="#"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-orange-500 transition"
            >
              <FaFacebookF size={14} />
            </Link>

            <Link
              href="#"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-orange-500 transition"
            >
              <FaInstagram size={14} />
            </Link>

            <Link
              href="#"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-orange-500 transition"
            >
              <FaTiktok size={14} />
            </Link>

            <Link
              href="#"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-orange-500 transition"
            >
              <FaYoutube size={14} />
            </Link>

          </div>

        </div>

      </div>

      {/* MAIN NAVBAR */}
      <nav className="bg-white shadow-sm">

        <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-4">

          {/* LOGO */}
          <Link
            href="/"
            className="flex items-center gap-4"
          >

            <div
              className="
                flex h-14 w-14 items-center justify-center
                rounded-full
                bg-gradient-to-br
                from-orange-500
                to-red-600
                text-white
                text-2xl
                shadow-lg
              "
            >
              🍴
            </div>

            <div>

              <h2 className="text-4xl font-bold">

                <span className="text-black">
                  MH <span className="text-orange-500">ARIF</span> 
                </span>

              </h2>

              <p className="text-xs tracking-[4px] text-gray-400">

                FAST FOOD & RESTAURANT

              </p>

            </div>

          </Link>

          {/* DESKTOP MENU */}
          <ul className="hidden lg:flex items-center gap-10">

            {navLinks.map((item) => (

              <li key={item.name}>

                <Link
                  href={item.href}
                  className="
                    relative
                    font-medium
                    text-gray-700
                    transition
                    hover:text-orange-500
                    after:absolute
                    after:left-0
                    after:-bottom-2
                    after:h-[2px]
                    after:w-0
                    after:bg-orange-500
                    after:transition-all
                    hover:after:w-full
                  "
                >
                  {item.name}
                </Link>

              </li>

            ))}

          </ul>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-5">

            <button className="hidden lg:flex text-gray-700 hover:text-orange-500">

              <Magnifier width={22} height={22} />

            </button>

            <Button
              radius="md"
              className="
                hidden lg:flex
                bg-gradient-to-r
                from-orange-500
                to-red-600
                text-white
                font-semibold
                px-7
                shadow-lg
              "
            >

              <ShoppingBag width={18} height={18} />

              Order Now

            </Button>

            {/* MOBILE BUTTON */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden"
            >

              {
                menuOpen ? (
                  <Xmark width={26} height={26} />
                ) : (
                  <Bars width={26} height={26} />
                )
              }

            </button>

          </div>

        </div>

        {/* MOBILE MENU */}
        {menuOpen && (

          <div className="border-t lg:hidden">

            <ul className="flex flex-col p-5">

              {navLinks.map((item) => (

                <li key={item.name}>

                  <Link
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="
                      block
                      py-3
                      text-gray-700
                      hover:text-orange-500
                    "
                  >
                    {item.name}
                  </Link>

                </li>

              ))}

              <Button
                className="
                  mt-4
                  bg-gradient-to-r
                  from-orange-500
                  to-red-600
                  text-white
                "
              >

                Order Now

              </Button>

            </ul>

          </div>

        )}

      </nav>

    </header>

  );

}