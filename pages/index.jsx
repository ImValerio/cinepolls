import { Grid, Typography } from "@mui/material";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import Loading from "../components/Loading";
import Poll from "../components/Poll";
import prisma from "../lib/prisma";

const index = ({ allPolls }) => {
    const [polls, setPolls] = useState(allPolls);
    const { data, status } = useSession();

    useEffect(() => {
        const getPollsHistory = async () => {
            const res = await fetch(`/api/poll/getUserVotes`, {
                method: "POST",
                headers: {
                    "Content-type": "Application/json",
                },
                body: JSON.stringify({ email: data.user.email }),
            });

            const { pollsId } = await res.json();

            setPolls(polls.filter((e) => !pollsId.includes(e.id)));
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
    const allPolls = await prisma.poll.findMany({
        include: {
            film1: true,
            film2: true,
        },
    });

    await prisma.$disconnect();

    return { props: { allPolls } };
};
export default index;
