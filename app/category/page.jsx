import Image from "next/image";
import CategoryCard from "../components/CategoryCard";

function page() {
  return (
    <main className="flex flex-col justify-between">
        <section className="w-full *:lg:w-1/2 lg:flex">
            <aside className="relative lg:static h-96">
                <Image
                    src={"/side.jpg"}
                    alt="Fresh Flowers"
                    // width={720}
                    // height={720}
                    fill={true}
                    className="object-cover object-top lg:hidden"
                />
                <Image
                    src={"/side.jpg"}
                    alt=""
                    width={420}
                    height={420}
                    className="w-full hidden lg:block"
                />

                <div className="absolute top-0 text-white text-center w-full grid h-full content-center justify-items-center px-10">
                    <p className="text-4xl">Fresh Flowers</p>
                </div>
            </aside>
            <aside className="grid md:grid-cols-2">
                <CategoryCard />
            </aside>
        </section>
    </main>
  )
}

export default page