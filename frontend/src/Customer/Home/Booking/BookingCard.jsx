import React from "react";
import {ArrowRight,ArrowRightAlt} from '@mui/icons-material'
import { Button } from "@mui/material";
import barberImg from "../../../assets/services/barber-2165745_1280.jpg";

const BookingCard=()=>{
    return(
         <div className="p-5 rounded-md bg-slate-100 md:flex items-center justify-between ">
        {/* //    <div className="p-5 border border-red-500 bg-yellow-200"> */}

           <div className="space-y-2">
                <h1 className="text-2xl font-bold">
Monika Salon
                </h1>
                <div>
                    <li>haircut</li>
                    <li>massage thearapy</li>
                    <li>hair color</li>
                </div>
                <div>
                    <p>Time & Date</p>
                    <p>Time & Date <ArrowRightAlt/>2025-01-16</p>
               <p>12:00:00 To 12:45:00</p>
                </div>
                <div className="space-y-2">
                    <img src={barberImg} alt="Barber" className="w-28 h-28" />

                    <p>249</p>
                    <Button color="error" variant="outlined">Cancelled</Button>
                </div>
            </div>
        </div>
    )
}
export default BookingCard