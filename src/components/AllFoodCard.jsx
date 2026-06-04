"use client";
import { useState } from "react";
import Image from "next/image";
import {
  FaHeart,
  FaPlus,
  FaStar,
  FaHamburger,
  FaPizzaSlice,
} from "react-icons/fa";
import { GiFrenchFries, GiChickenOven } from "react-icons/gi";
import { Button } from "@heroui/react";

const categories = [
  "All",
  "Burgers",
  "Pizza",
  "Chicken",
  "Wraps",
  "Desserts",
  "Pasta",
];

export default function AllFoodCard({ fastFoodData = [] }) {
  const [active, setActive] = useState("All");

  const filteredFoods =
    active === "All"
      ? fastFoodData
      : fastFoodData.filter((item) => item.category === active);

  if (!fastFoodData.length) {
    return (
      <div className="py-20 text-center">
        <h2 className="text-2xl font-bold">No Food Items Found</h2>
      </div>
    );
  }

  return (
    <section className="relative overflow-hidden bg-[#f8f5f1] py-28">
      {/* Animated Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <FaHamburger className="absolute top-24 left-10 text-[130px] text-orange-200/20 animate-bounce" />
        <FaPizzaSlice className="absolute right-10 top-40 text-[120px] text-red-200/20 animate-pulse" />
        <GiFrenchFries className="absolute bottom-24 left-20 text-[140px] text-yellow-200/20 animate-bounce" />
        <GiChickenOven className="absolute bottom-20 right-20 text-[120px] text-orange-200/20 animate-pulse" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center">
          <span className="font-serif text-2xl italic text-[#ff3d21]">
            What&apos;s Cooking
          </span>
          <h2 className="mt-4 text-5xl lg:text-7xl font-black text-[#111]">
            Our Delicious{" "}
            <span className="text-[#ff3d21]">Menu</span>
          </h2>
          <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-[#ff3d21]" />
        </div>

        {/* Category Filter */}
        <div className="mt-14 flex flex-wrap justify-center gap-4">
          {categories.map((item) => (
            <button
              key={item}
              onClick={() => setActive(item)}
              className={`px-7 py-3 rounded-full border font-semibold transition-all duration-300 ${
                active === item
                  ? "bg-[#ff3d21] text-white border-[#ff3d21]"
                  : "bg-white text-gray-600 border-gray-200 hover:border-[#ff3d21] hover:text-[#ff3d21]"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredFoods.map((food) => (
            <div
              key={food._id}
              className="group overflow-hidden rounded-[30px] bg-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3"
            >
              {/* Image */}
              <div className="relative h-[260px] overflow-hidden">
                <Image
                  src={food.image}
                  alt={food.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute left-4 top-4 rounded-full bg-[#ff3d21] px-4 py-1 text-sm font-semibold text-white">
                  {food.badge || "Popular"}
                </div>
                <button className="absolute right-4 top-4 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow hover:text-red-500 transition-colors duration-200">
                  <FaHeart />
                </button>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="font-bold uppercase tracking-widest text-[#ff8a00] text-sm">
                  {food.category}
                </p>
                <h3 className="mt-3 text-2xl font-bold">{food.title}</h3>
                <p className="mt-3 text-gray-500 line-clamp-2">
                  {food.description}
                </p>
                <div className="mt-5 flex items-center gap-2">
                  <FaStar className="text-yellow-500" />
                  <span className="text-sm font-medium">{food.rating}</span>
                </div>

                <div className="mt-6 flex items-end justify-between">
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="text-3xl font-black text-[#ff3d21]">
                        ${food.price}
                      </span>
                      {food.oldPrice && (
                        <span className="text-gray-400 line-through">
                          ${food.oldPrice}
                        </span>
                      )}
                    </div>
                    <Button className="mt-4 bg-[#ff3d21] text-white rounded-full px-5">
                      View Details
                    </Button>
                  </div>
                  <button className="flex h-14 w-14 items-center justify-center rounded-full bg-[#ff3d21] text-white transition-all duration-300 hover:rotate-90 hover:bg-[#e02d13]">
                    <FaPlus />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State after filter */}
        {filteredFoods.length === 0 && (
          <div className="mt-16 text-center">
            <p className="text-xl text-gray-500">
              No items found in &quot;{active}&quot; category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}


// "use client";

// import { useState } from "react";
// import Image from "next/image";

// import {
//   FaHeart,
//   FaPlus,
//   FaStar,
//   FaHamburger,
//   FaPizzaSlice,
// } from "react-icons/fa";

// import {
//   GiFrenchFries,
//   GiChickenOven,
// } from "react-icons/gi";
// import { Button } from "@heroui/react";

// const categories = [
//   "All",
//   "Burgers",
//   "Pizza",
//   "Chicken",
//   "Wraps",
//   "Desserts",
//   "Pasta",
// ];


// export default function AllFoodCard({fastFood}) {

//   const { _id, category, badge, title, description, image, price, oldPrice, rating, badgeColor } = fastFood;

//   const [active, setActive] = useState("All");

//   const filtered =
//     active === "All"
//       ? menuItems
//       : menuItems.filter(
//           (item) => item.category === active
//         );

//   return (
//     <section className="relative overflow-hidden bg-[#f8f5f1] py-28">

//       {/* Animated Background */}

//       <div className="absolute inset-0 overflow-hidden">

//         <FaHamburger
//           className="
//             absolute
//             top-24
//             left-10
//             text-[130px]
//             text-orange-200/20
//             animate-bounce
//           "
//         />

//         <FaPizzaSlice
//           className="
//             absolute
//             right-10
//             top-40
//             text-[120px]
//             text-red-200/20
//             animate-pulse
//           "
//         />

//         <GiFrenchFries
//           className="
//             absolute
//             bottom-24
//             left-20
//             text-[140px]
//             text-yellow-200/20
//             animate-bounce
//           "
//         />

//         <GiChickenOven
//           className="
//             absolute
//             bottom-20
//             right-20
//             text-[120px]
//             text-orange-200/20
//             animate-pulse
//           "
//         />

//       </div>

//       <div className="container relative z-10 mx-auto px-4">

//         {/* Header */}

//         <div className="text-center">

//           <span className="font-serif text-2xl italic text-[#ff3d21]">
//             What's Cooking
//           </span>

//           <h2 className="mt-4 text-5xl lg:text-7xl font-black text-[#111]">
//             Our Delicious
//             <span className="text-[#ff3d21]"> Menu</span>
//           </h2>

//           <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-[#ff3d21]" />

//         </div>

//         {/* Categories */}

//         <div className="mt-14 flex flex-wrap justify-center gap-4">

//           {categories.map((item) => (
//             <button
//               key={item}
//               onClick={() => setActive(item)}
//               className={`
//                 px-7
//                 py-3
//                 rounded-full
//                 font-semibold
//                 transition-all
//                 duration-300
//                 border

//                 ${
//                   active === item
//                     ? "bg-[#ff3d21] text-white border-[#ff3d21] shadow-lg"
//                     : "bg-white text-gray-600 border-gray-200 hover:border-[#ff3d21]"
//                 }
//               `}
//             >
//               {item}
//             </button>
//           ))}

//         </div>

//         {/* Cards */}

//         <div className="mt-16 grid gap-8 lg:grid-cols-3">

//           {fastFood.map((food) => (
//             <div
//               key={food.id}
//               className="
//                 group
//                 overflow-hidden
//                 rounded-[28px]
//                 bg-white
//                 shadow-lg
//                 transition-all
//                 duration-500
//                 hover:-translate-y-3
//                 hover:shadow-2xl
//               "
//             >

//               {/* Image */}

//               <div className="relative h-[270px]">

//                 <Image
//                   src={image}
//                   alt={title}
//                   fill
//                   className="
//                     object-cover
//                     transition-transform
//                     duration-700
//                     group-hover:scale-110
//                   "
//                 />

//                 <div
//                   className={`
//                     absolute
//                     left-4
//                     top-4
//                     px-4
//                     py-1
//                     rounded-full
//                     text-white
//                     text-sm
//                     font-semibold
//                     ${badgeColor}
//                   `}
//                 >
//                   ⭐ {badge}
//                 </div>

//                 <button
//                   className="
//                     absolute
//                     right-4
//                     top-4
//                     h-12
//                     w-12
//                     rounded-full
//                     bg-white
//                     text-gray-500
//                     shadow-md
//                     flex
//                     items-center
//                     justify-center
//                   "
//                 >
//                   <FaHeart />
//                 </button>

//               </div>

//               {/* Content */}

//               <div className="p-6">

//                 <p className="font-bold uppercase tracking-wider text-[#ff8a00]">
//                   {category}
//                 </p>

//                 <h3 className="mt-3 text-3xl font-bold text-[#222]">
//                   {title}
//                 </h3>

//                 <p className="mt-3 text-gray-500">
//                   {description}
//                 </p>

//                 <div className="mt-6 flex items-end justify-between">

//                   <div>

//                     <div className="flex items-center gap-3">

//                       <span className="text-3xl font-black text-[#ff3d21]">
//                         ${price}
//                       </span>

//                       <span className="text-gray-400 line-through">
//                         ${oldPrice}
//                       </span>

//                     </div>

//                     <div className="mt-2 flex items-center gap-2 text-[#ffb300]">

//                       <FaStar />

//                       <span className="text-gray-500">
//                         ({rating})
//                       </span>

//                     </div>
//                     <Button  className="bg-[#ff3d21] text-white mt-3">View Details</Button>

//                   </div>

//                   <button
//                     className="
//                       h-14
//                       w-14
//                       rounded-full
//                       bg-[#ff3d21]
//                       text-white
//                       shadow-lg
//                       flex
//                       items-center
//                       justify-center
//                       transition-all
//                       duration-300
//                       hover:rotate-90
//                     "
//                   >
//                     <FaPlus />
//                   </button>

//                 </div>

//               </div>

//             </div>
//           ))}

//         </div>

//       </div>

//     </section>
//   );
// }