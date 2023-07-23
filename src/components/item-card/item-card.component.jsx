import { Link } from "react-router-dom";
import { truncatedText } from "../../utils/helper-func/helper-func.utils";

export default function ItemCard({ document }) {
    
    const { images, title, description, near_by, price } = document

    return (
        <Link className="rounded-lg shadow-md mx-3 my-3 p-3 card-height  ">
            <div className='h-52 w-full image rounded-lg bg-slate-800 bg-cover bg-no-repeat' style={{ backgroundImage: `url(${images[0]})` }}></div>
            <h2 className="text-xl font-semibold mt-4 mb-2">{title}</h2>
            <p className="text-gray-600 text-sm sm:h-10 md:h-15">
                {truncatedText(description, 12)}
            </p>
            <div className="mt-2 flex justify-between items-center">
                <p className="text-gray-500 text-xs">Near By {near_by} </p>
                <p className="text-teal-600 font-semibold">₹{price}</p>
            </div>
        </Link>
    )
}
