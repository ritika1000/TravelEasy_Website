import { Component } from "react";
import "./NavbarStyle.css";
import { Link } from "react-router-dom";
import { MenuItems } from "./MenuItems";
class Navbar extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <div className="NavbarItems">
        <h1 className="navbar-logo">TRAVEL EASY</h1>
        <div className="menu-items" onClick={this.handleClick}>
          <i
            className={
              this.state.clicked ? "fa-solid fa-xmark" : "fa-solid fa-bars"
            }
          ></i>
        </div>
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <Link className={item.cName} to={item.url}>
                  <i className={item.icon}></i>
                  {item.title}
                </Link>
              </li>
            );
          })}
          <button>SIGNUP</button>
        </ul>
      </div>
    );
  }
}
export default Navbar;
