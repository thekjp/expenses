import ExpensesList from "../../components/ExpensesList/ExpensesList";
import { Link } from "react-router-dom";
import "./MainPage.scss";

function MainPage() {
  return (
    <div className="main">
      <div className="main__header">
        <h1 className="expenses-list__title">Your Expenses</h1>
        <div className="expenses-list__button-group">
          <div className="expenses-list__button-container">
            <div className="expenses-list__button">
              <p className="main-text">Need to create new expense?</p>
              <Link
                className="expenses-list__new-expenses"
                to={`/expenses/add`}
              >
                <button className="btn btn--primary">Click Here</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="main-content">
        <div className="main__left"></div>
        <div className="main__right">
          <ExpensesList />
        </div>
      </div>
    </div>
  );
}

export default MainPage;
