import React,{useState} from 'react';
import{InsertComment} from "@mui/icons-material";
import {Divider,ListItemIcon,ListItemText,ListItem} from "@mui/material";
import {useLocation,useNavigate} from "react-router-dom";

const DrawerList = ({ menu, menu2 }) => {
    const navigate=useNavigate()
    const location =useLocation();
    const handleClick=(item)=>()=>{
        navigate(item.path)

    }
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleSelect = (index) => {

    setSelectedIndex(index);
  };

  return (
    <div className="h-full">
      <div className="flex flex-col justify-between h-full w-[300px] border-r py-5">

        {/* Top Menu */}
        <div className="space-y-2">
          {menu.map((item, index) => (
            <ListItem
            onClick={handleClick(item)}
            className={'cursor-pointer pr-9'}
              
            >
              <ListItemIcon sx={{ color: 'white', minWidth: '40px' }}>
                {item.activeIcon}
              </ListItemIcon>
              <ListItemText primary={item.name} sx={{ color: 'white' }} />
            </ListItem>
          ))}
        </div>

        {/* Bottom Menu */}
        <div className="space-y-2">
          {menu2.map((item, index) => (
            <ListItem
              button
              key={index + menu.length} // ensure unique key
              selected={selectedIndex === index + menu.length}
              onClick={() => handleSelect(index + menu.length)}
              disableRipple
              className={`flex items-center px-5 py-3 rounded-r-full text-white ${
                selectedIndex === index + menu.length
                  ? 'bg-green-800'
                  : 'bg-green-600 hover:bg-green-700'
              }`}
            >
              <ListItemIcon sx={{ color: 'white', minWidth: '40px' }}>
                {item.activeIcon}
              </ListItemIcon>
              <ListItemText primary={item.name} sx={{ color: 'white' }} />
            </ListItem>
          ))}
        </div>

      </div>
    </div>
  );
};

export default DrawerList;

// import React from 'react';
// import ListItem from '@mui/material/ListItem';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';

// const DrawerList = ({ menu, menu2 }) => {
//   return (
//     <div className="h-full">
//       <div className="flex flex-col justify-between h-full w-[300px] border-r py-5">

//         {/* Top Menu */}
//         <div className="space-y-2">
//           {menu.map((item, index) => (
//             <ListItem
//               button
//               key={index}
//               className="bg-primary-color text-secondary-color rounded-full my-1 hover:bg-primary-hover"
//             >
//               <ListItemIcon sx={{ color: 'white', minWidth: '40px' }}>
//                 {item.activeIcon}
//               </ListItemIcon>
//               <ListItemText primary={item.name} />
//             </ListItem>
//           ))}
//         </div>

//         {/* Bottom Menu */}
//         <div className="space-y-2">
//           {menu2.map((item, index) => (
//             <ListItem
//               button
//               key={index}
//               className="bg-primary-color text-secondary-color rounded-r-full my-1 hover:bg-primary-hover"
//             >
//               <ListItemIcon sx={{ color: 'white', minWidth: '40px' }}>
//                 {item.activeIcon}
//               </ListItemIcon>
//               <ListItemText primary={item.name} />
//             </ListItem>
//           ))}
//         </div>

//       </div>
//     </div>
//   );
// };

// export default DrawerList;

// import React from 'react'
// import ListItem from '@mui/material/ListItem'
// import ListItemIcon from '@mui/material/ListItemIcon'
// import ListItemText from '@mui/material/ListItemText'

// const DrawerList=({menu,menu2}) =>{
//     return(
//         <div className='h-full'>
//             <div className='flex flex-col justify-between h-full w-[300px] border-r py-5'>
// <div className='space-y-2'>
//     {menu.map((item,index)=>(
//     <ListItem button key ={index} className='bg-primary-color text-secondary-color flex items-center px-5 py-3 rounded-full  '>
        
//             <ListItemIcon sx={{ color: 'white' }}>
//                 {item.activeIcon}
//             </ListItemIcon>
//         <ListItemText primary={item.name} />
//             {item.name}
//         </ListItem>
        
//         ))}   
//     </div> 
//     <div className='space-y-2'>
//     {menu2.map((item,index)=>(
//     <ListItem button key ={index} className='bg-primary-color text-secondary-color flex items-center px-5 py-3 rounded-r-full  '>
        
//             <ListItemIcon sx={{color:'white'}}>
//                 {item.activeIcon}
//             </ListItemIcon>
//         <ListItemText primary={item.name}/>
//             {item.name}
//         </ListItem>
        
        
//         ))}   

//             </div>
//             </div>
            
//         </div>
//     )
// }
// export default DrawerList