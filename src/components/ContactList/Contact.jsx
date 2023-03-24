import { ListItem } from './ListItem.stiled';
import { Button } from 'components/Common/Common.styled';
import { TiDeleteOutline } from 'react-icons/ti';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactSlice';

export const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();

  return (
    <ListItem>
      {name}: {number}
      <Button
        onClick={() => {
          dispatch(deleteContact(id));
        }}
      >
        <TiDeleteOutline /> Delete
      </Button>
    </ListItem>
  );
};

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
