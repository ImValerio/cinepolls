import React from "react";
import prisma from "../../lib/prisma";
import { Grid, List, ListItem, ListItemText } from "@mui/material";

const index = ({ films }) => {
    return (
        <Grid container>
            <List>
                {films.map((e, i) => (
                    <ListItem key={i}>
                        <ListItemText primary={e.title} />
                    </ListItem>
                ))}
            </List>
        </Grid>
    );
};
export const getServerSideProps = async ({ req }) => {
    const films = await prisma.film.findMany();
    await prisma.$disconnect();

    return { props: { films } };
};

export default index;
