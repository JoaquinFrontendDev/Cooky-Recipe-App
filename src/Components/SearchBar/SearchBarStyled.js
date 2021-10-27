import styled from "styled-components";
import { RiArrowGoBackLine } from "react-icons/ri";

export const SearchForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 1rem;
  width: 100%;
  height: 100%;
  padding: 1rem 2rem;
  background: transparent;
  position: relative;

  @media screen and (min-width: 400px) {
    padding: 0.5rem 0.5rem;
  }
`;

export const SearchInput = styled.input`
  width: 25%;
  min-width: 250px;
  height: 35px;
  border: none;
  outline: none;
  padding: 6px 10px;
  background: linear-gradient(to right, #084b83 30%, #0984e3 100%);
  color: #fff;
  font-size: clamp(16px, 2vw, 20px);
  border-radius: 8px;
  cursor: pointer;

  &::placeholder {
    color: #fff;
  }

  &:focus {
    background: #ecf0f1;
    color: #444;

    &::placeholder {
      color: #444;
    }
  }
`;

export const SearchSelect = styled.select`
  width: 20%;
  min-width: 250px;
  height: 35px;
  border: none;
  outline: none;
  margin: 0 1rem;
  background: linear-gradient(to right, #084b83 30%, #0984e3 100%);
  color: #fff;
  font-size: clamp(16px, 2vw, 20px);
  padding: 6px 10px;
  border-radius: 8px;
  cursor: pointer;

  &:focus {
    background: #ecf0f1;
    color: #444;
  }
`;

export const SearchOption = styled.option`
  background: #0984e3;
  color: #fff;
  cursor: pointer;
`;

export const SearchBtn = styled.button`
  width: 120px;
  height: 35px;
  padding: 4px 6px;
  font-size: clamp(16px, 2vw, 20px);
  cursor: pointer;
  border: none;
  outline: none;
  background: #e31837;
  color: #fff;
  border-radius: 8px;
  transition: background 300ms ease;

  &:hover {
    background: #ffc500;
    transition: 200ms ease-out;
    cursor: pointer;
    color: #000;
  }
`;
