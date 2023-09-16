import styled from "styled-components";
import RentHeroImage from "../../public/images/cheers.jpg";
import NextImageType from "next/image";

export const RentHero = styled.div`
  background: url(${RentHeroImage.src});
  background-size: cover;
  background-position: center;
  min-height: 600px;
  padding: 1rem;
`;
export const RentFormContent = styled.div`
  background: rgba(0, 0, 0, 0.5);
  padding: 1rem;
  border-radius: 1rem;

  span {
    color: white;
  }
`;

export const RentForm = styled.form`
  margin: 0 auto;
`;

export const FormContentcolumn = styled.div`
  display: flex;
  flex-direction: column;
  span {
    font-size: 2rem;
    font-weight: 600;
    letter-spacing: 0;
    color: #fff;
  }
  input {
    height: 60px;
    background: #fff 0 0 no-repeat padding-box;
    border: 1px solid silver;
    border-radius: 8px;
    opacity: 1;
    font: 400 32px/40px Rubik;
    padding: 12px 20px;
    color: #000;
  }
`;

export const FormContentLink = styled.div`
  a {
    color: white;
  }
`;

export const PopularCategories = styled.div``;
