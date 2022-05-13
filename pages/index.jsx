import { Grid, Typography } from "@mui/material";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import Loading from "../components/Loading";
import { Navbar } from "../components/Navbar";
import Poll from "../components/Poll";
import prisma from "../lib/prisma";

const index = ({ polls }) => {
    const { data, status } = useSession();
    const [pollsHistory, setPollsHistory] = useState();

    useEffect(() => {
        const getPollsHistory = async () => {
            const res = await fetch(`/api/poll/getUserPolls`, {
                method: "POST",
                headers: {
                    "Content-type": "Application/json",
                },
                body: JSON.stringify({ email: data.user.email }),
            });

            const pollsH = await res.json();
            console.log(pollsH);
            setPollsHistory(pollsH.polls);
        };
        if (status == "authenticated") {
            getPollsHistory();
        }
    }, [data]);

    if (status === "loading") return <Loading />;
    return (
        <Grid
            container
            direction={"column"}
            justifyContent="center"
            alignItems="center"
            margin={0}
        >
            <Navbar />
            <Typography
                variant="h1"
                component="h1"
                fontWeight="bold"
                letterSpacing={8}
            >
                CinePolls
            </Typography>
            {polls.map((e, i) => {
                return <Poll poll={e} key={i} email={data.user.email} />;
            })}

            {JSON.stringify(data, 0, 2)}
        </Grid>
    );
};

export const getServerSideProps = async ({ req }) => {
    const polls = await prisma.poll.findMany({
        include: {
            film1: true,
            film2: true,
        },
    });

    await prisma.$disconnect();

    return { props: { polls } };
};
export default index;
