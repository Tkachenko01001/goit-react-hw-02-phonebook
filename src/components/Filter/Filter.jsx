import { Label, Input } from "../styled/style.styled";


const Filter = ({filter, handleFilterChange}) => {
    return (
        <Label>
        find contacts by name
        <Input
          type="text"
          name="filter"
          value={filter}
          onChange={handleFilterChange}
        />
      </Label>
    )
}

export default Filter;