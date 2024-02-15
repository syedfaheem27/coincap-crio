import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

import Logo from "../UI/Logo";
import Hamburger from "../UI/Hamburger";
import SearchComponent from "../UI/SearchComp";

function MobileNav() {
  return (
    <AppBar component="nav">
      <Toolbar className="toolbar">
        <SearchComponent />
        <Logo />
        <Hamburger />
      </Toolbar>
    </AppBar>
  );
}

export default MobileNav;
