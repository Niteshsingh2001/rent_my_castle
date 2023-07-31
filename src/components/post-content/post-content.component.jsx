import { PhoneIcon } from "@heroicons/react/24/solid";


export default function PostContent({ content }) {

    const { title, price, negotiable, description, near_by, distance, address, city, state, user_name, owner, phone_no } = content
    return (
        <div className="mx-5 py-3">
            <div className="flex items-center justify-between align-middle mt-4 mb-2">
                <h2 className="text-2xl font-semibold capitalize">{title}</h2>
                <p className="text-teal-600 xsm:text-2xl text-lg font-semibold ml-4">₹ {price}/Month {negotiable == null ? "" : negotiable}</p>
            </div>
            <p className="text-gray-600 text-lg">
                {description}
            </p>
            <div className="mt-2 flex justify-between items-center">
                <div>
                    <p className="text-gray-500  text-sm capitalize">Near By {near_by} </p>
                    <p className="text-gray-500  text-sm capitalize">Distance {distance} Km </p>
                </div>
                <div className="flex flex-col ">
                    <p className="text-gray-500 text-right text-sm capitalize">Address</p>
                    <p className="text-gray-500 text-right text-sm capitalize">{address} </p>
                    <p className="text-gray-500 text-right text-sm capitalize">{city + "," + state} </p>
                </div>
            </div>
            <div className="flex items-center justify-between align-middle mt-2 " >
                <p> Post By {user_name} ({owner == true ? "Owner" : null})</p>
                <a href={"tel:" + phone_no} className=" flex items-center justify-between align-middle">
                    <PhoneIcon className="text-teal-600 h-5 w-5 mr-2" /> {phone_no}
                </a>
            </div>
        </div>
    )
}
