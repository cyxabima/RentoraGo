import React from 'react'
import { Separator } from '../components/ui/separator'
import { BsFuelPumpFill } from "react-icons/bs";
import { PiSeatbeltFill } from "react-icons/pi";
import { PiEngineFill } from "react-icons/pi";
import { FaCoins } from "react-icons/fa6";
import { Button } from './ui/button';
import { cn } from "@/lib/utils" // i have imported that function by myself to use the concept of prop className so that i can use multiple class of same type
import { Link } from 'react-router-dom';
import { Badge } from "@/components/ui/badge";

function CarItem({ carData, className, url, deleteCarHandler }) {

    return (
        <div className={cn(' rounded-3xl border-white border-2 p-4 hover:shadow-md shadow-primary cursor-pointer sm:w-80 md:w-70', className)}>

            {/* Badge for vendor */}

            {deleteCarHandler ? <Badge className={`${carData.is_booked ? "bg-green-500 hover:bg-green-600 text-green " : "bg-red-500 hover:bg-red-600 text-red"}} mb-3`}>{carData.is_booked ? "Booked" : "Not Booked"}</Badge> : ""}

            {/* {Image of card} */}
            <div className='w-[200px] h-[180px] md:w-[250px] md:h-[200px] mx-auto flex items-center justify-center bg-white rounded-xl overflow-hidden hover:shadow-primary  hover:scale-105 transition-all duration-500' >
                <img src={carData?.image_url} alt="car"  />
            </div >

            <div className=' p-4 '>
                {/* Name of Car */}
                <h2 className='font-bold text-lg mb-2 text-primary'>{carData.car_name}</h2>
                <Separator className={"bg-secondary"} />

                {/* Type */}

                <div className='grid grid-cols-3 mt-5 gap-4'>
                    <div>
                        <BsFuelPumpFill className='text-xl text-secondary ' />
                        <div className='text-secondary'>{carData.fuel_type}</div>
                    </div>
                    <div>
                        <PiSeatbeltFill className='text-2xl text-secondary' />
                        <div className='text-secondary'>{carData.siting_capacity}</div>
                    </div>
                    <div>
                        <PiEngineFill className='text-2xl text-secondary' />
                        <div className='text-secondary'>{carData.engine_size}</div>
                    </div>
                </div>
                {/* <Separator className={"bg-secondary "} /> */}
                {/* view and price */}

                <div className='mt-5 flex items-center justify-between '>
                    <div className='flex gap-2'>
                        <FaCoins className='text-2xl text-secondary' />
                        <div className='text-secondary'>{carData.price_per_day}/ day</div>
                    </div>
                    {deleteCarHandler ?
                        <Button className={"bg-red-600 font-bold"} onClick={async () => { await deleteCarHandler(carData?.uid) }} disabled={carData.is_booked} >Delete</Button>
                        : <div>
                            <Link to={url}>
                                <Button className={"hover:cursor-pointer"}>View</Button>
                            </Link>
                        </div>}

                </div>
            </div>

        </div >
    )
}

export default CarItem