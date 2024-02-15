import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import { useContext } from "react";

import { OpenContext } from "../context/OpenContext";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import SideDrawer from "./SideDrawer";

import { drawerWidth, navItems } from "../utils/constants";
import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";

function NavBar(props) {
  const { window } = props;
  const { opens, setOpens } = useContext(OpenContext);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  const handleDrawerToggle = () => {
    setOpens((prevState) => !prevState);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <Box sx={{ display: "flex" }} className={props.className}>
        <CssBaseline />
        {matches && <DesktopNav navItems={navItems} matches={matches} />}

        {!matches && <MobileNav />}

        <nav>
          <Drawer
            container={container}
            variant="temporary"
            open={opens}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            <SideDrawer navItems={navItems} />
          </Drawer>
        </nav>
      </Box>
    </>
  );
}

export default NavBar;
