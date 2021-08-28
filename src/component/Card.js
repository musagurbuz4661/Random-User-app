import React from "react";
import asets from "../assets/email.svg";
import asets1 from "../assets/location.svg";
import asets2 from "../assets/phone.svg";

import "./Card.css";

function Card({ item }) {
  return (
    <div className="card">
      <div className="card-main">
        <div className="main-img">
          <img src={item?.picture?.medium}  />
        </div>
        <div className="main-par">
          <h3>
            {item?.name?.first} {item?.name?.last}
          </h3>
        </div>
      </div>
      <div className="info">
        <div className="resim">
          <img src={asets} alt="" />
          <img src={asets2} alt="" />
          <img src={asets1} alt="" />
        </div>
        <div className="par">
          <p>{item?.email}</p>
          <p>{item?.phone}</p>
          <p>
            {item?.location?.city} - {item?.location?.country}
          </p>
        </div>
      </div>
      <p>Age: {item?.dob?.age}</p>
      <p>Register Date : {item?.registered?.date}</p>
    </div>
  );
}

export default Card;
