import React from "react";
import SalonCard from "./SalonCard";
const SalonList =() => {
    return (
        <div className="flex gap-5 flex-wrap">
            {[1,1,1,1,1,1,1,1].map((item,index)=><SalonCard key={index}/>)}
        </div>
    )
}
export default SalonList;