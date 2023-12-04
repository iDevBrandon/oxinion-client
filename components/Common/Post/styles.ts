import styled from "styled-components";

export const PostWrapper = styled.div`
  width: 100%;
  margin-bottom: 1rem;
  /* img {
    object-fit: cover;
    width: 100%;
  }

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 60% 40%;

  } */

  @media (min-width: 768px) {
    width: 470px;
  }
`;

export const PostImage = styled.div`
  width: 614px;
  height: 768px;
  object-fit: cover;
`;

export const PostImageWrapper = styled.div`
  width: 100%;
  img {
    object-fit: cover;
    width: 100%;
  }
  @media (min-width: 768px) {
    /* width: 66%; */
  }
`;

export const PostDetails = styled.div`
  padding-top: 1rem;
  @media (min-width: 768px) {
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

export const ProfileWrapper = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }

  div {
    margin-left: 0.5rem;
    flex-direction: column;
  }
`;

export const PostProp = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 1rem 0 1rem;
`;

export const CardActionWrapper = styled.div`
  div {
    justify-content: space-between;
  }
`;

export const LikeButton = styled.div`
  align-items: center;
  display: flex;
`;
