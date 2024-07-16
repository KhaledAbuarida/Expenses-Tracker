import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";

interface Expense {
  id: number;
  description: string;
  category: string;
  amount: number;
}

interface Props {
  expenses: Expense[];
  onDelete: (id: number) => void;
}

const ExpenseTable = ({ expenses, onDelete }: Props) => {
  return (
    <Container>
      <TableContainer component={Paper} sx={{ border: "2px solid #d5d5d5" }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: "bold" }}>Description</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Amount</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Category</TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {expenses.map((expense) => (
              <TableRow
                key={expense.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {expense.description}
                </TableCell>
                <TableCell>{expense.amount}</TableCell>
                <TableCell>{expense.category}</TableCell>
                <TableCell align="right">
                  <Button
                    variant={"outlined"}
                    color={"error"}
                    onClick={() => onDelete(expense.id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row" sx={{ fontWeight: "bold" }}>
                Total Amount
              </TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>
                $
                {expenses
                  .reduce((acc, expenses) => expenses.amount + acc, 0)
                  .toFixed(2)}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default ExpenseTable;
