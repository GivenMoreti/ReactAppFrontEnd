import React from "react";
// import ReactDom from "react-dom";

function Nav() {
  return (
    <div className="navBar">
      <ul>
        <li>
          <a href="/#">Home</a>
        </li>
        <li>
          <a href="/#">wants</a>
        </li>
        <li>
          <a href="/#">wanting</a>
        </li>
        <li>
          <input
            type="text"
            class="form-control"
            placeholder="Start typing.."
          />
        </li>
      </ul>
    </div>
  );
}
export default Nav;
