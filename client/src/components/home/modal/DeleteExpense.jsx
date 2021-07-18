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
  };

  const handleClickCancel = () => {
    setShowing(false);
  };
  return (
    <main className="modal">
      <h1 className="modal__title">Are you sure?</h1>
      <p className="modal__text">By Confriming you will not be able to undo this action</p>
      <div className="modal__btn--container">
        <Button addClass="modal__btn" handleClick={deleteExpense}>
          Yes
        </Button>
        <Button addClass="modal__btn" handleClick={handleClickCancel}>
          No
        </Button>
      </div>
    </main>
  );
}
