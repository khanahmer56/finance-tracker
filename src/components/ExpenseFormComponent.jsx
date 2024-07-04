import { addDoc, collection, getDocs } from "firebase/firestore";
import React, { useEffect, useRef, useState } from "react";
import { db } from "../libs/firebase";
import { currencyFormatter } from "../constants/constants";

const ExpenseFormComponent = () => {
  const [expenseData, setExpenseData] = useState([]);
  const titleRef = useRef();
  const amountRef = useRef();
  const handlesubmit = async (e) => {
    e.preventDefault();
    e.preventDefault();
    const obj = {
      title: titleRef.current.value,
      total: +amountRef.current.value,
    };
    const collectionref = collection(db, "expenses");

    try {
      const docsnap = await addDoc(collectionref, obj);

      titleRef.current.value = "";
      amountRef.current.value = "";
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const getExpensedata = async () => {
      const collectionref = collection(db, "expenses");
      const docsnap = await getDocs(collectionref);
      const data = docsnap.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });
      setExpenseData(data);
    };
    getExpensedata();
  }, []);
  return (
    <div>
      {" "}
      <form onSubmit={handlesubmit}>
        <div
          style={{ display: "flex", flexDirection: "column", color: "white" }}
        >
          <label htmlFor="title">Category</label>
          <input
            type="text"
            min={0.01}
            step={0.01}
            ref={titleRef}
            name="title"
            placeholder="Eg. Fuel,Electricity"
            required
            style={{
              border: "none",
              padding: "10px 10px",
              borderRadius: "20px",
              backgroundColor: "lightgrey",
              marginTop: "10px",
            }}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            color: "white",
            marginTop: "10px",
          }}
        >
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            min={0.01}
            step={0.01}
            ref={amountRef}
            name="amount"
            placeholder="Enter Your Amount"
            required
            style={{
              border: "none",
              padding: "10px 10px",
              borderRadius: "20px",
              backgroundColor: "lightgrey",
              marginTop: "10px",
            }}
          />
        </div>
        <button
          type="submit"
          style={{
            padding: "10px 20px",
            border: "none",
            backgroundColor: "lightgreen",
            marginTop: "20px",
            borderRadius: "10px",
          }}
        >
          Submit
        </button>
      </form>
      <p style={{ color: "white" }}>Expense History</p>
      <div style={{ overflow: "auto" }}>
        {expenseData.reverse().map((data) => {
          return (
            <div
              style={{
                marginBottom: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                color: "white",
                backgroundColor: "black",
                padding: "10px",
                borderRadius: "10px",
              }}
            >
              <div>
                <p style={{ margin: 0, padding: 0 }}>{data.title}</p>
              </div>
              <div>
                <p>{currencyFormatter(data.total)}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ExpenseFormComponent;
