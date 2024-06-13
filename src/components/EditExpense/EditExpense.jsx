import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import BackIcon from "../../assets/icons/back-icon.svg";
import axios from "axios";
import "./EditExpense.scss";

const port = 8080;
const url = `http://localhost:${port}`;

function EditExpense() {
  const { id } = useParams(); //get id from url
  const [title, setTitle] = useState("");
  const [totalAmount, setTotalAmount] = useState("");
  const [date, setDate] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const getExpense = async () => {
      try {
        const response = await axios.get(`${url}/expenses/${id}`);
        const { title, total_amount } = response.data;
        let date = response.data.date;
        date = new Date(date).toISOString().split("T")[0]; // format date
        setTitle(title);
        setTotalAmount(total_amount);
        setDate(date);
      } catch (error) {
        console.error("Error getting expense data: ", error);
      }
    };

    getExpense();
  }, [id]);

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
      await axios.put(`${url}/expenses/${id}`, {
        title: title,
        total_amount: totalAmount,
        date: date,
      });
      navigate("/home");
    } catch (error) {
      console.error("Error updating expense: ", error);
    }
  };

  return (
    <section className="edit-expense">
      <div className="edit-epense__header">
        <Link className="edit-expense__back-icon-link" to={-1}>
          <img
            className="edit-expense__back-icon-img"
            src={BackIcon}
            alt="back icon"
          />
        </Link>
        <h1 className="edit-expense__title">Edit Expense</h1>
      </div>
      <form className="edit-expense__form" onSubmit={handleSubmit}>
        <div className="edit-expense__form-group">
          <label className="edit-expense__label" htmlFor="title">
            Title
          </label>
          <input
            className="edit-expense__input"
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={handleTitleChange}
            required
          />
        </div>
        <div className="edit-expense__form-group">
          <label className="edit-expense__label" htmlFor="total_amount">
            Total Amount
          </label>
          <input
            className="edit-expense__input"
            type="number"
            id="totalAmount"
            name="totalAmount"
            value={totalAmount}
            onChange={handleTotalAmountChange}
            required
          />
        </div>
        <div className="edit-expense__form-group">
          <label className="edit-expense__label" htmlFor="date">
            Date
          </label>
          <input
            className="edit-expense__input"
            type="date"
            id="date"
            name="date"
            value={date}
            onChange={handleDateChange}
            required
          />
        </div>
        <button className="edit-expense__button btn btn--primary" type="submit">
          Save Changes
        </button>
      </form>
    </section>
  );
}

export default EditExpense;
