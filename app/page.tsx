import { BundleCard } from "@/components/BundleCard";
import { ClubTeaser } from "@/components/ClubTeaser";
import { FeaturedDuos } from "@/components/FeaturedDuos";
import { FreePack } from "@/components/FreePack";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { WhyTwinPacks } from "@/components/WhyTwinPacks";

export default function Home() {
  return (
    <main id="main">
      <Hero />
      <HowItWorks />
      <FeaturedDuos />
      <WhyTwinPacks />
      <BundleCard />
      <FreePack />
      <ClubTeaser />
    </main>
  );
}
