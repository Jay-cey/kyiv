import Image from "next/image";
import flowers from "../flowers";

function CategoryCard() {
  return (
    <>
       {
        flowers.map((item) => (
            <div key={item.id} className="w-full relative">
                <Image
                    src={item.name}
                    alt={item.name}
                    width={420}
                    height={420}
                    className="w-full"
                />

                <div className="absolute top-0 text-center w-full grid h-full content-end justify-items-center pb-3 text-xs md:text-sm">
                  <p className="font-medium">{item.alt}</p>
                  <p className="text-defaultGrey">Price: {item.price}</p>
                </div>
            </div>
        ))
       }
    </>
  )
}

export default CategoryCard