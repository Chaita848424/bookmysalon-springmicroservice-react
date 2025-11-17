import { Close } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react";
const SelectedServiceList=()=>{
    return (
        <div className="my-5 space-y-2">
           { [1,1,1,1,1].map((item,index)=>
            (<div key={index} className="py-2 px-4 rounded-md bg-slate-100 flex justify-between items-center">
            <h1 className="font-thin">Man Beard</h1>
            <p>399</p>
            <IconButton>
                <Close/>
            </IconButton>
            
        </div>
        ))}
        </div>
    );
};
export default SelectedServiceList;