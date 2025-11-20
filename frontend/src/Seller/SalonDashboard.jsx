import React from "react";
import SalonDrawerList from "../Customer/Home/Salon/components/SalonDrawerList.jsx";




const SalonDashboard=()=>{
    return(
        <div className="min-h-screen">
            <section className='lg:flex lg:h-[90vh]'>
                <div className='hidden lg:block h-full'>
                    <SalonDrawerList/>
                </div>
            </section>

        </div>
    )
}
export default SalonDashboard