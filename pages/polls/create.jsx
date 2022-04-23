import {
    Grid,
    Select,
    Button,
    InputLabel,
    MenuItem,
    FormControl,
    FormHelperText,
} from "@mui/material";
import { useEffect, useState } from "react";

const create = () => {
    const [films, setFilms] = useState([]);
    const [film1, setFilm1] = useState("");
    const [film2, setFilm2] = useState("");
    const [error, setError] = useState("");

    const handleFilm1 = (e) => {
        setError("");

        if (e.target.value !== film2) setFilm1(e.target.value);
        if (e.target.value === film2)
            setError("You can't select the same film");
    };
    const handleFilm2 = (e) => {
        setError("");

        if (e.target.value !== film1) setFilm2(e.target.value);
        if (e.target.value === film1)
            setError("You can't select the same film");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (film1 === film2) {
            setError("You can't select the same film");
            return;
        }
    };
    useEffect(() => {
        const getFilms = async () => {
            const res = await fetch("../api/film");

            const data = await res.json();

            console.log(data);
            setFilms(data.films);
        };
        getFilms();
    }, []);

    return (
        <Grid container justifyContent={"center"} alignItems="center" fullWidth>
            <form className="w-full" onSubmit={handleSubmit}>
                <FormControl fullWidth>
                    <InputLabel id="film1"> Film 1</InputLabel>

                    <Select
                        id="film1"
                        labelId="film1"
                        defaultValue=""
                        label="Film 1"
                        value={film1}
                        onChange={handleFilm1}
                    >
                        {films.map((e, i) => (
                            <MenuItem value={e.id} key={i}>
                                {e.title}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <FormControl
                    fullWidth
                    sx={{
                        marginY: 1,
                    }}
                >
                    <InputLabel id="film2"> Film 2</InputLabel>
                    <Select
                        value={film2}
                        id="film2"
                        labelId="film2"
                        defaultValue=""
                        label="Film 2"
                        onChange={handleFilm2}
                    >
                        {films.map((e, i) => (
                            <MenuItem value={e.id} key={i}>
                                {e.title}
                            </MenuItem>
                        ))}
                    </Select>

                    <FormHelperText
                        sx={{
                            color: "red",
                        }}
                    >
                        {error}
                    </FormHelperText>
                </FormControl>
                <Button variant="contained" fullWidth>
                    Confirm
                </Button>
            </form>
        </Grid>
    );
};

export default create;
