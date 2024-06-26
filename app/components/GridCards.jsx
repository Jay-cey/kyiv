import Link from "next/link"
import Image from "next/image";

export default function gridCards(props) {
    let arr;
    if (props.arr === "right") {
        arr = "Shop now →"
    } else {
        arr = "← Shop now"
    }
    
  return (
    <div className="grid grid-cols-2">
        <div className={"w-full flex flex-col justify-center text-center"}>
            <p className="font-bold text-3xl">{props.title}</p>
            <p className="font-semibold"> 
                <Link href="#">{arr}</Link>
            </p>
        </div>

        <div className={(props.reverse ? "order-first" : "")}>
            <Image
                src={props.img}
                alt={props.altlabel}
                className="border-t"
            />
        </div>
    </div>
  )
}
