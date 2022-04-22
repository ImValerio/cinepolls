import React from "react";
import { PrismaClient } from "@prisma/client";
import { Grid, List, ListItem, ListItemText } from "@mui/material";

const prisma = new PrismaClient();

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
    return { props: { films } };
};

export default index;
