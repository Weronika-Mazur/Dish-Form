import styled from "styled-components";
import DishIcon from "../../assets/DishIcon";

export const BrownDishIcon = styled(DishIcon)`
  height: 4rem;
  fill: var(--dark);
`;

export const Form = styled.form`
  background-color: transparent;
  padding: 3rem 1.8rem;
  width: 100%;
  margin: 3rem 1rem;
  max-width: 420px;
`;

export const SubmitButton = styled.button`
  outline: none;
  border: none;
  font-family: "Noto Sans", sans-serif;
  font-weight: 600;
  padding: 0.6rem;
  background-color: var(--red);
  color: var(--white);
  width: 100%;
  margin-top: 1.2rem;
  border-radius: 0.75rem;
  font-size: 1rem;
  line-height: 1.5rem;
  cursor: pointer;
  background-image: linear-gradient(-60deg, #ff5858 0%, #f09819 100%);
  filter: drop-shadow(0 4px 3px rgb(0 0 0 / 0.07))
    drop-shadow(0 2px 2px rgb(0 0 0 / 0.06));
`;

export const Title = styled.h1`
  margin: 0px;
  font-weight: 300;
  font-size: 2.25rem;
  line-height: 2.5rem;
  color: var(--dark);
  padding: 0.2rem 0;
`;

export const Input = styled.input`
  border: none;
  background-color: transparent;
  border-bottom: 1px solid var(--grey);
  height: 2rem;
  font-size: 1rem;
  line-height: 1.5rem;
  font-family: "Noto Sans", sans-serif;
  color: var(--dark);
  padding-left: 0.4rem;

  &:focus {
    outline: none;
    border-color: var(--red);
  }
`;

export const Select = styled.select`
  border: none;
  background-color: transparent;
  border-bottom: 1px solid var(--grey);
  height: 2rem;
  font-size: 1rem;
  line-height: 1.5rem;
  font-family: "Noto Sans", sans-serif;
  color: var(--dark);
  padding-left: 0.1rem;
  width: 100%;
  margin-top: 0.85rem;

  &:focus {
    outline: none;
    border-color: var(--red);
  }
`;

export const Pre = styled.pre`
  position: relative;
  border: 1px solid #ccc;
  background: rgba(0, 0, 0, 0.1);
  box-shadow: inset 1px 1px 3px rgba(0, 0, 0, 0.2);
  padding: 20px;
  overflow: auto;
  word-break: break-all;
`;

export const FormItemsContainer = styled.div`
  padding: 0px 0.1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  gap: 1.4rem;

  @media (max-width: 540px) {
    flex-direction: column;
    gap: 0px;
  }
`;
