import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Logo from "../UI/Logo";
import SearchComponent from "../UI/SearchComp";
import DropDown from "./DropDown";
import { useTheme } from "@mui/material/styles";

function DesktopNav({ navItems, matches }) {
  const theme = useTheme();
  return (
    <AppBar component="nav" sx={{ border: "3px solid green" }}>
      <Toolbar className="toolbar">
        <Box
          sx={{
            display: { xs: "none", sm: "block" },
          }}
        >
          {navItems.map((item, idx) => {
            if (idx > 2) return null;
            return (
              <Button key={item} sx={{ color: theme.palette.text.main }}>
                {item}
              </Button>
            );
          })}
        </Box>
        <Logo />
        <Box display="flex" sx={{ display: "flex", gap: "0.5rem" }}>
          <DropDown options={["ETH", "ETB", "BTC"]} />
          <DropDown options={["English", "French", "Spanish"]} />
        </Box>

        <SearchComponent matches={matches} />
      </Toolbar>
    </AppBar>
  );
}

export default DesktopNav;
