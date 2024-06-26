import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import DeleteExpense from "../../components/DeleteExpense/DeleteExpense";
import DeleteIcon from "../../assets/icons/delete_outline-24px.svg";
import EditIcon from "../../assets/icons/edit-24px.svg";
import "./ExpensesList.scss";

const port = 8080;
const url = `http://localhost:${port}`;

function ExpensesList() {
  const [expenses, setExpenses] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedExpensesId, setSelectedExpensesId] = useState(null);
  const [selectedExpensesTitle, setSelectedExpensesTitle] = useState(null);

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

  const handleDeleteClick = (expensesId, expensesTitle) => {
    setSelectedExpensesId(expensesId);
    setSelectedExpensesTitle(expensesTitle);
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedExpensesId(null);
    setModalIsOpen(false);
  };

  return (
    <section className="expenses-list">
      <div className="expenses-list__content">
        <ul className="expenses-list__items">
          <li className="expenses-list__header">
            <div className="expenses-list__header-title">Title</div>
            <div className="expenses-list__header-amount">Amount</div>
            <div className="expenses-list__header-date">Date</div>
          </li>
          {expenses?.map((expense) => (
            <li key={expense.expense_id} className="expenses-list__item">
              <div className="expenses-list__item-title">{expense.title}</div>
              <div className="expenses-list__item-total-amount">
                ${expense.total_amount}
              </div>
              <div className="expenses-list__item-date">
                {new Date(expense.date).toLocaleDateString()}
              </div>
              <div className="expenses-list__icons">
                <Link
                  className="expenses-list__item-edit"
                  to={`/expenses/${expense.expense_id}/edit`}
                >
                  <img src={EditIcon} alt="edit icon" />
                </Link>
                <div
                  className="expenses-list__item-delete"
                  onClick={() =>
                    handleDeleteClick(expense.expense_id, expense.title)
                  }
                >
                  <img src={DeleteIcon} alt="delete icon" />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <DeleteExpense
        isOpen={modalIsOpen}
        onClose={handleCloseModal}
        expensesId={selectedExpensesId}
        expensesTitle={selectedExpensesTitle}
      />
    </section>
  );
}

export default ExpensesList;
