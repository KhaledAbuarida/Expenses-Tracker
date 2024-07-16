import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import { categories } from "../utils/data";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import FormLabel from "@mui/material/FormLabel";
import Expense from "../types/ExpenseType";

interface Props {
  onAddExpense: (expense: Expense) => void;
}

const ExpensesForm = ({ onAddExpense }: Props) => {
  const schema = yup
    .object({
      description: yup.string().required("Description is required").max(20),
      amount: yup
        .number()
        .typeError("Amount is required")
        .positive("Amount must be a positive number")
        .required("Amount is required"),
      category: yup.string().required("Category is required"),
    })
    .required();
  type FormData = yup.InferType<typeof schema>;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: Expense) => {
    console.log(data);
    onAddExpense(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container flexDirection={"column"} gap={2}>
        <Grid>
          <TextField
            fullWidth
            label="Description"
            variant="outlined"
            {...register("description")}
          />
          {errors.description?.message && (
            <Typography color={"error"} variant="caption">
              {errors.description?.message}
            </Typography>
          )}
        </Grid>

        <Grid>
          <TextField
            fullWidth
            label="Amount"
            variant="outlined"
            {...register("amount")}
          />
          {errors.amount?.message && (
            <Typography color={"error"} variant="caption">
              {errors.amount?.message}
            </Typography>
          )}
        </Grid>

        <Grid>
          <FormLabel>Category</FormLabel>
          <Select fullWidth {...register("category")}>
            {categories.map((category) => (
              <MenuItem key={category} value={category}>
                {category}
              </MenuItem>
            ))}
          </Select>
          {errors.category?.message && (
            <Typography color={"error"} variant="caption">
              {errors.category?.message}
            </Typography>
          )}
        </Grid>

        <Grid>
          <Button type="submit" variant="contained">
            Submit
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default ExpensesForm;
