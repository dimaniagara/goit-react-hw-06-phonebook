import { Contacts } from './Contacts/Contacts';
import { Phonebook } from './Phonebook/Phonebook';
import { Filter } from './Filter/Filter';
import { Box } from './Box';
import { GlobalStyle } from './GlobalStyles';
// import { useSelector } from 'react-redux';

export const App = () => {
  // const filter = useSelector(state => state.filter);
  // const contacts = useSelector(state => state.contacts);

  return (
    <Box p="20px">
      <h2>Phonebook</h2>
      <Phonebook />

      <h2>Contacts</h2>
      <Filter />
      <Contacts />
      <GlobalStyle />
    </Box>
  );
};
