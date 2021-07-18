import Button from "../../resuable/Button";
import axios from "axios";

export default function ModalDeleteExpense({ getData, setShowing, savingsID }) {
  const savingsAPI = `http://localhost:8080/savings/${savingsID}`;

  const deleteSaved = () => {
    axios.delete(savingsAPI).then(() => {
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
        <Button addClass="modal__btn" handleClick={deleteSaved}>
          Yes
        </Button>
        <Button addClass="modal__btn" handleClick={handleClickCancel}>
          No
        </Button>
      </div>
    </main>
  );
}
