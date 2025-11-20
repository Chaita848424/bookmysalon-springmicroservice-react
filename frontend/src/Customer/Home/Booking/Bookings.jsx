import React from "react";
import BookingCard from "./BookingCard.jsx";
const Bookings=()=>{
    return(
        <div className='px-5 md:flex flex-col items-center mt-10 min-h-screen'>
            <div>
             <h1 className="text-3xl font-bold py-5">My Bookings</h1>
     </div>
     <div className="space-y-4 md:w-[35rem]">
<BookingCard/>
     </div>
      </div>
    )
}
export default Bookings;