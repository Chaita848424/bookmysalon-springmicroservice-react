import React from "react";
import { Avatar,Box ,Rating,Grid, IconButton} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

 const ReviewCard =()=>{
    return(
        <div className="flex justify-between">
            <div className="w-[80%] ">
                <Grid container spacing={3} >
                <Grid item xs={1}> 
            
                
                    <Box>
                        <Avatar className="text-white"
                        sx={{width:56,height:56,bgcolor:"#9155FD"}}>
                            A
                        </Avatar>
                    </Box>
                </Grid>
                <Grid item xs={9}>
                    <div className="space-y-2">
                        <p className="font-semibold text-lg">code with zosh</p>
                    <p className="opacity-70">2024-12-01T09:51:18.321553</p>
                    </div>
                    <div>
                        <Rating readOnly value={4.5} name="half-rating" defaultValue={4.5}precision={0.5}/>
                    </div>
                    <p>very nice salon</p>
                </Grid>
                
            </Grid>
            </div>
         
            <IconButton><DeleteIcon sx={{color:"error.main"}}/></IconButton>
       </div>
        
    );
};
export default ReviewCard;