// import React, { useState } from 'react';
import '../../index.css';
import React from 'react';

function Landing (){

    return(
        <div className="w-full h-full flex flex-col justify-center items-center ">
            <h2 className="lemon text-gray-700 font-serif text-[1.2rem]">
                Let Your Vote Count!!!
            </h2>
            <h3 className="lemon text-gray-500 font-thin text-[1rem]">
                Register with us or Login to vote!!
            </h3>
            <span className='flex flex-row justify-between w-[fit-content] gap-[1rem] h-[fit-content] mt-4'>
                <a href="/register" className='rounded-full px-4 py-2 bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-border text-white'>Register</a>
                <a href="/login" className='rounded-full px-4 py-2 bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-border text-white'>Login</a>
            </span>
        </div>
    );
}

export default Landing;