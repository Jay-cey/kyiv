import Image from "next/image";
import Link from "next/link";
import ReasonsCard from "../components/ReasonsCard";
import steps from "../subscriptionSteps";
import SubscriptionPlans from "../components/SubscriptionPlans";
import accordionData from "../accordionData";
import Accordion from "../components/accordion";

function page() {
  function createAccordion(accordionData) {
    return(
      <Accordion
        key={accordionData.id}
        faq={accordionData.faq}
      />
    )
  }
  return (
    <main className="divide-y divide-black">
      <section className="grid lg:grid-cols-2">
        <div className="relative">
          <Image src={"/image.jpg"} alt="" fill={true} className="object-cover hidden lg:block" />
          {/* <Image src={"/image.jpg"} alt="" fill={true} className="object-cover" /> */}
          <Image src={"/image.jpg"} alt="" width={420} height={420} className="w-full lg:hidden h-96 md:h-auto object-cover"/>
        </div>
        <article className="py-16 w-full text-base grid justify-items-center">
          <div className="w-3/4 space-y-4 *:space-y-2">
            <h2 className="text-3xl lg:text-5xl md:text-4xl  font-bold justify-self-start">Flower Subscription</h2>
            
            <div>
              <p className="font-semibold">For Yourself</p>
              <p className="flex gap-4"><span>• &nbsp;</span> The perfect way to keep your home fresh and beautiful. Get a regular delivery of stunning bouquets straight to your doorstep without lifting a finger. Enjoy the beauty and fragrance of fresh flowers hassle-free!</p>
            </div>

            <div>
                <p className="font-semibold">As a gift</p>
                <p className="flex gap-4"><span>• &nbsp;</span> Simply provide us with their address and let us take care of the rest, delivering beautiful blooms straight to their doorstep at the frequency and duration of your choosing.</p>
            </div>

            <div>
              <p className="font-semibold">For business</p>
              <p className="flex gap-4"><span>• &nbsp;</span> Is a great way to create a pleasant atmosphere and leave a good impression on your guests and customers. Fresh floral arrangements will improve the aesthetic image of your business, and our service guarantees timely replacement without extra care or effort on your part.</p>
            </div>

            <button className="border border-black px-6 py-4 font-medium">EXPLORE PLANS</button>
          </div>
        </article>
      </section>

      <section className="grid grid-flow-row lg:grid-cols-2 divide-y lg:divide-x divide-black">
        <div className="p-10 md:p-16">
          <h2 className="font-semibold text-3xl lg:text-5xl">How does it work?</h2>
        </div>

        <div className="grid grid-flow-rows divide-y divide-black">
          {
            steps.map((item) => (
              <ReasonsCard key={item.id}
                title={item.title}
                text={item.text}
              />
            ))
          }
        </div>
      </section>

      <section className="grid lg:grid-cols-2 lg:divide-x divide-black">
        <aside className="lg:order-last border-l border-black">
          <Image src={"/subscription1.jpg"} alt="" width={420} height={420} className="w-full"/>
        </aside>

        <aside className="w-full px-12 space-y-4 py-16">
          <p className="text-xs md:text-sm font-medium">BUILD YOUR SUBSCRIPTION</p>
          <h3 className="font-medium text-2xl md:text-4xl">Selecting a Plan</h3>
          <p className="">Enjoy free shipping on every order and save up to 30%. 
          Every bouquet we deliver is carefully curated to ensure it arrives fresh and stunning. To modify, pause, or cancel your subscription, simply log in to your account dashboard. You&apos;re in complete control of your flower delivery experience.</p>
          {/* <div className=""></div> */}
          <SubscriptionPlans/>

          <div className="grid grid-flow-rows md:grid-rows-2 border-y border-gray-500 divide-y divide-gray-500 pt-6 pb-8 space-y-2">
            <div className="space-y-2">
              <h6 className="text-2xl md:text-3xl">How often do you want flowers delivered ?</h6>
              <p>Select the delivery frequency</p>
              <div className="grid grid-rows-3 md:grid-rows-none md:grid-cols-3 gap-3 text-center pt-3 pb-4 md:pb-0">
                <buttton className="border border-black w-full py-3 font-medium text-xs md:text-base">MONTHLY</buttton>
                <buttton className="border border-black w-full py-3 font-medium text-xs md:text-base">BI-WEEKLY</buttton>
                <buttton className="border border-black w-full py-3 font-medium text-xs md:text-base">WEEKLY</buttton>
              </div>
            </div>

            <div className="space-y-2 pt-5">
              <h6 className="text-2xl md:text-3xl">How many deliveries would you like ?</h6>
              <p>Pay once and do not worry about flowers, our bouquets will be beautiful and on time, as many times as you need.</p>
              {/* <div className="flex items-center space-x-4"> */}
                    <ul className="border border-black divide-x divide-black *:px-4 *:py-2 flex w-full md:w-fit md:mb-7">
                        <li> - </li>
                        <li className="w-3/4 text-center md:w-fit"> <span>1</span> </li>
                        <li> + </li>
                    </ul>
                {/* </div> */}
            </div>
          </div>

          <button className="w-full bg-black text-white font-medium py-4">CHECKOUT</button>
        </aside>
      </section>

      {/* FAQ */}
      <section className='w-full min-h-fit py-14 bg-[#F5F5F7] flex flex-col text-center items-center space-y-8 md:space-y-16'>
        <div className='lg:w-2/3 md:w-4/5 grid grid-flow-row bg-white md:py-16 lg:px-24 border border-black space-y-5 w-full px-8 py-7'>
          <h5 className='font-semibold text-2xl md:text-3xl lg:text-5xl'>Subscription FAQ</h5>
          <div className='divide-y divide-black grid grid-flow-row'>
            {accordionData.map(createAccordion)}
          </div>
        </div>
      </section>
    </main>
  )
}

export default page