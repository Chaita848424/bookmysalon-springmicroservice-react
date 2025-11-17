import React from "react"
import bridal from "../../../../assets/services/bridal.jpeg";
// import CategoryCard from "./CategoryCard";

const CategoryCard=({handleCategoryClick,selectedCategory,item})=>{
    return(
        
 <div
onClick={handleCategoryClick} className={`px-3 py-2 cursor-pointer flex gap-2 items-center ${selectedCategory ===item?"bg-green-500 text-white rounded-md":""}`}> 
<img className="w-14 h-14 object-cover rounded-full"
src={bridal} alt="Bridal" />
<h1>Bridal Makeup</h1>
        </div>
    )
}
 export default CategoryCard;