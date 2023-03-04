import React from "react";
import "./navbar.css";

const Navbar = ({ filterItem, updatedList }) => {
  return (
    <>
      <div className="container">
        <div className="row d-flex justify-content-center ">
          <nav className="nav nav-pills nav-fill navbar">
            {updatedList.map((curElem) => {
              return (
                <>
                  <button
                    className="nav-link"
                    onClick={() => filterItem(curElem)}
                  >
                    {curElem}
                  </button>
                </>
              );
            })}
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
