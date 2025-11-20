import { NotificationsActive } from "@mui/icons-material";
import { Button, IconButton } from "@mui/material";
import React from "react";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { useNavigate } from "react-router-dom";


const Navbar=()=>{
     const [anchorEl, setAnchorEl] = React.useState(null);
 const navigate=useNavigate();
     const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


    return(
        <div className="z-50 px-6 flex items-center justify-between py-2">
            <div className="flex items-center gap-10">
                <h1 onClick={()=>navigate("/")} className="cursor-pointer font-bold text-2xl">
                    Salon Service
                </h1>
                <div className="flex items-center gap-5">
                    <h1>Home</h1>
                </div>
            </div>
            <div className="flex items-center gap-3 md:gap-6">
                <Button variant="outlined">Become Partner</Button>
<IconButton onClick={()=>navigate("/notifications")}>
    <Badge badgeContent={5}>
        <NotificationsActive color="primary"/>
    </Badge>
</IconButton>
<div className="flex gap-1 items-center">
    <h1 className="text-lg font-semibold">Zosh</h1>
    <IconButton
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
>
        <Avatar sx={{bgcolor:"green"}}>
            Z
        </Avatar>
    </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          list: {
            'aria-labelledby': 'basic-button',
          },
        }}
      >
        
        <MenuItem onClick={()=>{
          navigate("/bookings")
          handleClose()
        }}>My Bookings</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
      {true ? (
    <></>   
) : (
    <IconButton>
        <AccountCircle sx={{ fontSize: "45px", color: "green" }} />
    </IconButton>
)}

{/* {true? (<div className="flex gap-1 items-center">
</div>)
:(
<IconButton>
    <AccountCircle sx={{fontSize:"45px",color:"green"}}/>
</IconButton>)} */}
            </div>
        </div>
        </div>
    )
}
export default Navbar;