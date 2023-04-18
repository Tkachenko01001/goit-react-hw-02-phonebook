import PropTypes from "prop-types";

const ListElement = ({id, name, number, children}) => {
    return (
        <li key={id}>{name}: {number} {children}</li>
    )
}

ListElement.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
}

export default ListElement;