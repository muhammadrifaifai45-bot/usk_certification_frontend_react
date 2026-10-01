import React from "react";

export default function LoginHeader(){
    return(

        // Div classname pembungkus gambar
        <>
     
        <div className="mb-8">
            <img src="images/bnsp.png" alt="Logo Bnsp"
            className="h-10 object-contain"
            />
        </div>

        <div className="text-center" md:text-left mb-6>
            <h2 className="text-4xl font-bold text-gray-900 tracking-tight mb-3">
                Hallo!
            </h2>

            <p className="text-gray-500 text-xs leading-relaxed">
                Bagi anda yang telah memiliki akun bnsp <br className="hidden sm:inline"/>
                silahkan login menggunakan email yang telah terdaftar oleh sistem
            </p>
        </div>


        </>
    );
}