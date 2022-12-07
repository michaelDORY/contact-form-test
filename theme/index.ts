import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    text-align: right;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 500;
    margin: 0;
  }

  h3 {
    font-size: 22px;
  }

  h4 {
    font-size: 18px;
  }

  button, input {
    outline: none;
    border: none;
  }

  ul {
    padding: 0;
    list-style: none;
  }

  p {
    margin: 0;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type=number] {
    -moz-appearance: textfield;
  }
`

export const theme = {
  colors: {
    primary: '#FAC900',
    primaryDark: '#c49800',
    inActive: '#E0E0E0',
    inActiveText: '#9F9F9F'
  }
}
