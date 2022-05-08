import { Grid } from "@mui/material";
const Loading = () => {
    return (
        <Grid
            container
            direction={"column"}
            justifyContent="center"
            alignItems="center"
            margin={0}
            className="h-full"
        >
            <h1>Loading...</h1>
        </Grid>
    );
};

export default Loading;
