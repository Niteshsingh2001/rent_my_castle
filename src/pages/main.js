import { useState, useEffect } from "react";
import { account, databases } from "./database";
import { AppwriteException } from "appwrite";
import Navbar from "../components/navbar";
import { useLocation, matchPath, useParams, useHistory } from "react-router-dom";
import Profile from '../pages/profile'
import About from './about'
import Contact from "./contact";
import Card from "../components/card";
import Post from "./post";
import Loader from "../components/loader";
import Footer from "../components/footer";
import MsgBox from "../components/msgbox";



export default function Main() {
    const [user, setUser] = useState(null);
    const [list, setList] = useState(null);
    const [session, setSession] = useState(null);
    const [alert, setAlert] = useState(null);

    const location = useLocation();
    const nav = useHistory();

    function is_user() {
        // Get user Account
        const promise = account.get();
        promise.then(function (response) {
            setUser(JSON.stringify({ id: response.$id, name: response.name }))
        }, function (error) {
            setUser(null)
        });

        // Get User Seesion
        const sessionID = account.listSessions()
        sessionID.then(function (response) {
            response.sessions.forEach(element => {
                if (element.current === true) {
                    setSession(element.$id)
                }
            })
        }, function (error) {

        });

    };

    const showAlert = (msg) => {
        setAlert(msg)
        setTimeout(() => {
            setAlert(null);
        }, 3000)
    }

    const load = () => {
        const promise = databases.listDocuments(
            process.env.REACT_APP_DATABASE_ID,
            process.env.REACT_APP_COLLECTION_ID
        );

        return promise.then(
            function (response) {
                setList(response.documents);
            },
            function (error) {
                setList([]);
            }
        );
    };

    useEffect(() => {
        is_user()
        load()
    }, []);

    const Property = () => {
        if (list === null) {
            return (<Loader />)
        }
        else if (list.length === 0) {
            return (<div className="flex items-center justify-center align-middle text-center h-screen">No Data Found 😔</div>)
        }
        else if (list.length > 0) {
            return (
                <div className="h-screen">
                    <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center justify-center my-2 mx-2 px-2 py-2">
                        {list.map((item, index) => (
                            <Card key={index} id={item.$id} imgURL={item.images[0]} title={item.title} description={item.description} price={item.price} near_by={item.near_by} />
                        ))}
                    </div>
                </div>
            )
        }

    }

    function Section() {
        const { user_id, post_id } = useParams()

        if (user == null) {
            if (location.pathname === '/') {
                return <Property />
            }
            else if (location.pathname === `/about`) {
                return <About />
            }
            else if (location.pathname === `/contact`) {
                return <Contact />
            }
            else if (location.pathname === `/post/${post_id}`) {
                return <Post ALERT={showAlert} />
            }
        }
        if (session) {
            if (user != null) {
                const match = matchPath(location.pathname, {
                    path: '/user/:user_id/profile',
                    exact: true,
                    strict: false
                });
                if (location.pathname === "/") {
                    nav.push(`/user/${session}`)
                }
                if (match) {
                    return <Profile id={user} />;
                }
                if (location.pathname === `/user/${user_id}`) {
                    return <Property />;
                }
                if (location.pathname === `/user/${user_id}/about`) {
                    return <About />
                }
                if (location.pathname === `/user/${user_id}/contact`) {
                    console.log("I am on my way Contact")
                    return <Contact />
                }

                if (location.pathname === `/user/${user_id}/post/${post_id}`) {
                    return <Post />;
                }
            }
        }

    }
    return (
        user ? <>
            {alert ? <MsgBox msg={alert} /> : null}
            <Navbar user={user} />
            <Section />
            <Footer />
        </> : <>
            {alert ? <MsgBox msg={alert} /> : null}
            < Navbar user={user} />
            <Section />
            <Footer />
        </>
    )
}
