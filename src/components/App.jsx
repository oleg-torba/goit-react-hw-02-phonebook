import React, { Component } from 'react';
import { Form } from './Form/form';
import { Section } from './Section/section';
import { nanoid } from 'nanoid';
import { Contact } from './ContactList/contactList';
import { Filter } from './Filter/filterContacts';
import { Notification } from './Notification/notification';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  formSubmit = data => {
    const findDublicate = this.state.contacts.some(
      contact => contact.data.name.toLowerCase() === data.name.toLowerCase()
    );

    if (findDublicate) {
      alert(`${data.name} already exsist`);
      return;
    }
    const numbers = {
      id: nanoid(),
      data,
    };

    this.setState(({ contacts }) => ({
      contacts: [numbers, ...contacts],
    }));
  };

  deleteContact = contactId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(
          contact => contact.id !== contactId
        ),
      };
    });
  };
  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  render() {
    const { contacts, filter } = this.state;

    const visibleContacts = contacts.filter(contact =>
      contact.data.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <>
        <Section title="Phonebook">
          <Form onSubmit={this.formSubmit} />
        </Section>
        <Section title="Contacts">
          <Filter value={filter} onChange={this.changeFilter} />
          {contacts.length > 0 ? (
            <Contact
              contacts={visibleContacts}
              removeContact={this.deleteContact}
            />
          ) : (
            <Notification message="There are no contacts" />
          )}
        </Section>
      </>
    );
  }
}
