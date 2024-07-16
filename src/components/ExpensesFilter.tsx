import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";

interface Props {
  onSelectedCategory: (category: string) => void;
}

const ExpensesFilter = ({ onSelectedCategory }: Props) => {
  const handleChange = (event: SelectChangeEvent) => {
    onSelectedCategory(event.target.value);
  };

  return (
    <Select
      defaultValue="All Categories"
      onChange={(event: SelectChangeEvent) => handleChange(event)}
      fullWidth
    >
      <MenuItem value={"All Categories"}>All Categories</MenuItem>
      <MenuItem value={"Groceries"}>Groceries</MenuItem>
      <MenuItem value={"Utilities"}>Utilities</MenuItem>
      <MenuItem value={"Entertainments"}>Entertainments</MenuItem>
    </Select>
  );
};

export default ExpensesFilter;
