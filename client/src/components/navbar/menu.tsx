"use client";
import { useSelector, useDispatch } from "react-redux";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { toggleDrawer } from "@/store/drawerSlice";
import { RootState } from "@/store/store";

function Menu() {
  const isOpen = useSelector((state: RootState) => state.drawer.isOpen);
  const dispatch = useDispatch();

  const handleMenu = () => {
    dispatch(toggleDrawer(!isOpen));
  };

  return (
    <IconButton
      onClick={handleMenu}
      size="large"
      edge="start"
      color="inherit"
      aria-label="menu"
      sx={{ mr: 2, display: { xs: "flex", md: "none" } }}
    >
      <MenuIcon />
    </IconButton>
  );
}

export default Menu;
