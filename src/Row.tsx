

import { useState, useEffect } from "react";
import axios from "./axios";


type Props = {
    title: string;
    fetchUrl: string;
    isLargeRow?: boolean;
};

type Movie = {
    id: string;
    name: string;
    title: string;
    original_name: string;
    poster_path: string;
    backdrop_path: string;
}


export const Row = ({ title, fetchUrl }: Props) => {
    const [movies, setMovies] = useState<Movie[]>([]);

    useEffect(() => {
        async function fetchData() {
            const req = await axios.get(fetchUrl);
            setMovies(req.data.results);
            return req;
        }
        fetchData();
    }, [fetchUrl])

    console.log(JSON.stringify(movies));

    return (
        <div className="Row" />
    );
}
