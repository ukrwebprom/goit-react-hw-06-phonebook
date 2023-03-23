import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addContact, deleteContact } from 'redux/contactSlice';
import { updateFilter } from 'redux/filterSlice';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import { Container, Title, SubTitle } from './App.styled';
import './App.scss';

export function App() {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const handleFormSubmit = ({ name, number }) => {
    if (
      contacts.some(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${name} is already in contacts.`);
      return;
    }

    dispatch(
      addContact({
        id: nanoid(),
        name,
        number,
      })
    );
  };

  const removeContact = id => {
    dispatch(deleteContact(id));
  };

  const filteredContacts = contacts.filter(item =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm onSubmit={handleFormSubmit} />

      <SubTitle>Contacts</SubTitle>
      <Filter callback={f => dispatch(updateFilter(f))} />
      <ContactList data={filteredContacts} removeCallback={removeContact} />
    </Container>
  );
}
