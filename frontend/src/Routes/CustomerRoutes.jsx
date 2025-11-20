import React from 'react'
import Navbar from '../Customer/Home/Navbar/Navbar'
import Home from '../Customer/Home/Home'
import Notifications from '../Customer/Home/Notification/Notifications'
import {Route,Routes} from 'react-router-dom'
import SalonDashboard from '../Seller/SalonDashboard'
import Bookings from '../Customer/Home/Booking/Bookings'
import SalonDetails from '../Customer/Home/Salon/SalonDetails/SalonDetails'
import NotFound from '../Notfound/Notfound'

const CustomerRoutes=()=>{
    return(
        <div>
            <Navbar/>
            <Routes>

        {/* <Route element={<Layout />}> */}
        
        
          <Route path="/" element={<Home />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/bookings" element={<Bookings />} />
          <Route path="/salon/:id" element={<SalonDetails />} />
   <Route path="*" element={<NotFound />} />      
        {/* <Route path="/salon-dashboard/*" element={<SalonDashboard />}  */}

      </Routes> 
            

        </div>
    )
}

export default CustomerRoutes