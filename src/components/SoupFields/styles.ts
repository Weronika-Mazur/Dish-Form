import styled from "styled-components";

export const Range = styled.input`
  height: 27px;
  -webkit-appearance: none;
  margin: 10px 0;
  width: 100%;
  background: transparent;
  border-color: transparent;

  &:focus {
    outline: none;
  }
  &::-webkit-slider-runnable-track {
    width: 100%;
    height: 6px;
    cursor: pointer;
    animate: 0.2s;

    background: var(--orange);
    border-radius: 43px;
  }
  &::-webkit-slider-thumb {
    box-shadow: 0px 0px 0px var(--red);
    border: 1px solid var(--red);
    height: 20px;
    width: 19px;
    border-radius: 27px;
    background: #fff;
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -8px;
  }
  &:focus::-webkit-slider-runnable-track {
    background: var(--orange);
  }
  &::-moz-range-track {
    width: 100%;
    height: 6px;
    cursor: pointer;
    animate: 0.2s;

    background: var(--orange);
    border-radius: 43px;
  }

  &::-moz-range-thumb {
    box-shadow: 0px 0px 0px var(--red);
    border: 1px solid var(--red);
    height: 20px;
    width: 19px;
    border-radius: 27px;
    background: #fff;
    cursor: pointer;
  }
  &::-ms-track {
    width: 100%;
    height: 6px;
    cursor: pointer;
    animate: 0.2s;
    background: transparent;
    border-color: transparent;
    color: transparent;
  }

  &::-ms-thumb {
    margin-top: 1px;
    box-shadow: 0px 0px 0px var(--red);
    border: 1px solid var(--red);
    height: 20px;
    width: 19px;
    border-radius: 27px;
    background: #fff;
    cursor: pointer;
  }
`;
