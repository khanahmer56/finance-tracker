import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import React from "react";
import { Doughnut } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);
const ChartComponent = ({ dummydata }) => {
  return (
    <div style={{ padding: "10px" }}>
      <h2 style={{ color: "white", fontFamily: "sans-serif" }}>Statistics</h2>
      <div style={{ width: "60%", margin: "auto" }}>
        <Doughnut
          data={{
            labels: dummydata.map((expense) => expense.title),
            datasets: [
              {
                label: "Expenses",
                data: dummydata.map((expense) => expense.amount),
                backgroundColor: dummydata.map((expense) => expense.color),
                borderColor: ["#18181b"],
                borderWidth: 5,
              },
            ],
          }}
        />
      </div>
    </div>
  );
};

export default ChartComponent;
