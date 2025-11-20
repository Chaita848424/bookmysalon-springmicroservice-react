import React from "react";
import { Card } from "@mui/material";
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
const NotificationCard =()=>{
    return(
        <Card sx={{bgcolor:"#EAF0F1"}}
        className={'cursor-pointer p-5 flex items-center gap-5'}>
            <NotificationsActiveIcon/>
            <div>
                <p>your booking got confirmed</p>
                <h1>
                    {[1,1,1,1].map((item)=><span>hair cur</span>)}
                </h1>
            </div>

        </Card>
    )
}
export default NotificationCard