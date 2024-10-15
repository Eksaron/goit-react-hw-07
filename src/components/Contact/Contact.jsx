import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const { id, name, number } = contact;

  return (
    <>
      <p>
        id:<small>{id}</small>
      </p>
      <p>Name:{name}</p>
      <p>Number:{number}</p>
      <button onClick={() => dispatch(deleteContact(id))}>delete</button>
    </>
  );
};

export default Contact;
