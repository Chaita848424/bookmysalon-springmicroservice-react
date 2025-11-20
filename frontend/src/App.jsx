 import React from "react";
import { ThemeProvider } from "@emotion/react";
import { BrowserRouter,Route, Routes } from "react-router-dom";

import greenTheme from "./theme/greenTheme";
// import Layout from "./Layout";
import Home from "./Customer/Home/Home";
import Notifications from "./Customer/Home/Notification/Notifications.jsx";
import Bookings from "./Customer/Home/Booking/Bookings";
import SalonDetails from "./Customer/Home/Salon/SalonDetails/SalonDetails";
import SalonDashboard from "./Seller/SalonDashboard.jsx";
import CustomerRoutes from "./Routes/CustomerRoutes.jsx";

function App() {
  return (
    <ThemeProvider theme={greenTheme}>
      <BrowserRouter>
      <Routes>
        {/* <Route element={<Layout />}/> */}
          {/* <Route path="/" element={<Home />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/bookings" element={<Bookings />} />
          <Route path="/salon/:id" element={<SalonDetails />} />
         */}

        <Route path="/salon-dashboard/*" element={<SalonDashboard />} />
      <Route path="*" element={<CustomerRoutes/>}/>
      </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

// import React from "react";
// import { ThemeProvider } from "@emotion/react";
// import { Route, Routes } from "react-router-dom";

// import greenTheme from "./theme/greenTheme";
// import Navbar from "./Customer/Home/Navbar/Navbar.jsx";
// import SalonDashboard from "./Seller/SalonDashboard.jsx";
// import Home from "./Customer/Home/Home";
// import SalonDetails from "./Customer/Home/Salon/SalonDetails/SalonDetails";
// import Bookings from "./Customer/Home/Booking/Bookings";
// import Notifications from "./Customer/Home/Notification/Notifications.jsx";

// function App() {
//   return (
//     <ThemeProvider theme={greenTheme}>
//       <Navbar />

//       <Routes>
//         {/* Seller dashboard layout */}
//         <Route path="/salon-dashboard/*" element={<SalonDashboard />} />

//         {/* Customer main routes */}
//         <Route path="/" element={<Home />} />
//         <Route path="/notifications" element={<Notifications />} />
//         <Route path="/bookings" element={<Bookings />} />
//         <Route path="/salon/:id" element={<SalonDetails />} />

//       </Routes>
//     </ThemeProvider>
//   );
// }

// export default App;

// import React from "react";
// import { ThemeProvider } from "@emotion/react";

// import greenTheme from "./theme/greenTheme";
// import Navbar from "./Customer/Home/Navbar/Navbar.jsx";
// import SalonDashboard from "./Seller/SalonDashboard.jsx";
// import Home from "./Customer/Home/Home";
// import{Route, Routes} from 'react-router-dom';
// // import SalonDetail from "./Customer/Home/Salon/SalonDetails/SalonDetail";
// import SalonDetails from "./Customer/Home/Salon/SalonDetails/SalonDetails";
// import Bookings from "./Customer/Home/Booking/Bookings";
// import Notifications from "./Customer/Home/Notification/Notifications.jsx";
// function App() {
//   return (
//     <ThemeProvider theme={greenTheme}>
//         <Navbar/>
//       {/* <Home/> */}
//       {/* <SalonDetail />  */}
//       {/* <Bookings/> */}
//         {/* <SalonDetails /> */}
//         {/* <Notifications/> */}
//       <Routes>
//         <Route path='/salon-dashboard/*' element={<SalonDashboard/>}>
//      <Route path="/" element={<Home/>}/>
//      <Route path="/notifications" element={<Notifications/>}/>
//      <Route path="/bookings" element={<Bookings/>}/>
//      <Route path="/salon/:id" element={<SalonDetails/>}/>
//      <Route index element={<h1>Seller Dashboard Overview</h1>} />
//       </Route>
//       </Routes>
//     </ThemeProvider>
//   );
// }

// export default App;

// import React from "react";
// import { ThemeProvider } from "@emotion/react";
// import greenTheme from "./theme/greenTheme";

// // If you want SalonDetail:
//  import SalonDetail from "./Customer/Home/Salon/SalonDetails/SalonDetail";

// // If later you want Home:
// import Home from "./Customer/Home/Home";

// function App() {
//   return (
//     <ThemeProvider theme={greenTheme}>
//       {/* <SalonDetail /> */}
//         <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/salon/:id" element={<SalonDetail />} />
//         </Routes>
//       </BrowserRouter>
//       <Home />
      
//     </ThemeProvider>
//   );
// }

// export default App;


// import React from "react";
// import Home from "./Customer/Home/Home";

// function App() {
//   return (
//     <div>
//       <h1>Hello from App</h1>
//       <Home />
//     </div>
//   );
// }

// export default App;


// import logo from './logo.svg';
// import Button from "@mui/material/Button";
// import './App.css';
// import { ThemeProvider } from '@emotion/react';
// import greenTheme from './theme/greenTheme';
// import Home from './Customer/Home/Home';
// function App() {
//   return (
//     <ThemeProvider theme={greenTheme}>
// <SalonDetail/>

//         </ThemeProvider>
//   );
// }

// export default App;
