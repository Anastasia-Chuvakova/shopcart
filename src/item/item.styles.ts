import styled from "styled-components";

export const Wrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
width: 100%;
border: 1px solid #e6e6e6;
border-radius: 20px;
height: 100%;

button {
    border-radius: 0 0 20px 20px;
    width: 100%;
}
img {
    max-height: 250px;
    object-fit: cover;
    border-radius: 20px 20px 0 0;
}

div{
    font-family: "Roboto", sans-serif;
    padding: 1rem;
    height: 100%;
}
`;