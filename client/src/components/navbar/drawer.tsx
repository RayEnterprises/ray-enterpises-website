"use client";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store/store";
import { toggleDrawer } from "@/store/drawerSlice";
import {
  Drawer as Draw,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import Image from "next/image";
import logo from "@/assets/images/logo.svg";

interface DrawerComponentProps {
  items: { slug: string; text: string }[];
}

function Drawer({ items }: DrawerComponentProps) {
  const dispatch = useDispatch();
  const isOpen = useSelector((state: RootState) => state.drawer);

  const toggle = (open: boolean) => {
    dispatch(toggleDrawer(open));
  };

  return (
    <Draw anchor={"left"} open={isOpen.isOpen} onClose={() => toggle(false)}>
      <Box
        sx={{
          width: 250,
          backgroundColor: "#070d07",
          height: "100%",
          color: "#ffffff",
        }}
      >
        <div className="flex justify-center">
          <Image
            src={logo}
            alt="Ray Enterprises Logo"
            width={180}
            height={90}
            priority
          />
        </div>
        <List>
          {items.map((item, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton
                component="a"
                href={item.slug}
                onClick={() => toggle(false)}
              >
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Draw>
  );
}

export default Drawer;
