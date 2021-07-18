import Button from "../../resuable/Button";
import { deleteExpensesByID } from "../../utils/Axios";
import axios from "axios";

export default function ModalDeleteExpense({ getData, setShowing, expenseID }) {
  const expensesAPI = `http://localhost:8080/expenses/${expenseID}`;

  const deleteExpense = (deleteExpensesByID) => {
    axios.delete(expensesAPI, deleteExpensesByID).then(() => {
      getData();
    });
    getData();
    setShowing(false);
  };

  const handleClickCancel = () => {
    setShowing(false);
  };
  return (
    <main className="modal">
      <h1 className="modal__title">Are you sure?</h1>
      <Button handleClick={deleteExpense}>Yes</Button>
      <Button handleClick={handleClickCancel}>No</Button>
    </main>
  );
}
