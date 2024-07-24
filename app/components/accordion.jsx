'use client';   
import { useState } from 'react';
import Image from "next/image";

function Accordion(props) {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    }
  return (
    <div className='w-full h-fit space-y-4'>
        <div className='w-full flex h-14 items-center text-left'>
            <p className='w-[96%] font-medium md:text-xl lg:text-3xl'>{props.faq}</p>
            <button onClick={handleClick}>
                {
                    isOpen ? <Image src={'/arrowUp.png'} alt='' width={32} height={32} className='float-right w-3' /> : <Image src={'/arrowDown.png'} alt='' width={32} height={32} className='float-right w-3' />
                }
            </button>
        </div>

        {isOpen && (
            <div className='w-full pb-2 text-left text-sm md:text-base'>
                Our subscriptions allow you to select a delivery frequency that best suits your needs - either weekly, bi-weekly, or monthly. You can also choose the number of deliveries for your subscription. Choose any combination that works for you!
            </div>
        )}
    </div>
  )
}

export default Accordion