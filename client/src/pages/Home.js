import styled from "styled-components";
import Navbar from '../components/Navbar';
import Featured from '../components/Featured';
import MoviesList from '../components/MoviesList';
import { useEffect, useState } from 'react';
import axios from "axios";

const HomeContainer = styled.div`
    background-color: #0b0b0b;
    overflow: hidden;
`

const Home = ({ type }) => {
    const [lists, setLists] = useState([]);
    const [genre, setGenre] = useState(null);

    useEffect(() => {
        const getRandomLists = async () => {
            try {
                const res = await axios.get(
                    `lists${type ? "?type=" + type : ""}${genre ? "&genre=" + genre : ""}`,
                    { headers: { token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYzE4YjkyNjFmY2I5Zjk4NWZjNTRhNiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MDk1MDYzNywiZXhwIjoxNjQxMzgyNjM3fQ.6v4jDp9MKYOKHJ-jpFxVhTdBq6PJ_EqND_kh1LaVEys"}}
                );
                console.log(res.data)
                setLists(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        getRandomLists();
    }, [type, genre]);

    return (
        <HomeContainer>
            <Navbar />
            <Featured type={type} />
            {lists.map(list => <MoviesList key={list._id} list={list} />)}
        </HomeContainer>
    )
}

export default Home
