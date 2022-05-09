import { Grid, Button, Typography } from "@mui/material";
import { useState } from "react";

const Poll = ({ poll }) => {
    const [votesFilm1, setVotesFilm1] = useState("?");
    const [votesFilm2, setVotesFilm2] = useState("?");
    const [voted, setVoted] = useState(false);

    const voteFilm = async (film) => {
        setVoted(true);
        const res = await fetch(`api/poll/vote`, {
            method: "POST",
            headers: {
                "Content-type": "Application/json",
            },
            body: JSON.stringify({ film, pollId: poll.id }),
        });

        const { votesFilm1: votes1Updated, votesFilm2: votes2Updated } =
            await res.json();

        setVotesFilm1(votes1Updated);
        setVotesFilm2(votes2Updated);
    };
    return (
        <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            marginY={5}
        >
            <Grid
                container
                direction="row"
                alignItems="center"
                justifyContent="center"
                item
                xs={5}
            >
                <Typography
                    variant={poll.film1.title.length > 8 ? "h4" : "h2"}
                    component="h2"
                    textAlign="center"
                    fontWeight={100}
                >
                    {poll.film1.title}
                </Typography>
                <Typography variant="h6" component="h4">
                    ({votesFilm1})
                </Typography>

                {!voted && (
                    <Button
                        variant="contained"
                        size="large"
                        sx={{ margin: 3 }}
                        onClick={(e) => voteFilm(1)}
                    >
                        VOTE
                    </Button>
                )}
            </Grid>
            <Grid
                container
                direction="row"
                alignItems="center"
                justifyContent="center"
                item
                xs={2}
            >
                <Typography variant="h6" component="h4">
                    vs
                </Typography>
            </Grid>
            <Grid
                container
                direction="row"
                alignItems="center"
                justifyContent="center"
                item
                xs={5}
            >
                <Typography
                    variant={poll.film1.title.length > 8 ? "h3" : "h2"}
                    component="h2"
                    textAlign="center"
                    fontWeight={100}
                >
                    {poll.film2.title}
                </Typography>
                <Typography variant="h6" component="h4">
                    ({votesFilm2})
                </Typography>

                {!voted && (
                    <Button
                        variant="contained"
                        size="large"
                        sx={{ margin: 3 }}
                        onClick={() => voteFilm(2)}
                    >
                        VOTE
                    </Button>
                )}
            </Grid>
        </Grid>
    );
};

export default Poll;
