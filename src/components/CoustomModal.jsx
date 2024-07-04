import React, { useRef } from "react";
import { IoMdCloseCircle } from "react-icons/io";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    height: "70vh",
    width: "80%",
    maxWidth: "400px",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#333",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
};

Modal.setAppElement("#root");

function CustomModal({ modalIsOpen, afterOpenModal, closeModal, children }) {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", justifyContent: "end" }}>
          {" "}
          <IoMdCloseCircle size={30} onClick={closeModal} color="white" />
        </div>

        {children}
      </div>
    </Modal>
  );
}

export default CustomModal;
