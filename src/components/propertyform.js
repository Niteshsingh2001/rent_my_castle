
import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { ArrowUpOnSquareIcon } from "@heroicons/react/24/solid";
import { ID, Permission, Role } from 'appwrite';
import { storage, databases } from "../pages/database";


const states = [
    "Andaman and Nicobar Islands",
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chandigarh",
    "Chhattisgarh",
    "Dadra and Nagar Haveli",
    "Daman and Diu",
    "Delhi",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jammu and Kashmir",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Lakshadweep",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Puducherry",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal"
];

const PropertyForm = ({ user, name }) => {
    const [images, setImages] = useState([]);
    const [formData, setformData] = useState([]);
    const [imgPath, setimgPath] = useState([]);
    const [load, setLoad] = useState(false)

    const location = useHistory()
    
    const handleImageUpload = async (event) => {
        const files = Array.from(event.target.files)
        setimgPath(Array.from(event.target.files))

        const uploadedImages = await Promise.all(
            files.map((file) => {
                return new Promise((resolve, reject) => {
                    const reader = new FileReader();

                    reader.onload = (e) => {
                        const imageData = e.target.result;
                        resolve(imageData);
                    };

                    reader.onerror = (error) => {
                        reject(error);
                    };

                    reader.readAsDataURL(file);
                });
            })
        );

        setImages([...images, ...uploadedImages]);
    };


    const UploadImage = () => {
        return (
            <div className='flex items-center bg-teal-50 rounded-md mx-2 overflow-y-auto' >
                <label for='uploadImages' className='flex flex-col items-center justify-center align-middle text-sm px-2'>
                    <ArrowUpOnSquareIcon className='text-teal-600 h-15 w-15' />
                    <p className='mb-2'>Upload Image</p>
                </label>
                <input id='uploadImages' name='images' className='hidden' type="file" multiple accept="image/png, image/gif, image/jpeg,image/webp" onChange={handleImageUpload} />

                <div className="flex items-center justify-center align-middle ">
                    {images.map((image, index) => (
                        <div key={index} className='image h-20 w-20 ml-2 rounded-md' style={{ backgroundImage: `url(${image})` }}>
                        </div>
                    ))}
                    <p className='text-teal-600 ml-2'>{images.length} Images</p>
                </div>
            </div>
        )

    }


    const submitForm = (event) => {
        event.preventDefault();
        setLoad(true)
        const data = [...event.target];
        let imgURL = []
        let imgID = []

        const info = {}

        data.forEach((item, index) => {
            if (item.name === "images") {
                info[item.name] = imgURL
            }
            else if (item.name === "owner" || item.name === "negotiable") {
                if (item.value == "on") {
                    info[item.name] = true
                }
                else {
                    info[item.name] = false
                }
            }
            else {
                info[item.name] = item.value
            }
        })

        delete info[""]
        info["user_id"] = user
        info["user_name"] = name


        async function uploadImages() {
            for (const file of imgPath) {
                const response = await storage.createFile(process.env.REACT_APP_BUCKET_ID, ID.unique(), file);
                const result = await storage.getFilePreview(process.env.REACT_APP_BUCKET_ID, response.$id);
                imgURL.push(result.href);
                imgID.push(response.$id)
            }
        }

        info["img_id"] = imgID

        uploadImages().then(
            function (response) {
                const promise = databases.createDocument(process.env.REACT_APP_DATABASE_ID, process.env.REACT_APP_COLLECTION_ID, ID.unique(), JSON.stringify(info));

                promise.then(function (response) {
                    location.go(0)
                }, function (error) {
                    console.log(error); // Failure
                });
            }

        )
    }
    return (
        <div className='mt-2 mx-4 '>
            <form onSubmit={submitForm}>
                <UploadImage />
                <div className='flex flex-col mt-1 mx-2 xsm:flex-row'>
                    <input name='title' type="text" required className='w-full xsm:w-1/2' placeholder="Title (e.g. XYZ PG for Boys)" />
                    <input name='near_by' type="text" required className='w-full xsm:w-1/2' placeholder="Near By College" />
                    <input name='distance' type="number" className='w-full xsm:w-1/2' placeholder='Distance From Near By (in km)' />
                    <input name='price' type="number" required className='w-full xsm:w-1/2' placeholder='Enter Rent Monthly' />

                </div>
                <div className='flex flex-col xsm:flex-row mt-1 mx-2'>
                    <textarea name='description' className='w-full xsm:w-1/2' rows={3} placeholder="Description (You can describe facilities, Terms and Condition here)" />
                    <textarea name='address' className='w-full xsm:w-1/2' rows={3} placeholder=" Address Here (Line 00 XYZ Road)" />
                    <div className='flex flex-row w-full xsm:flex-col align-middle justify-evenly xsm:w-1/3'>
                        <div className='flex items-center justify-start align-middle w-full'>
                            <input name='owner' id='owner' type="checkbox" />
                            <label for="owner" className='ml-2'>Are You Owner</label>
                        </div>
                        <div className='flex items-center align-middle w-full '>
                            <input name='negotiable' id='negotiable' type="checkbox" />
                            <label for="negotiable" className='ml-2'>Price is Negotiable</label>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col xsm:flex-row mt-1 mx-2'>
                    <input type="text" required name='city' className='w-full xsm:w-1/2' placeholder='Enter City' />
                    <select id="select" name='state' required>
                        <option hidden selected>Choose State</option>
                        {states.map((item, index) => {
                            return (
                                <option value={item}>{item}</option>
                            )
                        })}
                    </select>
                    <input name='phone_no' required type="tel"
                        className='w-full xsm:w-1/2' placeholder='Contact number' />


                </div>
                <div className='flex justify-end mr-2 mt-2'>
                    {/* <button className='btn-outline h-10 px-5 mt-2 ml-2' onClick={showForm}>
                            Close
                        </button> */}

                    <button type='submit' className='btn-primary h-10 px-5 mt-2 ml-2'>
                        {load ? "Adding... " : "Add Property"}
                    </button>

                </div>
            </form>
        </div>
    );
};

export default PropertyForm;
