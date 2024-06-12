import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./AddExpense.scss";

const port = 8080;
const url = `http://localhost:${port}`;

function AddExpense() {
  const [title, setTitle] = useState("");
  const [totalAmount, setTotalAmount] = useState("");
  const [date, setDate] = useState("");
  const navigate = useNavigate();

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleTotalAmountChange = (event) => {
    setTotalAmount(event.target.value);
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(`${url}/expenses/user`, {
        userId: 1,
        title: title,
        totalAmount: totalAmount,
        date: date,
      });
      console.log(response.data);
      navigate("/main");
    } catch (error) {
      console.error("Error adding expense: ", error);
    }
  };

  return (
    <section className="add-expense">
      <h1 className="add-expense__title">Add New Expense</h1>
      <form className="add-expense__form" onSubmit={handleSubmit}>
        <div className="add-expense__form-container">
          <label className="add-expense__label" htmlFor="title">
            Title:
          </label>
          <input
            className="add-expense__input"
            type="text"
            id="title"
            value={title}
            onChange={handleTitleChange}
            required
          />
        </div>
        <div className="add-expense__form-container">
          <label className="add-expense__label" htmlFor="totalAmount">
            Total Amount:
          </label>
          <input
            className="add-expense__input"
            type="number"
            id="totalAmount"
            value={totalAmount}
            onChange={handleTotalAmountChange}
            required
          />
        </div>
        <div className="add-expense__form-container">
          <label className="add-expense__label" htmlFor="date">
            Date:
          </label>
          <input
            className="add-expense__input"
            type="date"
            id="date"
            value={date}
            onChange={handleDateChange}
            required
          />
        </div>
        <button className="add-expense__button btn btn--primary" type="submit">
          Add Expense
        </button>
      </form>
    </section>
  );
}

export default AddExpense;
