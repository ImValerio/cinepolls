import { Grid, Typography } from "@mui/material";
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
        {
            film1: {
                title: "Pappero",
                votes: 71,
            },
            film2: {
                title: "Rantor",
                votes: 93,
            },
        },
    ]);
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

export default index;
