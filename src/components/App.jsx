import { useState } from 'react';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { Container, Section, Title } from './AppStyled';
import { initContacts } from 'constants/contacts';
import { useLocaleStorage } from './LocaleStorage/LocaleStorage';

export function App() {
  const [contacts, setContacts] = useLocaleStorage(initContacts);
  const [filter, setFilter] = useState('');

  const addContact = ({ id, name, number }) => {
    const normalizedFind = name.toLowerCase();
    const findName = contacts.find(
      contact => contact.name.toLowerCase() === normalizedFind
    );
    if (findName) {
      return alert(`${name} is already in contacts.`);
    }

    const findNumber = contacts.find(contact => contact.number === number);
    if (findNumber) {
      return alert(`This phone number is already in use.`);
    }
    const newContact = {
      id,
      name,
      number,
    };
    setContacts(contacts => [...contacts, newContact]);
  };

  const getContacts = contacts
    .filter(contact => {
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    })
    .sort((f, s) => f.name.localeCompare(s.name));

  const deleteContact = contactId => {
    setContacts(contacts =>
      contacts.filter(contact => contact.id !== contactId)
    );
  };

  const handleFilter = e => {
    setFilter(e.currentTarget.value);
  };

  return (
    <Container>
      <Section title="Phonebook">
        <Title font = '24'>Phonebook</Title>
        <ContactForm onSubmit={addContact} />
      </Section>
      <Section title="Contacts">
        <Title font = '20'>Contacts</Title>
        <Filter value={filter} onChange={handleFilter} />
        <ContactList contacts={getContacts} onDeleteContact={deleteContact} />
      </Section>
    </Container>
  );
}
