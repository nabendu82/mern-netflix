import { ArrowBackOutlined } from "@material-ui/icons";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const PlayerComponent = styled.div`
    width: 100vw;
    height: 100vh;
    .back {
        display: flex;
        align-items: center;
        position: absolute;
        top: 10px;
        left: 10px;
        color: white;
        cursor: pointer;
        z-index: 2;
    }
    .video {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

const Player = () => {
    const location = useLocation();
    const movie = location.movie;
    return (
        <PlayerComponent>
            <Link to="/">
                <div className="back">
                    <ArrowBackOutlined />
                    Home
                </div>
            </Link>
            <video className="video" autoPlay progress controls
                src={movie.video}
            />
        </PlayerComponent>
    )
}

export default Player
