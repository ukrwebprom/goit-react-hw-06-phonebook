import { Contact } from './Contact';
import { getContacts } from 'redux/selectors';
import { useSelector } from 'react-redux';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  return (
    <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
      {contacts.map(item => (
        <Contact
          key={item.id}
          id={item.id}
          name={item.name}
          number={item.number}
        />
      ))}
    </ul>
  );
};

export default ContactList;
