import React from "react";

export default function Loginbtn({isLoading}){
    return(
    <button
        type ="submit"
        disabled = {isLoading}
        className="w-full max-w-[200px] bg-[#7a1315] text-white hover:bg-[#610e10] py-3 px-8 rounded-2xl font-medium tracking-wide transition duration-200 text-sm shadow-md disabled:opacity-50 cursor-pointer text-center"
    >
        {isLoading ? 'memperoses' : 'Masuk'}
        
    </button>
    );
}