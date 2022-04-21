import React from "react";

const Poll = ({ poll }) => {
    return (
        <div>
            <div className="flex items-center">
                <h2 className="text-4xl">{poll.film1.title}</h2>
                <h3 className="text-2xl">({poll.film1.votes})</h3>
                <button>VOTE</button>
            </div>

            <div className="flex items-center">
                <h2 className="text-4xl">{poll.film2.title}</h2>
                <h3 className="text-2xl">({poll.film2.votes})</h3>
                <button>VOTE</button>
            </div>
        </div>
    );
};

export default Poll;
