// import PropTypes from 'prop-types';
import { ContactsList } from './Contacts.styled';
import { ContactsItem } from 'components/ContactsItem/ContactsItem';
import { useSelector } from 'react-redux';
import { getContacts, getStatusFilter} from 'redux-selectors';

export const Contacts = () => {

  const contacts = useSelecor(getContacts);
  const statusFilter = useSelector(getStatusFilter);
  const visibilityContacts = getVisibleContacts(contacts, statusFilter);
  console.log(contacts);


  return (
    <ContactsList id="contacts">
      {visibilityContacts.map(contact => (
        <ContactsItem
          key={contact.id}
          name={contact.name}
          number={contact.number}
          id={contact.id}
        />
      ))}
    </ContactsList>
  );
};

const getVisibleContacts = (contacts, statusFilter) => {
  if (!statusFilter) {
    return contacts;
  }
  const normalizeName = statusFilter.toLowerCase();
  return contacts.filter(contact =>contact.name.toLowerCase().includes(normalizeName));
}


// Contacts.propTypes = {
//   contacts: PropTypes.array.isRequired,
// };
