import story_time from "../assets/images/story_time.png";
import idea from "../assets/images/Idea.png";
import goal from "../assets/images/target with dart arrow in bullseye.png";


export default function About() {
    return (
        <div>
            <h1 className="h-96 bg-teal-600 text-white font-bold w-full sm:text-5xl md:text-3xl lg:text-5xl text-lg uppercase flex justify-center align-middle items-center text-center px-10">
                We help people find housing near colleges.
            </h1>

            <div className="sm:mx-24 mt-5">
                <div className="flex sm:flex-row flex-col align-middle items-center justify-center">
                    <img src={story_time} className="sm:h-80 sm:w-full" />
                    <div className="flex flex-col justify-center align-middle items-center px-4 sm:mx-10  mx-2 sm:mt-00 mt-4  ">
                        <h2 className="text-2xl uppercase font-bold flex justify-center align-middle items-center  tracking-widest">
                            Story Time
                        </h2>
                        <p className="mt-4 text-lg pt-1  leading-8 text-justify">
                            I am a college student who travels 4 hours a day to attend my classes. I cannot afford to live in a private room or a paying guest (PG) accommodation near my college because of the high cost. Many of my friends and classmates who live in PGs and rooms in the vicinity have also faced difficulties in finding affordable accommodation.
                        </p>
                        <p className="mt-4 text-lg pt-1  leading-8 text-justify">
                            When they first rented a room, they paid a higher rent because they did not know any better. However, after some time, they found out where they could get a cheaper room and moved out of their old accommodation.
                        </p>
                    </div>
                </div>
            </div>
            <div className="sm:mx-24 mt-5">
                <div className="flex sm:flex-row flex-col align-middle items-center justify-center">
                    <div className="flex flex-col justify-center align-middle items-center px-4 sm:mx-10  mx-2 sm:mt-00 mt-4  ">
                        <h2 className="text-2xl uppercase font-bold flex justify-center align-middle items-center  tracking-widest">
                            The Idea
                        </h2>
                        <p className="mt-4 text-lg pt-1  leading-8 text-justify">
                            Before I took admission in college, I searched for PGs and rooms near the college. However, there were no specific or particular websites for this. I had to search a lot, and even when I found some options, I didn't know how far they were from the college.
                        </p>
                        <p className="mt-4 text-lg pt-1  leading-8 text-justify">
                            After attending college, I saw that many people were searching for rooms and PGs. I realized that there was an opportunity here. I thought about creating a website that would focus only on PGs and rooms near colleges.
                        </p>
                    </div>
                    <img src={idea} className="h-80" />
                </div>
            </div>
            <div className="sm:mx-24 mt-5">
                <div className="flex sm:flex-row flex-col align-middle items-center justify-center">
                    <img src={goal} className="h-60" />
                    <div className="flex flex-col justify-center align-middle items-center px-4 sm:mx-10  mx-2 sm:mt-00 mt-4  ">
                        <h2 className="text-2xl uppercase font-bold flex justify-center align-middle items-center  tracking-widest">
                            Ultimate Goal
                        </h2>
                        <p className="mt-4 text-lg pt-1  leading-8 text-justify ">
                            Students face many challenges and difficulties in life, but in 2023, we should not let these challenges stop us from achieving our goals. Instead, we should focus on finding ways to make these challenges easier to overcome.
                        </p>
                        <p className="mt-4 text-lg pt-1  leading-8 text-justify">
                            One of the biggest challenges that students face is finding affordable and convenient accommodation near their college. This can be a time-consuming and frustrating process, but it does not have to be.
                        </p>
                        <p className="mt-4 text-lg pt-1  leading-8 text-justify">
                            Our goal is to make it easier for students to find accommodation near their college. We will do this by providing a comprehensive database of accommodation options, as well as helpful tools and resources to help students compare and select the best option for their needs.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}