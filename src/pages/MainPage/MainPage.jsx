import ExpensesList from "../../components/ExpensesList/ExpensesList";
import "./MainPage.scss";

function MainPage() {
  return (
    <div className="main">
      <div className="main-containter">
        <div className="main__left"></div>
        <div className="main__right">
          <ExpensesList />
        </div>
      </div>
    </div>
  );
}

export default MainPage;
