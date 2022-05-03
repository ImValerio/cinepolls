import React from "react";
import { PrismaClient } from "@prisma/client";
import { Grid, Typography } from "@mui/material";

const prisma = new PrismaClient();

const index = ({ polls }) => {
    return (
        <Grid container>
            {polls.map((e, i) => (
                <Grid container flexDirection="row">
                    <Typography variant="h3" component="h3">
                        {e.film1.title}
                    </Typography>
                    <Typography variant="h3" component="h3" marginX={5}>
                        vs
                    </Typography>
                    <Typography variant="h3" component="h3">
                        {e.film2.title}
                    </Typography>
                </Grid>
            ))}
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
