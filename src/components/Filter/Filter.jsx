import { Label } from 'components/Common/Common.styled';
import { useDispatch } from 'react-redux';
import { updateFilter } from 'redux/filterSlice';

export default function Filter() {
  const dispatch = useDispatch();
  return (
    <Label>
      Find contacts by name
      <input
        type="text"
        onChange={e => dispatch(updateFilter(e.target.value))}
      />
    </Label>
  );
}
