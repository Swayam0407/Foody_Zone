import React from "react";

function Foody(props) {
  /*to dyanamically render buttons*/const categories = ["all", "breakfast", "lunch", "dinner", "@swayam_aggarwal"]; 

  const logo = process.env.PUBLIC_URL + "/logo.png";
  return (
    <div className="nav">
      <div className="subsection1">
        <div className="title">
          <h1>
          <img src={logo} id="fz" alt="logo" />
            F<span className="oo">oo</span>dy Z<span className="oo">o</span>ne
          </h1>
        </div>
        <div className="search">
          <input
            onChange={props.onChange}
            type="text"
            placeholder="Search Food...."
          />
        </div>
      </div>
      <div className="subsection2">
        <ul>
          {categories.map((category) => (
            <li key={category}>
              <button onClick={() => props.filterFood(category)}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Foody;
