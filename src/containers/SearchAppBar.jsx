import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import "./SearchAppBar.css";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import InstallMobileRoundedIcon from "@mui/icons-material/InstallMobileRounded";
import AdminPanelSettingsRoundedIcon from "@mui/icons-material/AdminPanelSettingsRounded";
import axios from "axios";
import { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import UserLogin from "./UserLogin";
// import { TOTAL_ITEMS } from "../CartRedux/action";
// import Cartpage from "./Cartpage";

const Search = styled("div")(({ theme }) => ({

  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.1),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.4),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "black",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));



export default function SearchAppBar() {
  const cart = useSelector((state) => state.cartReducer.count);
  const [state, setState] = useState([]);
  //const cartcount=useSelector(st=>st.cartReducer.count))
  
  useEffect(() => {
    axios
      .get("https://meesho123.herokuapp.com/cart")
      .then((res) => {
        setState(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);


// console.log("totalItems..........", state.length)
  /////////////////////////////////////////////////////////////
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar className="Box">
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <Link to="/">
              <MenuIcon />
            </Link>

            {/* <img src='https://tse3.mm.bing.net/th?id=OIP.mfUxZhSvgvG7wTGSNkPilgHaHa&pid=Api&P=0&w=153&h=153' alt=''/> */}
          </IconButton>
          {/* <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            MUI1321321
          </Typography> */}

          <Search className="searchBox">
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>

          {/* <<<<<<<<<<<<<<<<<<<<< Header Right Boxes   >>>>>>>>>>>>>>>>>>>>>>>>>>*/}
          <div className="headerLeftBoxes">
            
          <div className="hLBox UserLoginBtn">
              <UserLogin />
            
            </div>
            
            {/* <div className="hLBox">
              <InstallMobileRoundedIcon />
              <p>Download App</p>
            </div>
            <div className="hLBox">
              <AdminPanelSettingsRoundedIcon />
              <p>Admin</p>
            </div> */}
            <div className="hLBox">
            <Link to="/signup">
              <AccountCircleRoundedIcon className="black" />
             <p className="hoverWhite">Profile</p>
             </Link>

            </div>

            <div className="hLBox">
            <Link to="/product/cart">
              <ShoppingCartRoundedIcon />
              {/* <span className="cartIcon">{cart}</span>  */}
              <p className="hoverWhite">Cart</p>
              </Link>
            </div>
            <span className="cartIcon">{cart}</span>
          </div>
        </Toolbar>
      </AppBar>

      <hr />

      
      
    </Box>
  );
}
