import { useState } from "react";
import Poll from "../components/Poll";

const index = () => {
    const [polls, setPolls] = useState([
        {
            film1: {
                title: "Film1",
                votes: 10,
            },
            film2: {
                title: "Film 2",
                votes: 4,
            },
        },
    ]);
    return (
        <div className="w-full md:w-10/12 ">
            <h1 className="text-7xl font-bold ">CinePolls</h1>

            {polls.map((e, i) => {
                return <Poll poll={e} key={i} />;
            })}
        </div>
    );
};

export default index;
