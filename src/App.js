// import React, { useState, useEffect } from "react";
import Container from "./components/Container";
import ContactsList from "./components/ContactsList";
import ContactForm from "./components/ContactForm";
import Filter from "./components/Filter";
import Section from "./components/Section";

function App() {
  // const [contacts, setContacts] = useState([]);
  // const [filter, setFilter] = useState("");

  // useEffect(() => {
  //   const savedContacts = JSON.parse(localStorage.getItem("contacts"));

  //   if (savedContacts) setContacts(savedContacts);
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem("contacts", JSON.stringify(contacts));

  //   if (contacts.length === 0) {
  //     localStorage.removeItem("contacts");
  //   }
  // }, [contacts]);

  // const addContact = (name, number) => {
  //   const contactsItem = {
  //     id: uuidv4(),
  //     name,
  //     number,
  //   };

  //   const duplicateContactName = contacts.find(
  //     (contact) => contact.name === contactsItem.name
  //   );
  //   const duplicateContactNumber = contacts.find(
  //     (contact) => contact.number === contactsItem.number
  //   );

  //   if (duplicateContactName) {
  //     alert(`${contactsItem.name} is already in contacts!`);
  //     return;
  //   }
  //   if (duplicateContactNumber) {
  //     alert(
  //       `${contactsItem.number} is already in contacts! (${duplicateContactNumber.name} has this number)`
  //     );
  //     return;
  //   }

  //   setContacts((contacts) => [contactsItem, ...contacts]);
  // };

  return (
    <Section>
      <Container>
        <h1 className="mainTitle">Phonebook</h1>
        <ContactForm />
        <h2 className="title">Contacts</h2>
        <Filter />
        <ContactsList />
      </Container>
    </Section>
  );
}

export default App;
