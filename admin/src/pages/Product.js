import React from 'react'
import { Link, useLocation } from "react-router-dom";
import { Publish } from "@material-ui/icons";
import { ItemContainer, ItemTitleContainer, ItemAddButton, ItemShowImg, ItemUploadImg, ItemUpdateButton, ItemUpload } from "../styles/styled-elements"
import styled from "styled-components";

const ProductTopContainer = styled.div`
    display: flex;
`
const TopLeftContainer = styled.div`
    flex: 1;
`
const TopRightContainer = styled(TopLeftContainer)`
    padding: 20px;
    margin: 20px;
    box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`
const InfoTopContainer = styled.div`
    display: flex;
    align-items: center;
    .productName {
        font-weight: 600;
    }
`
const InfoBottomContainer = styled.div`
    margin-top: 10px;
`
const InfoItemContainer = styled.div`
    width: 150px;
    display: flex;
    justify-content: space-between;
    .productInfoValue {
        font-weight: 300;
    }
`
const ProductBottomContainer = styled.div`
    padding: 20px;
    margin: 20px;
    box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`
const ProductForm = styled.form`
    display: flex;
    justify-content: space-between;
`
const FormLeft = styled.div`
    display: flex;
    flex-direction: column;
    label {
        margin-bottom: 10px;
        color: gray;
    }
    input {
        margin-bottom: 10px;
        border: none;
        padding: 5px;
        border-bottom: 1px solid gray;
    }
    select{
        margin-bottom: 10px;
    }
`
const FormRight = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`

const Product = () => {
    const location = useLocation();
    const movie = location.movie;

    return (
        <ItemContainer>
            <ItemTitleContainer>
                <h1>Edit Movie</h1>
                <Link to="/newproduct">
                    <ItemAddButton>Create</ItemAddButton>
                </Link>
            </ItemTitleContainer>
            <ProductTopContainer>
                <TopRightContainer>
                    <InfoTopContainer>
                        <ItemShowImg mr src={movie.img} alt={movie.title}  />
                        <span className="productName">{movie.title}</span>
                    </InfoTopContainer>
                    <InfoBottomContainer>
                        <InfoItemContainer>
                            <span>id:</span>
                            <span className="productInfoValue">{movie._id}</span>
                        </InfoItemContainer>
                        <InfoItemContainer>
                            <span>genre:</span>
                            <span className="productInfoValue">{movie.genre}</span>
                        </InfoItemContainer>
                        <InfoItemContainer>
                            <span>year:</span>
                            <span className="productInfoValue">{movie.year}</span>
                        </InfoItemContainer>
                        <InfoItemContainer>
                            <span>limit:</span>
                            <span className="productInfoValue">{movie.ageLimit}</span>
                        </InfoItemContainer>
                    </InfoBottomContainer>
                </TopRightContainer>
            </ProductTopContainer>
            <ProductBottomContainer>
                <ProductForm>
                    <FormLeft>
                        <label>Movie Title</label>
                        <input type="text" placeholder={movie.title} />
                        <label>Year</label>
                        <input type="text" placeholder={movie.year} />
                        <label>Genre</label>
                        <input type="text" placeholder={movie.genre} />
                        <label>Limit</label>
                        <input type="text" placeholder={movie.limit} />
                        <label>Trailer</label>
                        <input type="file" placeholder={movie.trailer} />
                        <label>Video</label>
                        <input type="file" placeholder={movie.video} />
                    </FormLeft>
                    <FormRight>
                        <ItemUpload>
                            <ItemUploadImg src={movie.img} alt={movie.title} />
                            <label htmlFor="file">
                                <Publish />
                            </label>
                            <input type="file" id="file" style={{ display: "none" }} />
                        </ItemUpload>
                        <ItemUpdateButton>Update</ItemUpdateButton>
                    </FormRight>
                </ProductForm>
            </ProductBottomContainer>
        </ItemContainer>
    )
}
export default Product
