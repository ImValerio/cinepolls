import { Grid, TextField, Input } from "@mui/material";
import { useState } from "react";

const create = () => {
    const [title, setTitle] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await fetch("../api/film/create", {
            method: "POST",
            headers: {
                "Content-type": "Application/json",
            },

            body: JSON.stringify({ title }),
        });

        if (res.ok) return alert("The movie has been added");
    };
    return (
        <Grid container justifyContent={"center"} alignItems="center">
            <form onSubmit={handleSubmit}>
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
                    <Input type="submit" variant="contained" fullWidth>
                        CONFIRM
                    </Input>
                </Grid>
            </form>
        </Grid>
    );
};

export default create;
