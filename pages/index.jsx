import { Grid, Typography } from "@mui/material";
import Poll from "../components/Poll";
import prisma from "../lib/prisma";

const index = ({ polls }) => {
    return (
        <Grid
            container
            direction={"column"}
            justifyContent="center"
            alignItems="center"
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
                return <Poll poll={e} key={i} />;
            })}
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
