import React from 'react'
import {Autocomplete} from "@react-google-maps/api";
import {AppBar,Toolbar, Typography,InputBase,Box  } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';


import SearchIcon from '@mui/icons-material/Search';
import useStyles from './styles'
const Header = () => {

  const classes = useStyles();
  return (
    <>    
    <div className="mynav">
    <nav>
      <h3 className="logo">Travel Advisor</h3>
      <button className="animated-button">
        <svg viewBox="0 0 24 24" className="arr-2" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z">
          </path>
        </svg>
        <span className="text" style={{ color: 'rgb(214, 227, 245)' }}>Explore Now</span>
        <span className="circle"></span>
        <svg viewBox="0 0 24 24" className="arr-1" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z">
          </path>
        </svg>
      </button>
    </nav>
  </div>    
  
    </>
  )
}

export default Header
