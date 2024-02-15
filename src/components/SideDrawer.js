import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import DropDown from "./DropDown";
import { useTheme } from "@mui/material/styles";

const SideDrawer = ({ navItems }) => {
  const theme = useTheme();
  return (
    <>
      <Box
        sx={{
          textAlign: "center",
          padding: "1rem",
          color: theme.palette.text.main,
        }}
      >
        <List>
          {navItems.map((item) => (
            <ListItem key={item} disablePadding>
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText primary={item} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Button
          variant="contained"
          sx={{
            borderRadius: "100px",
            backgroundColor: theme.palette.secondary.main,
          }}
        >
          Connect Wallet
        </Button>
      </Box>
      <Divider />
      <DropDown options={["ETH", "ETB", "BTC"]} className="desktop-drop" />
      <DropDown
        options={["English", "French", "Spanish"]}
        className="desktop-drop"
      />
    </>
  );
};

export default SideDrawer;
