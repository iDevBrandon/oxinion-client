import styled from "styled-components";

export const PostWrapper = styled.div`
  padding: 1rem;

  img {
    object-fit: cover;
    width: 100%;
  }

  @media (min-width: 768px) {
    /* width: 66%; */
    padding: 0;
    margin-bottom: 2rem;
  }
`;

export const PostImage = styled.div`
  width: 100%;
  img {
    object-fit: cover;
    width: 100%;
  }
`;

export const PostDetails = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
  border: 1px solid black;
`;

export const ProfileWrapper = styled.div`
  display: flex;

  div {
    margin-left: 0.5rem;
    display: flex;
    flex-direction: column;
  }
`;

export const ProfileImage = styled.div`
  width: 50px;
  img {
    border-radius: 50%;
  }
`;

export const PostProp = styled.div`
  display: flex;
  margin: 0 0.5rem;
`;
