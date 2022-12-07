import Select from "react-select";
import styled from "styled-components";
import {TextFieldStyles} from "../Input/styles";

export const SelectStyled = styled(Select)`
  ${TextFieldStyles};
  padding: 0;
  height: 50px;

  & .Select__control {
    height: 100%;
    border: 1px solid #B1B1B1;
    border-radius: 5px;
    flex-direction: row-reverse;
  }

  & .Select__indicator-separator {
    display: none;
  }

  & .Select__indicator {
    transform: scaleX(1.2);
    color: #000
  }
`
