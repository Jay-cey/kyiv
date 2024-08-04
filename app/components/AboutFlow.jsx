import about from "../about";
import Image from "next/image";

function AboutFlow() {
  return (
    <div className="divide-y divide-black">
      {
        about.map((item) => (
            <div key={item.id} className={`lg:h-svh lg:grid grid-cols-2`}>
                <div className="relative w-full lg:h-full h-96">
                    <Image src={item.img} alt={item.altText || 'Default'} layout="fill" objectFit="cover" className="object-center lg:object-top" />
                </div>
                <div className={`${item.id === 2 ? 'order-first' : ''} p-10 md:p-20 space-y-3`}>
                    <h4 className="text-2xl md:text-4xl font-medium">{item.title}</h4>
                    <p>{item.text}</p>
                </div>
            </div>
        ))
    }
    </div>
  );
}

export default AboutFlow;
