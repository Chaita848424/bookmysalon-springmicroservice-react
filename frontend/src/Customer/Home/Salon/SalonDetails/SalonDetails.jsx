import React, { useState } from 'react'
import SalonDetail from './SalonDetail'
import { Button ,Divider} from '@mui/material'
import SalonServiceDetails from './SalonServiceDetails';
import Review from "../../Review/Review";
import CreateReviewForm from "../../Review/CreateReviewForm";
const tabs=[{name:"all services"},
    {name:"reviews"},
    {name:"create review"}];
const SalonDetails = ()=>{
    const [activeTab,setActiveTab]=useState(tabs[0])
    const handleActiveTab=(tab)=>setActiveTab(tab)
    return (
        <div className='px-5 lg:px-20'>
            <SalonDetail/>
            <div className='px-5 lg:px-20'>
                <div className='flex gap-2'>
                    {tabs.map((tab)=><Button 
                    key={tab.name}
                    onClick={()=>handleActiveTab(tab)}
                    variant={tab.name==activeTab.name?"contained": "outlined"}>
                        {tab.name}</Button>)}
                </div>
                <Divider/>
            </div>
            <div>
                {activeTab.name==="create review" &&(
                <div className='flex justify-center'>
                    <CreateReviewForm/>
                </div>
                )}
                {activeTab.name==="reviews"&&(
                <div>
                    <Review/>
                </div>
                )}
                {activeTab.name==="all services"&&(<div>
                    <SalonServiceDetails/>
            </div>
                )}
            </div>
            </div>
    );
};
export default SalonDetails; 