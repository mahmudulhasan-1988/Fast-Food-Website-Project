import AboutSection from "@/components/AboutSection";
import AllFoodCard from "@/components/AllFoodCard";
import CategorySection from "@/components/CategorySection";
import ChefSection from "@/components/ChefSection";
import ContactSection from "@/components/ContactSection";
import FoodShowcase from "@/components/FoodShowcase";
import Hero from "@/components/Hero";
import HomeFoodCard from "@/components/HomeFoodCard";
import OfferSection from "@/components/OfferSection";
import OpeningHoursSection from "@/components/OpeningHoursSection";
import Image from "next/image";

export default async function Home() {

  // const res = await fetch("http://localhost:5000/fast-food"
   const res = await fetch("https://fast-food-website-server.vercel.app/fast-food", {
    cache: "no-store",
  });
  const fastFoodData = await res.json();


  return (
    <div>
      <Hero></Hero>
      <CategorySection></CategorySection>
      <AboutSection></AboutSection> 
      <HomeFoodCard fastFoodData={fastFoodData} />
      <OfferSection></OfferSection>
      <FoodShowcase></FoodShowcase>
      <ContactSection></ContactSection>
      <ChefSection></ChefSection>
      <OpeningHoursSection></OpeningHoursSection>
     
    </div>
  );
}
