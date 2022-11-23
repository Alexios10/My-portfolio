import React, { useEffect } from "react";
import { motion } from "framer-motion";

const Modal = ({ closeModal }) => {
  return (
    <>
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
          transition: {
            duration: 0.3,
          },
        }}
        exit={{
          opacity: 0,
          transition: {
            delay: 0.3,
          },
        }}
        className="overlay"
      />
      <motion.div
        initial={{
          scale: 0,
        }}
        animate={{
          scale: 1,
          transition: {
            duration: 0.3,
          },
        }}
        exit={{
          scale: 0,
          transition: {
            delay: 0.3,
          },
        }}
        className="modal-container"
      >
        <h3>Thank you !</h3>
        <p className="py-4">You&lsquo;r message has been sent !</p>
        <button
          onClick={() => {
            closeModal(false);
          }}
          className="p-3 w-20"
        >
          OK
        </button>
      </motion.div>
    </>
  );
};

export default Modal;
