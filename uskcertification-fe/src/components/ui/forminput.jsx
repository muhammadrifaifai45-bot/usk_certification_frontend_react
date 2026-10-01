import React from "react";

export default function forminput({ type, placeholder, value, onChange }) {
  return (<input 
  type={type}
   required 
   value={value} 
   onChange={onChange} 
   className="w-full bg-[#e9e9e9] text-gray-800 placeholder-gray-500 px-6 py-3.5 rounded-full outline none border border-transparent focus:border-gray-300 transition duration-200 text-sm"
   placeholder={placeholder}
   />
  );
}
