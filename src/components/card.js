import { Link, useParams, useHistory } from 'react-router-dom';
import TruncatedText from '../logic/Truncated';
import { TrashIcon } from '@heroicons/react/24/solid';
import MsgBox from "./msgbox";
import { useState } from 'react';
import { storage, databases } from "../pages/database";

export function CardProperty({ imgURL, title, description, near_by, price, id, imgID }) {
    const { user_id } = useParams()
    const nav = useHistory()
    const handClick = (e) => {
        e.preventDefault();

        imgID.forEach(element => {
            const delFile = storage.deleteFile(process.env.REACT_APP_BUCKET_ID, element);
            delFile.then(function (response) {
                console.log(response); // Success
            }, function (error) {
                console.log(error); // Failure
            });
        });

        const promise = databases.deleteDocument(process.env.REACT_APP_DATABASE_ID,
            process.env.REACT_APP_COLLECTION_ID, id);

        promise.then(function (response) {
            console.log(response)
            nav.go(0)
        }, function (error) {
            console.log(error)
        });
    }

    return (
        <Link to={user_id ? `/user/${user_id}/post/${id}` : "/post/" + id} className="rounded-lg shadow-md mx-3 my-3 p-3 card-height  ">
            <div className='h-52 w-full image rounded-lg bg-slate-800' style={{ backgroundImage: `url(${imgURL})` }}></div>
            <h2 className="text-xl font-semibold mt-4 mb-2">{title}</h2>
            <p className="text-gray-600 text-sm sm:h-10 md:h-15">
                {TruncatedText(description, 12)}
            </p>
            <div className="mt-2 flex justify-between items-center">
                <p className="text-gray-500 text-xs">Near By {near_by} </p>
                <div className='flex items-center '>
                    <p className="text-teal-600 font-semibold">₹{price}</p>
                    <TrashIcon className='text-red-600 h-4 w-4 ml-2' onClick={handClick} />
                </div>
            </div>
        </Link>
    )
}

export default function Card({ imgURL, title, description, near_by, price, id }) {
    const { user_id } = useParams()

    return (

        <Link to={user_id ? `/user/${user_id}/post/${id}` : "/post/" + id} className="rounded-lg shadow-md mx-3 my-3 p-3 card-height  ">
            <div className='h-52 w-full image rounded-lg bg-slate-800' style={{ backgroundImage: `url(${imgURL})` }}></div>
            <h2 className="text-xl font-semibold mt-4 mb-2">{title}</h2>
            <p className="text-gray-600 text-sm sm:h-10 md:h-15">
                {TruncatedText(description, 12)}
            </p>
            <div className="mt-2 flex justify-between items-center">
                <p className="text-gray-500 text-xs">Near By {near_by} </p>
                <p className="text-teal-600 font-semibold">₹{price}</p>
            </div>
        </Link>
    )
}