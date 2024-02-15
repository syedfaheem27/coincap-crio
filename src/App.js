import styled from "styled-components";
import HeroMobile from "./components/HeroMobile";
import Navbar from "./components/Navbar";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import HeroDektop from "./components/HeroDektop";

const theme = createTheme({
  palette: {
    primary: {
      main: "#f8fafc",
    },
    secondary: {
      main: "#3b82f6",
    },
    teritiary: {
      main: "#2563eb",
    },
    text: {
      main: "#020617",
    },
  },
});

const HeroContainer = styled.section`
  background-color: black;
  width: 100%;
  min-height: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 7rem 1rem 3rem;
`;

function App() {
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <HeroContainer>
        {!matches && <HeroMobile />}
        {matches && <HeroDektop />}
      </HeroContainer>
    </ThemeProvider>
  );
}

export default App;
