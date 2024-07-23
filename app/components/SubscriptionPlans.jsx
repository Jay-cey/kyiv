import Image from "next/image";
import plans from "../subPlans";

function SubscriptionPlans() {
  return (
    <div className="grid grid-flow-row">
      {plans.map((plan) => (
        <div key={plan.id} className="w-full grid grid-rows-2 md:grid-rows-none md:grid-cols-2 mb-4 divide-y border border-gray-400">
          <div className="w-full relative">
            <Image src={plan.img} alt={plan.title} layout="fill" objectFit="cover" objectPosition="center" />
          </div>
          <div className="px-7 py-3">
            <h2 className="text-lg font-bold">{plan.title}</h2>
            <ul className="">
              {plan.list.map((item, index) => (
                <li key={index} className="flex items-baseline"><span>• &nbsp;</span>{item}</li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-2">
            <button className="w-full bg-black text-white font-medium py-4">SELECT</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SubscriptionPlans;
