import Image from "next/image";
import flowers from "../flowers";

function CategoryCard() {
  return (
    <>
       {
        flowers.map((item) => (
            <div key={item.id} className="w-full">
                <Image
                    src={item.name}
                    alt={item.name}
                    width={420}
                    height={420}
                    className="w-full"
                />
            </div>
        ))
       }
    </>
  )
}

export default CategoryCard