import React from 'react'

function XPower() {
  return (
    <div>
          <div className="XPower">
    <img className="xl:p-20 2xl:p-10 lg:p-8 md:p-8 p-4 my-20 xl:w-4/12 lg:w-4/12 md:w-5/12 w-5/12" src="./car1/car1-logo.png" alt="" />
    <ul className="flex justify-around my-10 mb-32">
            <li className="grid justify-items-center w-3/12">
            <p className="text-7xl font-arimo font-bold lg:text-6xl md:text-5xl text-[2rem]">64<span className="text-4xl lg:text-xl md:text-2xl text-xs" > kWh</span></p>
                <p className="flex font-arimo font-light text-2xl font-semibold lg:text-base md:text-sm text-xs">BATERIA</p>
            </li>
            <hr className="border border-x-black h-28" />
            <li className="grid justify-items-center w-3/12">
            <p className="text-7xl font-arimo font-bold lg:text-6xl md:text-5xl text-3xl text-[2rem]">600<span className="text-4xl lg:text-xl md:text-2xl text-xs"> Nm</span></p>  
                <p className="flex font-arimo font-light text-2xl font-semibold lg:text-base md:text-sm text-xs">TORQUE</p>
            </li>
            <hr className="border border-x-black h-28" />
            <li className="grid justify-items-center w-3/12">
            <p className="text-7xl font-arimo font-bold lg:text-6xl md:text-5xl text-3xl text-[2rem]">320<span className="text-4xl lg:text-xl md:text-2xl text-xs"> kW</span></p> 
                <p className="flex font-arimo font-light text-2xl font-semibold lg:text-base md:text-sm text-xs">POTENCIA</p>
            </li>
            <hr className="border border-x-black h-28" />
            <li className="grid justify-items-center w-3/12">
                <p className="text-7xl font-arimo font-bold lg:text-6xl md:text-5xl text-[2rem]">385<span className="text-4xl lg:text-xl md:text-2xl text-xs"> km</span></p>
                <p className="flex font-arimo font-light text-2xl font-semibold lg:text-base md:text-sm text-xs">AUTONOMIA MAXIMA</p>
            </li>
            <hr className="border border-x-black h-28" />
            <li className="grid justify-items-center w-3/12">
                <p className="text-7xl font-arimo font-bold lg:text-6xl md:text-5xl text-[2rem]">3.8<span className="text-4xl lg:text-xl md:text-2xl text-xs">S</span></p>
                <p className="flex font-arimo font-light text-2xl font-semibold lg:text-base md:text-sm text-xs">ACELERACION (0-100 KM/H)</p>
            </li>
           </ul>
    <img className="flex mx-auto w-7/12"  srcSet="
    ./car1/car1-mobile.png 768w,
    ./car1/car1.png 1280w
  " alt="XPower" />


        </div>
    </div>
  )
}

export default XPower