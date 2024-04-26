import React from 'react'

function Extended_Range() {
  return (
    <div className="Extended_Range">
    <img className="xl:p-20 2xl:p-11 lg:p-8 md:p-9 p-4 my-20  xl:ml-[55rem] 2xl:ml-[60rem] lg:ml-[35rem] md:ml-[29rem] ml-[14rem]  xl:w-5/12 2xl:w-4/12 lg:w-5/12 md:w-5/12 w-6/12" src="./car2/car2-logo.png" alt="" />
    <ul className="flex justify-around my-10 mb-32">
            <li className="grid justify-items-center w-3/12">
            <p className="text-7xl font-arimo font-bold lg:text-6xl md:text-5xl text-[2rem]">77<span className="text-4xl lg:text-xl md:text-2xl text-xs" > kWh</span></p>
                <p className="flex font-arimo font-light text-2xl font-semibold lg:text-base md:text-sm text-xs">BATERIA</p>
            </li>
            <hr className="border border-x-black h-28" />
            <li className="grid justify-items-center w-3/12">
            <p className="text-7xl font-arimo font-bold lg:text-6xl md:text-5xl text-3xl text-[2rem]">350<span className="text-4xl lg:text-xl md:text-2xl text-xs"> Nm</span></p>  
                <p className="flex font-arimo font-light text-2xl font-semibold lg:text-base md:text-sm text-xs">TORQUE</p>
            </li>
            <hr className="border border-x-black h-28" />
            <li className="grid justify-items-center w-3/12">
            <p className="text-7xl font-arimo font-bold lg:text-6xl md:text-5xl text-3xl text-[2rem]">180<span className="text-4xl lg:text-xl md:text-2xl text-xs"> kW</span></p> 
                <p className="flex font-arimo font-light text-2xl font-semibold lg:text-base md:text-sm text-xs">POTENCIA</p>
            </li>
            <hr className="border border-x-black h-28" />
            <li className="grid justify-items-center w-3/12">
                <p className="text-7xl font-arimo font-bold lg:text-6xl md:text-5xl text-[2rem]">520<span className="text-4xl lg:text-xl md:text-2xl text-xs"> km</span></p>
                <p className="flex font-arimo font-light text-2xl font-semibold lg:text-base md:text-sm text-xs">AUTONOMIA MAXIMA</p>
            </li>
            <hr className="border border-x-black h-28" />
            <li className="grid justify-items-center w-3/12">
                <p className="text-7xl font-arimo font-bold lg:text-6xl md:text-5xl text-[2rem]">6.5<span className="text-4xl lg:text-xl md:text-2xl text-xs">S</span></p>
                <p className="flex font-arimo font-light text-2xl font-semibold lg:text-base md:text-sm text-xs">ACELERACION (0-100 KM/H)</p>
            </li>
           </ul>
           
    <img className="flex justify-self-end mx-auto w-7/12"  srcSet="
    ./car2/car2-mobile.png 768w,
    ./car2/car2.png 1280w
  " alt="XPower" />


        </div>
  )
}

export default Extended_Range