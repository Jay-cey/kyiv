import products from "../products";
import Image from "next/image";

function ProductsCard() {
  return (
    <>
        {
            products.map((item) => (
                <div key={item.id} className="w-full relative">
                    <Image
                        src={item.name}
                        alt={item.alt}
                        width={420}
                        height={420}
                        className="w-full"    
                    />

                    <div className="absolute bottom-0 pb-4 text-sm text-center w-full font-medium">
                        <p>{item.alt}</p>
                        <p className="text-defaultGrey">Price - {item.price}</p>
                    </div>
                </div>
            ))
        }
    </>
  )
}

export default ProductsCard