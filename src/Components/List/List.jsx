import React, { useState } from 'react'
import { CircularProgress,Grid,InputLabel,MenuItem,FormControl,Typography , Select } from '@material-ui/core';

import useStyles from "./styles"

const List = () => {
  const classes = useStyles();
  const [type,setType]=useState("")
  return (
    <div className={classes.container}>
    <Typography variant="h4">Dining, Accomodation & Attraction around you</Typography>
    <div className="flex flex-col items-start gap-4 overflow-hidden rounded-md p-6 shadow-sm shadow-[#00000050]">
      <span className="text-center font-mono text-base font-black uppercase text-neutral-600">
        Select What you are Looking for
      </span>
      <div className="flex items-center gap-4">
        {/* Male Radio Button */}
        <div className="relative flex h-[50px] w-[50px] items-center justify-center">
          <input
            type="radio"
            id="male"
            name="gender"
            value="male"
            className="peer z-10 h-full w-full cursor-pointer opacity-0"
            checked={type === 'male'}
            onChange={() => setType('male')}
          />
          <div className="absolute h-full w-full rounded-full bg-blue-100 p-4 shadow-sm shadow-[#00000050] ring-blue-400 duration-300 peer-checked:scale-110 peer-checked:ring-2"></div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35px"
            height="35px"
            viewBox="0 0 24 24"
            fill="none"
            className="absolute stroke-blue-400"
          >
            <path d="M15.563 16.12C14.871 16.81 13.989 17.277 13.029 17.462C12.062 17.649 11.061 17.546 10.152 17.165C8.291 16.386 7.073 14.572 7.057 12.555C7.047 11.072 7.708 9.663 8.856 8.724C10.004 7.784 11.515 7.414 12.967 7.717C13.924 7.934 14.796 8.429 15.472 9.14C16.421 10.05 16.97 11.3 16.999 12.614C17.008 13.928 16.491 15.19 15.563 16.12Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        {/* Female Radio Button */}
        <div className="relative flex h-[50px] w-[50px] items-center justify-center ">
          <input
            type="radio"
            id="female"
            name="gender"
            value="female"
            className="peer z-10 h-full w-full cursor-pointer opacity-0 "
            checked={type === 'female'}
            onChange={() => setType('female')}
            
          />
          <div className="absolute h-full w-full rounded-full bg-pink-100 p-2 shadow-sm shadow-[#00000050] ring-pink-400 duration-300 peer-checked:scale-110 peer-checked:ring-2"></div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35px"
            height="35px"
            viewBox="0 0 24 24"
            fill="none"
            className="absolute fill-pink-400"
          >
            <path d="M20 9C20 13.08 16.945 16.447 12.998 16.938C12.999 16.958 13 16.979 13 17V19H14C14.552 19 15 19.448 15 20C15 20.552 14.552 21 14 21H13V22C13 22.552 12.552 23 12 23C11.448 23 11 22.552 11 22V21H10C9.448 21 9 20.552 9 20C9 19.448 9.448 19 10 19H11V17C11 16.979 11.001 16.958 11.002 16.938C7.055 16.447 4 13.08 4 9C4 4.582 7.582 1 12 1C16.418 1 20 4.582 20 9Z" />
          </svg>
        </div>

        {/* Non-binary Radio Button */}
        <div className="relative flex h-[50px] w-[50px] items-center justify-center">
          <input
            type="radio"
            id="non-binary"
            name="gender"
            value="non-binary"
            className="peer z-10 h-full w-full cursor-pointer opacity-0"
            checked={type === 'non-binary'}
            onChange={() => setType('non-binary')}
          />
          <div className="absolute h-full w-full rounded-full bg-purple-100 p-2 shadow-sm shadow-[#00000050] ring-purple-400 duration-300 peer-checked:scale-110 peer-checked:ring-2"></div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35px"
            height="35px"
            viewBox="0 0 24 24"
            fill="none"
            className="absolute fill-purple-400"
          >
            <path d="M12 1C6.477 1 2 5.477 2 12C2 18.523 6.477 23 12 23C17.523 23 22 18.523 22 12C22 5.477 17.523 1 12 1ZM12 19C10.343 19 9 17.657 9 16H15C15 17.657 13.657 19 12 19ZM12 14C9.243 14 7 11.757 7 9C7 6.243 9.243 4 12 4C14.757 4 17 6.243 17 9C17 11.757 14.757 14 12 14Z" />
          </svg>
        </div>
      </div>
      </div>
        </div>
    
  )
}

export default List
