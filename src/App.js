import HeroMobile from "./components/HeroMobile";
import Navbar from "./components/Navbar";
import { ThemeProvider, createTheme } from "@mui/material/styles";
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
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar className="navbar" />
      <HeroMobile />
    </ThemeProvider>
  );
}

export default App;
