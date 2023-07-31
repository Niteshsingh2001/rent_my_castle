import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

export const Carousel = ({ images }) => {
    const [index, setIndex] = useState(0)

    const handeleLeft = () => {
        index <= 0 ? setIndex(images.length - 1) : setIndex(index - 1)
    }
    const handleRight = () => {
        index >= images.length - 1 ? setIndex(0) : setIndex(index + 1)
    }
    return (
        <div className="w-full card-image shadow-inner bg-no-repeat bg-center bg-contain bg-slate-100 flex justify-between px-4" style={{ backgroundImage: `url(${images[index]})`, height: "60vh" }}>
            {images.length <= 1 ? null : <>
                <button onClick={handeleLeft}><ChevronLeftIcon className="text-teal-600 h-10" /> </button>
                <button onClick={handleRight}><ChevronRightIcon className="text-teal-600 h-10" /></button>
            </>
            }
        </div>
    )
}
