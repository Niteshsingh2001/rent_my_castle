import React from 'react'
import { XMarkIcon } from "@heroicons/react/24/solid";
import Card from '../item-card/item-card.component';
export default function Popup() {
    return (
        <Card className="absolute h-[60%] w-1/2 top-1/4 left-1/4 z-100 bg-red-500 auth_bg" >
            <div className=''>
                <XMarkIcon className='h-48 w-48' />

            </div>
        </Card>
    )
}
