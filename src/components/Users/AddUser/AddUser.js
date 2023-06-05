import { useState, useRef } from "react";
import Card from "../../UI/Card/Card";
import classes from "./AddUser.module.css";
import Modal from "../../UI/Modal/Modal";
import Button from "../../UI/Button/Button";

export default function AddUser(props) {
  const nameRef = useRef();
  const ageRef = useRef();

  const [showModal, setShowModal] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalMessage, setModalMessage] = useState("");

  const setModalContent = (title, message) => {
    setModalTitle(title);
    setModalMessage(message);
  };

  const addUser = (e) => {
    e.preventDefault();
    const inputName = nameRef.current.value;
    const inputAge = ageRef.current.value;
    let error = false;
    if (inputName.trim().length === 0 || inputAge.trim().length === 0) {
      setModalContent("Error", "Name and Age cannot be an empty.");
      error = true;
    } else if (+inputAge < 1) {
      setModalContent("Error", "Age has to be > 1.");
      error = true;
    }

    if (!error) {
      props.addUser({ name: inputName, age: inputAge });
      setModalContent("Success", "User was added successfully!");
      nameRef.current.value = "";
      ageRef.current.value = "";
    }
    setShowModal(true);
  };

  const handleModalClose = () => {
    setModalContent("", "");
    setShowModal(false);
  };

  return (
    <>
      {showModal && (
        <Modal
          title={modalTitle}
          message={modalMessage}
          onClose={handleModalClose}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUser}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            ref={nameRef}
            // value={name}
            // onChange={handleInput}
          />
          <label htmlFor="age">Age</label>
          <input
            type="number"
            id="age"
            ref={ageRef}
            // value={age}
            // onChange={handleInput}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
}
