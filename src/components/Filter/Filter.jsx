import { Box } from 'components/Box';
import { FilterInput } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(store => store.filter);

  const updateFilter = filter => {
    dispatch(setFilter(filter));
  };

  return (
    <Box mt="20px">
      <p>Find contacts by name</p>
      <FilterInput
        type="text"
        name="filter"
        value={filter}
        onChange={e => {
          updateFilter(e.target.value);
        }}
      />
    </Box>
  );
};
