// import { useState, useEffect } from "react";
// import { useLocation, matchPath } from "react-router-dom";
// import Profile from '../pages/profile'
// import About from './about'
// import Contact from "./contact";
// import Navbar from "../components/navbar";
// import Card from "../components/card";
// import { account, databases } from "./database";

// export default function AuthMain() {
//     const [list, setList] = useState([]);
//     const [user, setUser] = useState(null);

//     function is_user() {
//         const promise = account.get();
//         promise.then(function (response) {
//             setUser(JSON.stringify({ id: response.$id, name: response.name }))
//         }, function (error) {
//             setUser(null)
//         });
//     }


//     const load = () => {
//         const promise = databases.listDocuments(
//             process.env.REACT_APP_DATABASE_ID,
//             process.env.REACT_APP_COLLECTION_ID
//         );

//         return promise.then(
//             function (response) {
//                 setList(response.documents);
//             },
//             function (error) {
//                 setList([]);
//             }
//         );
//     };

//     useEffect(() => {
//         load();
//         is_user();
//     }, []);
//     console.log(list)

//     const Property = () => {
//         if (list.length > 0) {
//             return (
//                 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center justify-center my-2 mx-2 px-2 py-2">

//                     {list.map((item, index) => (
//                         <Card key={index} id={item.$id} imgURL={item.images[0]} title={item.title} description={item.description} price={item.price} near_by={item.near_by} />
//                     ))}
//                 </div>
//             )
//         }
//         else {
//             return (
//                 <div className="flex w-full justify-center mt-5">
//                     <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
//                 </div>
//             )
//         }

//     }

//     const location = useLocation();
//     function Section() {

//         const match = matchPath(location.pathname, {
//             path: '/user/:user_id/profile',
//             exact: true,
//             strict: false
//         });
//         if (match) {
//             return <Profile id={user} />;
//         }
//         else if (location.pathname === "/user/:user_id/about") {
//             console.log("I am on my way About")
//             return <About />
//         }
//         else if (location.pathname === `/user/${JSON.parse(user)}/contact`) {
//             console.log("I am on my way Contact")
//             return <Contact />
//         }
//         else {
//             return <Property />;
//         }
//     }

//     console.log(location.pathname === `/user/${JSON.parse(user)}/contact`)
//     console.log(location.pathname === `/user/:user_id/about`)
//     console.log(location.pathname)


//     return (
//         <div className="">
//             <Navbar user={user} />
//             <div>
//                 <Section />
//             </div>

//         </div>
//     );
// }