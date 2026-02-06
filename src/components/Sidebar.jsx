import React from "react";
import { IoGridOutline } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  return (
    <div
      style={{ width: "294px", height: "100vh", borderRight: "1px solid gray" }}
    >
      <ul
        style={{
          listStyle: "none",
          left: "24px",
          fontSize: "1rem",
          fontWeight: "600",
          color: "black",
          gap: "8px",
        }}
      >
        <div className="d-flex my-2 gap-2">
        <span style={{width:'24px',width:'24px',borderRadius:'8px',background:'black',color:'white',}}>
              <IoGridOutline />
            </span>
          <Link
            style={{
              color:
                location.pathname === "/home/overview" ? "#6941C6" : "inherit",
              textDecoration: "none",
              
            }}
            to={"/home/overview"}
          >
           
            <li>Overview</li>
          </Link>
        </div>
        <div className="my-2 d-flex gap-2" >
        <span style={{width:'24px',width:'24px',borderRadius:'8px',background:'black',color:'white',}}>
              <IoGridOutline />
            </span>
          <Link
            style={{
              color:
                location.pathname === "/home/peopleDiscover"
                  ? "#6941C6"
                  : "inherit",
              textDecoration: "none",
            
            }}
            to={"/home/peopleDiscover"}
          >
           
            <li>People</li>
          </Link>
        </div>
      </ul>
    </div>
  );
};

export default Sidebar;
