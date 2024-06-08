import { useEffect, useState } from "react";
import axios from "axios";
import "./YourExpenses.scss";

const port = "8080";
const url = `http://localhost:${port}`;

function YourExpenses() {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const getExpenses = async () => {
      try {
        const response = await axios.get(`${url}/expenses/your-expenses`);
        setExpenses(response.data);
      } catch (error) {
        console.error("Error fetching users expenses");
      }
    };

    getExpenses();
  }, []);

  return (
    <div className="your-expenses">
      <h2 className="your-expenses__title">Your Expenses</h2>
      <ul className="your-expenses__list">
        {expenses?.map((expense) => (
          <li className="your-expenses__list-item" key={expense.id}>
            <div className="your-expenses__item">
              <h3 className="your-expenses__subtitle">{expense.title}</h3>
              <p className="your-expenses__text your-expenses__text--amount">
                Amount: ${expense.amount}
              </p>
              <p className="your-expenses__text your-expenses__text--total">
                Total: ${expense.total_amount}
              </p>
              <p className="your-expenses__text your-expenses__text--date">
                Date: ${new Date(expense.date).toLocaleDateString()}
              </p>
              <p className="your-expenses__text your-expenses__text--group">
                Group: ${expense.group_name}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default YourExpenses;
