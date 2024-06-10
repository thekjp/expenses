import { useEffect, useState } from "react";
import axios from "axios";
import "./ExpensesList.scss";

const port = 8080;
const url = `http://localhost:${port}`;

function ExpensesList() {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const getExpenses = async () => {
      try {
        const response = await axios.get(`${url}/expenses/your-expenses`);
        console.log(response.data);
        setExpenses(response.data);
      } catch (error) {
        console.error("Error getting expenses for group: ", error);
      }
    };
    getExpenses();
  }, []);

  return (
    <section className="expenses-list">
      <h1 className="expenses-list__title">Expenses</h1>
      <ul className="expenses-list__items">
        {expenses?.map((expense) => (
          <li key={expense.expense_id} className="expenses-list__item">
            <div className="expenses-list__item-title">{expense.title}</div>
            <div className="expenses-list__item-total-amount">
              ${expense.total_amount}
            </div>
            <div className="expenses-list__item-your-amount">
              ${expense.amount}
            </div>
            <div className="expenses-list__item-date">
              {new Date(expense.date).toLocaleDateString()}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ExpensesList;
