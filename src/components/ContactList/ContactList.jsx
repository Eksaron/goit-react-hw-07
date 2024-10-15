
import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import { selectContacts } from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const search = useSelector(selectNameFilter);


  let data = contacts;
  if (search) {
    data = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(search.toLowerCase())
    );
  }
  return (
    <>
      ContactList
      <ul>
        {data.map((item) => (
          <Contact key={item.id} contact={item} />
        ))}
      </ul>
    </>
  );
};

export default ContactList;
