import { Container } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

function Footer() {
  return (
    <>
      <footer className="pt-[30px] pb-[30px] bg-footer text-white">
        <Container>
          <p className="text-center">&copy; 2024 Ray Enterprises</p>
          <ul className="flex justify-center space-x-4 mt-4">
            <li>
              <a>
                <FacebookIcon />
              </a>
            </li>
            <li>
              <a>
                <TwitterIcon />
              </a>
            </li>
            <li>
              <a>
                <InstagramIcon />
              </a>
            </li>
          </ul>
        </Container>
      </footer>
    </>
  );
}

export default Footer;
