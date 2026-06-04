"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

import gsap from "gsap";

import { Button } from "@heroui/react";

import {
  FaPlay,
  FaStar,
} from "react-icons/fa";

export default function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    gsap.from(".hero-badge", {
      y: 40,
      opacity: 0,
      duration: 0.8,
    });

    gsap.from(".hero-title", {
      y: 80,
      opacity: 0,
      duration: 1,
      delay: 0.2,
    });

    gsap.from(".hero-text", {
      y: 40,
      opacity: 0,
      duration: 1,
      delay: 0.4,
    });

    gsap.from(".hero-buttons", {
      y: 40,
      opacity: 0,
      duration: 1,
      delay: 0.6,
    });

    gsap.from(".hero-image", {
      scale: 0.8,
      opacity: 0,
      duration: 1.2,
      delay: 0.3,
    });

    gsap.to(".hero-image", {
      y: -15,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });

    gsap.to(".food-1", {
      y: -25,
      repeat: -1,
      yoyo: true,
      duration: 3,
    });

    gsap.to(".food-2", {
      y: 30,
      repeat: -1,
      yoyo: true,
      duration: 4,
    });

    gsap.to(".food-3", {
      y: -20,
      repeat: -1,
      yoyo: true,
      duration: 3,
    });

    gsap.to(".food-4", {
      y: 35,
      repeat: -1,
      yoyo: true,
      duration: 5,
    });
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative overflow-hidden bg-[#f7f2eb] min-h-screen flex items-center"
    >
      {/* Background FOOD Text */}

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">

        <h1
          className="
          text-[250px]
          md:text-[350px]
          lg:text-[500px]
          font-black
          text-black/[0.03]
          select-none
          animate-foodFloat
        "
        >
          FOOD
        </h1>

      </div>

      {/* Floating Food Icons */}

      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        <div className="food-1 absolute top-20 left-10 text-6xl">
          🍔
        </div>

        <div className="food-2 absolute top-32 right-20 text-5xl">
          🍕
        </div>

        <div className="food-3 absolute bottom-32 left-1/4 text-5xl">
          🍟
        </div>

        <div className="food-4 absolute bottom-20 right-24 text-6xl">
          🌭
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-6 w-full">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT SIDE */}

          <div>

            <div className="hero-badge inline-flex items-center gap-3 bg-white px-5 py-3 rounded-full shadow-lg mb-8">

              <FaStar className="text-orange-500" />

              <span className="font-semibold text-sm">
                #1 Rated Fast Food Restaurant In New York
              </span>

            </div>

            <h1 className="hero-title text-5xl md:text-7xl lg:text-8xl font-black leading-none">

              Delicious

              <span className="block text-red-600">
                Fast Food
              </span>

              for Every
              <br />
              Moment

            </h1>

            <p className="hero-text mt-8 text-lg md:text-xl text-gray-600 max-w-xl leading-relaxed">

              Experience bold flavors crafted from premium
              ingredients. From crispy burgers to gourmet pizzas
              every bite is an adventure worth savoring.

            </p>

            <div className="hero-buttons flex flex-wrap gap-5 mt-10">

              <Button
                radius="full"
                size="lg"
                className="bg-red-600 text-white px-10"
              >
                Explore Menu
              </Button>

              <Button
                radius="full"
                size="lg"
                variant="flat"
                className="bg-white"
              >
                <FaPlay />
                Watch Our Story
              </Button>

            </div>

            {/* Stats */}

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-14">

              <div>
                <h3 className="text-4xl font-black">
                  850+
                </h3>
                <p className="text-gray-500">
                  Customers
                </p>
              </div>

              <div>
                <h3 className="text-4xl font-black">
                  120+
                </h3>
                <p className="text-gray-500">
                  Menu Items
                </p>
              </div>

              <div>
                <h3 className="text-4xl font-black">
                  15+
                </h3>
                <p className="text-gray-500">
                  Expert Chefs
                </p>
              </div>

              <div>
                <h3 className="text-4xl font-black">
                  12Y
                </h3>
                <p className="text-gray-500">
                  Experience
                </p>
              </div>

            </div>

          </div>

          {/* RIGHT SIDE */}

          <div className="relative flex justify-center">

            <div className="hero-image relative">

              {/* Glow */}

              <div className="absolute w-[620px] h-[620px] rounded-full bg-orange-200/50 blur-3xl" />

              {/* Circle Border */}

              <div className="absolute w-[580px] h-[580px] rounded-full border-[18px] border-orange-100" />

              {/* Main Image */}

              <div className="relative z-10 w-[520px] h-[520px] rounded-full overflow-hidden shadow-2xl">

                <Image
                  src="/img/banner-img.jpg"
                  alt="Burger"
                  fill
                  priority
                  className="object-cover"
                />

              </div>

              {/* CARD 1 */}

              <div className="absolute top-12 -left-24 bg-white p-5 rounded-3xl shadow-xl z-20">

                <h4 className="font-bold">
                  Hot Deal
                </h4>

                <p className="text-gray-500 text-sm">
                  30% Off Today
                </p>

              </div>

              {/* CARD 2 */}

              <div className="absolute top-1/2 -right-16 bg-white p-5 rounded-3xl shadow-xl z-20">

                <h4 className="font-bold">
                  20 min
                </h4>

                <p className="text-gray-500 text-sm">
                  Fast Delivery
                </p>

              </div>

              {/* CARD 3 */}

              <div className="absolute bottom-10 right-0 bg-white p-5 rounded-3xl shadow-xl z-20">

                <h4 className="font-bold">
                  4.9/5
                </h4>

                <p className="text-gray-500 text-sm">
                  Reviews
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

// "use client";

// import { useEffect, useRef } from "react";

// import gsap from "gsap";

// import { Button } from "@heroui/react";

// import {
//   FaPlay,
//   FaStar,
// } from "react-icons/fa";
// import Image from "next/image";

// export default function Hero() {
//   const heroRef = useRef();

//   useEffect(() => {

//     gsap.from(".hero-title", {
//       y: 80,
//       opacity: 0,
//       duration: 1,
//     });

//     gsap.from(".hero-image", {
//       scale: 0.8,
//       opacity: 0,
//       duration: 1.2,
//     });

//   }, []);

//   return (
//     <section
//       ref={heroRef}
//       className="bg-[#f7f2eb] min-h-screen flex items-center"
//     >
//       <div className="max-w-7xl mx-auto px-6">

//         <div className="grid lg:grid-cols-2 gap-20 items-center">

//           {/* Left */}

//           <div>

//             <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow mb-8">

//               <FaStar className="text-orange-500" />

//               <span className="font-semibold text-sm">
//                 #1 Rated Fast Food Restaurant
//               </span>

//             </div>

//             <h1 className="hero-title text-6xl lg:text-8xl font-black leading-none">

//               Delicious

//               <span className="block text-red-600">
//                 Fast Food
//               </span>

//               for Every Moment

//             </h1>

//             <p className="mt-8 text-xl text-gray-600 max-w-xl">
//               Experience bold flavors crafted from premium
//               ingredients and unforgettable taste.
//             </p>

//             <div className="flex flex-wrap gap-5 mt-10">

//               <Button
//                 radius="full"
//                 className="bg-red-600 text-white px-10 h-14"
//               >
//                 Explore Menu
//               </Button>

//               <Button
//                 radius="full"
//                 variant="flat"
//                 className="h-14"
//               >
//                 <FaPlay />
//                 Watch Story
//               </Button>

//             </div>

//             <div className="grid grid-cols-4 gap-8 mt-14">

//               <div>
//                 <h3 className="text-4xl font-black">
//                   850+
//                 </h3>
//                 <p className="text-gray-500">
//                   Customers
//                 </p>
//               </div>

//               <div>
//                 <h3 className="text-4xl font-black">
//                   120+
//                 </h3>
//                 <p className="text-gray-500">
//                   Menu Items
//                 </p>
//               </div>

//               <div>
//                 <h3 className="text-4xl font-black">
//                   15+
//                 </h3>
//                 <p className="text-gray-500">
//                   Chefs
//                 </p>
//               </div>

//               <div>
//                 <h3 className="text-4xl font-black">
//                   12Y
//                 </h3>
//                 <p className="text-gray-500">
//                   Experience
//                 </p>
//               </div>

//             </div>

//           </div>

//           {/* Right */}

//           <div className="relative flex justify-center">

//             <div className="hero-image relative">

//               <div className="absolute inset-0 bg-orange-100 rounded-full scale-110" />

//               <Image
//                 src="/img/banner-img.jpg"
//                 alt="Burger"
//                 height={550}
//                 width={550}
//                 className="relative z-10  object-cover rounded-full"
//               />

//               {/* Floating Card */}

//               <div className="absolute top-10 -left-20 bg-white p-5 rounded-3xl shadow-xl">

//                 <h4 className="font-bold">
//                   Hot Deal
//                 </h4>

//                 <p className="text-gray-500">
//                   30% Off Today
//                 </p>

//               </div>

//               <div className="absolute top-1/2 -right-10 bg-white p-5 rounded-3xl shadow-xl">

//                 <h4 className="font-bold">
//                   20 min
//                 </h4>

//                 <p className="text-gray-500">
//                   Fast Delivery
//                 </p>

//               </div>

//               <div className="absolute bottom-10 right-0 bg-white p-5 rounded-3xl shadow-xl">

//                 <h4 className="font-bold">
//                   4.9/5
//                 </h4>

//                 <p className="text-gray-500">
//                   Reviews
//                 </p>

//               </div>

//             </div>

//           </div>

//         </div>

//       </div>
//     </section>
//   );
// }