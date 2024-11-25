import HeroSection from "@/components/HeroSection";
import InfoBar from "@/components/InfoBar";
import FeaturedProducts from "@/components/FeaturedProducts";
import Banner from "@/components/Banner";
import Categories from "@/components/Categories";
import SummerDeals from "@/components/SummerDeals";

export default function Home() {
  return (
    <div className="">
        <HeroSection/>
        <InfoBar/>
        <FeaturedProducts/>
        <Banner/>
        <Categories/>
        <SummerDeals/>
    </div>
  );
}
