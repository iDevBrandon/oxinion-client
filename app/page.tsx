import Destination from "@/components/Home/Destination";
import Hero from "@/components/Home/Hero";
import Trending from "@/components/Home/Trending";
import useMyInfoQuery from "@/hooks/queries/useMyInfoQuery";

export default function Home() {
  return (
    <main>
      <Hero />
      <Destination />
      <Trending />
    </main>
  );
}
