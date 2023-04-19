import { nanoid } from 'nanoid'
import { Component } from "react";
import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/Contacts-list/contactLists';
import { Div } from 'components/styled/style.styled';
class App extends Component {
  
  state = {
    contacts: [],
    filter: '',
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const {contacts, name, number} = this.state;
    const id = nanoid();
    const newContact = {id, name, number};
  
    if (this.checkDuplicateContact(newContact)) {
      alert(`${newContact.name} is already in contacts`);
      return;
    }
  
    this.setState ({
      contacts: [...contacts, newContact],
    }, () => {
      e.target.reset();
    });
  }

  handleChange = (e) => {
    const {name, value} = e.target
    this.setState({
      [name]: value
    })
  }

  handleFilterChange = (e) => {
    this.setState({ filter: e.target.value });
  }

  checkDuplicateContact = (newContact) => {
    const { contacts } = this.state;
    const isDuplicate = contacts.some( contact =>
    contact.name.toLowerCase() === newContact.name.toLowerCase())
    return isDuplicate;
  }

  deleteContact = (id) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== id),
    }));
  };

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = contacts.filter(contact => 
    contact.name.toLowerCase().includes(filter.toLowerCase()))
    
    return (
      <Div>
        <h1>Phonebook</h1>
        <ContactForm handleSubmit={this.handleSubmit} handleChange={this.handleChange} />
        <h2>Contacts</h2>
        <Filter filter={filter} handleFilterChange={this.handleFilterChange} />
        <ContactList filteredContacts={filteredContacts} handleDeleteContact={this.deleteContact} />
      </Div>
    )
  }
}

export default App;