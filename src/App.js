import React, { useState } from "react";
import ContactsList from "./Components/ContactsList";
import HookForm from "./Components/HookForm";
import Filter from "./Components/Filter";

const initialState = {
  contacts: [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ],
  filter: "",
};

const App = () => {
  const [contacts, setContacts] = useState([...initialState.contacts]);

  const [filter, setFilter] = useState(initialState.filter);

  const addContact = (contactObj) => {
    setContacts((prev) => [...prev, contactObj]);
  };

  const filterContacts = () => {
    if (!filter.length) {
      return contacts;
    } else {
      return contacts.filter((elem) =>
        elem.name.toLowerCase().includes(filter.toLowerCase())
      );
    }
  };
  const uniqueContact = (name) => {
    return contacts.filter((elem) => elem.name === name);
  };

  const deleteContacts = (id) => {
    setContacts((prev) => prev.filter((contact) => contact.id !== id));
  };
  return (
    <div>
      <h1>Phonebook</h1>
      <HookForm addContact={addContact} uniqueContact={uniqueContact} />

      <h2>Contacts</h2>
      <Filter filter={filter} setFilter={setFilter} />
      <ContactsList
        contacts={filterContacts()}
        deleteContacts={deleteContacts}
      />
    </div>
  );
};

export default App;
