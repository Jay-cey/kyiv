import Image from "next/image";
import hero from "../public/hero.png";
import first from "../public/first.png";
import second from "../public/second.png";
import third from "../public/third.png";
import fourth from "../public/fourth.jpg";
import fifth from "../public/fifth.jpg";
import GridCards from "./components/GridCards";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between">
      
      {/* Hero Section */}
      <section className="grid grid-cols-2 divide-x divide-black">
        <div className="py-24 px-14 justify-center">
          <div className="border-b border-black h-1/6">
            <h1 className="text-5xl font-bold">
              Kyiv <br/> LuxeBouquets<sup className="font-normal text-3xl">®</sup>
            </h1>
            <p className="w-4/5 py-3">
              Discover Uniquely Crafted Bouquets and Gifts for Any Occasion: Spread Joy with <span className="font-bold">Our Online Flower Delivery Service</span>
            </p>
          </div>

          <div className="grid grid-cols-2 py-4">
            <Image 
              src={hero}
              alt="Hero Section Image"
              height={250}
             />
            
            <div className="border-l border-black h-full grid items-end">
              <p className="text-xs pl-4">
                Experience the joy of giving with our modern floral studio. Order online and send fresh flowers, plants and gifts today.
              </p>
            </div>
          </div>
        </div>

        <div>
          <GridCards
            title="Fresh FLowers"
            altLabel="Fresh Flowers"
            img={first}
            arr="right"
            reverse={false}
          />

          <GridCards
            title="Dried FLowers"
            altLabel="Dried Flowers"
            img={second}
            arr="left"
            reverse={true}
          />

          <GridCards
            title="Live Plants"
            altLabel="Live Plants"
            img={third}
            arr="right"
            reverse={false}
          />

          <GridCards
            title="Aroma Candels"
            altLabel="Aroma Candels"
            img={fourth}
            arr="left"
            reverse={true}
          />

          <GridCards
            title="Fresheners"
            altLabel="Fresheners"
            img={fifth}
            arr="right"
            reverse={false}
          />          
        </div>
      </section>
    </main>
  );
}
