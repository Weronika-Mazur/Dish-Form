import styled from "styled-components";

export const Input = styled.input`
  border: none;
  background-color: transparent;
  border-bottom: 1px solid var(--grey);
  height: 2rem;
  font-size: 1rem;
  line-height: 1.5rem;
  font-family: "Noto Sans", sans-serif;
  color: var(--dark);
  width: 3rem;
  margin: 0;
  text-align: center;

  &:focus {
    outline: none;
    border-color: var(--orange);
  }
`;

export const TimeDurationContainer = styled.div`
  width: 100%;
  display: flex;
  padding-left: 0.4rem;
  gap: 0.8rem;
  justify-content: center;
  align-items: center;
  margin-top: 0.68rem;
`;

export const Sign = styled.span``;
