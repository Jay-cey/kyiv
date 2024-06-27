import Image from "next/image";
import hero from "../public/hero.png";
import first from "../public/first.png";
import second from "../public/second.png";
import third from "../public/third.png";
import fourth from "../public/fourth.jpg";
import fifth from "../public/fifth.jpg";
import store from "../public/store.jpg";
import location from "../public/location.svg";
import phone from "../public/phone.svg";
import subscription from "../public/subscription.jpg";
import service from "../public/service.jpg";
import GridCards from "./components/GridCards";
import ReasonsCard from "./components/ReasonsCard";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between divide-y divide-black">
      
      {/* Hero Section */}
      <section className="grid grid-cols-2">
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
            title="Fresh Flowers"
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

      {/* About Us */}
      <section className="grid grid-cols-2 divide-x divide-black">
        <div className="p-16">
          <h2 className="font-bold text-3xl">About Us</h2>
        </div>

        <div className="p-16 space-y-4">
          <p className="text-sm font-semibold">OUR STORY</p>
          <article className="space-y-2">
            <h3 className="font-semibold text-2xl">Kyiv LuxeBouquets</h3>
            <p className="text-sm">We are a modern local floral studio, which specializes in the design and delivery of unique bouquets. We have the best florists who carefully select each look, our studio cooperates directly with farms for growing different flowers, so we always have fresh flowers, which are collected by our florists in exquisite bouquets. We have a collection of fresh bouquets, collections of dried bouquets, house plants, as well as fragrant candles from luxury brands to create the perfect atmosphere. Make someone&apos;s day amazing by sending flowers, plants and gifts the same or next day. Ordering flowers online has never been easier.</p>
          </article>
          <button className="px-4 py-3 border border-black rounded-sm text-sm font-medium mt-2">Learn More</button>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="grid grid-cols-2 divide-x divide-black">
        <div className="p-16">
          <h2 className="font-bold text-3xl">Why Choose Us?</h2>
        </div>

        <div className="grid grid-flow-rows divide-y divide-black">
          <ReasonsCard
            title="Stylish bouquets by florists"
            text="At our floral studio, our professional florists craft the most elegant and stylish bouquets using only the freshest and highest quality materials available. We stay up-to-date with the latest floral design trends and offer unique arrangements that are sure to impress. Let us brighten up your day with our stunning bouquets and same-day delivery service."
          />
          <ReasonsCard
            title="On-time delivery"
            text="Never miss a moment with our on-time flower delivery service. Our couriers will deliver your bouquet personally, without boxes, to ensure it arrives in perfect condition. Trust us to deliver your thoughtful gift reliably."
          />
          <ReasonsCard
            title="Safe payment"
            text="You can feel secure when placing an order with us, as we use industry-standard security measures to protect your payment information. Your transaction will be safe and hassle-free, so you can shop with confidence."
          />
          <ReasonsCard
            title="Subscription by your needs"
            text="With our subscription service tailored to your specific needs, you can enjoy the convenience of having beautiful bouquets delivered straight to your door at regular intervals. Our flexible service is perfect for busy individuals or those who want to ensure they always have fresh flowers on hand. You'll save time and money with this hassle-free solution to your floral needs."
          />
        </div>
      </section>

      {/* Contact */}
      <section className="grid grid-cols-2 divide-x divide-black">
        <div className="h-full divide-y divide-black">
          <div className="p-16 space-y-4 h-1/2 grid content-center">
            <h3 className="text-4xl font-bold">To Contact Us</h3>
            <p className="text-lg font-semibold mt-6">We will call you back</p>
            <div className="grid grid-cols-2 space-x-5">
              <input type="phone" placeholder="+000 XX XXX XX XX" className="border py-4 px-4"/>
              <button className="bg-black text-white py-4 px-8">BOOK A CALL</button>
            </div>
          </div>

          <div className="grid grid-cols-2 divide-x divide-black h-1/2">
            <div className="font-bold text-center divide-y divide-black h-full">
              <p className="text-3xl font-semibold py-6">
                Phone
              </p>
              <div className="flex flex-col justify-center h-3/4 space-y-4">
                <p>
                  <Image src={phone} alt="phone_icon" className="inline"/> +000000000000
                </p>
                <p>
                  <Image src={phone} alt="phone_icon" className="inline"/> +000000000000
                </p>
              </div>
            </div>

            <div className="font-bold text-center divide-y divide-black h-full">
              <p className="text-3xl font-semibold py-6">
                Address
              </p>
              <div className="flex flex-col self-center w-full space-y-4 justify-center h-3/4">
                <p>OPENING HOURS: 8 TO 11 P.M.</p>
                <p className="flex justify-center items-center">
                  <Image src={location} alt="phone_icon"/> 15/4 Xyz 
                </p>
              </div>
            </div>
          </div>
        </div>


        <div>
          <Image
            src={store}
            alt="Kyiv LuxeBouquets"
          />
          <div className="grid grid-cols-2 divide-x divide-black">
            <div className="w-full text-center p-4">
              <p className="font-semibold text-3xl">Follow us</p>
            </div>
            <div></div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="">
        <div className="w-full grid justify-center py-12 border-b border-black">
          <h2 className="text-5xl font-semibold">Our Services</h2>
        </div>

        <div className="grid grid-cols-2">
          <div>
            <Image
              src={subscription}
              alt="Lady with a flowers in a vase"
            />
          </div>

          <div className="w-full grid justify-items-center content-center text-center h-full">
            <p>SERVICE</p>
            <div className="w-full grid justify-items-center content-center space-y-3 mt-4">
              <h3 className="text-3xl font-semibold">
                Flower Subscriptions
              </h3>
              <p className="w-3/4">
                Experience the convenience and savings of regular flower deliveries with our flexible subscription service - up to 30% more profitable than one-time purchases.
              </p>
            </div>
            <button className="border border-black px-5 py-4 text-sm mt-6">
              SUBSCRIBE NOW
            </button>
          </div>
        </div>

        <div>
          <Image
            src={service}
            alt="services"
          />
        </div>
      </section>
    </main>
  );
}
