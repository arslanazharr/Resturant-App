import Menucard from "./Menucard";
import Menu from "../menuApi";
import { useState } from "react";
import Navbar from "./Navbar";

const uniqueList = [
  ...new Set(
    Menu.map((curElem) => {
      return curElem.category;
    })
  ),
  "All",
];
const Resturant = () => {
  const [menuData, setMenuData] = useState(Menu);
  const [updatedList] = useState(uniqueList);

  const filterItem = (category) => {
    if (category === "All") {
      setMenuData(Menu);
      return;
    }
    const updatedList = Menu.filter((curElem) => {
      return curElem.category === category;
    });
    setMenuData(updatedList);
  };

  return (
    <>
      <Navbar filterItem={filterItem} updatedList={updatedList} />
      <div className="container mt-5">
        <div className="row">
          <Menucard menuData={menuData} />
        </div>
      </div>
    </>
  );
};

export default Resturant;
