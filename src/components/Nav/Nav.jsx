import React from "react";
import SearchBar from "../SearcBar/SearchBar";
import style from "./Nav.module.css";
class Nav extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={style.Nav}>
        <SearchBar onSearch={this.props.onSearch} />
      </div>
    );
  }
}
export default Nav;
