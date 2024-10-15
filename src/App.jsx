// // // import { useEffect, useState } from "react";
// // // import "./App.css";

// // // import ContactForm from "./components/ContactForm/ContactForm";
// // // import ContactList from "./components/ContactList/ContactList";
// // // import SearchBox from "./components/SearchBox/SearchBox";
// // // import { nanoid } from "nanoid";

// // // import initContactList from "./data/contactlist.json";

// // // const App = () => {
// // //   const initContacts = () => {
// // //     const localStorageData =
// // //       JSON.parse(localStorage.getItem("contactList")) || initContactList;
// // //     return localStorageData.length !== 0 ? localStorageData : initContactList;
// // //   };
// // //   const [searchQuery, setSearchQuery] = useState("");
// // //   const [contacts, setContacts] = useState(initContacts);

// // //   const contactsFiltered = contacts.filter((contact) => {
// // //     return contact.name.toLowerCase().includes(searchQuery.toLowerCase());
// // //   });

// // //   useEffect(() => {
// // //     localStorage.setItem("contactList", JSON.stringify(contacts));
// // //   }, [contacts]);

// // //   const addNewContact = (formContact) => {
// // //     const newContact = { id: nanoid(), ...formContact };
// // //     setContacts((contactList) => {
// // //       return [...contactList, newContact];
// // //     });
// // //   };
// // //   const deleteContactById = (contactId) => {
// // //     setContacts((contactList) => {
// // //       return contactList.filter((contact) => contact.id !== contactId);
// // //     });
// // //   };

// // //   return (
// // //     <div>
// // //       <h1>Phonebook</h1>
// // //       <ContactForm formSubmit={addNewContact} />
// // //       {/* <ContactForm onSubmit={updateContact} /> */}
// // //       <SearchBox setSearchQuery={setSearchQuery} />

// // //       <ContactList
// // //         contacts={contactsFiltered}
// // //         deleteContact={deleteContactById}
// // //       />
// // //     </div>
// // //   );
// // // };

// // // export default App;

// // import ContactForm from "./components/ContactForm/ContactForm";
// // import ContactList from "./components/ContactList/ContactList";
// // import SearchBox from "./components/SearchBox/SearchBox";
// // import "./App.css";
// // const App = () => {
// //   return (
// //     <div>
// //       <ContactForm />
// //       <SearchBox />
// //       <ContactList />
// //     </div>
// //   );
// // };

// // export default App;

// import { useEffect, useState } from "react";
// import "./App.css";

// import ContactForm from "./components/ContactForm/ContactForm";
// import ContactList from "./components/ContactList/ContactList";
// import SearchBox from "./components/SearchBox/SearchBox";
// import { nanoid } from "nanoid";

// import initContactList from "./data/contactlist.json";

// const App = () => {
//   const initContacts = () => {
//     const localStorageData =
//       JSON.parse(localStorage.getItem("contactList")) || initContactList;
//     return localStorageData.length !== 0 ? localStorageData : initContactList;
//   };
//   const [searchQuery, setSearchQuery] = useState("");
//   const [contacts, setContacts] = useState(initContacts);

//   const contactsFiltered = contacts.filter((contact) => {
//     return contact.name.toLowerCase().includes(searchQuery.toLowerCase());
//   });

//   useEffect(() => {
//     localStorage.setItem("contactList", JSON.stringify(contacts));
//   }, [contacts]);

//   const addNewContact = (formContact) => {
//     const newContact = { id: nanoid(), ...formContact };
//     setContacts((contactList) => {
//       return [...contactList, newContact];
//     });
//   };
//   const deleteContactById = (contactId) => {
//     setContacts((contactList) => {
//       return contactList.filter((contact) => contact.id !== contactId);
//     });
//   };

//   return (
//     <div>
//       <h1>Phonebook</h1>
//       <ContactForm formSubmit={addNewContact} />
//       {/* <ContactForm onSubmit={updateContact} /> */}
//       <SearchBox setSearchQuery={setSearchQuery} />

//       <ContactList
//         contacts={contactsFiltered}
//         deleteContact={deleteContactById}
//       />
//     </div>
//   );
// };

// export default App;

import { useEffect, useState } from "react";
import "./App.css";

import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";

const App = () => {
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
};

export default App;
