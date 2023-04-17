import ListElement from "components/listElement/listElement";
import { Button } from "../styled/style.styled";

const ContactList = ({contacts, filter, handleDeleteContact}) => {
    const filteredContacts = contacts.filter(contact => 
    contact.name.toLowerCase().includes(filter.toLowerCase()))

    return (
        <ul>
        {filteredContacts.map((contact) => (
        <ListElement
          key={contact.id}
          id={contact.id}
          name={contact.name}
          number={contact.number}> <Button onClick={() => handleDeleteContact(contact.id)}>Delete</Button>
        </ListElement>
      ))}
    </ul>
    )
}

export default ContactList;