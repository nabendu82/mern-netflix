import React from 'react'
import { TheList, ListItem, ListImage, EditButton, MyDeleteOutline } from "../styles/styled-elements";
import { DataGrid } from "@material-ui/data-grid";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { MovieContext } from "../context/movieContext/MovieContext";
import { useEffect } from "react";
import { getMovies, deleteMovie } from "../context/movieContext/apiCalls";

const ProductList = () => {
    const { movies, dispatch } = useContext(MovieContext);

    useEffect(() => {
        getMovies(dispatch);
    }, [dispatch]);

    const handleDelete = id => deleteMovie(id, dispatch);

    const columns = [
            { field: "_id", headerName: "ID", width: 90 },
            {
                field: "movie",
                headerName: "Movie",
                width: 200,
                renderCell: (params) => {
                    return (
                        <ListItem>
                            <ListImage src={params.row.img} alt="image" />
                            {params.row.title}
                        </ListItem>
                    );
                },
            },
            { field: "genre", headerName: "Genre", width: 120 },
            { field: "year", headerName: "year", width: 120 },
            { field: "ageLimit", headerName: "Limit", width: 120 },
            { field: "isSeries", headerName: "isSeries", width: 120 },
            {
                field: "action",
                headerName: "Action",
                width: 150,
                renderCell: (params) => {
                    return (
                        <>
                            <Link to={{ pathname: "/product/" + params.row._id, movie: params.row }}>
                                <EditButton>Edit</EditButton>
                            </Link>
                            <MyDeleteOutline
                                onClick={() => handleDelete(params.row._id)}
                            />
                        </>
                    );
                },
            },
        ];

    return (
        <TheList>
            <DataGrid
                rows={movies}
                disableSelectionOnClick
                columns={columns}
                pageSize={8}
                checkboxSelection
                getRowId={(r) => r._id}
            />
        </TheList>
    )
}

export default ProductList
