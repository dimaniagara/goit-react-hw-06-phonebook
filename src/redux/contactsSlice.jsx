import { createSlice } from '@reduxjs/toolkit';

const contactsInitialState = [
  { id: 0, name: 'Brad Pitt', number: 5948302 },
  { id: 1, name: 'Ryan Raynolds', number: 5948302 },
  { id: 2, name: 'Tom Hanks', number: 5948302 },
];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(id, name, number) {
        return {
          payload: {
            id,
            name,
            number,
          },
        };
      },
    },
    deleteContact(state, action) {
      const index = state.findIndex(contact => contact.id === action.payload);
      state.splice(index, 1);
    },
    setContacts(state, action) {
      state = action.payload;
      console.log(action);
      console.log(state);
    },
  },
});

export const { addContact, deleteContact, setContacts } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
