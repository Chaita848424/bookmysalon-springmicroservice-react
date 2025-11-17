import React from "react";

const HomeServiceCard = ({item}) => {
  return (
    <div className="flex justify-center items-center flex-col gap-4 rounded-lg p-5 bg-slate-100 w-32 h-48">
      {/* <img
        src="/assets/salon-images/haircut-4019676_1280.jpg"
        alt="Haircut"
        className="w-full h-32 object-cover rounded-md"
      /> */}
     <img className="w-20 h-20 rounded-full"
  src={item.image}
  alt={item.name}
  
/>


      <h1 className="text-center">{item.name}</h1>
    </div>
  );
};

export default HomeServiceCard;
