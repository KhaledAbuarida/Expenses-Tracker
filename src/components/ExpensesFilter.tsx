import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { categories } from "../utils/data";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";

interface Props {
  onSelectedCategory: (category: string) => void;
}

const ExpensesFilter = ({ onSelectedCategory }: Props) => {
  const handleChange = (event: SelectChangeEvent) => {
    onSelectedCategory(event.target.value);
  };

  return (
    <>
      <InputLabel>Filter Categories</InputLabel>
      <Select
        size="small"
        defaultValue="All Categories"
        onChange={(event: SelectChangeEvent) => handleChange(event)}
        fullWidth
      >
        <MenuItem value={"All Categories"}>All Categories</MenuItem>
        {categories.map((category) => (
          <MenuItem key={category} value={category}>
            {category}
          </MenuItem>
        ))}
      </Select>
    </>
  );
};

export default ExpensesFilter;
