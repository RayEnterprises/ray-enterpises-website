import {
  AppBar,
  Toolbar,
  Stack,
  Container,
  Link,
  Button,
  Typography,
} from "@mui/material";
import Image from "next/image";
import logo from "@/assets/images/logo.svg";
import { useTranslations } from "next-intl";
import Menu from "./menu";
import Drawer from "./drawer";
import Language from "./language";

function Navbar() {
  const t = useTranslations("Navigation");

  const items = [
    { slug: `#${t("slug.about")}`, text: t("links.about") },
    { slug: `#${t("slug.services")}`, text: t("links.services") },
    { slug: `#${t("slug.contact")}`, text: t("links.contact") },
    { slug: `${t("slug.work_with_us")}`, text: t("links.work_with_us") },
  ];

  return (
    <>
      <AppBar position="fixed" color="secondary">
        <Container>
          <Toolbar>
            <Menu />
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
            >
              <Link className="absolute top-0 h-full" href="/">
                <Image
                  src={logo}
                  alt="Ray Enterprises Logo"
                  className="relative top-0 h-full w-[80px]"
                  width={80}
                  height={40}
                  priority
                />
              </Link>
            </Typography>

            <Stack
              direction="row"
              spacing={2}
              sx={{ flexGrow: 1, justifyContent: "flex-end" }}
            >
              {items.map((item) => (
                <Button
                  variant="text"
                  key={item.slug}
                  href={item.slug}
                  sx={{
                    display: { xs: "none", md: "flex" },
                    color: "white",
                    textTransform: "capitalize",
                    borderRadius: 0,
                    "&:hover": {
                      backgroundColor: "#070d07",
                      borderBottom: "2px solid white",
                      marginBottom: "-2px",
                    },
                  }}
                >
                  {item.text}
                </Button>
              ))}
              <Language />
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>
      <Drawer items={items} />
    </>
  );
}

export default Navbar;
