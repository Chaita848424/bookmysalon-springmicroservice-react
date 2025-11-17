import React from "react";
import SalonCard from "../SalonCard";
import FiberManualRecord from "@mui/icons-material/FiberManualRecord";
import img4 from "../../../../assets/services/barber-3173419_1280.jpg"
import { Button } from "@mui/material";
const ServiceCard=()=> {
    return(
        <div className="w-full">
            <div className="flex items-center justify-between gap-5">
                <div className="space-y-1 w-[60%]">
                    <h1 className="text-2xl font-semibold">
                        Man Beard
                    </h1>
                    <p className="text-gray-500 text-sm">stylish man beard</p>
                    <div className="flex items-center gap-3">
                        <p>399</p>
                    <FiberManualRecord sx={{fontSize:"10",color:"gray"}}/>
                    <p>45 min</p>
                    </div>
                </div>
<div className="space-y-3">
  
<img className="w-32 h-32 object-cover rounded-md"
src={img4} alt="" />
<Button fullWidth variant="outlined">Add</Button>
</div>
            </div>
        </div>
    )
}
export default ServiceCard