import { useState, useEffect } from "react";
import { databases, account } from "./database";
import { useLocation, useParams } from "react-router-dom";
import { ChevronLeftIcon, ChevronRightIcon, PhoneIcon } from "@heroicons/react/24/solid";
import Loader from "../components/loader";



const Carousel = (data) => {

    const [index, setIndex] = useState(0)
    let images = data["images"]

    const handeleLeft = () => {
        index <= 0 ? setIndex(images.length - 1) : setIndex(index - 1)
    }
    const handleRight = () => {
        index >= images.length - 1 ? setIndex(0) : setIndex(index + 1)
    }
    return (
        <div className="flex">
            <div className="w-full card-image shadow-inner bg-slate-100 flex justify-between px-4" style={{ backgroundImage: `url(${images[index]})`, height: "60vh" }}>
                {images.length <= 1 ? null : <>
                    <button onClick={handeleLeft}><ChevronLeftIcon className="text-teal-600 h-10" /> </button>
                    <button onClick={handleRight}><ChevronRightIcon className="text-teal-600 h-10" /></button>
                </>
                }
            </div>
        </div>
    )

}

export default function Post({ ALERT }) {
    const [data, setData] = useState(null);
    const { post_id } = useParams()

    useEffect(() => {
        const promise = databases.getDocument(
            process.env.REACT_APP_DATABASE_ID,
            process.env.REACT_APP_COLLECTION_ID, post_id
        );

        promise.then(
            function (response) {
                setData(response);
            },
            function (error) {
                setData([]);
                ALERT("Something went wrong");
            }
        );

    }, [])


    return (
        <>
            {data ?
                <section className="">
                    <Carousel images={data.images} />
                    <div className="mx-5 py-3">
                        <div className="flex items-center justify-between align-middle mt-4 mb-2">
                            <h2 className="text-2xl font-semibold capitalize">{data["title"]}</h2>
                            <p className="text-teal-600 xsm:text-2xl text-lg font-semibold ml-4">₹ {data.price}/Month {data.negotiable == null ? "" : data.negotiable}</p>
                        </div>
                        <p className="text-gray-600 text-lg">
                            {data["description"]}
                        </p>
                        <div className="mt-2 flex justify-between items-center">
                            <div>
                                <p className="text-gray-500  text-sm capitalize">Near By {data.near_by} </p>
                                <p className="text-gray-500  text-sm capitalize">Distance {data.distance} Km </p>
                            </div>
                            <div className="flex flex-col ">
                                <p className="text-gray-500 text-right text-sm capitalize">Address</p>
                                <p className="text-gray-500 text-right text-sm capitalize">{data.address} </p>
                                <p className="text-gray-500 text-right text-sm capitalize">{data.city + "," + data.state} </p>
                            </div>
                        </div>
                        <div className="flex items-center justify-between align-middle mt-2 " >
                            <p> Post By {data.user_name} ({data.owner == true ? "Owner" : null})</p>
                            <a href={"tel:" + data.phone_no} className=" flex items-center justify-between align-middle"><PhoneIcon className="text-teal-600 h-5 w-5 mr-2" /> {data.phone_no}</a>
                        </div>
                    </div>
                </section>
                : <Loader />
            }



        </>
    )
}