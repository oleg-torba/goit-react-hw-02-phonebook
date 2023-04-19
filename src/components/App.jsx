import React, {Component} from "react";
import { Form } from "./Form/form";
import { Section } from "./Section/section";
import { nanoid } from "nanoid";
import { Contact } from "./ContactList/contactList";
import { Filter } from "./Filter/filterContacts";

export class App extends Component{

  state = {
    contacts: [],
    filter: ''
  
  };

formSubmit = data => {
  const numbers = {
    id: nanoid(),
    data,
  }
  this.setState(({ contacts }) => ({
    contacts: [numbers, ...contacts],
  }));
   
  
}

deleteContact = contactId => {
this.setState(prevState => {
  return{
    contacts:prevState.contacts.filter(contact => contact.id !== contactId)
  }
     
})



}
changeFilter = e => {
  this.setState({filter: e.currentTarget.value})
}

 
 

  

render(){

 
 

  const { contacts, filter } = this.state;

  const visibleContacts = contacts.filter(contact =>
    contact.data.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <><Section title="Phonebook">
      <Form onSubmit={this.formSubmit} />
    </Section><Section  title= "Contacts">
        <Filter
          value={filter}
          onChange={this.changeFilter} />
        {contacts.length > 0 ? (
          <Contact
            contacts={visibleContacts}
            remove={this.deleteContact} />
        ) : console.log('hi')}
      </Section></>
    
    
  )
}
}