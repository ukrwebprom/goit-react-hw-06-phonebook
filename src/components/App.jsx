import React from 'react';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import { Container, Title, SubTitle } from './App.styled';
import './App.scss';

export function App() {
  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm />

      <SubTitle>Contacts</SubTitle>
      <Filter />
      <ContactList />
    </Container>
  );
}
