import { Grid, Typography } from "@mui/material";
import { useSession } from "next-auth/react";
import { Navbar } from "../components/Navbar";
import Poll from "../components/Poll";
import prisma from "../lib/prisma";

const index = ({ polls }) => {
    const { data, status } = useSession();

    if (status === "loading") return <h1>Loading...</h1>;
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
                return <Poll poll={e} key={i} />;
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
