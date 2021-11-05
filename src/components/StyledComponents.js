import React from "react";
import styled, {
  css,
  keyframes,
  ThemeProvider,
  createGlobalStyle,
} from "styled-components";

//variables to the colors
export default function StyledComponents() {
  let mainColor = "#db7093",
    mainColorOpacity80 = "#db609380";

  //A function to package the logic of a transition
  const setTransitionTime = time => `background ${time} ease-in-out`;

  //keyframes module allows yo to program the logic of the animations
  const fadeIn = keyframes`
  0%{
    opacity: 0;
  }
  100%{
    opacity:1;
  }
  `;

  const MyH3 = styled.h3`
    padding: 2rem;
    text-align: center;
    //conditional rendering
    color: ${({ color }) => color || "#000"};
    background: ${mainColor};
    transition: ${setTransitionTime(".5s")};
    animation: ${fadeIn} 2s ease-out;
    //conditional rendering with more than one single style
    ${({ isButton }) =>
      isButton &&
      css`
        margin: auto;
        max-width: 50%;
        border-radius: 0.25rem;
        cursor: pointer;
      `}

    &:hover {
      background: ${mainColorOpacity80};
    }
  `;

  //Color per theme
  const light = {
    color: "#222",
    bgColor: "#DDD",
  };

  const dark = {
    color: "#DDD",
    bgColor: "#222",
  };

  const Box = styled.div`
    padding: 1rem;
    margin: 1rem;
    color: ${({ theme }) => theme.color};
    background: ${({ theme }) => theme.bgColor};
  `;

  //Inheritance
  const RoundedBox = styled(Box)`
    border-radius: 1rem;
    width: 50%;
    margin: 0 auto;
  `;

  // GlobalStyles
  const GlobalStyle = createGlobalStyle`
  h2{
    padding: 2rem;
    background:#fff;
    color: #61dafb;
    text-transform: uppercase;
  }
  `;

  return (
    <>
      <GlobalStyle />
      <h2>Styled Components</h2>
      <MyH3>An h3 tag styled with styled components</MyH3>
      <MyH3 color="#61dafb">
        An h3 tag styled with styled components using props
      </MyH3>
      <MyH3 isButton>An h3 tag styled as a button</MyH3>
      <ThemeProvider theme={light}>
        <Box>This is a box with the light theme</Box>
        <RoundedBox>
          This is another light box inheriting the styles from the component
          above plus its owns styles
        </RoundedBox>
      </ThemeProvider>
      <ThemeProvider theme={dark}>
        <Box>This is a box with the dark theme</Box>
        <RoundedBox>
          This is another dark box inheriting the styles from the component
          above plus its owns styles
        </RoundedBox>
      </ThemeProvider>
    </>
  );
}
