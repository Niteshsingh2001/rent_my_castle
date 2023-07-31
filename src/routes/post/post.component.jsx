import React, { useContext, useEffect, useState } from 'react'
import { Carousel } from '../../components/carousel/Carousel.component'
import { useParams } from 'react-router-dom'
import { getDoc } from '../../utils/appwrite/appwrite.utils'
import { ALERT_TYPE_CLASS, AlertBoxContext } from '../../context/alertbox.context'
import PostContent from '../../components/post-content/post-content.component'

export default function Post() {

    const { docID } = useParams()
    const { setMessage, setType } = useContext(AlertBoxContext)
    const [postData, setPostData] = useState()

    const fetchData = async () => {
        try {
            const data = await getDoc(docID);
            setPostData(data);
        } catch (error) {
            setType(ALERT_TYPE_CLASS.error);
            setMessage(`${error.code} ${error.message}`);
        }
    };

    useEffect(() => {
        fetchData()
    }, [docID]);
    console.log(postData);

    return (
        <div>
            {postData && <section className="">
                <Carousel images={postData.images} />
                <PostContent content={postData} />
            </section>}

        </div>
    )
}
