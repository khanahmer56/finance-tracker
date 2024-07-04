import { addDoc, collection, getDoc, getDocs } from "firebase/firestore";
import React, { useEffect, useRef, useState } from "react";
import { db } from "../libs/firebase";
import { currencyFormatter } from "../constants/constants";

const IncomeFormComponent = () => {
  const [incomeData, setIncomeData] = useState([]);
  const amountref = useRef();
  const descriptionref = useRef();
  const handlesubmit = async (e) => {
    e.preventDefault();
    const obj = {
      amount: +amountref.current.value,
      description: descriptionref.current.value,
      createdAt: new Date(),
    };
    const collectionref = collection(db, "income");

    try {
      const docsnap = await addDoc(collectionref, obj);
      setIncomeData((prev) => {
        return [
          ...prev,
          {
            id: docsnap,
            ...obj,
          },
        ];
      });
      descriptionref.current.value = "";
      amountref.current.value = "";
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const getincome = async () => {
      const collectionref = collection(db, "income");
      const docsnap = await getDocs(collectionref);
      const data = docsnap.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
          createdAt: new Date(doc.data().createdAt?.toMillis()),
        };
      });
      setIncomeData(data);
    };
    getincome();
  }, []);

  return (
    <div>
      <form onSubmit={handlesubmit}>
        <div
          style={{ display: "flex", flexDirection: "column", color: "white" }}
        >
          <label htmlFor="amount">Income Amount</label>
          <input
            type="number"
            min={0.01}
            step={0.01}
            ref={amountref}
            name="amount"
            placeholder="Enter Your Income"
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
          <label htmlFor="description">Description</label>
          <input
            type="string"
            min={0.01}
            step={0.01}
            ref={descriptionref}
            name="description"
            placeholder="Enter Your Description"
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
      <p style={{ color: "white" }}>Income History</p>
      <div style={{ overflow: "auto" }}>
        {incomeData.reverse().map((data) => {
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
                <p style={{ margin: 0, padding: 0 }}>{data.description}</p>
                <p style={{ margin: 0, padding: 0 }}>
                  {data.createdAt.toISOString()}
                </p>
              </div>
              <div>
                <p>{currencyFormatter(data.amount)}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default IncomeFormComponent;
