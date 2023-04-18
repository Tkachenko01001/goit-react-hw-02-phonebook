import PropTypes from "prop-types";
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

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  handleFilterChange: PropTypes.func.isRequired,
}

export default Filter;