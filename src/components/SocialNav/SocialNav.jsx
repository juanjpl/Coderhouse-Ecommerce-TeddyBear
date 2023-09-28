import styles from "./styles.css";

import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import Logo from "./assets/teddy-logo.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import YouTubeIcon from "@mui/icons-material/YouTube";

const SocialNav = () => {
  return (
    <div className="social-bar ">
      <div>
        <img className="logo-icon" src={Logo} alt="logo-teddy" />
        <FacebookIcon />
        <InstagramIcon />
        <TwitterIcon />
        <PinterestIcon />
        <YouTubeIcon />
      </div>
      <div>
        <nav>
          <ul>
            <li>
              <a href="/Home">Homepage</a>
            </li>
            <li>
              <a href="/Home">About</a>
            </li>
            <li>
              <a href="/Home">Blog</a>
            </li>
            <li>
              <a href="/Home">Shop</a>
            </li>
            <li>
              <a href="/Home">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default SocialNav;
