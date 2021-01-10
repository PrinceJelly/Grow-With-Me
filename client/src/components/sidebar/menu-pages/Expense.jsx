import { postNewExpenses } from "../../utils/Axios";
import Form from "../../resuable/Form";
import InputField from "../../resuable/InputField";
import Button from "../../resuable/Button";

export default function Stats() {
  return (
    <section className="addNewEntry expense">
      <h1 className="expense__title">EXPENSE</h1>
      <Form>
        <InputField />
        <input type="number"></input>
        <Button handleClick={postNewExpenses()}>Submit</Button>
      </Form>
    </section>
  );
}
