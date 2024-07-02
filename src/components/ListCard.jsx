import React from "react";
import { currencyFormatter } from "../constants/constants";

const ListCard = () => {
  return (
    <div
      style={{
        width: "90%",
        backgroundColor: "#E0E0E0",
        borderRadius: "20px",
        padding: "0px 10px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "5px",
        }}
      >
        <div
          style={{
            backgroundColor: "orange",
            width: "20px",
            height: "20px",
            borderRadius: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          1
        </div>
        <p>Fuel</p>
      </div>
      <p>{currencyFormatter(244463)}</p>
    </div>
  );
};

export default ListCard;
