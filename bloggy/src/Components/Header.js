import logo from "./../img/logo.png";
import user from "./../img/user.jpg";
import Icon from "./Icon";

const Header = () => {
  return (
    <div className="header">
      {/* <img src={logo} alt="trillo" className="logo" /> */}
      <h1 className="title">Bloggi</h1>
      <form action="#" className="search">
        <input
          type="text"
          name=""
          id=""
          className="search__input"
          placeholder="Search"
        />
        <btn className="search__button">
          <div className="search__icon">
            <Icon icon="magnifying-glass" size={30} color="orange" />
          </div>
        </btn>
      </form>
      <nav className="user-nav">
        <div className="user-nav__icon-box">
          <div className="user-nav__icon">
            <Icon icon="bookmark" size={30} color="orange" />
          </div>
          <span className="user-nav__notification">7</span>
        </div>

        <div className="user-nav__icon-box">
          <div className="user-nav__icon">
            <Icon icon="chat" size={30} color="orange" />
          </div>
          <span className="user-nav__notification">7</span>
        </div>
        <div className="user-nav__user">
          <img src={user} alt="user photo" className="user-nav__user-photo" />
          <span className="user-nav__user-name">Swarn</span>
        </div>
      </nav>
    </div>
  );
};

export default Header;
