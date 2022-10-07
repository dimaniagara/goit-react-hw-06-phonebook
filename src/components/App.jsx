import { Contacts } from './Contacts/Contacts';
import { Phonebook } from './Phonebook/Phonebook';
import { Filter } from './Filter/Filter';
import { Box } from './Box';
import { GlobalStyle } from './GlobalStyles';
// import { useSelector } from 'react-redux';

export const App = () => {
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
