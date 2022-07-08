import styled from "styled-components";

export const Wrapper = styled.div`
display: flex;
justify-content: space-between;
font-family: "Roboto", sans-serif;
border-bottom: 1px solid #e0e0e0;
padding-bottom: 20px;

div {
    flex: 1;
}

.information,
.buttons {
    display: flex;
    justify-content: space-between;
}

.item__image {
    max-width: 80px;
    object-fit: cover;
    margin-left: 40px;
}
`;