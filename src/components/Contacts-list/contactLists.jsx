import ListElement from "components/listElement/listElement";
import PropTypes from "prop-types";
import { Button } from "../styled/style.styled";

const ContactList = ({filteredContacts, handleDeleteContact}) => {
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

ContactList.propTypes = {
  filteredContacts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired
  })).isRequired,
  handleDeleteContact: PropTypes.func.isRequired
}

export default ContactList;