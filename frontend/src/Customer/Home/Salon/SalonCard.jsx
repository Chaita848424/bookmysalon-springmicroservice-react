import React from "react";
import StarIcon from '@mui/icons-material/Star';
import img1 from "../../../assets/services/pexels-kamil-rybarski-3231771-9709013.jpg";
const SalonCard =()=>{
    return(
        <div className="" >
            <div className="w-56 md:w-80 rounded-md bg-slate-100 ">
                <img className='w-full h-[15 rem] object-cover rounded-t-md' 
                src={img1} alt=""/>
                <div className='p-5 space-y-2'>
                    <h1>pablo Salon</h1>
                    <div className="text-white text-sm p-1 bg-green-700 rounded-full w-14
                     flex items-center justify-center gap-1" >

                        4.5 <StarIcon sx={{fontSize:"16px"}}/>
                    </div>
                    <p>professional haircut and..</p>
                    <p>mafari house mustafa </p>
                </div>

            </div>

        </div>
    )
}
export default SalonCard