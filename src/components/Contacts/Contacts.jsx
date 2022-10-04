import PropTypes from 'prop-types';
import { ContactsList } from './Contacts.styled';
import { ContactsItem } from 'components/ContactsItem/ContactsItem';

export const Contacts = ({ contacts }) => {
  return (
    <ContactsList id="contacts">
      {contacts.map(contact => (
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

Contacts.propTypes = {
  contacts: PropTypes.array.isRequired,
};
