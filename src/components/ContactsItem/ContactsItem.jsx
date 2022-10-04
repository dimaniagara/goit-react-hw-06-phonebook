import { ContactsItemWrapper } from './ContactsItem.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';

export const ContactsItem = ({ name, number, id }) => {
  const dispatch = useDispatch();

  return (
    <ContactsItemWrapper>
      <p>
        {name}: {number}
      </p>
      <button onClick={() => dispatch(deleteContact(id))}>Delete</button>
    </ContactsItemWrapper>
  );
};
