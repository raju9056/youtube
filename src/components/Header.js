import "./styles.css";
import logo from "./images/logo.png";
import magnify from "./images/magnify.svg";
import videoPlus from "./images/video-plus.svg";
import appsSVG from "./images/apps.svg";
import bellSVG from "./images/bell.svg";

const Header = (props) => {
  return (
    <div>
      <header class="header">
        <a href="#">
          <img src={logo} alt="YouTube Logo" class="youtube-logo" />
        </a>
        <form class="search-bar" onSubmit={props.onSubmit}>
          <input
            value={props.value}
            class="search-input"
            type="search"
            placeholder="Search"
            aria-label="Search"
            onChange={props.onChange}
          />
          <button type="submit" class="search-btn">
            <img src={magnify} />
          </button>
        </form>
        <div class="menu-icons">
          <a href="#">
            <img src={videoPlus} alt="Upload Video" />
          </a>
          <a href="#">
            <img src={appsSVG} alt="Apps" />
          </a>
          <a href="#">
            <img src={bellSVG} alt="Notifications" />
          </a>
          <a href="#">
            <img
              class="menu-channel-icon"
              src="http:///unsplash.it/36/36?gravity=center"
              alt="Your Channel"
            />
          </a>
        </div>
      </header>
      <div class="categories">
        <section class="category-section">
          <button class="category active">All</button>
          <button class="category">Category 1</button>
          <button class="category">Category 2</button>
          <button class="category">Category 3</button>
          <button class="category">Category 4</button>
          <button class="category">Category 5</button>
          <button class="category">Category 6</button>
          <button class="category">Category 7</button>
          <button class="category">Category 8</button>
          <button class="category">Category 9</button>
        </section>
      </div>
    </div>
  );
};

export default Header;
