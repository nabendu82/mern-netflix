import React, { useState } from 'react'
import { TheList } from "../styles/styled-elements"
import styled from "styled-components";
import { MovieContext } from "../context/movieContext/MovieContext";
import { createMovie } from "../context/movieContext/apiCalls";
import { useContext } from "react";

const ProductForm = styled.form`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 5px;
`

const ProductItem = styled.div`
    width: 250px;
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    label {
        color: gray;
        font-weight: 600;
        margin-bottom: 10px;
    }
    input, select {
        padding: 10px;
    }
`

const ProductButton = styled.button`
    margin-top: 10px;
    padding: 7px 10px;
    border: none;
    border-radius: 10px;
    background-color: #1876F2;
    color: white;
    font-weight: 600;
    cursor: pointer;
`

const NewProduct = () => {
    const [movie, setMovie] = useState(null);
    const { dispatch } = useContext(MovieContext);

    const handleChange = (e) => {
        const value = e.target.value;
        setMovie({ ...movie, [e.target.name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(movie);
        createMovie(movie, dispatch);
    };
return (
    <TheList>
        <h1>New Movie</h1>
        <ProductForm>
            <ProductItem>
                <label>Image</label>
                <input type="text" name="img" onChange={handleChange} />
            </ProductItem>
            <ProductItem>
                <label>Title image</label>
                <input type="text" name="imgTitle" onChange={handleChange} />
            </ProductItem>
            <ProductItem>
                <label>Thumbnail image</label>
                <input type="text" name="imgSm" onChange={handleChange} />
            </ProductItem>
            <ProductItem>
                <label>Title</label>
                <input type="text" placeholder="John Wick" name="title" onChange={handleChange} />
            </ProductItem>
            <ProductItem>
                <label>Description</label>
                <input type="text" placeholder="description" name="desc" onChange={handleChange} />
            </ProductItem>
            <ProductItem>
                <label>Year</label>
                <input type="text" placeholder="Year" name="year" onChange={handleChange} />
            </ProductItem>
            <ProductItem>
                <label>Genre</label>
                <input type="text" placeholder="Genre" name="genre" onChange={handleChange} />
            </ProductItem>
            <ProductItem>
                <label>Duration</label>
                <input type="text" placeholder="Duration" name="duration" onChange={handleChange} />
            </ProductItem>
            <ProductItem>
                <label>Limit</label>
                <input type="text" placeholder="limit" name="ageLimit" onChange={handleChange} />
            </ProductItem>
            <ProductItem>
                <label>Is Series?</label>
                <select name="isSeries" id="isSeries" onChange={handleChange}>
                    <option value="false">No</option>
                    <option value="true">Yes</option>
                </select>
            </ProductItem>
            <ProductItem>
                <label>Trailer</label>
                <input type="text" name="trailer" onChange={handleChange} />
            </ProductItem>
            <ProductItem>
                <label>Video</label>
                <input type="text" name="video" onChange={handleChange} />
            </ProductItem>
            <ProductButton onClick={handleSubmit}>Create</ProductButton>
        </ProductForm>
    </TheList>
    )
}
export default NewProduct
