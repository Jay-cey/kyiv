import Image from "next/image";
import ProductsCard from "../components/ProductsCard";
import ProductSwipe from "../components/ProductSwipe";

function page() {
  return (
    <main className="flex min-h-screen flex-col justify-between divide-y divide-black overflow-x-hidden">
        <section className="grid lg:grid-cols-2">
            <div className="relative w-full h-full">
                <Image src={"/products.jpg"} alt="" fill={true} className="object-cover hidden md:block"  />
                <Image src={"/products.jpg"} alt="" width={420} height={420} className="w-full lg:hidden" />
            </div>

            <aside className="p-10 space-y-4">
                <div className="flex text-sm font-medium">
                    <p>FRESH FLOWERS /&nbsp;</p>
                    <p className="text-gray-500">ROSY DELIGHT</p>
                </div>

                <h5 className="text-2xl md:text-4xl font-semibold">Rosy Delight - <span>$100</span></h5>
                <p>Large exceptional bouquet composed of a selection of David Austin roses, known for their beauty and subtle fragrance. The bouquet is accompanied by seasonal foliage which will enhance these sublime flowers even.</p>

                <div className="flex items-center space-x-4">
                    <p className="font-semibold">Quantity</p>
                    <ul className="border border-black divide-x divide-black *:px-3 *:py-2 flex w-fit *:text-xs">
                        <li> - </li>
                        <li> <span>1</span> </li>
                        <li> + </li>
                    </ul>
                </div>

                <div className="space-y-5 w-full">
                    <p className="flex flex-col-reverse md:flex-row justify-between"><span className="font-medium">Excellent combination with:</span><span className="text-gray-500">Vase Not Included</span></p>

                    <div className="w-full">
                        {/* <ProductSwipe/> */}
                    </div>
                </div>

                <div className=""></div>

                <div className="space-y-2">
                    <p className="font-medium">Price Options</p>
                    <div className="space-x-2 items-baseline md:items-center">
                        <input type="radio" name="purchase" id="one-time-purchase"/>
                        <label htmlFor="one-time-purchase">One time purchase. Price $100</label>
                    </div>
                    <div className="space-x-2 items-baseline md:items-center">
                        <input type="radio" name="purchase" id="subscribe" className="bg-black" />
                        <label htmlFor="subscribe">Subscribe now, and save 25% on this order.</label>
                    </div>
                    <button className="bg-black block text-white w-full py-3">ADD TO BASKET</button>
                </div>
            </aside>
        </section>

        <section className="grid md:grid-cols-2 lg:grid-cols-4 divide-y divide-black">
            <p className="col-span-full text-center text-3xl md:text-5xl font-medium py-12">You may also like...</p>
            <ProductsCard/>
        </section>
    </main>
  )
}

export default page