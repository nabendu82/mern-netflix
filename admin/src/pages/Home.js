import React from 'react'
import styled from 'styled-components';
import Chart from '../components/Chart';
import Featured from '../components/Featured';
import LgWidget from '../components/LgWidget';
import SmWidget from '../components/SmWidget';
import axios from "axios";
import { useEffect, useMemo, useState } from "react";

const HomeContainer = styled.div`
    flex: 4;
`

const HomeWidgets = styled.div`
    display: flex;
    margin: 20px;
`

const Home = () => {
    const [userStats, setUserStats] = useState([]);
    const MONTHS = useMemo(() => ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], [])

    useEffect(() => {
        const getStats = async () => {
            try {
                const res = await axios.get("/users/stats", { headers: { token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYzE4YjkyNjFmY2I5Zjk4NWZjNTRhNiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MTAxNzY2MywiZXhwIjoxNjQxNDQ5NjYzfQ.cCGOwTtYrgLwinIBvJQVzDM-L4P-A9Glt8n1JQ6lBo8" } });
                const statsList = res.data.sort((a, b) => a._id - b._id);
                statsList.map(item => setUserStats(prev => [...prev, { name: MONTHS[item._id - 1], "New User": item.total }]))
            } catch (error) {
                console.log(error)
            }
        }
        getStats();
    }, [MONTHS]);

    console.log(userStats);

    return (
        <HomeContainer>
            <Featured />
            <Chart data={userStats} title="User Analytics" grid dataKey="New User" />
            <HomeWidgets>
                <SmWidget />
                <LgWidget />
            </HomeWidgets>
        </HomeContainer>
    )
}

export default Home
