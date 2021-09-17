import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addContact } from "../../redux/contacts/contacts-actions";
import Button from "../Button";
import style from "../ContactForm/ContactForm.module.css";
import { store } from "../../redux/store";

function ContactForm({ onSubmitData }) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const state = store.getState();

  const onInputChange = (e) => {
    if (e.target.name === "name") setName(e.target.value);
    if (e.target.name === "number") setNumber(e.target.value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();

    const duplicateContactName = state.contacts.items.find(
      (contact) => contact.name === name
    );
    const duplicateContactNumber = state.contacts.items.find(
      (contact) => contact.number === number
    );

    if (duplicateContactName) {
      alert(`${name} is already in contacts!`);
      return;
    }
    if (duplicateContactNumber) {
      alert(
        `${number} is already in contacts! (${duplicateContactNumber.name} has this number)`
      );
      return;
    }

    onSubmitData(name, number);

    reset();
  };

  const reset = () => {
    setName("");
    setNumber("");
  };

  return (
    <form className={style.contactForm} onSubmit={onFormSubmit}>
      <label className={style.inputNameLabel}>
        <span className={style.inputLabelText}>Name</span>
        <input
          className={style.inputName}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я ]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов, не должно начинаться или оканчиваться пробелом. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          value={name}
          onChange={onInputChange}
        />
      </label>
      <label className={style.inputTelNumberLabel}>
        <span className={style.inputLabelText}>Number</span>
        <input
          className={style.inputTelNumber}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять из цифр и может содержать пробелы, тире, круглые скобки, и может начинаться с +, не должен начинаться или оканчиваться пробелом"
          required
          value={number}
          onChange={onInputChange}
        />
      </label>
      <Button type="submit">Add contact</Button>
    </form>
  );
}

ContactForm.propTypes = {
  onSubmitData: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onSubmitData: (name, number) => dispatch(addContact(name, number)),
});

export default connect(null, mapDispatchToProps)(ContactForm);
