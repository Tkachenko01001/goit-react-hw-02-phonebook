const ListElement = ({id, name, number, children}) => {
    return (
        <li key={id}>{name}: {number} {children}</li>
    )
}

export default ListElement;