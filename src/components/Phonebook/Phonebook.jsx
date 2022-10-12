// import PropTypes from 'prop-types';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import { PhonebookForm } from './Phonebook.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactsSlice';
import { getContacts } from 'redux/selectors';

export const Phonebook = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = event => {
    event.preventDefault();

    if (contacts.filter(e => e.name === name).length === 0) {
      dispatch(addContact(nanoid(), name, number));

      setName('');
      setNumber('');
    } else {
      alert(`${name} is already in contacts`);
    }
  };

  const handleChange = e => {
    const { name, value } = e.target;
    name === 'name' ? setName(value) : setNumber(value);
  };

  return (
    <PhonebookForm action="" onSubmit={handleSubmit}>
      <label>Name</label>
      <input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        value={name}
        onChange={handleChange}
        id={nanoid()}
        required
      />
      <label>Number</label>
      <input
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        value={number}
        onChange={handleChange}
        id={nanoid()}
        required
      />
      <button type="submit">Add contact</button>
    </PhonebookForm>
  );
};

// Phonebook.propTypes = {
//   contacts: PropTypes.array.isRequired,
// };
