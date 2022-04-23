import {
    Select,
    MenuItem,
    TextField,
    InputLabel,
    FormControl,
    Input,
} from "@mui/material";
import { useEffect, useState } from "react";

const update = () => {
    const [films, setFilms] = useState([]);
    const [film, setFilm] = useState("");
    const [newTitle, setNewTitle] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await fetch("../api/film/update", {
            method: "POST",
            headers: {
                "Content-type": "Application/json",
            },
            body: JSON.stringify({ id: film, title: newTitle }),
        });

        if (res.ok) alert("Film updated!");
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
        <form onSubmit={handleSubmit}>
            <FormControl className="w-80">
                <InputLabel id="film">Select a film</InputLabel>
                <Select
                    id="film"
                    labelId="film"
                    defaultValue=""
                    label="Film"
                    value={film}
                    onChange={(e) => setFilm(e.target.value)}
                >
                    {films.map((e, i) => (
                        <MenuItem value={e.id} key={i}>
                            {e.title}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            <TextField
                placeholder="New film title"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
            />
            <Input type="submit" value="Confirm" />
        </form>
    );
};

export default update;
