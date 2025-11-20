import React from "react";

// IMPORT ALL MUI ICONS
import Dashboard from "@mui/icons-material/Dashboard";
import ShoppingBag from "@mui/icons-material/ShoppingBag";
import Add from "@mui/icons-material/Add";
import AccountBalance from "@mui/icons-material/AccountBalance";
import Receipt from "@mui/icons-material/Receipt";
import AccountBox from "@mui/icons-material/AccountBox";
import Logout from "@mui/icons-material/Logout";
import CategoryIcon from '@mui/icons-material/Category';
import NotificationsNone from '@mui/icons-material/NotificationsNone';
import Notifications from '@mui/icons-material/Notifications';

// IMPORT DrawerList COMPONENT
import DrawerList from "../../../../AdminSalon/DrawerList.jsx";





const menu = [
  {
    name: "Dashboard",
    path: "/salon-dashboard",
    icon: <Dashboard className="text-primary-color" />,
    activeIcon: <Dashboard className="text-secondary-color" />,
  },
  {
    name: "Bookings",
    path: "/salon-dashboard/bookings",
    icon: <ShoppingBag className="text-secondary-color" />,
    activeIcon: <ShoppingBag className="text-secondary-color" />,
  },
  {
    name: "Add Services",
    path: "/salon-dashboard/add-services",
    icon: <Add className="text-primary-color" />,
    activeIcon: <Add className="text-secondary-color" />,
  },
  {
    name: "Payment",
    path: "/salon-dashboard/payment",
    icon: <AccountBalance className="text-primary-color" />,
    activeIcon: <AccountBalance className="text-secondary-color" />,
  },
  {
    name: "Transaction",
    path: "/salon-dashboard/transaction",
    icon: <Receipt className="text-secondary-color" />,
    activeIcon: <Receipt className="text-secondary-color" />,
  },
  {
    name: "Category",
    path: "/salon-dashboard/category",
    icon: <CategoryIcon className="text-primary-color" />,
    activeIcon: <CategoryIcon className="text-secondary-color" />,
  },
  {
    name: "Notifications",
    path: "/salon-dashboard/notifications",
    icon: <NotificationsNone className="text-primary-color" />,
    activeIcon: <Notifications className="text-secondary-color" />,
  },
];

const menu2 = [
  {
    name: "Accounts",
    path: "/salon-dashboard/account",
    icon: <AccountBox className="text-primary-color" />,
    activeIcon: <AccountBox className="text-secondary-color" />,
  },
  {
    name: "Logout",
    path: "/",
    icon: <Logout className="text-primary-color" />,
    activeIcon: <Logout className="text-secondary-color" />,
  },
];

// MAIN COMPONENT
const SalonDrawerList = () => {
  return <DrawerList menu={menu} menu2={menu2} />;
};

export default SalonDrawerList;

// import React from "react";
// import CategoryIcon from '@mui/icons-material/Category';
// import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
// import NotificationsIcon from '@mui/icons-material/Notifications';
// const menu=[
//     {
//     name:"Dashboard",
//     path:"/salon-dashboard",
//     icon:<Dashboard className='text-primary-color'/>,
//     activeIcon:<Dashboard className='text-secondary-color'/>,

// },
//    {
//     name:"Bookings",
//     path:"/salon-dashboard/bookings",
//     icon:<ShoppingBag className='text-secondary-color'/>,
//     activeIcon:<ShoppingBag className='text-secondary-color'/>,
// },
//    {
//     name:"Add Services",
//     path:"/salon-dashboard/add-services",
//     icon:<Add className='text-primary-color'/>,
//     activeIcon:<Add className='text-secondary-color'/>,
// },
//    {
//     name:"Payment",
//     path:"/salon-dashboard/payment",
//     icon:<AccountBalance className='text-primary-color'/>,
//     activeIcon:<AccountBalance className='text-secondary-color'/>,
// },
//    {
//     name:"Transaction",
//     path:"/salon-dashboard/transaction",
//     icon:<Receipt className='text-secondary-color'/>,
//     activeIcon:<Receipt className='text-secondary-color'/>,
// },
//    {
//     name:"Category",
//     path:"/salon-dashboard/category",
//     icon:<CategoryIcon className='text-primary-color'/>,
//     activeIcon:<CategoryIcon className='text-secondary-color'/>
// },
//    {
//     name:"Notifications",
//     path:"/salon-dashboard/notifications",
//     icon:<NotificationsNone className='text-primary-color'/>,
//     activeIcon:<Notifications className='text-secondary-color'/>
// },
  

// ]
// const menu2=[
//      {
//     name:"Accounts",
//     path:"/salon-dashboard/account",
//     icon:<AccountBox className='text-primary-color'/>,
//     activeIcon:<AccountBox className='text-secondary-color'/>
// },
//    {
//     name:"Logout",
//     path:"/",
//     icon:<Logout className='text-primary-color'/>,
//     activeIcon:<Logout className='text-secondary-color'/>
// },
// ]

// import SalonDrawerList from SalonDrawerList.jsx
//  const SalonDrawer =()=>{
//     return(
//        <DrawerList menu={menu} menu2={menu2}/>
//     )
//  }
//  export default SalonDrawerList