
import { Query, } from "appwrite";
import { client, databases, account } from "./database";
import PropertyForm from "../components/propertyform";
import { useState, useEffect } from "react";
import { PlusIcon } from "@heroicons/react/24/solid";
import Card, { CardProperty } from "../components/card";

export default function Profile({ id }) {

    const [uid, setuid] = useState("")
    const [userName, setUserName] = useState("")

    const [list, setList] = useState([]);
    const [state, setState] = useState(false);

    function showForm() {
        state ? setState(false) : setState(true);
    }

    useEffect(() => {
        if (id) {
            setuid(JSON.parse(id)["id"])
            setUserName(JSON.parse(id)["name"])

        }
    }, [])


    useEffect(() => {
        if (uid.length > 0) {
            let promise = databases.listDocuments(
                process.env.REACT_APP_DATABASE_ID,
                process.env.REACT_APP_COLLECTION_ID,
                [
                    Query.equal("user_id", uid)
                ]
            );
            promise.then(function (response) {
                setList(response.documents);
            }, function (error) {
                setList([]);
            });
        }

    }, [uid])

    const OwnerProperty = () => {
        if (list.length > 0) {
            return (<div className="h-screen">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center justify-center mx-2 px-2 ">
                    {list.map((item, index) => (
                        <CardProperty key={index} imgID={item.img_id} imgURL={item.images[0]} title={item.title} description={item.description} price={item.price} near_by={item.near_by} id={item.$id} />
                    ))}
                </div>
            </div>
            )
        }
        else {
            return (
                <div className="flex w-full justify-center mt-5">
                    You don't have listed any property
                </div>
            )
        }
    }


    return (
        <div>
            <div className="flex justify-end mr-2 " >
                <button className="btn-primary h-10 px-5 mt-2 mx-4 flex items-center " onClick={showForm}>
                    <PlusIcon className="h-5 mr-1" />
                    List Property
                </button>
            </div>
            {state ? <PropertyForm user={uid} name={userName} /> : null}
            <OwnerProperty />
        </div>
    )
}