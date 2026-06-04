// 'use client';
// import AllFoodCard from '@/components/AllFoodCard';

// import { getFastFoodData } from '../lib/data';


// const fastFoodCard = async () => {
//     const res = await fetch("http://localhost:5000/fastFood");
//     const fastFoodData = await res.json();

//     //  
//     return (
//         <div>
//             <p> Fast Food Card: {fastFoodData.length} items</p>
          
//            <div>
//             {
//                 fastFoodData.map(fastFood => <AllFoodCard key={fastFood._id} fastFoodData={fastFood} />)
//             }
//            </div>

          
//         </div>
//     );
// };

// export default fastFoodCard;

// import AllFoodCard from "@/components/AllFoodCard";
// import HomeFoodCard from "@/components/HomeFoodCard";

// const FastFoodCard = async () => {
//   const res = await fetch("http://localhost:5000/fastFood", {
//     cache: "no-store",
//   });

//   const fastFoodData = await res.json();

//   return (
//     <div>
//       <p className="text-center text-xl font-bold mb-6">
//         Fast Food Items: {fastFoodData.length}
//       </p>

//       <AllFoodCard fastFoodData={fastFoodData} />
      
//     </div>
//   );
// };

// export default FastFoodCard;

import AllFoodCard from "@/components/AllFoodCard";
import HomeFoodCard from "@/components/HomeFoodCard";

const FastFoodCard = async () => {
  const res = await fetch("https://fast-food-website-server.vercel.app/fast-food", {
    cache: "no-store",
  });
  const fastFoodData = await res.json();

  return (
    <div>
      <p className="text-center text-xl font-bold mb-6">
        Fast Food Items: {fastFoodData.length}
      </p>
      <AllFoodCard fastFoodData={fastFoodData} />
    </div>
  );
};

export default FastFoodCard;