import { Autocomplete } from "@react-google-maps/api";
import React, { useState } from "react";


const Input = ({setCoordinates}) => {
  const [autocomplete,setAutoComplete]=useState(null)
  const onLoad=(autoC)=>setAutoComplete(autoC);

  const onPlaceChanged=()=>{
    const lat = autocomplete.getPlace().geometry.location.lat();
    const lng = autocomplete.getPlace().geometry.location.lng();
    setCoordinates( { lat , lng } )
  }

  return (
    <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
    <div className="p-5 overflow-hidden w-[270px] h-[60px]  bg-[#4070f4] shadow-[2px_2px_20px_rgba(0,0,0,0.08)] rounded-full flex group items-center justify-start hover:duration-300 duration-300 ml-auto"  >
      <div className="flex items-center justify-center fill-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          id="Isolation_Mode"
          data-name="Isolation Mode"
          viewBox="0 0 24 24"
          width="22"
          height="22"
        >
          <path d="M18.9,16.776A10.539,10.539,0,1,0,16.776,18.9l5.1,5.1L24,21.88ZM10.5,18A7.5,7.5,0,1,1,18,10.5,7.507,7.507,0,0,1,10.5,18Z" />
        </svg>
      </div>
      <input
        type="text"
        className="outline-none text-[20px] bg-transparent w-full text-white font-normal px-4"
        placeholder="Search..."
      />
    </div>
    </Autocomplete>
  );
};

export default Input;
