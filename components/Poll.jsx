import React from "react";

const Poll = ({ poll }) => {
    return (
        <div className="shadow-lg flex flex-col justify-center items-center w-fit p-4">
            <div className="flex items-center m-3">
                <h2 className="text-4xl">{poll.film1.title}</h2>
                <h3 className="text-2xl">({poll.film1.votes})</h3>
                <button className="border px-4 py-2 text-3xl font-semibold mx-3">
                    VOTE
                </button>
            </div>

            <div className="flex items-center m-3">
                <h2 className="text-4xl">{poll.film2.title}</h2>
                <h3 className="text-2xl">({poll.film2.votes})</h3>
                <button className="border px-4 py-2 text-3xl font-semibold mx-3">
                    VOTE
                </button>
            </div>
        </div>
    );
};

export default Poll;
