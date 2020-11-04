import React from "react";

const ContactsList = ({ contacts, deleteContacts }) => {
  return (
    <div>
      <ul>
        {contacts.map((elem) => (
          <li key={elem.id}>
            {elem.name}: {elem.number}
            <button type="button" onClick={() => deleteContacts(elem.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactsList;
