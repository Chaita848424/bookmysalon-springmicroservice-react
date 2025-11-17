// import React from "react";
import CategoryCard from "./CategoryCard";
import React, { useState } from "react";
import ServiceCard from "./ServiceCard";
import { Button, Divider } from "@mui/material";
import { RemoveShoppingCart } from "@mui/icons-material";

import { ShoppingCart } from "@mui/icons-material";
import SelectedServiceList from "./SelectedServiceList";



const SalonServiceDetails=() => {
    const [selectedCategory,setSelectedCategory]=useState(0)
    const handleCategoryClick=(category)=>()=>{setSelectedCategory(category)}
    return (
        <div className="lg:flex gap-5 h-[90vh] mt-10">
            <section className="space-y-5 border-r lg:w-[25%] pr-5">
                {/* <CategoryCard 
                // key={index}
                // item={index}
                selectedCategory={selectedCategory}
                handleCategoryClick={handleCategoryClick(null)}/> */}
                {[1,1,1,1,1].map((item,index)=>
                <CategoryCard 
                key={index}
                item={index}
                selectedCategory={selectedCategory}
                handleCategoryClick={handleCategoryClick(index)}/>)}
            </section>
<section className="space-y-2 lg:w-[50%] px-5 lg:px-20 overflow-y-auto">

{[11,1,1,1,1,1,1,1,1,1].map((item,index)=>
<div key={index} className="space-y-4">
<ServiceCard  item={item}/>
<Divider/>
</div>)}
</section>
<section className="lg:w-[25%]">
    <div className="border rounded-md p-5">
      {true ? <div>
            <div className="flex items-center gap-2">
                <ShoppingCart  sx={{fontSize:"30px",color:"green"}}/>
                <h1 className="font-thin text-sm">Selected Services</h1>

        </div>
        <SelectedServiceList/>
        <Button sx={{py:".7rem"}} fullWidth variant="contained">Book now</Button>
            </div>:
        <div className="flex flex-col gap-3 items-center justify-center">
            <RemoveShoppingCart sx={{fontSize:"30px",color:"green"}}/>
            <h1>not selected</h1>
        </div>}
    </div>

</section>
        </div>
    );
};
export default SalonServiceDetails;