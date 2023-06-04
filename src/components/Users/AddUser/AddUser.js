import { useState } from "react";
import Card from "../../UI/Card/Card";
import classes from "./AddUser.module.css";
import Modal from "../../UI/Modal/Modal";
import Button from "../../UI/Button/Button";

export default function AddUser(props) {
  const [name, setName] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalMessage, setModalMessage] = useState("");

  const [age, setAge] = useState("");

  const handleInput = (e) => {
    if (e.target.id === "name") {
      setName(e.target.value);
    } else if (e.target.id === "age") {
      setAge(e.target.value);
    }
  };

  const setModalContent = (title, message) => {
    setModalTitle(title);
    setModalMessage(message);
  };

  const addUser = (e) => {
    e.preventDefault();
    let error = false;
    if (name.trim().length === 0 || age.trim().length === 0) {
      setModalContent("Error", "Name and Age cannot be an empty.");
      error = true;
    } else if (+age < 1) {
      setModalContent("Error", "Age has to be > 1.");
      error = true;
    }

    if (!error) {
      props.addUser({ name, age });
      setModalContent("Success", "User was added successfully!");
      setName("");
      setAge("");
    }

    setShowModal(true);
  };

  const handleModalClose = () => {
    setModalContent("", "");
    setShowModal(false);
  };

  return (
    <div>
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
          <input type="text" id="name" value={name} onChange={handleInput} />
          <label htmlFor="age">Age</label>
          <input type="number" id="age" value={age} onChange={handleInput} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
}
