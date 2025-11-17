import React from 'react'
// import barberImg from "../../../assets/services/barber-1453064_1280.jpg";
// import barberImg1 from  "../../../assets/services/barber-1453064_1280.jpg";
// import barberImg2 from  "../../../assets/services/barber-2345701_1280.jpg";
import barberImg from "../../../../assets/services/barber-1453064_1280.jpg";
import barberImg1 from "../../../../assets/services/barber-5497152_1280.jpg";
import barberImg2 from "../../../../assets/services/barber-2345701_1280.jpg";

const SalonDetail =()=>{
    return(
        <div className='space-y-5 mb-20'>

            <section className='grid grid-cols-2 gap-3'>
                <div className='col-span-2'>
                    <img
                        src={barberImg}
                        alt="Salon"
                        className="w-full h-[300px] object-cover rounded-md"
                    />
                </div>
                 <div className='col-span-2'>
                    <img
                        src={barberImg1}
                        alt="Salon"
                        className="w-full h-[300px] object-cover rounded-md"
                    />
                </div>
                 <div className='col-span-2'>
                    <img
                        src={barberImg2}
                        alt="Salon"
                        className="w-full h-[300px] object-cover rounded-md"
                    />
                </div>
            </section>
<section className='space-y-3' >
    <h1 className='font-bold text-3xl'>Monu salon</h1>
    <p>Revenue colony ,shivajinagar</p>
    <p>Timing : 10:00:00 to 18:30:00</p>
</section>
        </div>
    )
}
export default SalonDetail;