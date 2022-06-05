import styled from "styled-components";
import { FormItemsContainer } from "../DishesForm/styles";

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1.4rem 0;

  ${FormItemsContainer} & {
    width: 100%;
  }
`;

export const Label = styled.label`
  text-align: left;
  margin: 0.2rem 0px;
  color: var(--red);

  ${FormItemsContainer} & {
    text-align: center;
    @media (max-width: 540px) {
      text-align: left;
    }
  }
`;
