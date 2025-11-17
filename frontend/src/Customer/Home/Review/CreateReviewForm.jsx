import {Box, TextField,Rating, Button} from '@mui/material'
import InputLabel from "@mui/material/InputLabel";
import { useFormik } from "formik";

import React from 'react'
const CreateReviewForm=()=>{
    const formik=useFormik({
initialValues:{
    reviewText:"",
    reviewRating:0
},
onSubmit: (values)=>{
    console.log("submitting",values);
},
    });
    return(
        <Box component={"form"}
        onSubmit={formik.handleSubmit}
        sx={{mt:3}}
        className='space-y-5 w-full lg:w-1/2'
        >
            <TextField 
            fullWidth
            id="reviewText"
            name="reviewText"
            label="Review"
            variant='outlined'
            multiline
            rows={4}
            value={formik.values.reviewText}
            onChange={formik.handleChange}/>
            <div className='space-y-2'>
                <InputLabel>Rating</InputLabel>
<Rating 
id="reviewRating"
name="reviewRating"
value={formik.values.reviewRating}
// onChange={()=>formik.setFieldValue("reviewRating",newValue)}
onChange={(event, newValue) => formik.setFieldValue("reviewRating", newValue)}

precision={0.5}
/>
            </div>
<Button variant='contained' color="primary" type='submit'>Submit Review</Button>
        </Box>
    )
}
export default CreateReviewForm;