import Image from "next/image";
import AboutFlow from "../components/AboutFlow";


function page() {
  return (
    <main className="divide-y divide-black">
        <section className="grid lg:grid-cols-2">
            <div className="text-center w-2/3 justify-self-center lg:h-dvh grid content-center items-center gap-y-6 py-10 lg:py-0">
                <h2 className="font-semibold text-3xl md:text-4xl lg:text-5xl">Our Story <span className="block font-normal" id="font" >About</span> Kyiv LuxeBouquets</h2>
                <p className="md:text-lg">Discover Uniquely Crafted Bouquets and Gifts for Any Occasion: Spread Joy with Our <span className="font-black">Online Flower Delivery Service</span></p>
                <div className="flex gap-8 justify-self-center mt-5">
                    <Image src={"/insta.png"} alt="" width={30} height={30}/>
                    <Image src={"/pint.png"} alt="" width={30} height={30}/>
                    <Image src={"/fb.png"} alt="" width={30} height={30}/>
                    <Image src={"/x.png"} alt="" width={30} height={30}/>
                    <Image src={"/tel.png"} alt="" width={30} height={30}/>
                </div>
            </div>

            <div className="relative w-full h-96 lg:h-full">
                <Image src={"/about1.jpg"} alt="" fill={true} className="object-cover object-top" />
            </div>
        </section>

        <section className="grid justify-items-center py-12 text-center">
            <div className="lg:w-1/2 grid gap-y-4 px-10 lg:px-0">
                <p className="text-xs md:text-sm font-medium">OUR STORY</p>
                <h4 className="text-2xl md:text-4xl font-medium">Our Founder&apos;s Passion </h4>
                <p>Kyiv LuxeBouquets was founded in 2010 by Natalia Zelinska  with the goal of bringing unique and exquisite bouquets to the people of Kyiv. Natalia has always had a passion for flowers and design, and his vision was to create a local floral studio that would specialize in the creation and delivery of fresh, beautiful, and distinctive bouquets.</p>
            </div>
        </section>

        <section className="">
            <AboutFlow />
        </section>

        <section className="grid justify-items-center text-center gap-y-4 py-16 w-full">
            <div className="lg:w-3/5 space-y-4 px-16">
                <h3 className="lg:text-5xl md:text-4xl text-3xl font-semibold">Discover Our Beautiful Bouquets</h3>
                <p className="font-medium text-lg">Explore our collection of exquisite bouquets and surprise your loved ones with the perfect gift. Click the button below to start shopping</p>
            </div>
                <button className="bg-black text-white text-sm md:text-base font-medium py-3 px-20">SHOP NOW</button>
        </section>
    </main>
  )
}

export default page