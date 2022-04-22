import { Grid, TextField, Button } from "@mui/material";
import { useState } from "react";

const create = () => {
    const [title, setTitle] = useState("");
    return (
        <Grid container justifyContent={"center"} alignItems="center">
            <form>
                <Grid
                    container
                    flexDirection={"column"}
                    justifyContent={"center"}
                    alignItems="center"
                >
                    <TextField
                        id="outlined-basic"
                        label="Title"
                        variant="outlined"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <Button variant="contained" fullWidth>
                        CONFIRM
                    </Button>
                </Grid>
            </form>
        </Grid>
    );
};

export default create;
