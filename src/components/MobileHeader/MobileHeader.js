import React, { Component } from "react";

import "./MobileHeader.css";

class MobileHeader extends Component {
  showSidebar() {
    console.log("HI");
  }

  render() {
    return (
      <div className="title-bar hide-for-large">
        <div className="title-bar-left">
          <button
            className="menu-icon"
            type="button"
            onClick={this.showSidebar}
          />
          <span className="title-bar-title">{this.props.name} </span>
        </div>
      </div>
    );
  }
}

export default MobileHeader;
