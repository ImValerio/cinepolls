import { Grid, Button, Typography } from "@mui/material";

const Poll = ({ poll }) => {
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
                <Typography variant="h2" component="h2">
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
                <Typography variant="h2" component="h2">
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
