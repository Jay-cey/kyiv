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
import CarouselGrid from "./components/Carousel";
import reasons from "./reasons";
import Socials from "./components/Socials";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between divide-y divide-black overflow-x-hidden">
      
      {/* Hero Section */}
      <section className="grid md:grid-flow-row lg:grid-cols-2 divide-y divide-black">
        <div className="py-14 md:py-24 px-10 md:px-16 lg:px-14 justify-center">
          <div className="pb-3 md:pb-6 lg:pb-0 border-b border-black lg:h-1/6">
            <h1 className="text-4xl md:text-5xl font-bold">
              Kyiv <br/> LuxeBouquets<sup className="font-normal text-3xl">®</sup>
            </h1>
            <p className="w-4/5 py-3 text-lg lg:text-base">
              Discover Uniquely Crafted Bouquets and Gifts for Any Occasion: Spread Joy with <span className="font-bold">Our Online Flower Delivery Service</span>
            </p>
          </div>

          <div className="grid grid-cols-2 py-4">
            <Image 
              src={hero}
              alt="Hero Section Image"
              // height={250}
              className="w-5/6"
             />
            
            <div className="border-l border-black h-full grid items-end">
              <p className="text-sm lg:text-xs pl-4">
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
      <section className="grid grid-flow-row lg:grid-cols-2 divide-y lg:divide-x divide-black">
        <div className="p-10 md:p-16">
          <h2 className="font-bold text-3xl">About Us</h2>
        </div>

        <div className="p-10 md:p-16 space-y-4">
          <p className="text-sm font-semibold">OUR STORY</p>
          <article className="space-y-2">
            <h3 className="font-semibold text-2xl">Kyiv LuxeBouquets</h3>
            <p className="text-base lg:text-sm">We are a modern local floral studio, which specializes in the design and delivery of unique bouquets. We have the best florists who carefully select each look, our studio cooperates directly with farms for growing different flowers, so we always have fresh flowers, which are collected by our florists in exquisite bouquets. We have a collection of fresh bouquets, collections of dried bouquets, house plants, as well as fragrant candles from luxury brands to create the perfect atmosphere. Make someone&apos;s day amazing by sending flowers, plants and gifts the same or next day. Ordering flowers online has never been easier.</p>
          </article>
          <button className="px-4 py-3 border border-black rounded-sm text-sm font-medium mt-2 w-full md:w-auto">Learn More</button>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="grid grid-flow-row lg:grid-cols-2 divide-y lg:divide-x divide-black">
        <div className="p-10 md:p-16">
          <h2 className="font-bold text-3xl">Why Choose Us?</h2>
        </div>

        <div className="grid grid-flow-rows divide-y divide-black">
          {
            reasons.map((item) => (
              <ReasonsCard key={item.id}
                title={item.title}
                text={item.text}
              />
            ))
          }
        </div>
      </section>

      {/* Contact */}
      <section className="grid grid-flow-row lg:grid-cols-2 divide-y lg:divide-x divide-black">
        <div className="h-full divide-y divide-black border-t border-black lg:border-none">

          {/* Contact Box */}
          <div className="px-10 pb-16 pt-20 md:p-16 space-y-4 h-1/2 grid content-center">
            <h3 className="text-4xl font-bold">To Contact Us</h3>
            <p className="text-lg font-semibold md:mt-6">We will call you back</p>

            <div className="md:grid grid-cols-2 md:space-x-5 space-y-4 md:space-y-0 pb-6 md:pb-0">
              <input type="phone" placeholder="+000 XX XXX XX XX" className="border py-4 px-4 w-full md:w-auto"/>
              <button className="bg-black text-white py-4 px-8  w-full md:w-auto">BOOK A CALL</button>
            </div>
          </div>

          {/* Phone & Address */}
          <div className="md:grid grid-cols-2 divide-x divide-y md:divide-y-0 divide-black md:h-1/2">
            <div className="font-bold md:text-center divide-y divide-black h-full">
              <p className="text-2xl md:text-3xl font-semibold py-6 px-10 md:px-0">
                Phone
              </p>
              <div className="p-10 md:p-0 md:flex md:flex-col justify-center md:h-3/4 space-y-4">
                <p>
                  <Image src={phone} alt="phone_icon" className="inline"/> +000000000000
                </p>
                <p>
                  <Image src={phone} alt="phone_icon" className="inline"/> +000000000000
                </p>
              </div>
            </div>

            <div className="font-bold md:text-center divide-y divide-black h-full">
              <p className="text-2xl md:text-3xl font-semibold py-6 px-10 md:px-0">
                Address
              </p>
              <div className="p-10 md:p-0 md:flex md:flex-col w-full space-y-4 justify-center md:h-3/4">
                <p>OPENING HOURS: 8 TO 11 P.M.</p>
                <p className="flex md:justify-center md:items-center">
                  <Image src={location} alt="phone_icon"/> 15/4 Xyz 
                </p>
              </div>
            </div>
          </div>
        </div>


        <div className="order-first lg:order-last w-full">
          <Image
            src={store}
            alt="Kyiv LuxeBouquets"
            className="w-full"
          />
          <div className="md:grid md:grid-cols-2 divide-x divide-black">
            <div className="w-full md:text-center px-10 pt-4 md:p-4">
              <p className="font-semibold text-3xl">Follow us</p>
            </div>
            <div className="px-10 grid content-center pb-4 md:pb-0">
              <Socials/>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="">
        <div className="w-full md:grid justify-center px-10 py-6 md:py-10 md:px-0 border-b border-black">
          <h2 className="text-3xl md:text-4xl font-semibold">Our Services</h2>
        </div>

        <div className="grid grid-rows-2 lg:grid-cols-2 lg:grid-rows-1">
          <div className="relative lg:static h-96">
            <Image
              src={subscription}
              alt="Lady with a flowers in a vase"
              className="object-cover object-top lg:hidden"
              fill={true}
            />
            <Image
              src={subscription}
              alt="Lady with a flowers in a vase"
              className="w-full hidden lg:block"
              // fill={true}
            />
          </div>

          <div className="w-full grid justify-items-center content-center text-center h-full px-10">
            <p className="text-xs md:text-sm">SERVICE</p>
            <div className="w-full grid justify-items-center content-center space-y-3 mt-4">
              <h3 className="text-2xl md:text-3xl font-semibold">
                Flower Subscriptions
              </h3>
              <p className="md:w-3/4 subpixel-antialiased">
                Experience the convenience and savings of regular flower deliveries with our flexible subscription service - up to 30% more profitable than one-time purchases.
              </p>
            </div>
            <button className="border border-black px-5 py-4 text-sm mt-6 w-full md:w-auto">
              SUBSCRIBE NOW
            </button>
          </div>
        </div>

        <div className="relative h-96 md:h-auto">
          <Image
            src={service}
            alt="services"
            className="brightness-50 hidden md:block"
          />
          <Image
              src={service}
              alt="services"
              className=" brightness-50 object-cover object-top lg:hidden"
              fill={true}
            />
          <div className="absolute top-0 text-white text-center w-full grid h-full content-center justify-items-center px-10">
            <p className="text-xs md:text-sm">SERVICE</p>
            <div className="w-full grid justify-items-center content-center space-y-3 mt-4">
              <h3 className="text-3xl md:text-5xl lg:text-4xl font-semibold tracking-wider">
                Wedding & Event Decor
              </h3>
              <p className="w-4/5 lg:w-2/5 tracking-wider font-light text-sm">
                Let our team of expert florists and designers create stunning, on-trend floral décor for your special day. Trust us to bring your vision to life.
              </p>
            </div>
            <button className="border border-white px-5 py-4 text-sm mt-8 w-full md:w-auto">
              INQUIRE NOW
            </button>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="w-full px-16 py-28">
        <CarouselGrid />
      </section>
    </main>
  );
}
