import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from "@material-ui/icons";
import MovieItem from "./MovieItem";
import styled from "styled-components";
import { useRef, useState } from "react";

const ListContainer = styled.div`
    width: 100%;
    margin-top: 10px;
`
const Title = styled.span`
    color: white;
    font-size: 20px;
    font-weight: 500;
    margin-left: 50px;
`

const Wrapper = styled.div`
    position: relative;
    .sliderArrow {
        width: 50px;
        height: 100%;
        background-color: rgb(22, 22, 22, 0.5);
        color: white;
        position: absolute;
        z-index: 99;
        top: 0;
        bottom: 0;
        margin: auto;
        cursor: pointer;

        &.left {
            left: 0;
        }

        &.right {
            right: 0;
        }
    }
`

const MovieContainer = styled.div`
    margin-left: 50px;
    display: flex;
    margin-top: 10px;
    width: max-content;
    transform: translateX(0px);
    transition: all 1s ease;
`

const MoviesList = ({ list }) => {
    const [slideNumber, setSlideNumber] = useState(0);
    const listRef = useRef();

    const handleClick = (direction) => {
        let distance = listRef.current.getBoundingClientRect().x - 50;
        if (direction === "left" && slideNumber > 0) {
            setSlideNumber(slideNumber - 1);
            listRef.current.style.transform = `translateX(${230 + distance}px)`;
        }
        if (direction === "right" && slideNumber < 5) {
            setSlideNumber(slideNumber + 1);
            listRef.current.style.transform = `translateX(${-230 + distance}px)`;
        }
    };

    return (
        <ListContainer>
            <Title>{list.title}</Title>
            <Wrapper>
                <ArrowBackIosOutlined className="sliderArrow left" onClick={() => handleClick("left")} />
                <MovieContainer ref={listRef}>
                    {list.content.map((item, i) => (
                        <MovieItem key={i} index={i} item={item} />
                    ))}
                </MovieContainer>
                <ArrowForwardIosOutlined className="sliderArrow right" onClick={() => handleClick("right")} />
            </Wrapper>
        </ListContainer>
    )
}

export default MoviesList
