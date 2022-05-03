import { Grid, Button, Typography } from "@mui/material";

const Poll = ({ poll }) => {
    const sendVote = async (film) => {
        const res = await fetch(`api/poll/vote`, {
            method: "POST",
            headers: {
                "Content-type": "Application/json",
            },
            body: JSON.stringify({ film }),
        });

        const data = await res.json();

        console.log(data);
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
                xs={6}
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
                    ({poll.film1.votes})
                </Typography>

                <Button variant="contained" size="large" sx={{ margin: 3 }}>
                    VOTE
                </Button>
            </Grid>

            <Grid
                container
                direction="row"
                alignItems="center"
                justifyContent="center"
                item
                xs={6}
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
                    ({poll.film2.votes})
                </Typography>

                <Button variant="contained" size="large" sx={{ margin: 3 }}>
                    VOTE
                </Button>
            </Grid>
        </Grid>
    );
};

export default Poll;
