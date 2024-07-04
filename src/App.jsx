import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Header from "./components/Header";
import MainSection from "./components/MainSection";
import ExpenceComponent from "./components/ExpenceComponent";
import ChartComponent from "./components/ChartComponent";
import CoustomModal from "./components/CoustomModal";
import IncomeFormComponent from "./components/IncomeFormComponent";
import ExpenseFormComponent from "./components/ExpenseFormComponent";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./libs/firebase";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  max-width: 500px;
  margin: auto;

  @media (min-width: 768px) {
    width: 80%;
  }

  @media (min-width: 1024px) {
    width: 70%;
  }
`;

const App = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [isIncomeMoal, setIsincomeModal] = useState("");
  const [totalIncome, setTotalincome] = useState([]);
  const [totalExpense, setTotalExpense] = useState([]);
  const [totalBalance, setTotalBalance] = useState(0);

  function openModal(transaction) {
    setIsincomeModal(transaction);
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const dummydata = [
    { id: 1, title: "Entertainment", color: "#000", amount: 500 },
    { id: 2, title: "fuel", color: "#009", amount: 400 },
    { id: 3, title: "grocery", color: "#000", amount: 700 },
    { id: 4, title: "abc", color: "#000", amount: 200 },
    { id: 5, title: "xyz", color: "#000", amount: 300 },
  ];
  useEffect(() => {
    const getIncome = async () => {
      const collectionRef = collection(db, "income");
      const docSnap = await getDocs(collectionRef);
      const data = docSnap.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
          createdAt: new Date(doc.data().createdAt?.toMillis()),
        };
      });
      setTotalincome(data);
    };
    getIncome();
  }, []);

  useEffect(() => {
    const getExpenseData = async () => {
      const collectionRef = collection(db, "expenses");
      const docSnap = await getDocs(collectionRef);
      const data = docSnap.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });
      setTotalExpense(data);
    };
    getExpenseData();
  }, []);

  useEffect(() => {
    const newBalance =
      totalIncome.reduce((total, i) => {
        return total + i.amount;
      }, 0) -
      totalExpense.reduce((totals, e) => {
        console.log(totals);
        return +totals + e.total;
      }, 0);
    setTotalBalance(newBalance);
  }, [totalExpense, totalIncome]);
  console.log(totalExpense);

  return (
    <Container>
      <Header />
      <MainSection openModal={openModal} totalBalance={totalBalance} />
      {/* <ExpenceComponent /> */}
      <ChartComponent dummydata={dummydata} />
      <CoustomModal
        modalIsOpen={modalIsOpen}
        openModal={openModal}
        closeModal={closeModal}
      >
        {isIncomeMoal == "income" ? (
          <IncomeFormComponent />
        ) : (
          <ExpenseFormComponent />
        )}
      </CoustomModal>
    </Container>
  );
};

export default App;
