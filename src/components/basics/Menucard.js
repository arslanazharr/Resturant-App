import React from "react";

const Menucard = ({ menuData }) => {
  return (
    <>
      {menuData.map((curElem) => {
        const { id, image, name, description } = curElem;
        return (
          <div className="col-lg-4 col-md-6 col-sm-12 gy-4 d-flex justify-content-center">
            <div className="card" style={{ width: "18rem" }} key={id}>
              <img src={image} className="card-img-top" alt="..." />

              <div className="card-body">
                <span style={{ fontSize: "25px" }}>{name}</span>
                <p className="card-text">{description}</p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Menucard;
