// "use client";

// import { useEffect, useRef } from "react";
// import Image from "next/image";
// import { Button } from "@heroui/react";
// import gsap from "gsap";

// import {
//   FaPlay,
//   FaStar,
//   FaClock,
//   FaUtensils,
// } from "react-icons/fa";

// export default function HeroSection() {
//   const contentRef = useRef(null);
//   const imageRef = useRef(null);

//   useEffect(() => {
//     gsap.from(contentRef.current, {
//       x: -100,
//       opacity: 0,
//       duration: 1,
//       ease: "power3.out",
//     });

//     gsap.from(imageRef.current, {
//       x: 100,
//       opacity: 0,
//       duration: 1,
//       delay: 0.3,
//       ease: "power3.out",
//     });
//   }, []);

//   return (
//     <section className="relative overflow-hidden bg-[#F8F4EE] min-h-screen flex items-center">

//       {/* Background Text */}
//       <div className="absolute inset-0 flex items-center justify-center pointer-events-none">

//         <h1 className="text-[260px] font-black text-black/5 leading-none select-none">
//           FOOD
//         </h1>

//       </div>

//       <div className="container mx-auto px-6 lg:px-12">

//         <div className="grid lg:grid-cols-2 gap-16 items-center">

//           {/* LEFT CONTENT */}
//           <div ref={contentRef}>

//             {/* Badge */}
//             <div className="inline-flex items-center gap-2 bg-white shadow-lg px-5 py-3 rounded-full mb-8">

//               <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center">

//                 <FaStar className="text-white text-sm" />

//               </div>

//               <span className="font-medium">
//                 #1 Rated Fast Food Restaurant in New York
//               </span>

//             </div>

//             {/* Heading */}
//             <h1 className="text-5xl md:text-7xl font-black leading-tight text-black">

//               Delicious

//               <span className="block text-red-500">
//                 Fast Food
//               </span>

//               for Every

//               <br />

//               Moment

//             </h1>

//             {/* Description */}
//             <p className="mt-8 text-gray-600 text-lg max-w-xl leading-relaxed">

//               Experience bold flavors crafted from premium
//               ingredients. From crispy burgers to gourmet
//               pizzas – every bite is an adventure worth
//               savoring.

//             </p>

//             {/* Buttons */}
//             <div className="mt-10 flex flex-wrap items-center gap-5">

//               <Button
//                 size="lg"
//                 radius="full"
//                 className="bg-red-500 text-white px-8 h-14 text-base font-semibold"
//               >
//                 <FaUtensils />

//                 Explore Menu
//               </Button>

//               <button className="flex items-center gap-4">

//                 <div className="w-14 h-14 bg-white rounded-full shadow-lg flex items-center justify-center">

//                   <FaPlay className="text-red-500" />

//                 </div>

//                 <span className="font-semibold text-lg">
//                   Watch Our Story
//                 </span>

//               </button>

//             </div>

//             {/* Stats */}
//             <div className="flex flex-wrap gap-10 mt-16">

//               <div>
//                 <h3 className="text-4xl font-black">
//                   850+
//                 </h3>

//                 <p className="text-gray-500 text-sm uppercase">
//                   Happy Customers
//                 </p>
//               </div>

//               <div>
//                 <h3 className="text-4xl font-black">
//                   120+
//                 </h3>

//                 <p className="text-gray-500 text-sm uppercase">
//                   Menu Items
//                 </p>
//               </div>

//               <div>
//                 <h3 className="text-4xl font-black">
//                   15+
//                 </h3>

//                 <p className="text-gray-500 text-sm uppercase">
//                   Expert Chefs
//                 </p>
//               </div>

//               <div>
//                 <h3 className="text-4xl font-black">
//                   12yr
//                 </h3>

//                 <p className="text-gray-500 text-sm uppercase">
//                   Experience
//                 </p>
//               </div>

//             </div>

//           </div>

//           {/* RIGHT IMAGE */}
//           <div
//             ref={imageRef}
//             className="relative flex justify-center"
//           >

//             {/* Circle Glow */}
//             <div className="absolute w-[550px] h-[550px] rounded-full bg-orange-100" />

//             {/* Main Image */}
//             <div className="relative z-10 w-[500px] h-[500px] rounded-full overflow-hidden border-[20px] border-orange-100 shadow-2xl">

//               <Image
//                 src="/burger.png"
//                 alt="Burger"
//                 fill
//                 className="object-cover"
//               />

//             </div>

//             {/* Floating Card 1 */}
//             <div className="absolute top-10 left-0 bg-white rounded-3xl p-5 shadow-xl z-20">

//               <div className="flex items-center gap-4">

//                 <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center">

//                   🔥

//                 </div>

//                 <div>

//                   <h4 className="font-bold">
//                     Hot Deal
//                   </h4>

//                   <p className="text-gray-500 text-sm">
//                     30% off today
//                   </p>

//                 </div>

//               </div>

//             </div>

//             {/* Floating Card 2 */}
//             <div className="absolute top-40 right-0 bg-white rounded-3xl p-5 shadow-xl z-20">

//               <div className="flex items-center gap-4">

//                 <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">

//                   <FaClock className="text-green-600" />

//                 </div>

//                 <div>

//                   <h4 className="font-bold">
//                     20 min
//                   </h4>

//                   <p className="text-gray-500 text-sm">
//                     Fast Delivery
//                   </p>

//                 </div>

//               </div>

//             </div>

//             {/* Floating Card 3 */}
//             <div className="absolute bottom-20 right-5 bg-white rounded-3xl p-5 shadow-xl z-20">

//               <div className="flex items-center gap-4">

//                 <div className="w-12 h-12 rounded-xl bg-yellow-100 flex items-center justify-center">

//                   <FaStar className="text-yellow-500" />

//                 </div>

//                 <div>

//                   <h4 className="font-bold">
//                     4.9/5
//                   </h4>

//                   <p className="text-gray-500 text-sm">
//                     2k+ Reviews
//                   </p>

//                 </div>

//               </div>

//             </div>

//           </div>

//         </div>

//       </div>

//     </section>
//   );
// }