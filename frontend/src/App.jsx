import React from "react";
import { ThemeProvider } from "@emotion/react";

import greenTheme from "./theme/greenTheme";

import Home from "./Customer/Home/Home";
// import SalonDetail from "./Customer/Home/Salon/SalonDetails/SalonDetail";
import SalonDetails from "./Customer/Home/Salon/SalonDetails/SalonDetails";

function App() {
  return (
    <ThemeProvider theme={greenTheme}>
      {/* <SalonDetail />  */}
        <SalonDetails />
    </ThemeProvider>
  );
}

export default App;

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
